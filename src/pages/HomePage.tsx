import React, { Suspense } from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import { ServicesSection } from "../components/ServicesSection";
import { HowWeWork } from "../components/HowWeWork";
import { ParallaxBanner } from "../components/ParallaxBanner";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { usePageSEO } from "../utils/seo";

export const HomePage: React.FC = () => {
  usePageSEO({
    title: "Dedetizadora e Desentupidora em SP | Plantão 24h | (11) 94072-4379",
    description:
      "Dedetização e Desentupimento 24h em SP e região. Garantia técnica, orçamento grátis e atendimento imediato. Ligue ou WhatsApp: (11) 94072-4379.",
    canonical: "https://dedetizadoramaringa.com.br/",
  });

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <AboutUs />
        <ServicesSection />
        <ParallaxBanner />
        <HowWeWork />
        <TestimonialsSection />
      </Suspense>
    </>
  );
};
