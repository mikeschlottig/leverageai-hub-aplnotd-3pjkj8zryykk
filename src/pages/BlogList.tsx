import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Calendar, User, ArrowRight } from 'lucide-react';
const ITEMS_PER_PAGE = 6;
export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return blogPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  const pageSeo = {
    title: 'Insights & Research | LEVERAGEAI LLC',
    description: 'Explore our latest thoughts on AI, automation, and operational leverage in the modern enterprise.',
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <SEO data={pageSeo} />
      {/* Cinematic Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Insights & <span className="text-gradient-light">Research</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Expert perspectives on identifying constraints and engineering massive leverage with AI.
          </motion.p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <Card className="h-full flex flex-col glass overflow-hidden hover:shadow-glow transition-all duration-300 border-white/10 group-hover:scale-[1.02]">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader className="flex-grow">
                        <div className="flex items-center gap-3 text-2xs text-brand-muted mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-brand-purple transition-colors">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3 mt-2">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button variant="link" className="p-0 h-auto text-brand-purple group-hover:translate-x-1 transition-transform">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </>
  );
}