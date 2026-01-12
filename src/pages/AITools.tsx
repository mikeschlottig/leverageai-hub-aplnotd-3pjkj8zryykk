import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { directories, seoDefaults } from '@/data';
import { SEO } from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Bot, Search, ExternalLink } from 'lucide-react';
import type { AIDirectory } from '@/types';
const ITEMS_PER_PAGE = 12;
const ToolCard = ({ tool }: { tool: AIDirectory }) => {
  const [ref, inView] = useIntersectionObserver();
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <Badge variant="outline">#{tool.rank}</Badge>
              </div>
              <CardDescription>{tool.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mt-2">
                {tool.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Bot className="w-6 h-6 text-brand-purple" /> {tool.name}
            </DialogTitle>
            <DialogDescription>{tool.summary}</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p>{tool.fullDesc}</p>
            <div className="flex flex-wrap gap-2">
              <Badge>{tool.category}</Badge>
              {tool.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button asChild className="btn-gradient">
              <a href={tool.website} target="_blank" rel="noopener noreferrer">
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
export default function AITools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const filteredTools = useMemo(() => {
    return directories.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);
  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };
  const pageSeo = {
    ...seoDefaults,
    title: 'AI Tools Directory | LEVERAGEAI LLC',
    description: 'Explore our curated directory of the top 100 AI tools for business, creativity, and productivity.',
  };
  return (
    <>
      <SEO data={pageSeo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">AI Tools Directory</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover the best AI tools to enhance your productivity, creativity, and business operations.
            </p>
          </header>
          <div className="mb-8 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for tools, categories, or tags..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedTools.map(tool => (
              <ToolCard key={tool.rank} tool={tool} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
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