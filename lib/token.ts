import sanityClient from "@/app/libs/sanity";
import { User } from "next-auth";
import { v4 as uuidv4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import { sendPasswordResetEmail, sendVerificationEmail } from "@/lib/mail";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";

const token = uuidv4();
const expires = new Date(new Date().getTime() + 3600 * 1000);

export const generateVerificationToken = async (user: User) => {
  const existingToken = await getVerificationTokenByEmail(user.email!);

  if (existingToken) {
    await sanityClient
      .delete(existingToken._id)
      .then(() => {
        console.log("Token deleted");
      })
      .catch((err) => {
        console.error("Delete failed: ", err.message);
      });
  }

  const doc = {
    _type: "verification-token",
    identifier: user.email,
    token: token,
    expires: expires,
  };

  await sanityClient
    .create(doc)
    .then((res) => {
      const { token } = res;
      const { name, email } = user;
      sendVerificationEmail({
        name: name!,
        to: email!,
        body: "",
        subject: "Registration",
        token: token,
      });
    })
    .catch((err) => {
      console.error("create failed: ", err.message);
    });
};

export const generatePasswordResetToken = async (email: string) => {
  const existingToken = await getPasswordResetTokenByEmail(email);
  console.log("existingToken", existingToken);
  if (existingToken) {
    await sanityClient
      .delete(existingToken._id)
      .then(() => {
        console.log("Token deleted");
      })
      .catch((err) => {
        console.error("Delete failed: ", err.message);
      });
  }

  const doc = {
    _type: "password-reset-token",
    email: email,
    token: token,
    expires: expires,
  };

  const passwordResetToken = await sanityClient
    .create(doc)
    .then((res) => {
      console.log("passwordResetToken", res);
      sendPasswordResetEmail(res.email, res.token);
    })
    .catch((err) => {
      console.error("create failed: ", err.message);
    });

  return passwordResetToken;
};
