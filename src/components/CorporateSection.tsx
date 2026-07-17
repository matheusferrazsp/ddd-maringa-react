import React, { useState, useRef } from "react";
import { useAutoScrollCarousel } from "../hooks/useAutoScrollCarousel";
import {
  Building2,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Clock,
  CreditCard,
  ArrowRight,
  Briefcase,
} from "lucide-react";

interface SectorInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const sectorsData: SectorInfo[] = [
  {
    id: "condominios",
    title: "Condomínios Residencais & Comerciais",
    subtitle: "Atendimento para Síndicos, Administradoras e Portarias",
    description:
      "Controle contínuo de pragas e desentupimento preventivo ou emergencial em redes pluviais, caixas de gordura, colunas de esgoto e áreas comuns, com emissão de laudo para assembleias.",
    features: [
      "Cronograma pré-agendado de pulverização nas áreas comuns",
      "Desobstrução e hidrojateamento de colunas prumadas sem quebrar pisos",
      "Laudo técnico completo e certificado de garantia para o condomínio",
      "Faturamento facilitado via boleto bancário para CNPJ",
    ],
  },
  {
    id: "industrias",
    title: "Indústrias & Galpões Logísticos",
    subtitle: "Controle Integrado de Pragas (MIP) e Normas Técnicas",
    description:
      "Manejo rigoroso com instalação de pontos de iscagem mapeados (QR Code/Planta Baixa), barreiras químicas e auditoria constante para cumprimento das normas de qualidade e ISO.",
    features: [
      "Monitoramento com caixas de segurança blindadas e mapeadas",
      "Pasta técnica de conformidade com FISPQ e Alvará da Vigilância Sanitária",
      "Aplicação noturna ou nos finais de semana sem parar a linha de produção",
      "Atendimento 24 horas para emergências em tubulações e esgotos industriais",
    ],
  },
  {
    id: "alimentacao",
    title: "Restaurantes, Comércios & Alimentação",
    subtitle: "Rigor Sanitário ANVISA / CVS 09 e Alta Eficácia",
    description:
      "Eliminação cirúrgica de baratas francesinhas (blattella germanica), roedores e insetos com armadilhas e géis profissionais aprovados para manipulação de alimentos.",
    features: [
      "Formulações técnicas especializadas permitidas em cozinhas industriais",
      "Emissão imediata de certificado de dedetização para fiscalização sanitária",
      "Atendimento rápido e agilidade na resolução de problemas",
    ],
  },
  {
    id: "hospitais",
    title: "Hospitais, Clínicas & Escolas",
    subtitle: "Segurança Máxima Atóxica e Ambientes Sensíveis",
    description:
      "Protocolos de grau hospitalar e escolar com controle biológico, termonebulização controlada e total segurança para pacientes, crianças, alunos e profissionais da saúde.",
    features: [
      "Produtos com baixíssima toxicidade e liberação rápida de áreas",
      "Contratos personalizados conforme exigência da ANVISA e secretarias de saúde",
      "Equipe técnica discretamente uniformizada e altamente qualificada nas normas sanitárias hospitalares",
      "Central de atendimento dedicada para suporte imediato do gestor",
    ],
  },
];

