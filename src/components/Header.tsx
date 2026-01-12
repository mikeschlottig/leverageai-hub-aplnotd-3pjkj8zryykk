import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from 'next-themes';
import {
  Menu, X, Sun, Moon, Lightbulb, ArrowRight,
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, BookOpen, Shield, Wrench, Home, Landmark, Hammer, Spade, Dumbbell, Car, Utensils, Hotel, Plug, ShowerHead, Flower, Grape
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useMobileMenuStore } from '@/store';
import { navCategories } from '@/data';
import type { IconKey } from '@/types';
import { ContactSheet } from '@/components/ContactSheet';
const iconMap: Record<IconKey, React.ElementType> = {
  Bot, BrainCircuit, Database, GitGraph, PenTool, BarChart, Code, Workflow, FileText, Search, Users, Building, Briefcase, Lightbulb, BookOpen, Shield, Server: Database, Cpu: BrainCircuit, GitCommit: GitGraph, Settings: Wrench, Globe: Users, Home, Landmark, Hammer, Spade, Dumbbell, Car, Wrench, Utensils, Hotel, Plug, ShowerHead, Flower, Grape, ArrowRight
};
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobileMenuOpen = useMobileMenuStore((s) => s.isOpen);
  const toggleMobileMenu = useMobileMenuStore((s) => s.toggle);
  const closeMobileMenu = useMobileMenuStore((s) => s.close);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Lightbulb className="h-8 w-8 text-brand-purple" />
              <span>LEVERAGE</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navCategories.map((category) => {
                  const hasItems = category.items && category.items.length > 0;
                  if (hasItems) {
                    return (
                      <NavigationMenuItem key={category.title}>
                        <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={cn(
                            "p-4 grid gap-3 md:w-[400px] lg:w-[500px]",
                            category.isMegaMenu && `lg:w-[600px] ${category.columns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`
                          )}>
                            {category.href && (
                              <ListItem 
                                to={category.href} 
                                title={`View All ${category.title}`} 
                                icon="ArrowRight" 
                                className="bg-brand-purple/5 border-brand-purple/20"
                              />
                            )}
                            {category.items.map((item) => {
                              if ('links' in item) {
                                return (
                                  <li key={item.title} className="flex flex-col space-y-2">
                                    <h3 className="font-semibold text-foreground px-3 pt-2">{item.title}</h3>
                                    {item.links.map(link => <ListItem key={link.title} to={link.href} title={link.title} icon={link.icon} />)}
                                  </li>
                                );
                              }
                              return <ListItem key={item.title} to={item.href} title={item.title} icon={item.icon} description={item.description} />;
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={category.title}>
                      <NavigationMenuLink asChild>
                        <NavLink to={category.href || '#'} className={navigationMenuTriggerStyle()}>
                          {category.title}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden lg:flex items-center gap-2">
              <Button onClick={handleThemeToggle} variant="ghost" size="icon">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button className="btn-gradient" onClick={() => setIsContactOpen(true)}>
                Get Consultation
              </Button>
            </div>
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-3/4 bg-background p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                       <Link to="/" className="flex items-center gap-2 text-xl font-bold" onClick={closeMobileMenu}>
                          <Lightbulb className="h-7 w-7 text-brand-purple" />
                          <span>LEVERAGE</span>
                        </Link>
                      <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                      <Accordion type="multiple" className="w-full">
                        {navCategories.map((category) => (
                          <AccordionItem value={category.title} key={category.title}>
                            {category.items && category.items.length > 0 ? (
                              <>
                                <AccordionTrigger className="text-lg">{category.title}</AccordionTrigger>
                                <AccordionContent>
                                  <div className="pl-4 flex flex-col space-y-2 pb-2">
                                    {category.href && (
                                      <MobileNavLink to={category.href} title={`Overview: ${category.title}`} onClick={closeMobileMenu} className="text-brand-purple font-medium" />
                                    )}
                                    {category.items.map((item) => {
                                      if ('links' in item) {
                                        return (
                                          <div key={item.title} className="mt-2">
                                            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.title}</h4>
                                            <div className="pl-2 flex flex-col space-y-2">
                                              {item.links.map(link => <MobileNavLink key={link.title} to={link.href} title={link.title} onClick={closeMobileMenu} />)}
                                            </div>
                                          </div>
                                        );
                                      }
                                      return <MobileNavLink key={item.title} to={item.href} title={item.title} onClick={closeMobileMenu} />;
                                    })}
                                  </div>
                                </AccordionContent>
                              </>
                            ) : (
                              <div className="py-4 border-b">
                                <MobileNavLink isTopLevel to={category.href || '#'} title={category.title} onClick={closeMobileMenu} />
                              </div>
                            )}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                    <div className="p-4 border-t space-y-4">
                      <Button className="w-full btn-gradient" onClick={() => { setIsContactOpen(true); closeMobileMenu(); }}>
                        Get Consultation
                      </Button>
                      <Button onClick={handleThemeToggle} variant="outline" className="w-full">
                        {theme === 'dark' ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />}
                        Switch Theme
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <ContactSheet open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: string, description?: string }
>(({ className, title, children, to, icon, description, ...props }, ref) => {
  const IconComponent = icon && (iconMap[icon as IconKey] || Bot);
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {IconComponent && <IconComponent className="h-4 w-4 text-brand-purple" />}
            <div className="text-sm font-semibold leading-none">{title}</div>
          </div>
          {description && (
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
const MobileNavLink = ({ to, title, onClick, isTopLevel = false, className }: { to: string; title: string; onClick: () => void; isTopLevel?: boolean; className?: string }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      cn(
        "block py-2 text-muted-foreground hover:text-foreground transition-colors",
        isTopLevel && "text-lg font-medium text-foreground",
        isActive && "text-brand-purple font-semibold",
        className
      )
    }
  >
    {title}
  </NavLink>
);