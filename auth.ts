import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser, getUserByEmail, TUser } from "./lib/actions/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user?.email && user?.name && user?.image) {
        const { name, email, image } = user;

        const userExist = await getUserByEmail(email);

        if (!userExist) {
          const newUser: TUser = { name, email, image };
          await createUser(newUser);
        }
      } else {
        console.error("User data is incomplete or invalid.");
        return false;
      }

      return true;
    },
  },
});
