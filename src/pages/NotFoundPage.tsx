import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
export default function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold">Page Not Found</p>
        <p className="mt-2 max-w-md text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8 btn-gradient">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Go back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}