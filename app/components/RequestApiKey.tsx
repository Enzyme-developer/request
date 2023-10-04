"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "./reusables/Toast";
import { createNewApiKey } from "../helpers/createNewApiKey";
import Heading from "./reusables/Heading";
import Paragraph from "./reusables/Paragraph";
import { Key } from "lucide-react";
import { Button } from "./reusables/Button";
import CopyButton from "./reusables/CopyButton";
import { Input } from "./reusables/Input";

const RequestApiKey = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewAPiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const genereatedApiKey = await createNewApiKey();
      setApiKey(genereatedApiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          message: error.message,
          type: "error",
        });
      }
      toast({
        title: "Error",
        message: "something went wrong",
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center  mt-32">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <Heading className="text-center" size="lg">
          Request your API key
        </Heading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createNewAPiKey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
