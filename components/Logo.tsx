"use client";

import React from 'react';
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-[#22c55e] rounded-full flex items-center justify-center">
        <Leaf className="w-5 h-5 text-white" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#22c55e]" />
    </div>
  );
};

export default Logo;