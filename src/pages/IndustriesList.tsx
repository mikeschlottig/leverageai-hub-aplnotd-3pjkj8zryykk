import React from 'react';
import { IndustriesGrid } from '@/components/IndustriesGrid';
export function IndustriesList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <IndustriesGrid />
      </div>
    </div>
  );
}