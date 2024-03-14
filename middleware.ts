import { withAuth } from "next-auth/middleware";

export const config = { matcher: ["/account"] };

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/auth",
    error: "/error",
  },
});
