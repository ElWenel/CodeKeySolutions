import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Portfolio } from "@/components/landing/portfolio";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { BinaryRain } from "@/components/binary-rain";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BinaryRain />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
