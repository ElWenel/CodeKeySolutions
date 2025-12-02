"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Check } from "lucide-react";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo con gradiente */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary rounded-full filter blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </ScrollAnimation>
        <ScrollAnimation className="mt-10">
          <Card className="border-2 border-primary/50 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:border-primary transition-all duration-300 overflow-hidden group bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
            {/* Efecto de luz en la esquina */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="relative z-10">
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold mb-4">
                  Special Offer
                </div>
              </div>
              <CardTitle className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t.pricing.price}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {t.pricing.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-left">
                {t.pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center group/item">
                    <div className="mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground/90 group-hover/item:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative z-10">
              <a
                href="https://www.facebook.com/people/Code-Key-Solutions/61584543391242/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-xl hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 font-bold"
                >
                  {t.pricing.cta}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
