import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Github, Twitter, Linkedin } from 'lucide-react';
import { navCategories } from '@/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
export function Footer() {
  const footerLinkCategories = navCategories.filter(c => c.items.length > 0 && !c.isMegaMenu).slice(0, 3);
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    toast.success('Subscribed!', {
      description: `Thank you, ${email}. You've been added to our newsletter.`,
    });
    event.currentTarget.reset();
  };
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Lightbulb className="h-8 w-8 text-brand-purple" />
              <span>LEVERAGE</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premier AI Agency in Southern Oregon. We identify constraints and remove them with enterprise-grade AI solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
          {footerLinkCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.slice(0, 5).map((item) => {
                  if ('href' in item) {
                    return (
                      <li key={item.title}>
                        <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                          {item.title}
                        </Link>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1">
             <Card className="glass">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>Stay updated with AI insights.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="footer-email" className="sr-only">Email</Label>
                      <Input id="footer-email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <Button type="submit" className="w-full btn-gradient">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
          </div>
        </div>
        <Separator />
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LEVERAGEAI LLC. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}