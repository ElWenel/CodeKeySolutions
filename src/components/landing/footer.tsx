"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-background via-background/80 to-background/50 py-10 border-t border-primary/20">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row relative z-10">
        <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
          <Logo />
        </div>

        <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
          {t.footer.copyright}
        </p>

        {/* Elemento decorativo animado */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      </div>
    </footer>
  );
}
