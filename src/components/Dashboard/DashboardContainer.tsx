import React from "react";
import DashboardComponent from "./DashboardComponent";
import { getUserSession } from "@/lib/db/tools/getUserSession";

const DashboardContainer = async () => {
  const user = await getUserSession();

  return <DashboardComponent user={user?.status === 200 ? user?.user : null} />;
};

export default DashboardContainer;
