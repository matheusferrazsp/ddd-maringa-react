import React, { Suspense, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

const ServicesSection = lazy(() =>
  import("./components/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const CorporateSection = lazy(() =>
  import("./components/CorporateSection").then((m) => ({ default: m.CorporateSection }))
);
const ParallaxBanner = lazy(() =>
  import("./components/ParallaxBanner").then((m) => ({ default: m.ParallaxBanner }))
);
const HowWeWork = lazy(() =>
  import("./components/HowWeWork").then((m) => ({ default: m.HowWeWork }))
);
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection }))
);
const ContactSection = lazy(() =>
  import("./components/ContactSection").then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = lazy(() =>
  import("./components/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp }))
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 relative overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <ServicesSection />
          <CorporateSection />
          <ParallaxBanner />
          <HowWeWork />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};

export default App;
