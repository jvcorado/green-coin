"use client";

import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
    </main>
  );
}
