import db from "@/lib/db/prisma";
import { getServerSession } from "next-auth/next"; // server component
// import {useSession} from 'next-auth/react' client component
import { authOptions } from "@/lib/NextAuth";

export const getUserSession = async () => {
  const userAuth = await getServerSession(authOptions);

  if (!userAuth) {
    console.error("user not found");
    return null;
  }

  const userLogin = await db.user.findUnique({
    where: {
      email: userAuth?.user?.email as string,
    },
  });

  if (!userLogin) {
    console.error("user not found");
    return null;
  }

  const returnUser = {
    id: userLogin?.id,
    name: userLogin?.name,
    username: userLogin?.username,
    email: userLogin?.email,
    rol: userLogin?.rol,
    avatar: userLogin?.avatar,
    premium: userLogin?.premium,
  };

  return { status: 200, user: returnUser };
};

export const getRolUserSession = async ({
  user,
}: {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    rol: string;
    avatar: string;
    premium: string;
  };
}) => {
  if (user?.rol === "USER") {
    console.error("No tenes permisos para acceder a esta ruta");
    return null;
  }

  if (user?.rol === "ADMIN") {
    return { status: 200, ok: true, message: "Puedes ingresar", user: user };
  }
};

export const getPremiumSession = async ({
  user,
}: {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    rol: string;
    avatar: string;
    premium: string;
  };
}) => {
  if (user?.premium === "FREE") {
    console.error(
      "No tenes permisos para acceder a esta ruta, tenes una cuenta FREE"
    );
    return null;
  }

  if (user?.premium === "PRO")
    return { status: 200, ok: true, message: "Puedes ingresar", user: user };
};
