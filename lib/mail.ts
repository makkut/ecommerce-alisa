import nodemailer from "nodemailer";

export async function sendMail({
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
  const {
    NEXT_PUBLIC_EMAIL_SERVER_USER,
    NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
    NEXT_PUBLIC_APP_URL,
  } = process.env;
  const confirmLink = `${NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NEXT_PUBLIC_EMAIL_SERVER_USER,
      pass: NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_EMAIL_SERVER_USER,
      to,
      subject,
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
