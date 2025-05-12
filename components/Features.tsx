"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, BarChart3, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Eco-Friendly Mining",
    description:
      "Our blockchain uses 99.9% less energy than traditional proof-of-work cryptocurrencies.",
    icon: <Leaf className="h-10 w-10 text-[#22c55e]" />,
  },
  {
    title: "Recycling Incentives",
    description:
      "Earn GreenCoins by recycling materials through our verified partner network.",
    icon: <Recycle className="h-10 w-10 text-[#22c55e]" />,
  },
  {
    title: "Transparent Traceability",
    description:
      "Track the environmental impact of your transactions with our real-time dashboard.",
    icon: <BarChart3 className="h-10 w-10 text-[#22c55e]" />,
  },
  {
    title: "ESGX Certified",
    description:
      "Our tokens are certified for environmental, social, and governance excellence.",
    icon: <Shield className="h-10 w-10 text-[#22c55e]" />,
  },
];

const Features = () => {
  return (
    <section
      id="about"
      className="w-full py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              Creating Value Through Environmental Impact
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              GreenCoins transforms sustainability actions into verifiable
              digital assets, creating a new economic model for environmental
              stewardship.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-neutral-700 dark:text-neutral-300 italic">
              GreenCoins represents the future of environmental finance,
              creating a transparent and verifiable system for ecological value
              creation.
            </p>
            <p className="mt-4 font-medium text-neutral-900 dark:text-neutral-100">
              — Dr. Emma Richardson, Environmental Economist
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
