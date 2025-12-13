"use client";

import { useLanguage } from "@/components/providers/language-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "@/components/scroll-animation";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10 px-2 sm:px-0">
        <ScrollAnimation className="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </ScrollAnimation>
        <ScrollAnimation className="mt-10 text-left animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {t.faq.items.map((item, index) => (
              <div key={index} className="group">
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg px-4 hover:border-primary/50 bg-card/50 hover:bg-card/80 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="hover:text-primary transition-colors duration-300 hover:no-underline py-4">
                    <span className="text-left font-semibold">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pt-2 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
}
