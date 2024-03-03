import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import YandexProvider from "next-auth/providers/yandex";

import sanityClient from "./sanity";
import { getUserById } from "@/data/user";

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityClient),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    async linkAccount({ user }) {
      console.log("user", user);
      await sanityClient.patch(user.id).set({ emailVerified: new Date() });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("user", user);
      console.log("account", account);
      if (account?.type !== "credentials") return true;

      const existingUser = await getUserById(user.id);
      console.log("existingUser", existingUser);
      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async jwt({ token }) {
      //   token.customField = "test";
      //   console.log("token", token);
      return token;
    },
    session: async ({ session, token }) => {
      //   console.log("sessionToken", token);
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
            _id
        }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id,
        },
      };
    },
  },
};
