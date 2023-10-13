import { getServerSession } from "next-auth";
import { formatDistance } from "date-fns";
import { notFound } from "next/navigation";
import { authOptions } from "../lib/auth";
import { db } from "../lib/db";
import Heading from "./reusables/Heading";
import Paragraph from "./reusables/Paragraph";
import { Input } from "./reusables/Input";
import ApiKeyOptions from "./ApiKeyOptions";
import Table from "./reusables/Table";

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKeys = await db.apikey.findMany({
    where: { userId: user.user.id },
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });
 
  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timeStamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <Heading>Welcome back, {user.user.name}</Heading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph>Your API key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        Your API history:
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  );
};

export default ApiDashboard;
