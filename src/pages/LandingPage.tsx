import React, { useState } from 'react';
import { motion, useScroll, useTransform, Variants, Transition } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { ContactSheet } from '@/components/ContactSheet';
import { seoDefaults } from '@/data';
function renderWithGradient(text: string) {
  const parts = text.split(/(__gradient_start__|__gradient_end__)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === '__gradient_start__' || part === '__gradient_end__') {
          return null;
        }
        const isGradient = parts[i - 1] === '__gradient_start__';
        return isGradient ? (
          <span key={i} className="text-gradient">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}
const testimonials = [
  "Transformed our entire operations from the ground up.",
  "The ROI was immediate and substantial. Highly recommend.",
  "They didn't just provide a solution; they became a strategic partner.",
  "Finally, an agency that understands both tech and business constraints.",
  "Our efficiency has skyrocketed since implementing their workflows.",
  "LeverageAI identified bottlenecks we didn't even know we had.",
  "A truly enterprise-grade approach to AI and automation.",
  "The best investment we've made in our company's future.",
];
export default function LandingPage() {
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const pageSeo = {
    ...seoDefaults,
    title: 'Unlock Your Business Potential | LEVERAGEAI LLC',
    description:
      'We identify your constraints and leverage them into massive gains using enterprise-grade AI solutions. Unlock operational leverage in your sales, marketing, and internal processes.',
  };
  const marqueeTransition: Transition = {
    x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 40,
      ease: 'linear',
    },
  };
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1500],
      transition: marqueeTransition,
    },
  };
  return (
    <>
      <SEO data={pageSeo} />
      <div className="relative min-h-screen overflow-x-hidden bg-brand-light dark:bg-brand-darker">
        <motion.div
          style={{ scale, opacity }}
          className="fixed inset-0 z-0 bg-gradient-to-br from-purple-50/50 via-orange-50/50 to-teal-50/50 dark:from-purple-950/20 dark:via-orange-950/20 dark:to-teal-950/20"
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <p className="mb-4 text-xl font-bold text-brand-purple md:text-2xl">
              Do you ever feel uncertain or anxious about your future?
            </p>
            <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              When was the last time you analyzed your business and took a Constraints First Approach?
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg italic text-muted-foreground md:text-xl">
              Most businesses jump into AI without defining their use case, leading to wasted resources and minimal ROI.
            </p>
            <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
              {renderWithGradient(
                'Our approach has generated __gradient_start__MASSIVE gains__gradient_end__ for businesses just like yours.'
              )}
            </h2>
            <p className="mt-4 text-lg italic text-muted-foreground">
              LEVERAGEAI is a Premier AI Agency in Southern Oregon.
            </p>
            <p className="mt-4 text-xl font-medium">
              {renderWithGradient(
                'Unlock __gradient_start__operational leverage__gradient_end__ in your sales, marketing, and internal processes.'
              )}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col w-full max-w-md gap-4 mt-12 sm:flex-row sm:max-w-none sm:justify-center"
          >
            <Button
              size="lg"
              className="h-16 px-12 text-lg btn-gradient shadow-lg hover:shadow-brand-purple/50 transition-shadow"
              onClick={() => setContactSheetOpen(true)}
            >
              Get Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg" asChild>
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full py-8 overflow-hidden">
          <motion.div className="flex gap-4" variants={marqueeVariants} animate="animate">
            {[...testimonials, ...testimonials].map((quote, index) => (
              <Badge key={index} variant="secondary" className="px-6 py-2 text-md whitespace-nowrap bg-white/50 dark:bg-black/30 backdrop-blur-sm">
                {quote}
              </Badge>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute z-30 hidden text-center -translate-x-1/2 md:block bottom-8 left-1/2"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
        </motion.div>
      </div>
      <ContactSheet
        open={isContactSheetOpen}
        onOpenChange={setContactSheetOpen}
        solutionTitle="General Consultation"
      />
    </>
  );
}