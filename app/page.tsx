import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import Heading from "./components/reusables/Heading";
import Paragraph from "./components/reusables/Paragraph";

export const metadata: Metadata = {
  title: "CoinCap",
  description: "Free & Cryptocurrency API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </Heading>

          <Paragraph className="max-w-xl lg:text-left">
            With theCoinCap API, you can easily retrieve the prices and other
            relevan tinformation on your Cryptocurrency{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key.
            </Link>
          </Paragraph>

          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
