import React from 'react';
import { motion, Variants } from 'framer-motion';
const logos = [
  { name: 'Google', url: 'https://placehold.co/120x40?text=Google&font=raleway' },
  { name: 'Amazon', url: 'https://placehold.co/120x40?text=Amazon&font=raleway' },
  { name: 'Microsoft', url: 'https://placehold.co/120x40?text=Microsoft&font=raleway' },
  { name: 'Netflix', url: 'https://placehold.co/120x40?text=Netflix&font=raleway' },
  { name: 'Meta', url: 'https://placehold.co/120x40?text=Meta&font=raleway' },
  { name: 'Stripe', url: 'https://placehold.co/120x40?text=Stripe&font=raleway' },
  { name: 'Shopify', url: 'https://placehold.co/120x40?text=Shopify&font=raleway' },
  { name: 'Salesforce', url: 'https://placehold.co/120x40?text=Salesforce&font=raleway' },
];
export function ClientLogos() {
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1280], // Adjust based on number of logos and gap
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  return (
    <section className="w-full py-12">
      <div className="text-center mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by Industry Leaders
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              className="h-10 object-contain flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}