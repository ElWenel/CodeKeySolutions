"use client";

// import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ExternalLink } from "lucide-react";
import portfolioItems from "../../../placeholder-images.json";

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.portfolio.subtitle}
          </p>
        </ScrollAnimation>
        <div
          className={`mt-10 grid gap-6
            ${portfolioItems.length === 1
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2"}
            md:grid-cols-2 lg:grid-cols-2
            w-full
            px-2 sm:px-0
          `}
          style={{ maxWidth: "100vw" }}
        >
          {portfolioItems.map((item, index) => {
            // Si hay 3 proyectos, el tercero (SpaMed) debe centrarse ocupando ambas columnas en desktop
            if (portfolioItems.length === 3 && index === 2) {
              return (
                <ScrollAnimation
                  key={index}
                  className="animate-fade-in-up col-span-1 sm:col-span-2 flex justify-center"
                >
                  <a
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 block h-full max-w-2xl w-full"
                  >
                    <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 animate-fade-in">
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
                      />
                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>
                    {/* Contenido con animación */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                      <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-8 opacity-0 group-hover:opacity-100">
                        <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200 mb-4">
                          {item.description}
                        </p>
                        <ExternalLink className="h-6 w-6 text-primary mx-auto" />
                      </div>
                    </div>
                    {/* Efecto de borde animado */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg" />
                  </a>
                </ScrollAnimation>
              );
            }
            // Para los demás proyectos
            return (
              <ScrollAnimation key={index} className="animate-fade-in-up">
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 block h-full"
                >
                  <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 animate-fade-in">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
                    />
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>
                  {/* Contenido con animación */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                    <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-8 opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 mb-4">
                        {item.description}
                      </p>
                      <ExternalLink className="h-6 w-6 text-primary mx-auto" />
                    </div>
                  </div>
                  {/* Efecto de borde animado */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-lg" />
                </a>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
