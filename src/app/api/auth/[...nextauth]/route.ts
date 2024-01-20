import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          placeholder: "johndoe@test.com",
          name: "email",
          type: "email",
        },
        password: {
          label: "password",
          placeholder: "********",
          name: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("Wrong userFound");

        const mathPassword = await bcrypt.compare(
          credentials?.password as string,
          userFound.password
        );

        if (!mathPassword) throw new Error("Wrong password");

        return {
          id: userFound.id,
          email: userFound?.email,
          name: userFound.name,
          image: userFound.avatar,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
