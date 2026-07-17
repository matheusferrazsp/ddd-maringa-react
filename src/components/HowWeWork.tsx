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
        "Agendamos a visita técnica sem compromisso no local desejado (residência, condomínio ou empresa). Nossos técnicos avaliam a gravidade e passam o orçamento transparente na hora.",
      icon: <ClipboardCheck className="w-8 h-8" style={{ color: "#00a8ff" }} />,
    },
    {
      step: "02",
      title: "Aplicação Especializada e Segura",
      description:
        "Com expertise e abordagens inovadoras, realizamos o controle de pragas ou desentupimento com equipamentos rotativos de alta tecnologia e produtos especializados de nível profissional e sanitário.",
      icon: <ShieldAlert className="w-8 h-8" style={{ color: "#00a8ff" }} />,
    },
    {
      step: "03",
      title: "Prevenção, Laudo e Garantia",
      description:
        "Entregamos laudo técnico e certificado de garantia legal. Com enfoque preventivo, orientamos sobre como blindar o ambiente para evitar novas infestações ou entupimentos no futuro.",
      icon: <Sparkles className="w-8 h-8" style={{ color: "#22c55e" }} />,
    },
  ];

  return (
    <section ref={sectionRef} id="metodologia" className="how-we-work">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nossa Metodologia & Abordagem</span>
          <h2 className="section-title">
            Saiba Como <span style={{ color: "#00a8ff" }}>Trabalhamos</span>
          </h2>
          <p className="section-subtitle">
            Um processo simples, ágil e certificado para devolver o sossego e a
            segurança ao seu imóvel em tempo recorde.
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
            background: "#ffffff",
            borderRadius: "1.75rem",
            border: "1px solid var(--border-subtle)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            boxShadow: "0 15px 35px rgba(15, 23, 42, 0.04)",
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
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#0082c8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                className="pulse-dot"
                style={{ backgroundColor: "#22c55e" }}
              ></span>{" "}
              Precisão & Tecnologia de Campo
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
              Tecnologia de Pulverização Avançada & Proteção Ambiental
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}
            >
              Utilizamos nebulizadores costais motorizados e atomizadores de
              alta precisão que distribuem micropartículas nos focos exatos das
              infestações. Nossos protocolos garantem eficácia máxima contra
              mosquitos e pragas urbanas, preservando totalmente a vegetação,
              jardins e garantindo retorno rápido para famílias e animais
              domésticos.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                ✨ Eficácia & Aplicação Limpa
              </span>
              <span
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                🌿 Seguro p/ Jardins e Piscinas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
