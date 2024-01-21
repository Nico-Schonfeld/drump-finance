import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LogsComponent = ({
  user,
}: {
  user: {
    name: string;
    username: string;
    email: string;
    rol: string;
    avatar: string;
    premium: string;
  };
}) => {
  if (!user || user?.rol === "USER")
    return (
      <main>
        <h3>NO PUEDES INGRESAR</h3>
        <Link href="/dashboard">
          <Button>Volver</Button>
        </Link>
      </main>
    );

  return <main>{JSON.stringify(user)}</main>;
};

export default LogsComponent;
