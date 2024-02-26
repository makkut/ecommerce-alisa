"use client";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { z } from "zod";
import { useCallback, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { signUp } from "next-auth-sanity/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateVerificationToken } from "@/lib/token";

type Variant = "LOGIN" | "REGISTER";

export function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  const formSchema2 = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  });

  type AuthFormValues = z.infer<typeof formSchema>;

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const form = useForm<AuthFormValues>({
    resolver:
      variant === "REGISTER"
        ? zodResolver(formSchema)
        : zodResolver(formSchema2),
    defaultValues: { email: "", name: "", password: "" },
  });

  const onSubmit = async (data: AuthFormValues) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      try {
        const user = await signUp(data);
        if (user) {
          toast.success("Succes");
        }
        await generateVerificationToken(user);
      } catch (error) {
        toast.error("Error");
      } finally {
        setIsLoading(false);
      }
    }
    if (variant === "LOGIN") {
      const { email, password } = data;
      const login = await signIn("sanity-login", {
        redirect: false,
        email,
        password,
      });
      console.log("login", login);
      if (login?.ok === true) {
        router.push("/");
      } else {
        toast.error(login?.error!);
      }
      setIsLoading(false);
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  type="email"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {variant === "REGISTER" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type="password"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {variant === "LOGIN" ? "Sign in" : "Register"}
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => socialAction("github")}
            className="inline-flex w-full"
          >
            <BsGithub size={20} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={() => socialAction("google")}
            className="inline-flex w-full"
          >
            <BsGoogle size={20} />
          </Button>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Messanger?"
              : "Already have an account?"}
          </div>
          <div onClick={toogleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an acoount" : "Login"}
          </div>
        </div>
      </div>
    </Form>
  );
}
