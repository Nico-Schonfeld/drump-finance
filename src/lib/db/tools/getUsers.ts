import db from "@/lib/db/prisma";

export const getUsers = async () => {
  const res = await db.user.findMany({});

  if (!res) {
    console.error({ message: "Users not fund", error: true, success: false });
    return null;
  }

  return res.map(({ password, ...users }) => users);
};

export const getOneUser = async (id: any | number) => {
  const res = await db.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!res) {
    console.error({ message: "User not fund", error: true, success: false });
    return null;
  }

  return {
    id: res.id,
    name: res.name,
    username: res.username,
    email: res.email,
    rol: res.rol,
    avatar: res.avatar,
    premium: res.premium,
    createdAt: res.createdAt,
  };
};
