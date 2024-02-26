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
  const { EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, NEXT_PUBLIC_APP_URL } =
    process.env;
  const confirmLink = `${NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD,
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
