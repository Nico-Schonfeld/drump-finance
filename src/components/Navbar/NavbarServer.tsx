import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import db from "@/lib/db/prisma";
import { getServerSession } from "next-auth/next"; // server component
// import {useSession} from 'next-auth/react' client component
import { authOptions } from "@/lib/NextAuth";

const NavbarServer: React.FC = async () => {
  /* DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=no-utilizar-esta-palabra-en-produccion */

  const userAuth = await getServerSession(authOptions);

  const userFake = {
    name: "johndoe",
    username: "John Doe",
    email: "johndoe@gmail.com",
    avatar: "1",
    rol: "USER",
    premium: "FREE",
  };

  if (!userAuth) {
    console.log("user not found");
    return <Navbar user={null} />;
  }

  const userLogin = await db.user.findUnique({
    where: {
      email: userAuth?.user?.email as string,
    },
  });

  if (!userLogin) {
    console.log("user not found");
    return <Navbar user={null} />;
  }

  const returnUser = {
    name: userLogin?.name,
    username: userLogin?.username,
    email: userLogin?.email,
    rol: userLogin?.rol,
    avatar: userLogin?.avatar,
    premium: userLogin?.premium,
  };

  return <Navbar user={returnUser} />;
};

export default NavbarServer;
