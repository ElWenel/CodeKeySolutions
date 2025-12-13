"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollAnimation } from "@/components/scroll-animation";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </ScrollAnimation>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-0">
          {t.testimonials.items.map((item, index) => (
            <ScrollAnimation key={index} className="animate-fade-in-up">
              <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/30 hover:border-primary/70 shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group overflow-hidden">
                {/* Efecto de luz en la esquina */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-4 sm:p-6 relative z-10">
                  {/* Rating visual */}
                  <div className="mb-4 flex justify-center gap-1">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full bg-primary/60"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Comilla */}
                  <div className="mb-4 text-3xl sm:text-4xl text-primary/30 font-light">
                    "
                  </div>

                  <p className="italic text-foreground/90 mb-4 sm:mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                    {item.quote}
                  </p>

                  <div className="mt-4 sm:mt-6 flex items-center justify-center pt-4 sm:pt-6 border-t border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <Avatar className="h-12 w-12 border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${item.author}`}
                        alt={item.author}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                        {item.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3 sm:ml-4 text-left">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                        {item.author}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
