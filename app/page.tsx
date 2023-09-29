import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import Heading from "./components/reusables/Heading";
import Paragraph from "./components/reusables/Paragraph";
import { Button, buttonVariants } from "./components/reusables/Button";

export const metadata: Metadata = {
  title: "CryptoHub",
  description: "Free Cryptocurrency API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-24 max-w-7xl w-full mx-auto h-full">
        <div className="h-full flex w-full space-y-6 flex-col justify-center items-center">
          <Heading
            size="lg"
            className="text-transparent text-center bg-clip-text bg-gradient-to-r from-purple to-pink "
          >
            CryptoHub – Your Gateway to the Cryptocurrency World!
          </Heading>

          <Paragraph className="max-w-xl text-center ">
            Unlock the power of digital assets with CryptoHub, the all-in-one
            cryptocurrency API service. CryptoHub has everything you need to
            thrive in the world of cryptocurrencies.
          </Paragraph>

          <Link
            href="/login"
            className={buttonVariants({ variant: "default" })}
          >
            Get Started
          </Link>

          {/* <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
