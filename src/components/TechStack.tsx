import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { cities, techStack } from '@/data';
export function TechStack() {
  const allItems = [...cities, ...techStack];
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1092],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  return (
    <section className="w-full py-12">
      <div className="text-center mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Powered by Enterprise Grade Technology
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...allItems, ...allItems].map((item, index) => (
            <Badge key={index} variant="secondary" className="text-md px-4 py-2 whitespace-nowrap">
              {item}
            </Badge>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}