import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const CorporatePage = lazy(() => import("./pages/CorporatePage").then((m) => ({ default: m.CorporatePage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));

const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 relative overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="flex-grow overflow-x-hidden w-full max-w-full">
          <Suspense fallback={<div className="min-h-[300px]" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              <Route path="/empresas" element={<CorporatePage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
