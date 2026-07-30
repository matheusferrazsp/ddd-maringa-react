import React, { Suspense } from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutUs } from "../components/AboutUs";
import { ServicesSection } from "../components/ServicesSection";
import { HowWeWork } from "../components/HowWeWork";
import { ParallaxBanner } from "../components/ParallaxBanner";
import { TestimonialsSection } from "../components/TestimonialsSection";

export const HomePage: React.FC = () => {
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
