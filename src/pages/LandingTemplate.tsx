import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { industries, findIndustryBySlug, seoDefaults } from '@/data';
import { SEO } from '@/components/SEO';
import { ContactSheet } from '@/components/ContactSheet';
import { Button } from '@/components/ui/button';
import type { Industry } from '@/types';
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
export default function LandingTemplate() {
  const { industry: industrySlug } = useParams<{ industry?: string }>();
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  let industry: Industry | undefined | null = null;
  if (industrySlug) {
    industry = findIndustryBySlug(industrySlug);
  } else if (industries.length > 0) {
    industry = industries[0]; // Default to the first industry
  }
  if (!industry) {
    return <Navigate to="/404" replace />;
  }
  const { landingHero } = industry.details;
  const pageSeo = {
    ...seoDefaults,
    title: `${industry.title} Solutions | LEVERAGEAI LLC`,
    description: industry.seo.description,
  };
  return (
    <>
      <SEO data={pageSeo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-center md:text-left"
              >
                <div className="space-y-4 md:space-y-6">
                  {landingHero.intro && <p className="text-lg font-semibold text-brand-purple">{landingHero.intro}</p>}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                    {renderWithGradient(landingHero.h1)}
                  </h1>
                  {landingHero.h2 && <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground italic">{landingHero.h2}</p>}
                  {landingHero.h3 && <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">{renderWithGradient(landingHero.h3)}</h2>}
                  {landingHero.h4 && <p className="text-md text-muted-foreground italic">{landingHero.h4}</p>}
                  {landingHero.h5 && <p className="text-lg font-medium">{renderWithGradient(landingHero.h5)}</p>}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <Button
                    size="lg"
                    className="btn-gradient shadow-lg hover:shadow-brand-purple/50 transition-shadow"
                    onClick={() => setContactSheetOpen(true)}
                  >
                    Get Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={`/industries/${industry.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center pt-8 md:pt-0"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-brand-muted/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-full h-full glass rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-purple/20">
                    <Lightbulb className="w-32 h-32 md:w-40 md:h-40 text-brand-dark animate-float" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      <ContactSheet
        open={isContactSheetOpen}
        onOpenChange={setContactSheetOpen}
        solutionTitle={`Consultation for ${industry.title}`}
      />
    </>
  );
}