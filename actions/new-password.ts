"use server";

import * as z from "zod";
import * as argon2 from "argon2";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas-form";
import sanityClient from "@/app/libs/sanity";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token!" };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await argon2.hash(password);

  await sanityClient
    .patch(existingUser._id)
    .set({ password: hashedPassword })
    .commit();

  await sanityClient
    .delete(existingToken._id)
    .then(() => {})
    .catch((err) => {
      console.error("Delete failed: ", err.message);
    });

  return { success: "Password updated!" };
};
