import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

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
    "https://wa.me/+5511940724379?text=Ol%C3%A1%21%20Vi%20o%20an%C3%BAncio%20e%20preciso%20de%20um%20or%C3%A7amento%20r%C3%A1pido.%20Podem%20me%20ajudar%3F";

  const drawerContent = (
    <div className={`navbar__mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
      {/* Drawer Header */}
      <div className="navbar__drawer-header">
        <img
          src="/images/logos/logo.webp"
          alt="Dedetizadora Maringá"
          className="navbar__drawer-logo"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/logos/logo.png";
          }}
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
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__mobile-link-card"
        >
          <span>Início</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </Link>

        <Link
          to="/sobre"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__mobile-link-card"
        >
          <span>Sobre Nós</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </Link>

        {/* Submenu Nossos Serviços (Mobile) */}
        <div className="navbar__mobile-submenu-group">
          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="navbar__mobile-link-card navbar__mobile-submenu-trigger"
            aria-expanded={mobileServicesOpen}
          >
            <span>Nossos Serviços</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="navbar__mobile-submenu-list">
              <Link
                to="/servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="navbar__mobile-sublink"
              >
                <span>Visão Geral de Serviços</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to="/descupinizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="navbar__mobile-sublink"
              >
                <span>Descupinização</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/empresas"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__mobile-link-card highlight"
        >
          <span>Para Empresas (PJ)</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </Link>

        <Link
          to="/blog"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__mobile-link-card"
        >
          <span>Blog & Dicas</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </Link>

        <Link
          to="/contato"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__mobile-link-card"
        >
          <span>Fale Conosco / Contato</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </Link>
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
          <img
            src="/images/logos/whatsapp-white.svg"
            alt="WhatsApp"
            className="w-4 h-4 flex-shrink-0 object-contain"
          />
          <span>Falar no WhatsApp</span>
        </a>

        <a
          href="tel:11940724379"
          onClick={() => setMobileMenuOpen(false)}
          className="btn btn-outline navbar__mobile-btn"
        >
          <Phone
            className="w-5 h-5 flex-shrink-0"
            style={{ color: "#00a8ff" }}
          />
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
          <Link to="/" className="navbar__logo">
            <img
              src="/images/logos/logo.webp"
              alt="Dedetizadora Maringá"
              className={`navbar__logo-img ${scrolled ? "scrolled" : ""}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/logos/logo.png";
              }}
            />
          </Link>

          {/* Desktop Navigation Links - Compact & Non-Wrapping */}
          <nav className="navbar__nav">
            <Link to="/" className="navbar__nav-link">
              Início
            </Link>
            <Link to="/sobre" className="navbar__nav-link">
              Sobre Nós
            </Link>

            {/* Submenu Serviços (Desktop) */}
            <div
              className="navbar__dropdown"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <Link
                to="/servicos"
                className="navbar__nav-link navbar__dropdown-trigger"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`navbar__dropdown-menu ${
                  desktopServicesOpen ? "open" : ""
                }`}
                role="menu"
              >
                <Link
                  to="/servicos"
                  className="navbar__dropdown-item"
                  role="menuitem"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  <span className="navbar__dropdown-item-title">
                    Todos os Serviços
                  </span>
                  <span className="navbar__dropdown-item-desc">
                    Visão geral de controle de pragas e desentupimento
                  </span>
                </Link>
                <Link
                  to="/descupinizacao"
                  className="navbar__dropdown-item"
                  role="menuitem"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  <span className="navbar__dropdown-item-title">
                    Descupinização
                  </span>
                  <span className="navbar__dropdown-item-desc">
                    Tratamento de cupim de madeira seca e cupim de solo
                  </span>
                </Link>
              </div>
            </div>

            <Link to="/empresas" className="navbar__nav-link--b2b">
              Empresas (PJ)
            </Link>
            <Link to="/blog" className="navbar__nav-link">
              Blog
            </Link>
            <Link to="/contato" className="navbar__nav-link">
              Contato
            </Link>
          </nav>

          {/* Desktop CTA Buttons - Sleek & Spacious */}
          <div className="navbar__actions">
            <a href="tel:11940724379" className="navbar__phone">
              <Phone className="w-4 h-4" style={{ color: "#0284c7" }} />
              <span>(11) 94072-4379</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald navbar__cta-btn"
            >
              <img
                src="/images/logos/whatsapp-white.svg"
                alt="WhatsApp"
                className="w-4 h-4 flex-shrink-0 object-contain"
              />
              <span>Falar no WhatsApp</span>
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

      {typeof document !== "undefined" &&
        createPortal(drawerContent, document.body)}
    </>
  );
};
