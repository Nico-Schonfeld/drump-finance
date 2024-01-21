import React from "react";
import Navbar from "@/components/Navbar/Navbar";
/* import db from "@/lib/db/prisma";
import { getServerSession } from "next-auth/next"; */ // server component
// import {useSession} from 'next-auth/react' client component
/* import { authOptions } from "@/lib/NextAuth"; */
import { getUserSession } from "@/lib/db/tools/getUserSession";

const NavbarServer: React.FC = async () => {
  /* DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=no-utilizar-esta-palabra-en-produccion
NEXTAUTH_SECRET="dim2o3oirhnasdioq32dn2ad2q" */
  /* const userAuth = await getServerSession(authOptions);

  if (!userAuth) {
    console.error("user not found");
    return <Navbar user={null} />;
  }

  const userLogin = await db.user.findUnique({
    where: {
      email: userAuth?.user?.email as string,
    },
  });

  if (!userLogin) {
    console.error("user not found");
    return <Navbar user={null} />;
  }

  const returnUser = {
    name: userLogin?.name,
    username: userLogin?.username,
    email: userLogin?.email,
    rol: userLogin?.rol,
    avatar: userLogin?.avatar,
    premium: userLogin?.premium,
  }; */

  const res = await getUserSession();

  return <Navbar user={res?.status ? res?.user : null} />;
};

export default NavbarServer;
