"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 "
        /*  scrolled
          ? "bg-background/95 backdrop-blur-md border-b"
          : "bg-transparent" */
      )}
    >
      <Container className=" flex flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-semibold text-xl md:text-2xl">
            <span className="text-[#22c55e]">X</span>
            <span className="text-neutral-700 dark:text-neutral-300">
              MOEDAS
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 justify-between w-full ">
          <div className="flex flex-1  justify-center items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#tokens"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              Tokens
            </Link>
            <Link
              href="#esgx-seal"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              ESGX Seal
            </Link>
          </div>
          <div className="space-x-8">
            <Link
              href="#whitepaper"
              className="text-neutral-700 dark:text-neutral-300 hover:text-[#22c55e] transition-colors"
            >
              Read the Whitepaper
            </Link>
            <Button className="bg-[#22c55e] hover:bg-[#1ea750] text-white">
              Buy XMOEDAS
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 dark:text-neutral-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#tokens"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Tokens
            </Link>
            <Link
              href="#esgx-seal"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              ESGX Seal
            </Link>
            <Link
              href="#whitepaper"
              className="text-neutral-700 dark:text-neutral-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Read the Whitepaper
            </Link>
            <Button className="bg-[#22c55e] hover:bg-[#1ea750] text-white w-full">
              Buy GreenCoin
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
