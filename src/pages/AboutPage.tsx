import React from "react";
import { ShieldCheck, Award, Target, Users } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      <section className="section-padding bg-secondary" style={{ backgroundColor: "var(--bg-secondary)", minHeight: "calc(100vh - 80px)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nossa História</span>
            <h2 className="section-title">
              Nascemos para Fazer a <span className="gradient-text-cyan">Diferença</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
              A Dedetizadora Maringá nasceu com o objetivo claro de se destacar no mercado, fazendo um trabalho bom e profissional. Nosso compromisso é ser uma empresa coerente, justa, honesta, com foco absoluto na excelência e na total satisfação do cliente.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "4rem",
            }}
          >
            {/* Excelência */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Target className="w-12 h-12" style={{ color: "var(--accent-cyan)", marginBottom: "1.25rem" }} />
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Foco na Excelência
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Não aceitamos nada menos que a perfeição no que fazemos. Desde o atendimento inicial até a execução do serviço, garantimos qualidade total.
              </p>
            </div>

            {/* Satisfação do Cliente */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Users className="w-12 h-12" style={{ color: "var(--accent-emerald)", marginBottom: "1.25rem" }} />
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Total Satisfação
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Nossa maior recompensa é a tranquilidade do cliente. Trabalhamos para superar expectativas e construir relacionamentos de longo prazo.
              </p>
            </div>

            {/* Honestidade */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ShieldCheck className="w-12 h-12" style={{ color: "var(--accent-cyan-dark)", marginBottom: "1.25rem" }} />
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Trabalho Honesto e Justo
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Transparência é inegociável. Passamos orçamentos corretos e executamos somente o que é necessário para resolver o problema, com coerência.
              </p>
            </div>

            {/* Profissionalismo */}
            <div
              className="glass-panel"
              style={{
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Award className="w-12 h-12" style={{ color: "var(--accent-emerald)", marginBottom: "1.25rem" }} />
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                6 Anos de Profissionalismo
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Nossa trajetória é construída com muito trabalho duro, capacitação técnica e o desejo de fazer sempre melhor a cada dia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
