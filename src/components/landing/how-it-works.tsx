"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { ScrollAnimation } from "@/components/scroll-animation";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.howItWorks.subtitle}
          </p>
        </ScrollAnimation>
        <div className="relative mt-16">
          {/* Línea animada de fondo */}
          <div className="absolute left-1/2 top-0 -ml-px h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 transform -translate-x-1/2" />

          {t.howItWorks.steps.map((step, index) => (
            <ScrollAnimation key={index} className="mb-16 relative">
              <div className="flex flex-col items-center">
                {/* Número del paso con efecto de brillo */}
                <div className="relative z-10 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-xl shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-110">
                    {step.number}
                  </div>
                </div>

                {/* Contenido del paso */}
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mt-4 mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Conector hacia el siguiente paso */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="mt-8 flex items-center gap-2 text-primary/40">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
