import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { SiInstagram, SiFacebook } from 'react-icons/si';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img
              src="/assets/generated/logo-mark.dim_512x512.png"
              alt="Logo"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">Savory Kitchen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/generated/logo-mark.dim_512x512.png"
                    alt="Logo"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <span className="text-lg font-bold">Savory Kitchen</span>
                </div>
                <Separator />
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Button
                      key={link.path}
                      variant={currentPath === link.path ? 'default' : 'ghost'}
                      onClick={() => handleNavClick(link.path)}
                      className="justify-start text-base"
                    >
                      {link.label}
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/logo-mark.dim_512x512.png"
                  alt="Logo"
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <span className="text-lg font-bold">Savory Kitchen</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Crafting delicious experiences with fresh, locally-sourced ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="link"
                    onClick={() => handleNavClick(link.path)}
                    className="h-auto justify-start p-0 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <SiFacebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <SiInstagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Savory Kitchen. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'savory-kitchen'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
