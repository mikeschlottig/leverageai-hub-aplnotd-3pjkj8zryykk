import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactSheet } from '@/components/ContactSheet';
import { ConstraintVisual } from '@/components/ConstraintVisual';
export function ValueProp() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const methodology = [
    { title: 'Identify Constraints', description: 'We map your existing bottlenecks, manual touchpoints, and data silos that hinder scale.' },
    { title: 'Engineer Leverage', description: 'We deploy enterprise AI architectures designed to transform those constraints into automated growth engines.' },
    { title: 'Unleash Intelligence', description: 'Watch your data evolve into a real-time actionable intelligence asset.' },
  ];
  return (
    <>
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                Your Data, Unleashed.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Most agencies focus on features. We focus on <strong>Operational Leverage</strong>. By identifying the critical bottlenecks in your workflow, we build AI solutions that don't just "add value"—they multiply output.
              </p>
            </div>
            <div className="space-y-6">
              {methodology.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold group-hover:bg-brand-purple group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="btn-gradient px-8"
              onClick={() => setIsContactOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-card rounded-3xl border border-border shadow-soft overflow-hidden h-[400px] md:h-[500px]"
          >
            <ConstraintVisual />
          </motion.div>
        </div>
      </section>
      <ContactSheet open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}