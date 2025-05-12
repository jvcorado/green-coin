"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const tokenDistributionData = [
  { name: 'Public Sale', value: 40 },
  { name: 'Ecosystem Growth', value: 25 },
  { name: 'Team & Advisors', value: 15 },
  { name: 'Strategic Partners', value: 10 },
  { name: 'Reserve', value: 10 }
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

const tokenMetricsData = [
  { name: 'Jan', value: 150 },
  { name: 'Feb', value: 220 },
  { name: 'Mar', value: 320 },
  { name: 'Apr', value: 410 },
  { name: 'May', value: 490 },
  { name: 'Jun', value: 590 },
  { name: 'Jul', value: 680 },
  { name: 'Aug', value: 760 },
];

const tokenInfo = [
  { metric: "Token Symbol", value: "GRC" },
  { metric: "Initial Supply", value: "100,000,000 GRC" },
  { metric: "Current Price", value: "$0.85 USD" },
  { metric: "Market Cap", value: "$85,000,000" },
  { metric: "All-time Environmental Impact", value: "45,000 tons CO2 offset" },
  { metric: "Listed Exchanges", value: "4 global exchanges" },
];

const Tokens = () => {
  return (
    <section id="tokens" className="w-full py-24 bg-gradient-to-bl from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              GreenCoin Tokenomics
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Our economic model is designed for sustainable growth and environmental impact.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none shadow-lg">
              <CardHeader>
                <CardTitle>Token Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tokenDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {tokenDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `${value}%`}
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)' 
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none shadow-lg">
              <CardHeader>
                <CardTitle>Token Growth (Monthly)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={tokenMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`${value} GRC`, 'Value']}
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)' 
                        }}
                      />
                      <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokenInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-neutral-500 dark:text-neutral-400 font-medium mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
                    {item.value}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokens;