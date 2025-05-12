"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from './Logo';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-neutral-900 pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-semibold text-xl">
                <span className="text-[#22c55e]">Green</span>
                <span className="text-neutral-700 dark:text-neutral-300">Coins</span>
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Transforming environmental actions into certified digital value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-[#22c55e] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-[#22c55e] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-[#22c55e] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-[#22c55e] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-neutral-800 dark:text-neutral-200">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#whitepaper" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-neutral-800 dark:text-neutral-200">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-neutral-800 dark:text-neutral-200">
              Subscribe
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Get the latest news and updates from GreenCoins.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white dark:bg-neutral-800"
              />
              <Button className="bg-[#22c55e] hover:bg-[#1ea750] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 dark:text-neutral-500 text-sm mb-4 md:mb-0">
              © 2025 GreenCoins. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-neutral-500 hover:text-[#22c55e] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-[#22c55e] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-[#22c55e] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;