import sanityClient from "@/app/libs/sanity";
import { User } from "next-auth";
import { v4 as uuidv4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import axios from "axios";

export const generateVerificationToken = async (user: User) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
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
      const data = { ...user, token };
      axios
        .post("/api/send", data)
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));
      console.log("res", res);
    })
    .catch((err) => {
      console.error("create failed: ", err.message);
    });
};
