import type { NavCategory, SolutionData, Industry, SEOData, RouteCategory, AIDirectory, BlogPost } from '@/types';
export const seoDefaults: SEOData = {
  title: 'LEVERAGEAI LLC',
  description: 'Premier AI Agency in Southern Oregon. We identify constraints and remove bottlenecks with enterprise-grade AI solutions.',
  ogImage: '/og-image.png',
};
export const blogPosts: BlogPost[] = [
  {
    title: 'The Future of Agentic Engineering',
    slug: 'future-of-agentic-engineering',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'How autonomous AI agents are redefining the way we build and maintain complex software architectures.',
    author: 'Leverage AI Team',
    date: 'May 12, 2024',
    content: 'Agentic engineering represents a paradigm shift from static automation to dynamic, self-correcting systems. In this post, we explore the core components of agent-led development and why Southern Oregon businesses should prepare for this shift. We discuss vector memory, tool-calling capabilities, and the ethics of autonomous orchestration in production environments.'
  },
  {
    title: 'Identifying Operational Constraints',
    slug: 'identifying-operational-constraints',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A deep dive into the Theory of Constraints and how it applies to modern digital transformation.',
    author: 'Technical Architect',
    date: 'April 28, 2024',
    content: 'Every organization has at least one constraint that limits it from achieving more of its goal. Our methodology focuses on identifying these bottlenecks through rigorous data analysis and workflow mapping. By leveraging AI to alleviate these specific points, we unlock massive scalability for our clients without the need for proportional headcount increases.'
  },
  {
    title: 'Advanced AI Integration',
    slug: 'advanced-ai-integration',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Bridging the gap between legacy systems and modern LLM orchestration for seamless operations.',
    author: 'Strategic Architect',
    date: 'June 05, 2024',
    content: 'Integrating Large Language Models into existing enterprise stacks requires more than just API calls. It demands a sophisticated middleware layer that handles state, security, and context. This article explores how we build cross-platform bridges that allow modern AI to communicate effectively with legacy databases and proprietary software, ensuring data integrity across the entire workflow.'
  },
  {
    title: 'Scalable Architecture with Edge AI',
    slug: 'scalable-architecture-edge-ai',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Deploying distributed AI agents on Cloudflare Workers for global performance and reliability.',
    author: 'Lead Developer',
    date: 'June 18, 2024',
    content: 'Latency is the enemy of a great user experience. By deploying AI logic to the edge using Cloudflare Workers, we minimize the distance between data and processing. We discuss the technical hurdles of distributed orchestration, including KV storage management, durable objects for state synchronization, and the benefits of a serverless-first architecture for unpredictable AI workloads.'
  },
  {
    title: 'In-Depth Analytics and AI Accuracy',
    slug: 'in-depth-analytics-ai-accuracy',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7e?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Real-time monitoring and evaluation strategies to ensure your AI agents stay on track.',
    author: 'Strategic Architect',
    date: 'July 02, 2024',
    content: 'An AI system is only as good as its output quality. We implement rigorous feedback loops and real-time evaluation frameworks to monitor hallucinations and drift. Learn how we use custom evaluation datasets and automated testing pipelines to ensure that every agentic interaction meets enterprise-grade standards for accuracy and reliability.'
  },
  {
    title: 'Continuous Performance Optimization',
    slug: 'continuous-performance-optimization',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Iterative refinement: How we use production data to evolve and improve AI models over time.',
    author: 'Lead Developer',
    date: 'July 15, 2024',
    content: 'Deployment is just the beginning. The most successful AI implementations use a fly-wheel effect where production data informs the next iteration of the model. This post details our approach to RLHF (Reinforcement Learning from Human Feedback) in a business context, explaining how we refine prompts and RAG parameters based on real-world user interactions.'
  },
  {
    title: 'AI for Enterprise Scale',
    slug: 'ai-for-enterprise-scale',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'High-throughput automation strategies for organizations managing massive data volumes.',
    author: 'Strategic Architect',
    date: 'August 01, 2024',
    content: 'When you move from a hundred to a million automated tasks, the failure modes change. We dive into the infrastructure required for high-throughput AI: queue management, rate limiting, and robust error handling. Discover how we build resilient systems that can process petabytes of unstructured data without breaking the bank or the backend.'
  },
  {
    title: 'Local AI: Scaling in Southern Oregon',
    slug: 'local-ai-scaling-oregon',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Why the Rogue Valley is becoming a unexpected hub for high-tech AI integration.',
    author: 'Community Liaison',
    date: 'March 15, 2024',
    content: 'From Ashland to Medford, businesses are increasingly looking toward automation. We examine the unique economic landscape of Southern Oregon and how local industries—from viticulture to manufacturing—are using custom-built AI tools to compete on a global scale while maintaining their regional charm.'
  },
  {
    title: 'RAG vs Fine-Tuning: Making the Choice',
    slug: 'rag-vs-fine-tuning',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Which strategy is right for your internal knowledge base? We break down the costs and performance metrics.',
    author: 'Senior Developer',
    date: 'February 10, 2024',
    content: 'Retrieval-Augmented Generation (RAG) has become the gold standard for enterprise AI. However, there are still cases where fine-tuning a model on specific domain data makes more sense. This post compares both approaches in terms of implementation difficulty, token costs, and accuracy for real-world business applications.'
  },
  {
    title: 'Building Resilient AI Workflows',
    slug: 'building-resilient-ai-workflows',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Why your automation is only as strong as your error handling and state management.',
    author: 'CTO Office',
    date: 'January 22, 2024',
    content: 'Simple scripts fail. Resilient workflows succeed. We dive into the importance of DAGs (Directed Acyclic Graphs), observability, and robust fallback mechanisms when deploying AI agents at scale. Learn how we use tools like Dagster and Cloudflare Workers to ensure 99.9% uptime for critical business automations.'
  }
];
const commonMetrics = {
  efficiency: { label: 'Operational Efficiency', before: 25, after: 92 },
  responseTime: { label: 'Response Time (hrs)', before: 48, after: 2 },
  costReduction: { label: 'Resource Cost (%)', before: 100, after: 40 },
  accuracy: { label: 'Data Accuracy (%)', before: 65, after: 99 },
};
const createSolution = (
  category: RouteCategory,
  slug: string,
  title: string,
  iconKey: SolutionData['iconKey'],
  details: Partial<SolutionData> & { description: string }
): SolutionData => {
  const path = `/${category}/${slug}`;
  return {
    slug,
    title,
    iconKey,
    category,
    description: details.description,
    heroText: details.heroText || `Unlock the Power of ${title} to Revolutionize Your Operations.`,
    featureList: details.featureList || ['Advanced AI Integration', 'Identifying Operational Constraints', 'In-Depth Analytics and AI Accuracy', 'Continuous Performance Optimization'],
    technicalSpecs: details.technicalSpecs || ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL'],
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: category.charAt(0).toUpperCase() + category.slice(1), href: `/${category}` },
      { title, href: path },
    ],
    seo: {
      title: `${title} | LEVERAGEAI LLC`,
      description: details.description,
    },
    ...details,
  };
};
const services: SolutionData[] = [
  createSolution('services', 'orchestration', 'Orchestration Architecture', 'Workflow', {
    description: 'Design robust, scalable AI workflows that automate complex processes and ensure seamless data flow.',
    caseStudy: {
      challenge: 'A logistics firm struggled with 40+ manual touchpoints across their shipment lifecycle, leading to a 15% error rate and delayed client reporting.',
      solution: 'We implemented a DAG-based orchestration layer using Dagster on Cloudflare Workers, centralizing state and automating document parsing.',
      results: [
        'Automated 85% of shipment tracking touchpoints',
        'Reduced data discrepancies to near zero',
        'Real-time client portal updates with sub-second latency'
      ],
      metrics: [commonMetrics.efficiency, commonMetrics.responseTime]
    }
  }),
  createSolution('services', 'prompt-engineering', 'Prompt Engineering', 'PenTool', {
    description: 'Craft highly effective prompts to maximize LLM performance.',
    caseStudy: {
      challenge: 'Customer support AI was hallucinating internal policy details, causing 20% of chats to be escalated to human agents for correction.',
      solution: 'Developed a Chain-of-Thought prompting strategy paired with In-Depth Analytics and AI Accuracy frameworks.',
      results: [
        'Escalation rate dropped from 20% to 3%',
        'Consistent multi-lingual support accuracy across 12 languages',
        'Enhanced sentiment detection for high-value client flagging'
      ],
      metrics: [commonMetrics.accuracy, { label: 'Hallucination Rate (%)', before: 15, after: 0.5 }]
    }
  }),
  createSolution('services', 'knowledge-bases', 'Knowledge Bases', 'Database', {
    description: 'Build powerful, centralized repositories that fuel your AI applications.',
    caseStudy: {
      challenge: 'Engineering teams spent 4 hours per week searching for technical documentation across Slack, Jira, and GitHub.',
      solution: 'Built a semantic RAG pipeline using pgvector and LlamaIndex, ingesting all internal data into a unified LLM-powered knowledge hub.',
      results: [
        'Search time reduced by 90%',
        'Onboarding time for new engineers cut by 2 weeks',
        'Instant answers for complex architectural queries'
      ],
      metrics: [{ label: 'Search Time (mins)', before: 20, after: 1 }, commonMetrics.efficiency]
    }
  }),
  createSolution('services', 'vector-dependency-graphs', 'Vector & Dependency Graphs', 'GitGraph', { description: 'Visualize and manage complex data relationships.' }),
  createSolution('services', 'context-engineering', 'Context Engineering', 'FileText', { description: 'Optimize and structure context for RAG.' }),
  createSolution('services', 'dags', 'DAGs (Directed Acyclic Graphs)', 'GitGraph', { description: 'Model complex dependencies and workflows.' }),
  createSolution('services', 'airflow-dagster', 'Airflow & Dagster', 'Workflow', { description: 'Implement enterprise-grade data orchestration.' }),
  createSolution('services', 'scripting', 'Scripting', 'Code', { description: 'Automate repetitive tasks and create custom tools.' }),
  createSolution('services', 'workflows', 'Workflows', 'Workflow', { description: 'Streamline and automate core business processes.' }),
  createSolution('services', 'sops', 'SOPs (Standard Operating Procedures)', 'FileText', { description: 'Document, refine, and automate SOPs.' }),
  createSolution('services', 'web-design', 'Web Design', 'PenTool', { description: 'Create stunning, high-performance websites.' }),
  createSolution('services', 'seo-geo', 'SEO & GEO Management', 'Search', { description: 'Dominate search rankings and local markets.' }),
  createSolution('services', 'social-media', 'Social Media Mgmt', 'Users', { description: 'Engage audience and grow your brand.' }),
  createSolution('services', 'research-analytics', 'Research & Analytics', 'BarChart', { description: 'Gain actionable insights from your data.' }),
  createSolution('services', 'custom-software', 'Custom Software', 'Code', { description: 'Build tailored software solutions.' }),
  createSolution('services', 'data-migration', 'Data Migration & Optimization', 'Database', { description: 'Seamlessly migrate and optimize your data.' }),
];
const software: SolutionData[] = [
  createSolution('software', 'crm', 'CRM', 'Users', { description: 'Manage customer relationships effectively.' }),
  createSolution('software', 'b2b-saas', 'B2B SaaS', 'Building', { description: 'Develop, launch, and scale B2B products.' }),
  createSolution('software', 'internal-tools', 'Internal Tools', 'Wrench', { description: 'Boost productivity with custom internal tools.' }),
  createSolution('software', 'seo-tracking', 'SEO Tracking', 'Search', { description: 'Monitor keyword rankings and SEO performance.' }),
  createSolution('software', 'competitive-intel', 'Competitive Intel', 'Shield', { description: 'Gather and analyze competitor data automatically.' }),
];
const education: SolutionData[] = [
  createSolution('education', 'open-source', 'Open Source', 'BookOpen', { description: 'Learn to leverage open-source software.' }),
  createSolution('education', 'certifications', 'Certifications', 'Shield', { description: 'Prepare for industry-recognized certifications.' }),
  createSolution('education', 'free-courses', 'Free Courses', 'BookOpen', { description: 'Access free AI and dev courses.' }),
  createSolution('education', 'consulting', 'Consulting', 'Users', { description: 'Expert advice for technical challenges.' }),
];
const resources: SolutionData[] = [
  createSolution('resources', 'tech-directories', 'Tech Directories', 'BookOpen', { description: 'Curated list of essential dev tools.' }),
  createSolution('resources', 'ai-tools', 'AI Tools', 'Bot', { description: 'Directory of innovative AI tools.' }),
  createSolution('resources', 'business-directories', 'Business Directories', 'Briefcase', { description: 'Directory of Southern Oregon business services.' }),
];
export const industries: Industry[] = [
  {
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'AI for property management and sales.',
    iconKey: 'Home',
    details: {
      heroText: 'AI-Powered Solutions for the Real Estate Market',
      featureList: ['Identifying Operational Constraints', 'Advanced AI Integration', 'In-Depth Analytics and AI Accuracy', 'Continuous Performance Optimization']
    },
    seo: { title: 'AI for Real Estate', description: 'Leverage AI for property sales.' },
    caseStudy: {
      challenge: 'A regional brokerage was drowning in raw leads from Zillow/FB with no efficient way to prioritize them, resulting in a 2-day delay in agent contact.',
      solution: 'We deployed a custom LLM-based lead enrichment agent that instantly scored leads based on intent and financial data.',
      results: [
        'Lead response time cut from 48 hours to 2 minutes',
        'Conversion rate increased by 28%',
        'Agent satisfaction scores reached an all-time high'
      ],
      metrics: [commonMetrics.responseTime, { label: 'Conversion Rate (%)', before: 5, after: 18 }]
    }
  },
  {
    slug: 'property-management',
    title: 'Property Management',
    description: 'Streamline operations.',
    iconKey: 'Building',
    details: {
      heroText: 'Efficient Property Management with AI Automation',
      featureList: ['Tenant Comms', 'Predictive Maintenance', 'Dynamic Pricing', 'Lease Analysis']
    },
    seo: { title: 'AI for Property Management', description: 'Automate tenant interactions.' },
    caseStudy: {
      challenge: 'Property managers were spending 60% of their day responding to routine maintenance status updates and payment queries.',
      solution: 'Implemented a 24/7 AI Voice and SMS assistant that integrates directly with Buildium to handle 90% of routine queries.',
      results: [
        '80% reduction in management overhead',
        'No-wait response time for tenants',
        'Reduced late payments by 15% via automated SMS reminders'
      ],
      metrics: [commonMetrics.efficiency, commonMetrics.costReduction]
    }
  },
  { slug: 'construction', title: 'Construction', description: 'Optimize project management.', iconKey: 'Hammer', details: { heroText: 'Building Smarter with AI', featureList: ['Risk Analysis', 'Site Monitoring', 'Resource Allocation'] }, seo: { title: 'AI for Construction', description: 'Enhance project management.' } },
  { slug: 'concrete', title: 'Concrete', description: 'Enhance production.', iconKey: 'Landmark', details: { heroText: 'Optimizing Concrete Production', featureList: ['Mix Design', 'Quality Control', 'Supply Chain'] }, seo: { title: 'AI for Concrete', description: 'Improve quality and logistics.' } },
  { slug: 'landscaping', title: 'Landscaping', description: 'Efficient scheduling.', iconKey: 'Spade', details: { heroText: 'AI-Driven Efficiency for Landscapers', featureList: ['Route Planning', 'Automated Quoting', 'Plant Health'] }, seo: { title: 'AI for Landscaping', description: 'Grow your business with AI.' } },
  { slug: 'gyms', title: 'Gyms', description: 'Personalized fitness plans.', iconKey: 'Dumbbell', details: { heroText: 'The Future of Fitness: AI for Gyms', featureList: ['Personalized Plans', 'Retention Prediction', 'Schedule Optimization'] }, seo: { title: 'AI for Gyms', description: 'Enhance member experience.' } },
  { slug: 'car-dealerships', title: 'Car Dealerships', description: 'Automated sales funnels.', iconKey: 'Car', details: { heroText: 'Driving Sales with AI for Dealerships', featureList: ['Lead Qualification', 'Dynamic Pricing', 'Marketing Automation'] }, seo: { title: 'AI for Car Dealerships', description: 'Accelerate sales with AI.' } },
  { slug: 'auto-shops', title: 'Auto Shops', description: 'Predictive maintenance.', iconKey: 'Wrench', details: { heroText: 'AI for the Modern Auto Shop', featureList: ['Predictive Alerts', 'Parts Ordering', 'Diagnostics'] }, seo: { title: 'AI for Auto Shops', description: 'Increase efficiency in auto repair.' } },
  { slug: 'restaurants', title: 'Restaurants', description: 'Inventory management.', iconKey: 'Utensils', details: { heroText: 'Smarter Dining: AI for Restaurants', featureList: ['Inventory Management', 'Forecasting', 'Dynamic Pricing'] }, seo: { title: 'AI for Restaurants', description: 'Optimize restaurant operations.' } },
  { slug: 'hotels', title: 'Hotels', description: 'Dynamic pricing.', iconKey: 'Hotel', details: { heroText: 'Revolutionizing Hospitality with AI', featureList: ['Dynamic Pricing', 'Sentiment Analysis', 'Guest Personalization'] }, seo: { title: 'AI for Hotels', description: 'Maximize revenue in hospitality.' } },
  { slug: 'electricians', title: 'Electricians', description: 'Job routing.', iconKey: 'Plug', details: { heroText: 'Efficiency for Electricians with AI', featureList: ['Scheduling', 'Routing', 'Invoicing'] }, seo: { title: 'AI for Electricians', description: 'Streamline electrical contractor work.' } },
  { slug: 'plumbers', title: 'Plumbers', description: 'Smart scheduling.', iconKey: 'ShowerHead', details: { heroText: 'AI Solutions for Plumbers', featureList: ['Dispatching', 'Diagnostics', 'Follow-ups'] }, seo: { title: 'AI for Plumbers', description: 'Improve plumbing business dispatching.' } },
  { slug: 'nurseries', title: 'Nurseries', description: 'Growth monitoring.', iconKey: 'Flower', details: { heroText: 'Cultivating Growth with AI', featureList: ['Health Monitoring', 'Disease Detection', 'Watering Schedules'] }, seo: { title: 'AI for Nurseries', description: 'Enhance plant health monitoring.' } },
  { slug: 'gardening', title: 'Gardening', description: 'AI-powered plant care.', iconKey: 'Grape', details: { heroText: 'The Smart Garden: AI for Gardening', featureList: ['Identification', 'Care Plans', 'Soil Analysis'] }, seo: { title: 'AI for Gardening Services', description: 'Data-driven plant care.' } },
];
export const allSolutions: SolutionData[] = [...services, ...software, ...education, ...resources];
export const solutionsMap: Map<string, SolutionData> = new Map(
  allSolutions.map(s => [`${s.category}/${s.slug}`, s])
);
export const findSolutionBySlug = (category: string, slug: string): SolutionData | undefined => {
  return solutionsMap.get(`${category}/${slug}`);
};
export const findIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(i => i.slug === slug);
};
export const findBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(b => b.slug === slug);
};
export const directories: AIDirectory[] = [
  { rank: 1, name: 'ChatGPT', summary: 'OpenAI\'s conversational AI for various tasks.', fullDesc: 'ChatGPT is a powerful large language model developed by OpenAI, capable of generating human-like text for conversations, code, and creative writing.', category: 'LLM', tags: ['chat', 'code', 'writing'], website: 'https://chat.openai.com' },
  { rank: 2, name: 'Google Gemini', summary: 'Google\'s next-generation multimodal AI model.', fullDesc: 'Gemini is a family of multimodal AI models from Google, designed to understand and operate across text, code, images, and video seamlessly.', category: 'LLM', tags: ['multimodal', 'search', 'google'], website: 'https://gemini.google.com' },
  { rank: 3, name: 'Claude 3', summary: 'Anthropic\'s family of advanced AI models.', fullDesc: 'Claude 3 models (Opus, Sonnet, Haiku) offer a new standard in intelligence, speed, and cost, with advanced vision capabilities.', category: 'LLM', tags: ['chat', 'vision', 'enterprise'], website: 'https://www.anthropic.com/claude' },
  { rank: 4, name: 'Midjourney', summary: 'AI image generator for creating stunning visuals.', fullDesc: 'Midjourney is an independent research lab that produces a proprietary artificial intelligence program that creates images from textual descriptions.', category: 'Image Generation', tags: ['art', 'design', 'image'], website: 'https://www.midjourney.com' },
  { rank: 5, name: 'ElevenLabs', summary: 'AI-powered text-to-speech and voice cloning.', fullDesc: 'ElevenLabs provides the most realistic and versatile AI speech software, enabling creators and publishers to generate high-quality spoken audio in any voice, style, and language.', category: 'Voice', tags: ['tts', 'voice cloning', 'audio'], website: 'https://elevenlabs.io' },
  { rank: 6, name: 'RunwayML', summary: 'A suite of AI magic tools for video creation.', fullDesc: 'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity with tools like Gen-2 for text-to-video.', category: 'Video', tags: ['video generation', 'editing', 'creative'], website: 'https://runwayml.com' },
  { rank: 7, name: 'Perplexity AI', summary: 'An AI-powered answer engine for search.', fullDesc: 'Perplexity AI is a conversational search engine that provides direct answers to questions using large language models, citing sources from the web.', category: 'Search', tags: ['search', 'research', 'answers'], website: 'https://www.perplexity.ai' },
  { rank: 8, name: 'GitHub Copilot', summary: 'Your AI pair programmer from GitHub.', fullDesc: 'GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor, helping you code faster.', category: 'Code', tags: ['development', 'code assistant', 'IDE'], website: 'https://github.com/features/copilot' },
  { rank: 9, name: 'LangChain', summary: 'Framework for developing LLM-powered apps.', fullDesc: 'LangChain is a framework designed to simplify the creation of applications using large language models, providing components for chaining, agents, and memory.', category: 'Agents', tags: ['framework', 'development', 'LLM'], website: 'https://www.langchain.com' },
  { rank: 10, name: 'LlamaIndex', summary: 'A data framework for LLM applications.', fullDesc: 'LlamaIndex provides tools to ingest, structure, and access private or domain-specific data for use with large language models, specializing in RAG.', category: 'Agents', tags: ['RAG', 'data framework', 'LLM'], website: 'https://www.llamaindex.ai' },
];
export const navCategories: NavCategory[] = [
  {
    title: 'Agentic Engineering',
    items: [
      { title: 'Vector & Dependency Graphs', href: '/services/vector-dependency-graphs' },
      { title: 'Orchestration Architecture', href: '/services/orchestration' },
      { title: 'Prompt Engineering', href: '/services/prompt-engineering' },
      { title: 'Context Engineering', href: '/services/context-engineering' },
      { title: 'Knowledge Bases', href: '/services/knowledge-bases' },
    ],
  },
  {
    title: 'Automation & Org',
    items: [
      { title: 'DAGs', href: '/services/dags' },
      { title: 'Airflow & Dagster', href: '/services/airflow-dagster' },
      { title: 'Scripting', href: '/services/scripting' },
      { title: 'Workflows', href: '/services/workflows' },
      { title: 'SOPs', href: '/services/sops' },
    ],
  },
  {
    title: 'Software Dev',
    items: [
      { title: 'CRM', href: '/software/crm' },
      { title: 'B2B SaaS', href: '/software/b2b-saas' },
      { title: 'Internal Tools', href: '/software/internal-tools' },
      { title: 'SEO Tracking', href: '/software/seo-tracking' },
      { title: 'Competitive Intel', href: '/software/competitive-intel' },
    ],
  },
  {
    title: 'Services',
    items: [
      { title: 'Web Design', href: '/services/web-design' },
      { title: 'SEO & GEO Management', href: '/services/seo-geo' },
      { title: 'Social Media Mgmt', href: '/services/social-media' },
      { title: 'Research & Analytics', href: '/services/research-analytics' },
      { title: 'Custom Software', href: '/services/custom-software' },
      { title: 'Data Migration & Optimization', href: '/services/data-migration' },
    ],
  },
  {
    title: 'Education',
    items: [
      { title: 'Open Source', href: '/education/open-source' },
      { title: 'Certifications', href: '/education/certifications' },
      { title: 'Free Courses', href: '/education/free-courses' },
      { title: 'Consulting', href: '/education/consulting' },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    items: [
      { title: 'Tech Directories', href: '/resources/tech-directories' },
      { title: 'AI Tools', href: '/resources/ai-tools' },
      { title: 'Business Directories', href: '/resources/business-directories' },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
    items: [],
  },
  {
    title: 'AI Tools',
    href: '/ai-tools',
    items: directories.slice(0, 6).map(d => ({
      title: d.name,
      href: '/ai-tools',
      description: d.summary,
    })),
  },
];
export const cities: string[] = ['Ashland', 'Medford', 'Grants Pass', 'Klamath Falls', 'Roseburg'];
export const techStack: string[] = ['React', 'Next.js', 'Hono', 'Cloudflare', 'TypeScript', 'Python', 'Docker'];