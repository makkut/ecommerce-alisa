import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("body", body);

  try {
    const data = await sendMail({
      name: body.name!,
      to: body.email!,
      body: "",
      subject: "Registration",
      token: body.token!,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
