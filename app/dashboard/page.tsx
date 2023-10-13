import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React, { FC } from "react";
import { db } from "../lib/db";
import RequestApiKey from "../components/RequestApiKey";
import ApiDashboard from "../components/ApiDashboard";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "CryptoHub | dashboard",
  description: "Free Cryptocurrency API",
};

const page: FC = async () => {
  const user = await getServerSession();

  if (!user) return notFound();

  const apiKey = await db.apikey.findFirst({
    where: { userId: user?.user.id, enabled: true },
  });

  return (
    <div className="container mx-auto my-16 max-w-7xl">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;
