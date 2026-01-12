# Leverage — Agency Hub (LEVERAGEAI LLC)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mikeschlottig/leverage-agency-hub-leverageai-llc)

Leverage is a production-ready, design-forward React Single Page Application (SPA) and marketing hub for LEVERAGEAI LLC, a Premier AI Agency in Southern Oregon. Built using the StoryBrand Framework, it serves as a central business hub designed to convert visitors while showcasing technical excellence for Enterprise clients. The architecture is "Docusaurus-Ready," emphasizing strict separation of data, types, and logic to enable future migration to a Static Site Generator (SSG).

This config-driven application centralizes marketing content, services, industries, and resources, powered by a single data file (`data.ts`) and clean TypeScript contracts. It features a dark-mode default theme, mega-menu navigation, dynamic solution pages, and polished interactive elements for an exceptional user experience.

## Features

- **Config-Driven UI**: All content (navigation, services, industries, resources, SEO metadata) is managed in `src/data.ts` for easy maintenance and scalability without touching UI code.
- **Dynamic Routing**: Centralized routes for home, services (`/services/:slug`), industries (`/industries/:slug`), resources (`/resources/:slug`), software (`/software/:slug`), and education (`/education/:slug`) pages, supporting 50+ entries via a single intelligent template.
- **Mega Menu Navigation**: Responsive header with hover-activated multi-column dropdowns for categories like Agentic Engineering, Automation & Org, Software Dev, Services, Education, and Industries. Mobile support via nested accordions in a Sheet drawer.
- **Solution Template**: Intelligent page builder (`pages/SolutionTemplate.tsx`) that dynamically renders hero sections, breadcrumbs, feature lists, technical specs, icons (via lucide-react), and CTAs based on URL slugs and data entries.
- **Visual Excellence**: Minimalist glassmorphism design with high contrast, subtle gradients, and micro-interactions (framer-motion). Dark mode by default, with theme toggle persisted via localStorage.
- **SEO Optimization**: Dynamic meta tags via `react-helmet-async`, pulled from data configurations.
- **Responsive & Accessible**: Mobile-first layouts using Tailwind CSS, shadcn/ui primitives, and Radix for keyboard navigation and ARIA compliance.
- **State Management**: Lightweight Zustand store for theme and mobile menu state.
- **Docusaurus-Ready**: Decoupled data/types enable easy SSG migration; static content exportable to Markdown frontmatter.

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript (strict mode)
- **Routing**: react-router-dom v6+
- **Styling**: Tailwind CSS v3 (with custom theme extensions for Leverage colors: brand-purple `#8b5cf6`, brand-accent `#14b8a6`, brand-dark `#0f172a`)
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Icons**: lucide-react
- **State Management**: Zustand (for theme and menu persistence)
- **Animations**: framer-motion
- **SEO**: react-helmet-async
- **Build Tool**: Vite (for fast development and bundling)
- **Deployment**: Cloudflare Workers/Pages (static assets with optional edge routing)
- **Utilities**: clsx, tailwind-merge, sonner (toasts), @tanstack/react-query (optional data fetching), recharts (charts)
- **Backend (Optional)**: Hono for API routes in Cloudflare Workers

## Quick Start

### Prerequisites

- Node.js 18+ (or Bun 1.0+ for faster setup)
- Bun package manager (recommended for installation)
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd leverageai-hub
   ```

2. Install dependencies using Bun:
   ```
   bun install
   ```

3. (Optional) Generate TypeScript types for Cloudflare Workers:
   ```
   bun run cf-typegen
   ```

### Development

Start the development server:
```
bun run dev
```

The app will be available at `http://localhost:3000` (or the port specified in your environment). It supports hot module replacement (HMR) for rapid iteration.

- **Theme Toggle**: Click the sun/moon icon in the header to switch between light and dark modes (persisted in localStorage).
- **Mobile Testing**: Use browser dev tools to simulate mobile devices; the mega menu collapses to a responsive Sheet.
- **Data Customization**: Edit `src/data.ts` to modify content, navigation, or add new entries. Routes and pages update automatically.

### Build and Preview

Build the production bundle:
```
bun run build
```

Preview the built app locally:
```
bun run preview
```

The output is in `dist/` and optimized for static hosting.

## Usage

### Core Components

- **Home Page (`/`)**: Features a hero section with StoryBrand copy, tech stack strip (Southern Oregon cities + OSS tech), value proposition, interactive industries grid (click to modal), solutions grid, and CTAs.
- **Header**: Sticky navigation with mega menus. Hover over categories (e.g., "Industries") for grid previews; mobile uses hamburger menu with accordions.
- **Dynamic Pages**: Navigate to `/services/vector-dependency-graphs` or similar; the `SolutionTemplate` renders slug-specific content (hero, features, specs, icon) from `data.ts`.
- **Footer**: 4-column layout with links, social icons, and newsletter signup (mocked).

### Examples

- **Adding a New Service**: In `src/data.ts`, add to `solutionsByCategory`:
  ```typescript
  {
    slug: 'new-service',
    title: 'New Service',
    category: 'services',
    icon: 'Database', // lucide-react icon key
    heroText: 'Description...',
    featureList: ['Feature 1', 'Feature 2'],
    technicalSpecs: ['Tool A', 'Tool B'],
    seo: { title: 'SEO Title', description: 'Meta desc' }
  }
  ```
  This auto-generates a route `/services/new-service`.

- **Customizing Navigation**: Update `navCategories` in `data.ts` to add/modify dropdowns.

- **Theme Integration**: The app defaults to dark mode. Use the Zustand store in `src/store.ts` for custom state extensions.

For full API documentation, refer to the inline types in `src/types.ts` and component props.

## Deployment

Deploy to Cloudflare Workers/Pages for global edge distribution:

1. Ensure your Cloudflare account is set up with Wrangler CLI:
   ```
   bun add -g wrangler
   wrangler login
   ```

2. Configure your project in `wrangler.toml` (pre-configured for static SPA handling).

3. Build and deploy:
   ```
   bun run build
   bun run deploy
   ```

The app will be live at your Cloudflare Workers URL. Static assets are served efficiently, with API routes (`/api/*`) handled by the edge worker.

For custom domains or advanced setup:
- Update `wrangler.toml` with your account ID and routes.
- Use `wrangler pages deploy dist` for Pages hosting if needed.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/mikeschlottig/leverage-agency-hub-leverageai-llc)

## Contributing

Contributions are welcome! Please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Ensure code follows TypeScript strict mode, ESLint rules, and maintains the config-driven architecture. Run `bun run lint` before submitting.

## License

This project is proprietary to LEVERAGEAI LLC. For licensing details, contact info@leverageai.com.