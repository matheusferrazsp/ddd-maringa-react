import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappUrl =
    "https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

  const drawerContent = (
    <div className={`navbar__mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
      {/* Drawer Header */}
      <div className="navbar__drawer-header">
        <img 
          src="/images/logos/logo.png" 
          alt="Dedetizadora Maringá" 
          className="navbar__drawer-logo"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/logos/logo.svg'; }}
        />
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__drawer-close"
          aria-label="Fechar Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer Nav Links */}
      <nav className="navbar__mobile-nav">
        {[
          { href: "#inicio", label: "Início" },
          { href: "#servicos", label: "Nossos Serviços" },
          { href: "#empresas", label: "Para Empresas (PJ)", highlight: true },
          { href: "#metodologia", label: "Nossa Abordagem" },
          { href: "#depoimentos", label: "Avaliações & Clientes" },
          { href: "#contato", label: "Fale Conosco / Contato" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`navbar__mobile-link-card ${item.highlight ? "highlight" : ""}`}
          >
            <span>{item.label}</span>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </a>
        ))}
      </nav>

      {/* Drawer Bottom Actions */}
      <div className="navbar__mobile-footer">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="btn btn-emerald navbar__mobile-btn"
        >
          <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
          <span>Orçamento no WhatsApp</span>
        </a>

        <a
          href="tel:11940724379"
          onClick={() => setMobileMenuOpen(false)}
          className="btn btn-outline navbar__mobile-btn"
        >
          <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "#00a8ff" }} />
          <span>Ligar Agora: (11) 94072-4379</span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          {/* Logo */}
          <a href="#" className="navbar__logo">
            <img 
              src="/images/logos/logo.png" 
              alt="Dedetizadora Maringá" 
              className={`navbar__logo-img ${scrolled ? 'scrolled' : ''}`}
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/logos/logo.svg'; }}
            />
          </a>

          {/* Desktop Navigation Links - Compact & Non-Wrapping */}
          <nav className="navbar__nav">
            <a href="#inicio" className="navbar__nav-link">
              Início
            </a>
            <a href="#servicos" className="navbar__nav-link">
              Serviços
            </a>
            <a
              href="#empresas"
              className="navbar__nav-link"
              style={{ color: "#00a8ff", fontWeight: 700 }}
            >
              Empresas (PJ)
            </a>
            <a href="#metodologia" className="navbar__nav-link">
              Abordagem
            </a>
            <a href="#depoimentos" className="navbar__nav-link">
              Avaliações
            </a>
            <a href="#contato" className="navbar__nav-link">
              Contato
            </a>
          </nav>

          {/* Desktop CTA Buttons - Sleek & Spacious */}
          <div className="navbar__actions">
            <a href="tel:11940724379" className="navbar__phone">
              <Phone className="w-4 h-4" style={{ color: "#00a8ff" }} />
              <span>(11) 94072-4379</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald navbar__cta-btn"
            >
              <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
              <span>Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__mobile-toggle"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {typeof document !== "undefined" && createPortal(drawerContent, document.body)}
    </>
  );
};
