import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findBlogPostBySlug } from '@/data';
import { SEO } from '@/components/SEO';
import { ContactSheet } from '@/components/ContactSheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Calendar, User, ArrowLeft, Share2, Quote } from 'lucide-react';
import { toast } from 'sonner';
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (!slug) return <Navigate to="/404" replace />;
  const post = findBlogPostBySlug(slug);
  if (!post) return <Navigate to="/404" replace />;
  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };
    try {
      // 1. Try Native Share API
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      // 2. Try Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
        return;
      }
      // 3. Absolute Fallback for restricted environments
      throw new Error('APIs unavailable');
    } catch (error) {
      console.warn('Share failed:', error);
      toast('Share insight', {
        description: 'Please copy the URL from your browser address bar to share.',
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
    }
  };
  return (
    <>
      <SEO data={{ 
        title: post.title, 
        description: post.excerpt, 
        ogImage: post.image 
      }} />
      <article className="w-full">
        <div className="relative w-full h-[55vh] min-h-[450px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back to Insights
                </Link>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{post.author}</span>
                      <span className="text-xs text-white/70">Strategic Architect</span>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" /> Share
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <main className="lg:col-span-8 space-y-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink asChild><Link to="/blog">Insights</Link></BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage className="font-medium">{post.title}</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="space-y-8">
                {post.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-foreground/80 leading-relaxed tracking-normal font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative p-8 md:p-12 rounded-4xl bg-brand-purple/5 border border-brand-purple/10 overflow-hidden">
                <Quote className="absolute -top-4 -left-4 w-24 h-24 text-brand-purple/10 -rotate-12" />
                <blockquote className="relative z-10 text-2xl md:text-3xl font-bold text-foreground/90 italic text-center leading-snug">
                  "At the core of every digital transformation is the need to move from friction to flow. AI is the ultimate catalyst for operational leverage."
                </blockquote>
              </div>
              <div className="pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Share this insight:</span>
                  <Button variant="outline" size="icon" onClick={handleShare}><Share2 className="w-4 h-4" /></Button>
                </div>
                <Button variant="ghost" asChild>
                  <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> More Insights</Link>
                </Button>
              </div>
            </main>
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <Card className="glass border-brand-purple/20 overflow-hidden">
                  <div className="h-2 bg-gradient-primary" />
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Scale Your Leverage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Inspired by this technical research? Let's discuss how your organization's specific constraints can be engineered into competitive advantages.
                    </p>
                    <Button onClick={() => setIsContactOpen(true)} className="w-full btn-gradient h-12 text-lg font-bold shadow-glow" size="lg">
                      Technical Audit
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">Author Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-brand-purple" />
                      </div>
                      <span className="font-bold">{post.author}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Strategic Architect at LEVERAGEAI LLC, specializing in high-scale orchestration and constraint-based automation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <ContactSheet open={isContactOpen} onOpenChange={setIsContactOpen} solutionTitle={`Insight: ${post.title}`} />
    </>
  );
}