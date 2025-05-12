"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Recycling & Resource Collection",
    description: "Users bring recyclable materials to our partner collection centers or use our at-home pickup service.",
    highlight: "GreenCoin partners with over 500 recycling centers globally",
  },
  {
    title: "Material Verification & Processing",
    description: "Materials are sorted, weighed, and verified using our proprietary blockchain tracking system.",
    highlight: "AI-powered verification ensures accuracy and prevents fraud",
  },
  {
    title: "GreenCoin Minting & Distribution",
    description: "Verified materials generate GreenCoins based on environmental impact calculations.",
    highlight: "Earn between 1-50 GreenCoins per recycling action, depending on material type and weight",
  },
  {
    title: "Environmental Impact Recording",
    description: "Each transaction is recorded on our transparent ledger with precise environmental metrics.",
    highlight: "Track CO2 reduction, water conservation, and landfill diversion in real-time",
  },
  {
    title: "Trading & Utilization",
    description: "Use GreenCoins for purchases with eco-friendly partners or trade on supported exchanges.",
    highlight: "Growing ecosystem of over 200 merchants accepting GreenCoins",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white dark:bg-neutral-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              How GreenCoins Work
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Our innovative system turns environmental actions into verifiable digital currency.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                    {step.description}
                  </p>
                  <div className="bg-[#f0fdf4] dark:bg-[#052e16] p-3 rounded-md border-l-4 border-[#22c55e] flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#14532d] dark:text-[#86efac]">
                      {step.highlight}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="ml-6 mt-4 mb-4 flex justify-center">
                  <ArrowRight className="h-6 w-6 text-[#22c55e] transform rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;