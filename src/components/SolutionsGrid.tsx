import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allSolutions } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, Lightbulb, BookOpen, Shield, Wrench, Home, Landmark, Hammer, Spade, Dumbbell, Car, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, ArrowRight
} from 'lucide-react';
import type { IconKey } from '@/types';
const iconMap: Record<IconKey, React.ElementType> = {
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, Lightbulb, BookOpen, Shield, Server: Database, Cpu: BrainCircuit, GitCommit: GitGraph, Settings: Wrench, Globe: Users, Home, Landmark, Hammer, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, ArrowRight
};
export function SolutionsGrid() {
  const featuredSolutions = allSolutions.filter(s => s.category === 'services').slice(0, 8);
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core Solutions</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of our services designed to tackle your biggest challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredSolutions.map((solution, index) => {
          const IconComponent = iconMap[solution.iconKey];
          return (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <Link to={`/${solution.category}/${solution.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                  <CardHeader className="flex-row items-center gap-4">
                    {IconComponent && <IconComponent className="w-8 h-8 text-brand-purple" />}
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link to="/services">Explore All Solutions</Link>
        </Button>
      </div>
    </section>
  );
}