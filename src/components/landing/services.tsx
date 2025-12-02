"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";

export function Services() {
  const { t } = useLanguage();

  const colors = [
    {
      bg: "bg-blue-500/20",
      border: "border-blue-400/50",
      icon: "text-blue-400",
    },
    {
      bg: "bg-purple-500/20",
      border: "border-purple-400/50",
      icon: "text-purple-400",
    },
    {
      bg: "bg-pink-500/20",
      border: "border-pink-400/50",
      icon: "text-pink-400",
    },
    {
      bg: "bg-cyan-500/20",
      border: "border-cyan-400/50",
      icon: "text-cyan-400",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </ScrollAnimation>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, index) => {
            const color = colors[index % colors.length];
            return (
              <ScrollAnimation
                key={index}
                className="transform transition-all duration-300 hover:-translate-y-4 hover:scale-105"
              >
                <Card
                  className={`h-full border-2 ${color.border} ${color.bg} hover:shadow-2xl hover:shadow-primary/20 bg-card/80 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-10">
                    <div
                      className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${color.bg} ${color.icon} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <item.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
