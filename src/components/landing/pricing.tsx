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

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </ScrollAnimation>
        <ScrollAnimation className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, idx) => (
              <Card
                key={plan.name}
                className={`border-2 shadow-2xl transition-all duration-300 overflow-hidden group bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm ${
                  plan.mostPopular
                    ? "border-primary/80 shadow-primary/40 scale-105 z-10"
                    : "border-primary/30 shadow-primary/20"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  {plan.mostPopular && (
                    <div className="mb-2">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-semibold mb-2">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-extrabold mt-2 mb-2 text-primary">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center group/item">
                        <div className="mr-2 flex-shrink-0">
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
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
