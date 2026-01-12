import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import React, { lazy, Suspense } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'next-themes';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '@/index.css';
import { App } from '@/App';
const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const SolutionTemplate = lazy(() => import('@/pages/SolutionTemplate').then(m => ({ default: m.SolutionTemplate })));
const IndustriesTemplate = lazy(() => import('@/pages/IndustriesTemplate').then(m => ({ default: m.IndustriesTemplate })));
const ServicesList = lazy(() => import('@/pages/ServicesList').then(m => ({ default: m.ServicesList })));
const IndustriesList = lazy(() => import('@/pages/IndustriesList').then(m => ({ default: m.IndustriesList })));
const ResourcesList = lazy(() => import('@/pages/ResourcesList').then(m => ({ default: m.ResourcesList })));
const SoftwareList = lazy(() => import('@/pages/SoftwareList').then(m => ({ default: m.SoftwareList })));
const EducationList = lazy(() => import('@/pages/EducationList').then(m => ({ default: m.EducationList })));
const AITools = lazy(() => import('@/pages/AITools').then(m => ({ default: m.default })));
const BlogList = lazy(() => import('@/pages/BlogList').then(m => ({ default: m.BlogList })));
const BlogPost = lazy(() => import('@/pages/BlogPost').then(m => ({ default: m.BlogPost })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(module => ({ default: module.default })));
const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <NotFoundPage />,
  children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <ServicesList /> },
      { path: "/industries", element: <IndustriesList /> },
      { path: "/industries/:slug", element: <IndustriesTemplate /> },
      { path: "/resources", element: <ResourcesList /> },
      { path: "/software", element: <SoftwareList /> },
      { path: "/education", element: <EducationList /> },
      { path: "/ai-tools", element: <AITools /> },
      { path: "/blog", element: <BlogList /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/:category/:slug", element: <SolutionTemplate /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed to find the root element");
let root: Root | null = null;
// HMR-safe root creation
if (import.meta.hot) {
  const hotRoot = (import.meta.hot.data as { root?: Root }).root;
  if (hotRoot) {
    root = hotRoot;
  }
  import.meta.hot.dispose((data) => {
    data.root = root;
  });
}
if (!root) {
  root = createRoot(rootElement);
}
root.render(
  <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>,
);