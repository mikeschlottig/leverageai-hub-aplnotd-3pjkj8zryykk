import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findIndustryBySlug, blogPosts } from '@/data';
import { SEO } from '@/components/SEO';
import { ContactSheet } from '@/components/ContactSheet';
import { MetricChart } from '@/components/MetricChart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import {
  Home, Building, Hammer, Landmark, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Briefcase, Lightbulb, BookOpen, Shield, TrendingUp, ArrowRight
} from 'lucide-react';
import type { IconKey } from '@/types';
const iconMap: Record<IconKey, React.ElementType> = {
  Home, Building, Hammer, Landmark, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Briefcase, Lightbulb, BookOpen, Shield, Server: Database, Cpu: BrainCircuit, GitCommit: GitGraph, Settings: Wrench, Globe: Users, ArrowRight
};
export function IndustriesTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  if (!slug) return <Navigate to="/404" replace />;
  const industry = findIndustryBySlug(slug);
  if (!industry) return <Navigate to="/404" replace />;
  const IconComponent = iconMap[industry.iconKey] || Bot;
  const getFeatureSlug = (feature: string) => {
    let normalized = feature.toLowerCase().replace(/[^\w\s-]/g, '');
    if (normalized.includes('analytics and ai accuracy')) {
      normalized = normalized.replace('analytics and ai accuracy', 'analytics ai accuracy');
    }
    return normalized.trim().replace(/\s+/g, '-');
  };
  const breadcrumbs = [
    { title: 'Home', href: '/' },
    { title: 'Industries', href: '/industries' },
    { title: industry.title, href: `/industries/${slug}` },
  ];
  return (
    <>
      <SEO data={industry.seo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.href}>{crumb.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{industry.title}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{industry.details.heroText}</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-6">Key Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.details.featureList.map((feature, index) => {
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
                          <TrendingUp className={cn("h-5 w-5 transition-colors", hasBlogPost ? "text-brand-accent" : "text-muted-foreground/50")} />
                          {hasBlogPost && (
                            <ArrowRight className="h-4 w-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                          )}
                        </div>
                        <p className="font-semibold text-foreground/90">{feature}</p>
                        {hasBlogPost && (
                          <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                             <span className="text-xs font-bold text-brand-purple uppercase tracking-widest flex items-center gap-1">
                               Related Research <ArrowRight className="w-3 h-3" />
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
              {industry.caseStudy && (
                <section className="space-y-8 bg-brand-purple/5 p-8 rounded-3xl border border-brand-purple/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Industry Success Story</h2>
                    <Badge className="bg-brand-purple">Case Study</Badge>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">The Constraint</h4>
                        <p className="text-lg">{industry.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Solution</h4>
                        <p className="text-lg text-foreground/80">{industry.caseStudy.solution}</p>
                      </div>
                      <div className="pt-4 grid grid-cols-1 gap-3">
                        {industry.caseStudy.results.map((res, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-accent" />
                            <span className="font-semibold">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <MetricChart data={industry.caseStudy.metrics} />
                    </div>
                  </div>
                </section>
              )}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Enterprise Considerations</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Deploying AI in the {industry.title} sector requires a deep understanding of unique constraints—from regulatory compliance to legacy hardware integration. Our approach ensures that every solution is architected for stability, security, and immediate operational leverage.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </main>
            <aside className="lg:col-span-1">
              <Card className="sticky top-28 glass overflow-hidden border-brand-purple/20">
                <div className="h-1.5 bg-gradient-primary w-full" />
                <CardHeader>
                  <CardTitle>AI for {industry.title}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">Discover how we identify and leverage your industry's specific constraints.</p>
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
        solutionTitle={industry.title}
      />
    </>
  );
}
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}