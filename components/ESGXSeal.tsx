"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ESGXSeal = () => {
  return (
    <section id="esgx-seal" className="w-full py-24 bg-white dark:bg-neutral-950">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-6">
              ESGX Certified for Environmental Excellence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              The ESGX Seal represents the highest standard in environmental, social, and governance excellence for digital currencies. GreenCoin has met or exceeded all certification requirements through rigorous third-party verification.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Carbon Negative Operations</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Our entire blockchain operation removes more carbon than it produces.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Transparent Impact Reporting</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">All environmental claims are independently verified and publicly auditable.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Ethical Governance Model</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Community-led decisions with environmental impact as the primary consideration.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Social Responsibility</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Creating jobs in recycling and environmental sectors in underserved communities.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-[#22c55e] hover:bg-[#1ea750] text-white">
              Verify Certification
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#22c55e]/40 to-[#22c55e]/20 flex items-center justify-center">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#22c55e] flex items-center justify-center shadow-lg">
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full absolute"
                >
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <Award className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2">
                    <BadgeCheck className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Award className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  <div className="absolute top-1/2 left-4 -translate-y-1/2">
                    <BadgeCheck className="w-8 h-8 text-[#22c55e]" />
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                ESGX Certification #GRC-2025-03-128
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Certification valid through March 2026
              </p>
              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                Independently verified by Environmental Finance Authority
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ESGXSeal;