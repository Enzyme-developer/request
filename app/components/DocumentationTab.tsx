"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./reusables/Tabs";
import Code from "./Code";
import { nodejs, python } from "../helpers/documentation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const DocumentationTab = () => {
  return (
    <Tabs defaultValue="nodejs" className="mt-4 w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code language="typescript" code={nodejs} animated show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code language="javascript" code={python} animated show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTab;
