import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Username is required",
  }),
});

export const AccountSchema = z.object({
  firstname: z.optional(z.string()),
  lastname: z.optional(z.string()),
  street: z.optional(z.string()),
  house: z.optional(z.string()),
  city: z.optional(z.string()),
  country: z.optional(z.string()),
  zip: z.optional(z.string()),
});
