"use server";

import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "@/schemas-form";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/token";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  await generatePasswordResetToken(email);

  return { success: "Reset email sent!" };
};
