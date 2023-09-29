import DocumentationTab from "@/app/components/DocumentationTab";
import Heading from "@/app/components/reusables/Heading";
import Paragraph from "@/app/components/reusables/Paragraph";
import {
  authorizationText,
  errorResponses,
  errorText,
} from "@/app/helpers/copy";
import { Metadata } from "next";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "CryptoHub | documentation",
  description: "Free Cryptocurrency API",
};

const page: FC = () => {
  return (
    <div className="container mx-auto my-12 max-w-7xl">
      <div className="flex flex-col gap-4 items-center">
        <Heading>Documentation</Heading>
        <Paragraph size="sm">api/v1/crypto-hub</Paragraph>

        <div className="flex flex-col space-y-4 mt-4">
          <Heading size="sm" className="text-left">
            Authorization
          </Heading>
          <Paragraph size="sm" className="text-left opacity-50">
            {authorizationText}
          </Paragraph>
        </div>
        <DocumentationTab />

        <div className="flex flex-col space-y-4 mt-4">
          <Heading size="sm" className="text-left">
            Error Handling
          </Heading>
          <Paragraph size="sm" className="text-left opacity-50">
            {errorText}
          </Paragraph>
          <ul className="flex flex-col items-start space-y-2">
            {errorResponses.map((response) => (
              <li>
                <Paragraph className="text-left" size="sm">{response}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
