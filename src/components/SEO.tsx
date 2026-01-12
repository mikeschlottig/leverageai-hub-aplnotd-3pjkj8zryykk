import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoDefaults } from '@/data';
import type { SEOData } from '@/types';
interface SEOProps {
  data: SEOData;
}
export function SEO({ data }: SEOProps): JSX.Element {
  const location = useLocation();
  // Merge passed data with defaults to ensure all fields are populated
  const { title, description, ogImage } = { ...seoDefaults, ...data };
  const fullTitle = title === seoDefaults.title ? title : `${title} — LEVERAGEAI LLC`;
  const canonicalUrl = `https://leverageai.com${location.pathname}`;
  // Assuming ogImage in data.ts is a relative path like '/og-image.png'
  const finalOgImage = `https://leverageai.com${ogImage}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="LEVERAGEAI LLC" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
    </Helmet>
  );
}