"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/10 border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      {/* Línea de gradiente en la parte superior cuando está scrolleado */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      )}

      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-primary relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-400" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="https://www.facebook.com/people/Code-Key-Solutions/61584543391242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              {t.nav.cta}
            </Button>
          </a>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <LanguageToggle />
                  <a
                    href="https://www.facebook.com/people/Code-Key-Solutions/61584543391242/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                      {t.nav.cta}
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
