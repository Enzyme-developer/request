import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "./lib/utils";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.className, "bg-white text-purple-700 antialiased")}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers> 
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
