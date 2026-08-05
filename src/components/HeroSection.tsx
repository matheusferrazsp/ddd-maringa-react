import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  PhoneCall,
  Award,
  Clock,
  ShieldAlert,
  MapPin,
} from "lucide-react";


export const HeroSection: React.FC = () => {
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      if (bgGlowRef.current) {
        bgGlowRef.current.style.transform = `translate(${xPos * 2}px, ${yPos * 2}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const whatsappUrl =
    "https://wa.me/+5511940724379?text=Ol%C3%A1%21%20Vi%20o%20an%C3%BAncio%20e%20preciso%20de%20um%20or%C3%A7amento%20r%C3%A1pido.%20Podem%20me%20ajudar%3F";

  return (
    <section id="inicio" className="hero">
      {/* Background Glows */}
      <div
        ref={bgGlowRef}
        className="hero__bg-glow-1"
        style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
      />
      <div className="hero__bg-glow-2" />

      <div className="container relative z-10">
        <div className="hero__layout">
          {/* Left Column: Text & CTA */}
          <div className="hero__content hero-animate-slide-up">
            {/* Badge */}
            <div className="hero__badge">
              
              <span className="hero__badge-text">
                Plantão 24h em São Paulo e Região
              </span>
            </div>

            {/* Main Title Static */}
            <h1 className="hero__title">
              Dedetizadora e Desentupidora<br />
              <span className="hero__highlight" style={{ color: "#0284c7" }}>
                Maringá
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero__subtitle">
              Atendimento rápido e certificado em toda Grande São Paulo.
              Soluções seguras de dedetização e desentupimento com laudo técnico
              ANVISA e garantia real para residências e empresas.
            </p>

            {/* CTA Buttons */}
            <div className="hero__buttons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald hero__cta-btn"
              >
                <img
                  src="/images/logos/whatsapp-white.svg"
                  alt="WhatsApp"
                  className="w-4 h-4 flex-shrink-0 object-contain"
                />
                <span>Visita técnica gratuita</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>

              <a
                href="tel:11940724379"
                className="btn btn-outline hero__cta-btn"
              >
                <PhoneCall
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#0284c7" }}
                />
                <span>Urgência? Ligue: (11) 94072-4379</span>
              </a>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              <span className="pulse-dot" style={{ backgroundColor: "var(--accent-emerald)", width: "8px", height: "8px" }}></span>
              <span>Resposta no WhatsApp em até <strong>5 minutos</strong></span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Transparent/Unboxed Image */}
          <div className="hero__visual hero-animate-fade-up-delayed">
            <img
              src="/images/hero/hero-1.webp"
              alt="Equipe técnica e serviços de dedetização e desentupidora na Grande São Paulo"
              className="hero__visual-img"
              width="600"
              height="600"
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating Trust Badge */}
            <div className="hero__visual-badge-1">
              <span
                className="pulse-dot flex-shrink-0"
                style={{ backgroundColor: "#10b981" }}
              ></span>
              <span className="hero__visual-badge-text">
                Equipes de Plantão em SP
              </span>
            </div>
          </div>
        </div>

        {/* Key Trust Stats Grid below */}
        <div className="hero__stats-grid hero-animate-fade-up-stats">
          <div className="hero__stat-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#0284c7",
              }}
            >
              <Clock className="w-4 h-4" />
              <span className="hero__stat-num">Plantão 24h</span>
            </div>
            <span className="hero__stat-label">Atendimento imediato em SP</span>
          </div>

          <div className="hero__stat-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#0284c7",
              }}
            >
              <ShieldAlert className="w-4 h-4" />
              <span className="hero__stat-num">Laudo ANVISA</span>
            </div>
            <span className="hero__stat-label">
              Certificado e garantia legal
            </span>
          </div>

          <div className="hero__stat-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#0284c7",
              }}
            >
              <Award className="w-4 h-4" />
              <span className="hero__stat-num">Frota Própria</span>
            </div>
            <span className="hero__stat-label">
              Equipamentos modernos e seguros
            </span>
          </div>

          <div className="hero__stat-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#0284c7",
              }}
            >
              <MapPin className="w-4 h-4" />
              <span className="hero__stat-num">Grande SP</span>
            </div>
            <span className="hero__stat-label">
              Equipes em todas as regiões
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
