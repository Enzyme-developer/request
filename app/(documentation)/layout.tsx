import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="mt-40">{children}</section>;
};

export default layout;
