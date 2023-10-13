import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
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

    if (!existingApiKey) {
      return Response.json(
        {
          error: "This API key could not be revoked.",
          success: false,
        },
        { status: 500 }
      );
    }

    // invalidate API key
    await db.apikey.update({
      where: { id: existingApiKey.id },
      data: {
        enabled: false,
      },
    });

    return Response.json({ error: null, success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: error.issues, success: false },
        { status: 400 }
      );
    }

    return Response.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
