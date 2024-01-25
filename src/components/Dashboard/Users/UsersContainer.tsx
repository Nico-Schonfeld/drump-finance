import { getUserSession } from "@/lib/db/tools/getUserSession";
import { getOneUser, getUsers } from "@/lib/db/tools/getUsers";
import React from "react";
import UsersComponent from "./UsersComponent";

const UsersContainer = async () => {
  const session = await getUserSession();
  const res = await getUsers();
  const oneRes = await getOneUser(session?.user.id);

  return (
    <UsersComponent
      user={session?.status === 200 ? session?.user : null}
      users={res}
    />
  );
};

export default UsersContainer;
