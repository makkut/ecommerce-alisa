import { defineField } from "sanity";

const passwordResetToken = {
  name: "password-reset-token",
  title: "Password Reset Token;",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "email",
      type: "string",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
    }),
    defineField({
      name: "expires",
      title: "Expires",
      type: "datetime",
    }),
  ],
};

export default passwordResetToken;
