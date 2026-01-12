import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { industries } from '@/data';
import type { Industry, IconKey } from '@/types';
import {
  Home, Building, Hammer, Landmark, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, ChevronRight, Lightbulb, Bot, Briefcase
} from 'lucide-react';
const iconMap: Record<string, React.ElementType> = {
  'real-estate': Home,
  'property-management': Building,
  'construction': Hammer,
  'concrete': Landmark,
  'landscaping': Spade,
  'gyms': Dumbbell,
  'car-dealerships': Car,
  'auto-shops': Wrench,
  'restaurants': Utensils,
  'hotels': Hotel,
  'electricians': Plug,
  'plumbers': ShowerHead,
  'nurseries': Flower,
  'gardening': Grape,
  'Home': Home,
  'Building': Building,
  'Hammer': Hammer,
  'Landmark': Landmark,
  'Spade': Spade,
  'Dumbbell': Dumbbell,
  'Car': Car,
  'Wrench': Wrench,
  'Utensils': Utensils,
  'Hotel': Hotel,
  'Plug': Plug,
  'ShowerHead': ShowerHead,
  'Flower': Flower,
  'Grape': Grape,
  'default': Bot
};
export function IndustriesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  return (
    <section className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">AI for Every Sector</h2>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
          Precision-engineered AI solutions tailored to the unique operational constraints of your specific industry.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {industries.map((industry, index) => {
          const IconComponent = iconMap[industry.slug] || iconMap[industry.iconKey] || iconMap.default;
          return (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <button
                onClick={() => setSelectedIndustry(industry)}
                className="group flex flex-col items-center justify-center gap-4 text-center w-full aspect-square p-4 rounded-3xl bg-card border border-border hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300 shadow-soft hover:shadow-glow"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                  <IconComponent className="w-8 h-8 text-slate-500 group-hover:text-brand-purple transition-colors" />
                </div>
                <span className="font-bold text-sm tracking-tight text-foreground/90">{industry.title}</span>
              </button>
            </motion.div>
          );
        })}
      </div>
      <Dialog open={!!selectedIndustry} onOpenChange={(open) => !open && setSelectedIndustry(null)}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none shadow-2xl bg-background backdrop-blur-xl">
          <AnimatePresence>
            {selectedIndustry && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="relative"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Lightbulb className="w-48 h-48 text-brand-purple" />
                </div>
                <div className="p-10">
                  <DialogHeader className="mb-8">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="p-4 rounded-2xl bg-brand-purple/10 text-brand-purple shadow-inner">
                        {React.createElement(iconMap[selectedIndustry.slug] || iconMap[selectedIndustry.iconKey] || iconMap.default, { className: "w-8 h-8" })}
                      </div>
                      <DialogTitle className="text-4xl font-bold tracking-tight">{selectedIndustry.title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-xl leading-relaxed text-foreground/70 font-medium">
                      {selectedIndustry.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-80">Strategic Leverage Points</h3>
                      <ul className="grid grid-cols-1 gap-4">
                        {selectedIndustry.details.featureList.map((feature) => (
                          <li key={feature} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/20 border border-border/40 hover:border-brand-purple/30 transition-colors group">
                            <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                              <ChevronRight className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-foreground/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button className="flex-1 btn-gradient h-14 text-lg font-bold shadow-glow group" asChild>
                        <a href={`/industries/${selectedIndustry.slug}`}>
                          Deep Dive Analysis
                          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button variant="outline" className="h-14 px-8 text-lg font-medium border-border/60 hover:bg-secondary/40" onClick={() => setSelectedIndustry(null)}>
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}