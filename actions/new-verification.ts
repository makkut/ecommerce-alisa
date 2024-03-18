"use server";

import sanityClient from "@/app/libs/sanity";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.identifier);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await sanityClient
    .patch(existingUser._id)
    .set({ emailVerified: new Date() })
    .commit();

  await sanityClient
    .delete(existingToken._id)
    .then(() => {})
    .catch((err) => {
      console.error("Delete failed: ", err.message);
    });

  return { success: "Email verified!" };
};