export const CorporateSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("condominios");

  const currentSector =
    sectorsData.find((s) => s.id === activeTab) || sectorsData[0];

  const certsRef = useRef<HTMLDivElement>(null);
  useAutoScrollCarousel(certsRef, 4200);

  const whatsappUrl = "https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20represento%20uma%20empresa%2Fcondom%C3%ADnio%20%28CNPJ%29%20e%20gostaria%20de%20solicitar%20uma%20proposta%20ou%20agendar%20visita%20t%C3%A9cnica.";

  return (
    <section id="empresas" className="corporate-section">
      <div className="container">
        <div className="corporate__grid">
          {/* Left Column: Institutional & Legal Trust */}
          <div>
            <div className="corporate__badge">
              <Building2 className="w-4 h-4" />
              <span>Atendimento B2B & Pessoas Jurídicas</span>
            </div>

            <h2 className="corporate__title">
              Soluções Corporativas com{" "}
              <span style={{ color: "#00a8ff" }}>
                Conformidade Legal & ANVISA
              </span>
            </h2>

            <p className="corporate__desc">
              Atendemos condomínios, indústrias, comércios, escolas e hospitais
              na Grande São Paulo com **Controle Integrado de Pragas (MIP)**,
              emissão de laudos técnicos para auditorias e flexibilidade total
              de horários e faturamento.
            </p>

            <div ref={certsRef} className="corporate__certs">
              <div className="corporate__cert-card">
                <div className="corporate__cert-icon">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="corporate__cert-title">
                  Laudo com ART e ANVISA
                </h4>
                <p className="corporate__cert-desc">
                  Emissão completa de Certificado de Garantia, FISPQ e
                  documentação para fiscalização (CVS 09).
                </p>
              </div>

              <div className="corporate__cert-card">
                <div className="corporate__cert-icon">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="corporate__cert-title">
                  Contratos de Controle (MIP)
                </h4>
                <p className="corporate__cert-desc">
                  Manutenção mensal ou bimestral programada para blindar o
                  estabelecimento o ano inteiro.
                </p>
              </div>

              <div className="corporate__cert-card">
                <div className="corporate__cert-icon">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="corporate__cert-title">
                  Atendimento Noturno / 24h
                </h4>
                <p className="corporate__cert-desc">
                  Execução em horários alternativos ou finais de semana para não
                  interferir na operação da empresa.
                </p>
              </div>

              <div className="corporate__cert-card">
                <div className="corporate__cert-icon">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="corporate__cert-title">Faturamento para CNPJ</h4>
                <p className="corporate__cert-desc">
                  Condições de pagamento customizadas por boleto ou nota fiscal
                  para administradoras e empresas.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cyan"
            >
              <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
              <span>Orçamento para Empresas (PJ)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Sector Interactive Tabs */}
          <div>
            <div className="corporate__sectors-box">
              <div className="corporate__sectors-header">
                <h3 className="corporate__sectors-title">
                  Selecione seu Segmento Corporativo
                </h3>
                <p className="corporate__sectors-subtitle">
                  Veja como adaptamos nossos protocolos para a realidade do seu
                  negócio:
                </p>
              </div>

              <div className="corporate__tabs">
                {sectorsData.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setActiveTab(sector.id)}
                    className={`corporate__tab-btn ${activeTab === sector.id ? "active" : ""}`}
                  >
                    {sector.id === "condominios" && "Condomínios"}
                    {sector.id === "industrias" && "Indústrias"}
                    {sector.id === "alimentacao" && "Alimentação"}
                    {sector.id === "hospitais" && "Hospitais & Escolas"}
                  </button>
                ))}
              </div>

              <div className="corporate__sector-content">
                <h4 className="corporate__sector-heading">
                  <ShieldCheck className="w-5 h-5" />
                  <span>{currentSector.title}</span>
                </h4>

                <p className="corporate__sector-text">
                  {currentSector.description}
                </p>

                <div
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <ul className="corporate__feature-list">
                    {currentSector.features.map((feat, idx) => (
                      <li key={idx} className="corporate__feature-item">
                        <div className="corporate__check-icon">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20sou%20respons%C3%A1vel%20por%20*${encodeURIComponent(currentSector.title)}*%20e%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20contrato%20e%20laudos.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderColor: "#00a8ff",
                    color: "#00a8ff",
                  }}
                >
                  <span>Falar com Especialista</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Partners Ticker / Slides without texts & without photo */}
        <div className="corporate__partners-box">
          <style>{`
            @keyframes corporate-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .corporate-ticker__track:hover {
              animation-play-state: paused !important;
            }
          `}</style>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#0082c8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Autoridade & Confiança Institucional
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              Clientes & Órgãos Públicos que Confiam em Nossos Protocolos
            </h3>
          </div>

          {/* Marquee Track Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              padding: "0.5rem 0",
            }}
          >
            {/* Gradient Fade Edges for Smooth Entry & Exit */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "100px",
                background:
                  "linear-gradient(90deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "100px",
                background:
                  "linear-gradient(270deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* Sliding Track */}
            <div
              className="corporate-ticker__track"
              style={{
                display: "flex",
                gap: "3.5rem",
                alignItems: "center",
                width: "max-content",
                animation: "corporate-ticker 22s linear infinite",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <React.Fragment key={i}>
                  {/* Logo Card 1: ABRACAF */}
                  <div className="corporate__partner-card">
                    <img
                      src="/images/parceiros/abracaf.svg"
                      alt="ABRACAF"
                      loading="lazy"
                      decoding="async"
                      width="150"
                      height="70"
                      style={{
                        maxHeight: "72px",
                        maxWidth: "170px",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/parceiros/Abracaf_150x150.png";
                      }}
                    />
                  </div>

                  {/* Logo Card 2: Camara Municipal de Embu das Artes */}
                  <div className="corporate__partner-card">
                    <img
                      src="/images/parceiros/camara-embu.svg"
                      alt="Câmara Municipal de Embu das Artes"
                      loading="lazy"
                      decoding="async"
                      width="180"
                      height="75"
                      style={{
                        maxHeight: "78px",
                        maxWidth: "180px",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/parceiros/camara-municipal-embu.webp";
                      }}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
