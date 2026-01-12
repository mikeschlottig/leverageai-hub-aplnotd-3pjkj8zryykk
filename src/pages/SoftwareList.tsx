import React from 'react';
import { Link } from 'react-router-dom';
import { allSolutions, seoDefaults } from '@/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
export function SoftwareList() {
  const softwareSolutions = allSolutions.filter(s => s.category === 'software');
  const pageSeo = {
    ...seoDefaults,
    title: 'Software Development | LEVERAGEAI LLC',
    description: 'Explore our custom software solutions, from B2B SaaS platforms to internal tools and CRMs.',
  };
  return (
    <>
      <SEO data={pageSeo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Custom Software Solutions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We build tailored software that solves your unique business challenges and integrates seamlessly with your operations.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareSolutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/software/${solution.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>{solution.title}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}