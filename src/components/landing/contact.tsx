"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-2xl">
        <ScrollAnimation className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </ScrollAnimation>
        <ScrollAnimation className="mt-10">
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.title}</CardTitle>
              <CardDescription>{t.contact.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center">
                <p className="text-foreground/80">
                  Conecta con nosotros directamente en nuestras redes sociales
                  para más información sobre nuestros servicios.
                </p>
                <a
                  href="https://www.facebook.com/people/Code-Key-Solutions/61584543391242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-base font-semibold">
                    {t.contact.cta}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
