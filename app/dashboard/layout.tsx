import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  //offset Navbar
  return <section className="pt-20">{children}</section>;
}
