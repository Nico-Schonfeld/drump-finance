import React from "react";
import LogsComponent from "@/components/Dashboard/Logs/LogsComponent";
import {
  getRolUserSession,
  getUserSession,
} from "@/lib/db/tools/getUserSession";

const LogsContainer = async () => {
  const user = await getUserSession();
  const resUserRolSession = await getRolUserSession(user as any);

  return (
    <LogsComponent
      user={
        resUserRolSession?.status === 200 || resUserRolSession?.ok
          ? (resUserRolSession?.user as any)
          : null
      }
    />
  );
};

export default LogsContainer;
