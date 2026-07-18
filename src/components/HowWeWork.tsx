import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, ShieldAlert, Sparkles } from "lucide-react";
import { useAutoScrollCarousel } from "../hooks/useAutoScrollCarousel";

gsap.registerPlugin(ScrollTrigger);

export const HowWeWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useAutoScrollCarousel(stepsRef, 3800);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stepsRef.current?.children) {
        gsap.fromTo(
          Array.from(stepsRef.current.children),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: "01",
      title: "Agendamento e Visita Imediata",
      description:
        "Agendamos a visita sem compromisso no local desejado (residência, condomínio ou empresa). Nossos técnicos avaliam a situação e passam o orçamento transparente na hora.",
      icon: <ClipboardCheck className="w-8 h-8" style={{ color: "var(--accent-cyan)" }} />,
    },
    {
      step: "02",
      title: "Aplicação Segura e Eficiente",
      description:
        "Realizamos o controle de pragas ou desentupimento com equipamentos modernos e produtos autorizados, sem cheiro forte, sem quebrar pisos e com total segurança.",
      icon: <ShieldAlert className="w-8 h-8" style={{ color: "var(--accent-cyan)" }} />,
    },
    {
      step: "03",
      title: "Prevenção, Laudo e Garantia",
      description:
        "Entregamos laudo técnico e certificado de garantia legal. Orientamos sobre medidas preventivas para manter o ambiente protegido contra novos entupimentos ou infestações.",
      icon: <Sparkles className="w-8 h-8" style={{ color: "var(--accent-emerald)" }} />,
    },
  ];

  return (
    <section ref={sectionRef} id="metodologia" className="how-we-work">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nossa Metodologia & Abordagem</span>
          <h2 className="section-title">
            Saiba Como <span style={{ color: "var(--accent-cyan)" }}>Trabalhamos</span>
          </h2>
          <p className="section-subtitle">
            Um processo simples, ágil e certificado para resolver o problema e garantir a tranquilidade do seu imóvel.
          </p>
        </div>

        <div ref={stepsRef} className="timeline__grid">
          {/* Connecting Line for Desktop */}
          <div className="timeline__connector" />

          {steps.map((item, index) => (
            <div key={index} className="timeline-step">
              <div className="timeline-step__number">{item.step}</div>

              <h3 className="timeline-step__title">{item.title}</h3>

              <p className="timeline-step__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Real Field Operational Showcase */}
        <div
          style={{
            marginTop: "4.5rem",
            background: "var(--bg-card)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-subtle)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            boxShadow: "var(--shadow-tech)",
          }}
        >
          <div
            style={{ position: "relative", height: "100%", minHeight: "280px" }}
          >
            <img
              src="/images/servicos/area-externa.webp"
              alt="Aplicação de tecnologia de pulverização e nebulização em áreas externas de residências, condomínios e piscinas"
              loading="lazy"
              decoding="async"
              width="640"
              height="480"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/servicos/area-externa.jpg";
              }}
            />
          </div>
          <div style={{ padding: "2.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--accent-cyan-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                className="pulse-dot"
                style={{ backgroundColor: "var(--accent-emerald)" }}
              ></span>{" "}
              Qualidade & Eficiência no Atendimento
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.55rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              Pulverização Profissional & Cuidado com a sua Saúde
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.94rem",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}
            >
              Utilizamos equipamentos modernos e silenciosos que aplicam o produto diretamente nos focos dos problemas. Nossos métodos garantem máxima eficiência contra pragas, preservando plantas, jardins e garantindo retorno rápido e seguro para sua família e animais de estimação.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  padding: "0.45rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                ✨ Eficácia & Aplicação Limpa
              </span>
              <span
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  padding: "0.45rem 0.85rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                🌿 Seguro para Crianças e Animais
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
