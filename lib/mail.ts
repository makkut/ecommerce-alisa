"use server";

import nodemailer from "nodemailer";

const { EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, NEXT_PUBLIC_APP_URL } =
  process.env;
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASSWORD,
  },
});

export async function sendVerificationEmail({
  to,
  name,
  subject,
  body,
  token,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
  token: string;
}) {
  const confirmLink = `${NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: EMAIL_SERVER_USER,
      to,
      subject,
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

  try {
    const sendResult = await transport.sendMail({
      from: EMAIL_SERVER_USER,
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to confirm email.</p>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
  //   await resend.emails.send({
  //     from: "mail@auth-masterclass-tutorial.com",
  //     to: email,
  //     subject: "Reset your password",
  //     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  //   });
};
