import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { IndustriesGrid } from '@/components/IndustriesGrid';
import { ValueProp } from '@/components/ValueProp';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { ClientLogos } from '@/components/ClientLogos';
import { SEO } from '@/components/SEO';
import { seoDefaults } from '@/data';
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    } as Transition,
  },
};
export function HomePage() {
  return (
    <>
      <SEO data={seoDefaults} />
      <div className="w-full">
        {/* Full-width Hero section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        {/* Constrained subsequent sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-16 md:space-y-24"
          >
            <motion.div variants={sectionVariants} className="py-12 md:py-16">
              <TechStack />
            </motion.div>
            <motion.div variants={sectionVariants} className="py-12 md:py-16">
              <ValueProp />
            </motion.div>
            <motion.div variants={sectionVariants} className="py-12 md:py-16">
              <IndustriesGrid />
            </motion.div>
            <motion.div variants={sectionVariants} className="py-12 md:py-16">
              <SolutionsGrid />
            </motion.div>
            <motion.div variants={sectionVariants} className="pb-16 md:pb-24">
              <ClientLogos />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}