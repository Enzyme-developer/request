import { getServerSession } from "next-auth";
import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "./reusables/Button";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getServerSession();

  return (
    <nav className="fixed backdrop-blur-sm top-0 left-0 right-0 z-50 h-20 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl w-full flex items-center justify-between">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Crypto-Hub
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
        </div>

        {session ? (
          <>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: "ghost" })}
            >
              Dashboard
            </Link>
            <SignoutButton />
          </>
        ) : (
          <SigninButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
