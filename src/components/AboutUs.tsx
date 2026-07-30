import React from "react";
import { ShieldCheck, Award, Briefcase, CheckCircle } from "lucide-react";

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="section-padding bg-secondary" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre Nós</span>
          <h2 className="section-title">
            Tradição e <span className="gradient-text-cyan">Profissionalismo</span>
          </h2>
          <p className="section-subtitle">
            Somos uma empresa séria, pautada pela honestidade, profissionalismo e coerência, garantindo sempre o trabalho correto para nossos clientes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {/* Experiência */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-tech)";
            }}
          >
            <Award className="w-10 h-10" style={{ color: "var(--accent-cyan)", marginBottom: "1.25rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              6 Anos de Experiência
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Nossa trajetória é marcada por dedicação e excelência, entregando soluções eficientes e seguras.
            </p>
          </div>

          {/* Honestidade */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow-emerald)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-tech)";
            }}
          >
            <ShieldCheck className="w-10 h-10" style={{ color: "var(--accent-emerald)", marginBottom: "1.25rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Honestidade
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Trabalhamos com orçamentos claros e justos. Somos uma empresa séria em que você pode confiar.
            </p>
          </div>

          {/* Profissionalismo */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-tech)";
            }}
          >
            <Briefcase className="w-10 h-10" style={{ color: "var(--accent-cyan-dark)", marginBottom: "1.25rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Profissionalismo
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Nosso ponto forte é o profissionalismo aliado a técnicas modernas, garantindo resultados definitivos.
            </p>
          </div>

          {/* Trabalho Correto */}
          <div
            className="glass-panel"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow-emerald)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-tech)";
            }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: "var(--accent-emerald)", marginBottom: "1.25rem" }} />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Coerência e Correção
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Agimos com coerência em cada etapa do processo. Fazemos o trabalho correto para resolver o seu problema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
