import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/db";
import { nanoid } from "nanoid";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  try {
    const user = await getServerSession(authOptions).then((res) => res?.user);

    if (!user) {
      return Response.json(
        { error: "Unauthorized to perform this action.", createdApiKey: null },
        { status: 401 }
      );
    }

    const existingApiKey = await db.apikey.findFirst({
      where: { userId: user.id, enabled: true },
    });

    if (existingApiKey) {
      return Response.json(
        { error: "You already have a valid API key.", createdApiKey: null },
        { status: 400 }
      );
    }

    const createdApiKey = await db.apikey.create({
      data: {
        userId: user.id,
        key: nanoid(32),
      },
    });

    return Response.json({ error: null, createdApiKey });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: error.issues, createdApiKey: null },
        { status: 400 }
      );
    }

    return Response.json(
      { error: "Internal Server Error", createdApiKey: null },
      { status: 500 }
    );
  }
}
