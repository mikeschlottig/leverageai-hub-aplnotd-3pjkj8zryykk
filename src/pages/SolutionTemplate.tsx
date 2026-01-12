import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findSolutionBySlug, blogPosts } from '@/data';
import { SEO } from '@/components/SEO';
import { ContactSheet } from '@/components/ContactSheet';
import { MetricChart } from '@/components/MetricChart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import {
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, Lightbulb, BookOpen, Shield, Wrench, Home, Landmark, Hammer, Spade, Dumbbell, Car, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, Check, ArrowRight
} from 'lucide-react';
import type { IconKey } from '@/types';
const iconMap: Record<IconKey, React.ElementType> = {
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, Lightbulb, BookOpen, Shield, Server: Database, Cpu: BrainCircuit, GitCommit: GitGraph, Settings: Wrench, Globe: Users, Home, Landmark, Hammer, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, ArrowRight
};
export function SolutionTemplate() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  if (!category || !slug) return <Navigate to="/404" replace />;
  const solution = findSolutionBySlug(category, slug);
  if (!solution) return <Navigate to="/404" replace />;
  const IconComponent = iconMap[solution.iconKey] || Bot;
  const getFeatureSlug = (feature: string) => {
    // Specific client-requested normalization: "and" -> "" for the analytics slug
    // Standardize: lowercase, remove non-alphanumeric (except spaces), replace spaces with dashes
    let normalized = feature.toLowerCase().replace(/[^\w\s-]/g, '');
    // Special handling for the analytics post as requested: "in-depth-analytics-and-ai-accuracy" -> "in-depth-analytics-ai-accuracy"
    if (normalized.includes('analytics and ai accuracy')) {
      normalized = normalized.replace('analytics and ai accuracy', 'analytics ai accuracy');
    }
    return normalized.trim().replace(/\s+/g, '-');
  };
  return (
    <>
      <SEO data={solution.seo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              {solution.breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === solution.breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.href}>{crumb.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < solution.breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <header className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-brand-purple/10"
            >
              <IconComponent className="w-10 h-10 text-brand-purple" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{solution.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{solution.heroText}</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-6">Core Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.featureList.map((feature, index) => {
                    const featureSlug = getFeatureSlug(feature);
                    const hasBlogPost = blogPosts.some(post => post.slug === featureSlug);
                    const cardContent = (
                      <motion.div
                        whileHover={hasBlogPost ? { y: -4, scale: 1.02 } : {}}
                        className={cn(
                          "p-6 rounded-2xl border border-border bg-card transition-all duration-300 h-full relative group",
                          hasBlogPost && "hover:border-brand-purple/50 hover:shadow-glow cursor-pointer"
                        )}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <Check className={cn("h-5 w-5 transition-colors", hasBlogPost ? "text-brand-purple" : "text-muted-foreground/50")} />
                          {hasBlogPost && (
                            <ArrowRight className="h-4 w-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                          )}
                        </div>
                        <p className="font-semibold text-foreground/90">{feature}</p>
                        {hasBlogPost && (
                          <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                             <span className="text-xs font-bold text-brand-purple uppercase tracking-widest flex items-center gap-1">
                               Research Available <ArrowRight className="w-3 h-3" />
                             </span>
                          </div>
                        )}
                      </motion.div>
                    );
                    return hasBlogPost ? (
                      <Link key={index} to={`/blog/${featureSlug}`} className="h-full">
                        {cardContent}
                      </Link>
                    ) : (
                      <div key={index}>{cardContent}</div>
                    );
                  })}
                </div>
              </section>
              {solution.caseStudy && (
                <section className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">Impact & Performance Results</h2>
                    <Badge variant="outline" className="text-brand-purple border-brand-purple">Proven Outcome</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-muted-foreground uppercase text-xs tracking-widest">The Challenge</h3>
                        <p className="text-lg leading-relaxed">{solution.caseStudy.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-muted-foreground uppercase text-xs tracking-widest">The Leverage</h3>
                        <p className="text-lg leading-relaxed text-foreground/80 italic">"{solution.caseStudy.solution}"</p>
                      </div>
                      <ul className="space-y-3">
                        {solution.caseStudy.results.map((res, i) => (
                          <li key={i} className="flex items-center gap-2 text-brand-accent font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <MetricChart data={solution.caseStudy.metrics} />
                    </div>
                  </div>
                </section>
              )}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
                <div className="flex flex-wrap gap-2">
                  {solution.technicalSpecs.map((spec) => (
                    <Badge key={spec} variant="secondary" className="text-base px-3 py-1">{spec}</Badge>
                  ))}
                </div>
              </section>
            </main>
            <aside className="lg:col-span-1">
              <Card className="sticky top-28 glass overflow-hidden border-brand-purple/20">
                <div className="h-1.5 bg-gradient-primary w-full" />
                <CardHeader>
                  <CardTitle>Ready to leverage {solution.title}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">Schedule a technical discovery session to identify constraints in your current pipeline.</p>
                  <Button size="lg" className="w-full btn-gradient shadow-lg" onClick={() => setContactSheetOpen(true)}>
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
      <ContactSheet
        open={isContactSheetOpen}
        onOpenChange={setContactSheetOpen}
        solutionTitle={solution.title}
      />
    </>
  );
}
// Internal utility to keep component clean
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}