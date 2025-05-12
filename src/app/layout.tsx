import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenCoins - Certified Digital Currency for Environmental Impact",
  description:
    "Transforming recycling into traceable, certified, and monetizable environmental value.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          inter.className,
          "antialiased bg-background text-foreground"
        )}
      >
        <div className=" flex flex-col gap-10 md:gap-20 !overflow-x-hidden justify-center min-[1920px]:gap-40 zoom mb-10 xl:mb-20">
          <Navbar />
          {/*    <Container> */} {children}
          {/* </Container> */}
        </div>
      </body>
    </html>
  );
}
