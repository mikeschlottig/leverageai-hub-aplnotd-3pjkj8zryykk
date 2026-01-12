import React from 'react';
import { Link } from 'react-router-dom';
import { allSolutions, seoDefaults } from '@/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
export function ResourcesList() {
  const resources = allSolutions.filter(s => s.category === 'resources');
  const pageSeo = {
    ...seoDefaults,
    title: 'Resources | LEVERAGEAI LLC',
    description: 'Explore our curated directories of tech resources, AI tools, and business services.',
  };
  return (
    <>
      <SEO data={pageSeo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A collection of curated directories and tools to help you build, grow, and succeed.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/resources/${resource.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
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