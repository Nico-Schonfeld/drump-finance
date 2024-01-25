import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/lib/db/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const emailExist = await db.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (emailExist)
      return NextResponse.json(
        { message: "Email exist", error: true, success: false },
        { status: 400, statusText: "Error" }
      );

    const nameExist = await db.user.findUnique({
      where: {
        name: body.name,
      },
    });

    if (nameExist)
      return NextResponse.json(
        { message: "Name exist", error: true, success: false },
        { status: 400, statusText: "Error" }
      );

    const passHash = await bcrypt.hash(body.password, 10);

    const res = await db.user.create({
      data: {
        name: body.name,
        username: body.username,
        email: body.email,
        password: passHash,
        avatar: "/assets/images/photoAccount/avatar1.svg",
      },
    });

    const { password: _, ...user } = res;

    return NextResponse.json(
      { user, error: false, success: true },
      { status: 200, statusText: "ok" }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500, statusText: "Error" }
    );
  }
}
