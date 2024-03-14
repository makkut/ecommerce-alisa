"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

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
import { AccountSchema } from "@/schemas-form";
import { User } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { updateUser } from "@/actions/update-user";
import { FormError } from "@/components/FormErorr/FormErorr";
import { FormSuccess } from "@/components/FormSuccess/FromSuccess";

type AccountFormValues = z.infer<typeof AccountSchema>;

interface AccountFormProps {
  user?: User;
}
const AccountForm = ({ user }: AccountFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  console.log("user", user);
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      firstname: user ? user.firstname : "22",
      lastname: user ? user.lastname : "",
      zip: user ? user.zip : "",
      street: user ? user.street : "",
      house: user ? user.house : "",
      city: user ? user.city : "",
      country: user ? user.country : "",
    },
  });

  const onSubmit = async (values: AccountFormValues) => {
    setIsLoading(true);
    setError("");
    setSuccess("");
    startTransition(() => {
      updateUser(values, user).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        setIsLoading(false);
      });
    });
    // if (variant === "REGISTER") {
    //   try {
    //     const user = await signUp(data);
    //     if (user) {
    //       setSuccess("Succes");
    //       toast.success("Succes");
    //     }
    //     await generateVerificationToken(user);
    //   } catch (error) {
    //     setError("Error");
    //     toast.error("Error");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }
    // if (variant === "LOGIN") {
    //   const { email, password } = data;
    //   const login = await signIn("sanity-login", {
    //     redirect: false,
    //     email,
    //     password,
    //   });
    //   console.log("login", login);
    //   if (login?.ok === true) {
    //     router.push("/");
    //   } else {
    //     setSuccess(login?.error!);
    //     toast.error(login?.error!);
    //   }
    //   setIsLoading(false);
    // }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    placeholder="имя"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input
                    placeholder="фамилия"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Улица</FormLabel>
                <FormControl>
                  <Input
                    placeholder="улица"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="house"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дом</FormLabel>
                <FormControl>
                  <Input
                    placeholder="дом"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-2">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Индекс</FormLabel>
                <FormControl>
                  <Input
                    placeholder="индекс"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Населенный пункт</FormLabel>
                <FormControl>
                  <Input
                    placeholder="населенный пункт"
                    {...field}
                    type="text"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Страна</FormLabel>
              <FormControl>
                <Input
                  placeholder="страна"
                  {...field}
                  type="text"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button className="w-full" type="submit">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};

export default AccountForm;
