"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative h-[70vh] min-h-[350px] sm:h-[80vh] sm:min-h-[500px] w-full overflow-hidden bg-cover bg-center px-2 sm:px-0"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      {/* Fondo con gradiente y overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Elementos decorativos animados */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-2 sm:px-4">
        <ScrollAnimation className="animate-fade-in-up">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation className="mt-6 animate-fade-in-up">
          <p className="max-w-2xl text-base sm:text-lg text-gray-200 md:text-xl drop-shadow-lg">
            {t.hero.subtitle}
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mt-10 animate-fade-in-up">
          <a
            href="https://www.facebook.com/people/Code-Key-Solutions/61584543391242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 transform hover:scale-110"
            >
              {t.hero.cta}
            </Button>
          </a>
        </ScrollAnimation>
      </div>

      {/* Línea animada en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
}
