import type { LucideIcon } from 'lucide-react';
export type IconKey =
  | 'Bot' | 'BrainCircuit' | 'Database' | 'GitGraph' | 'PenTool'
  | 'BarChart' | 'Code' | 'Workflow' | 'FileText' | 'Search'
  | 'Users' | 'Building' | 'Briefcase' | 'Lightbulb' | 'BookOpen'
  | 'Shield' | 'Server' | 'Cpu' | 'GitCommit' | 'Settings'
  | 'Globe' | 'Home' | 'Landmark' | 'Hammer' | 'Spade'
  | 'Dumbbell' | 'Car' | 'Wrench' | 'Utensils' | 'Hotel'
  | 'Plug' | 'ShowerHead' | 'Flower' | 'Grape' | 'ArrowRight';
export interface NavLink {
  title: string;
  href: string;
  description?: string;
  icon?: IconKey;
}
export interface NavItemGroup {
  title: string;
  links: NavLink[];
}
export interface NavCategory {
  title: string;
  href?: string;
  isMegaMenu?: boolean;
  columns?: number;
  items: (NavLink | NavItemGroup)[];
}
export interface SEOData {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}
export type RouteCategory = 'services' | 'resources' | 'software' | 'education' | 'industries' | 'blog';
export interface Breadcrumb {
  title: string;
  href: string;
}
export interface MetricPoint {
  label: string;
  before: number;
  after: number;
}
export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
  metrics: MetricPoint[];
}
export interface SolutionData {
  slug: string;
  title: string;
  description: string;
  heroText: string;
  featureList: string[];
  technicalSpecs: string[];
  iconKey: IconKey;
  category: RouteCategory;
  breadcrumbs: Breadcrumb[];
  seo: SEOData;
  caseStudy?: CaseStudy;
}
export interface Industry {
  slug: string;
  title: string;
  description: string;
  iconKey: IconKey;
  details: {
    heroText: string;
    featureList: string[];
    landingHero?: {
      intro: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
    };
  };
  seo: SEOData;
  caseStudy?: CaseStudy;
}
export interface BlogPost {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
  category?: string;
}
export type Resource = NavLink;
export interface AIDirectory {
  rank: number;
  name: string;
  summary: string;
  fullDesc: string;
  category: string;
  tags: string[];
  website: string;
}