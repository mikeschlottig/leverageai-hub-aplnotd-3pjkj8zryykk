import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ContactSheet } from '@/components/ContactSheet';
import { cn } from '@/lib/utils';
export function Hero() {
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  return (
    <>
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Cinematic Background */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop")' }}
        />
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/70 to-brand-purple/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-center md:text-left"
            >
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tight text-white drop-shadow-2xl">
                  We identify <span className="block">Constraints.</span> 
                  <span className="text-gradient-light">Then We Leverage Them.</span>
                </h1>
                <p className="max-w-xl mx-auto md:mx-0 text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
                  LEVERAGEAI is a Premier AI Agency in Southern Oregon. We use enterprise-grade technology to unleash your data, automate workflows, and drive growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button
                  size="lg"
                  className="btn-gradient shadow-xl hover:shadow-brand-purple/40 transition-all duration-300"
                  onClick={() => setContactSheetOpen(true)}
                >
                  Get Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <Link to="/services">Explore Solutions</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center items-center pt-8 md:pt-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-brand-purple/30 rounded-full blur-[80px] animate-pulse-glow" />
                <div className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/20 rounded-4xl flex items-center justify-center shadow-glass transition-transform duration-500 hover:rotate-3">
                  <Lightbulb className="w-32 h-32 md:w-40 md:h-40 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-float" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactSheet open={isContactSheetOpen} onOpenChange={setContactSheetOpen} />
    </>
  );
}