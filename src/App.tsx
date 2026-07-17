import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { CorporateSection } from "./components/CorporateSection";
import { ParallaxBanner } from "./components/ParallaxBanner";
import { HowWeWork } from "./components/HowWeWork";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 relative overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <ServicesSection />
        <CorporateSection />
        <ParallaxBanner />
        <HowWeWork />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
