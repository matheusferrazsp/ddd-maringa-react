import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Bug,
  Droplets,
  Home,
  AlertTriangle,
  ArrowUpRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useAutoScrollCarousel } from "../hooks/useAutoScrollCarousel";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  title: string;
  category: "pragas" | "desentupimento" | "higienizacao";
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const servicesData: Service[] = [
  {
    id: "dedetizacao-geral",
    title: "Dedetização Geral",
    category: "pragas",
    description:
      "Tratamento amplo e eficaz contra baratas, formigas, aranhas e demais pragas urbanas que ameaçam o conforto e a higiene.",
    features: [
      "Pulverização em frestas e rodapés",
      "Aplicação pontual em áreas sensíveis",
      "Seguro para crianças e pets após tempo técnico",
    ],
    icon: <Shield className="w-7 h-7" />,
    popular: true,
  },
  {
    id: "controle-cupins",
    title: "Controle de Cupins (Descupinização)",
    category: "pragas",
    description:
      "Inspeção estrutural e eliminação definitiva de colônias de cupins de madeira seca e de solo antes que causem estragos irreparáveis.",
    features: [
      "Injeção focal em madeiramento",
      "Barreira química protetora no solo",
      "Garantia estendida e laudo técnico",
    ],
    icon: <Bug className="w-7 h-7" />,
  },
  {
    id: "limpeza-caixa-dagua",
    title: "Limpeza e Desinfecção de Caixa d'Água",
    category: "higienizacao",
    description:
      "Limpeza técnica, higienização e desinfecção bactericida de caixas d'água e reservatórios para residências, condomínios e empresas.",
    features: [
      "Desinfecção química contra bactérias e germes",
      "Emissão de laudo sanitário ANVISA/CVS",
      "Vedação técnica e prevenção contra mosquitos",
    ],
    icon: <Droplets className="w-7 h-7" />,
  },
  {
    id: "desentupimento-ralos-esgoto",
    title: "Desentupimento de Ralos, Pias e Esgoto",
    category: "desentupimento",
    description:
      "Desobstrução com molas rotatórias e cabos flexíveis em redes principais de esgoto, colunas de prédios, caixas de gordura e ramais internos.",
    features: [
      "Maquinário elétrico sem quebra de pisos",
      "Limpeza completa da rede interna",
      "Garantia total do fluxo normalizado",
    ],
    icon: <Droplets className="w-7 h-7" />,
  },
  {
    id: "hidrojateamento-fossa",
    title: "Hidrojateamento & Limpeza de Fossa",
    category: "desentupimento",
    description:
      "Jateamento de água em alta pressão e sucção a vácuo para limpeza de redes pluviais, esgotamento de fossas sépticas e remoção de crostas severas.",
    features: [
      "Caminhão com bomba de hidrojato de alta pressão",
      "Sucção de fossas e caixas de gordura",
      "Descarte ecológico certificado em estação",
    ],
    icon: <Droplets className="w-7 h-7" />,
  },
  {
    id: "controle-roedores",
    title: "Controle de Roedores (Desratização)",
    category: "pragas",
    description:
      "Mapeamento de trilhas e instalação de pontos de iscagem de alta atratividade em caixas protetoras blindadas contra acesso de animais domésticos.",
    features: [
      "Iscas parafinadas resistentes à umidade",
      "Monitoramento contínuo das caixas",
      "Eliminação discreta e limpa no ambiente",
    ],
    icon: <AlertTriangle className="w-7 h-7" />,
  },
  {
    id: "controle-mosquitos",
    title: "Controle de Mosquitos e Pernilongos (Fumacê)",
    category: "pragas",
    description:
      "Fumigação e termonebulização especial para áreas externas e internas, eliminando focos e mosquitos adultos, inclusive o Aedes aegypti.",
    features: [
      "Atuação contra o transmissor da Dengue",
      "Nebulização de alcance profundo",
      "Sustentável e inofensivo para plantas",
    ],
    icon: <Zap className="w-7 h-7" />,
  },
  {
    id: "controle-percevejos",
    title: "Controle de Percevejos de Cama",
    category: "pragas",
    description:
      "Tratamento rigoroso para colchões, estofados e estruturas de quartos, devolvendo noites de sono tranquilas sem picadas ou reações alérgicas.",
    features: [
      "Aplicação térmica ou química direcionada",
      "Tratamento sem danificar tecidos",
      "Inspeção com lanternas UV especiais",
    ],
    icon: <Home className="w-7 h-7" />,
  },
  {
    id: "controle-pombos",
    title: "Manejo e Controle de Pombos",
    category: "pragas",
    description:
      "Instalação de barreiras físicas e repelentes em géis que impedem o pouso e a nidificação de pombos no telhado sem causar danos às aves.",
    features: [
      "Espículas e redes protetoras resistentes",
      "Gel repelente de alta durabilidade",
      "Prevenção de doenças respiratórias",
    ],
    icon: <Shield className="w-7 h-7" />,
  },
];

export const ServicesSection: React.FC = () => {
  const [filter] = useState<
    "todos" | "pragas" | "desentupimento" | "higienizacao"
  >("todos");
  const [selectedServiceId, setSelectedServiceId] =
    useState<string>("dedetizacao-geral");
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  useAutoScrollCarousel(mobileCarouselRef, 3600);

  const filteredServices = servicesData.filter((s) =>
    filter === "todos" ? true : s.category === filter,
  );

  const selectedService =
    filteredServices.find((s) => s.id === selectedServiceId) ||
    filteredServices[0];

  useEffect(() => {
    if (
      filteredServices.length > 0 &&
      !filteredServices.some((s) => s.id === selectedServiceId)
    ) {
      setSelectedServiceId(filteredServices[0].id);
    }
  }, [filter, filteredServices, selectedServiceId]);

  useEffect(() => {
    if (detailPanelRef.current) {
      gsap.fromTo(
        detailPanelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    }
  }, [selectedServiceId, filter]);

  const whatsappUrl = (serviceTitle: string) =>
    `https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20*${encodeURIComponent(serviceTitle)}*%20e%20gostaria%20de%20agendar%20uma%20visita/or%C3%A7amento.`;

  return (
    <section ref={sectionRef} id="servicos" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">O Que Nós Oferecemos</span>
          <h2 className="section-title">
            Especialidades com{" "}
            <span style={{ color: "#00a8ff" }}>Garantia Técnica</span>
          </h2>
          <p className="section-subtitle">
            Selecione uma especialidade na barra lateral abaixo para conferir
            todos os detalhes técnicos do protocolo.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div
          className="mobile-swipe-hint"
          style={{
            margin: "0 auto 1.5rem",
            display: "flex",
            justifyContent: "center",
            width: "max-content",
          }}
        >
          <span>Deslize para o lado para conferir os serviços</span> &rarr;
        </div>

        {/* Master-Detail Layout */}
        <div className="services__master-detail">
          {/* Side Nav List (Desktop only) */}
          <div className="services__side-nav">
            {filteredServices.map((service) => {
              const isActive = selectedService?.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`services__side-item ${isActive ? "active" : ""}`}
                >
                  <div className="services__side-item-content">
                    <div className="services__side-item-icon">
                      {service.icon}
                    </div>
                    <span className="services__side-item-title">
                      {service.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail Panel for Desktop (Single item) */}
          {selectedService && (
            <div
              ref={detailPanelRef}
              className="services__detail-panel services__desktop-detail"
            >
              <div
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
              >
                <div className="services__detail-header">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                    }}
                  >
                    <div className="services__detail-icon-box">
                      {selectedService.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.76rem",
                          fontWeight: 800,
                          color: "#0082c8",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          display: "block",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Especialidade Técnica Certificada
                      </span>
                      <h3
                        className="services__detail-title"
                        style={{ marginBottom: 0 }}
                      >
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="services__detail-desc">
                  {selectedService.description}
                </p>

                <div className="services__detail-features-grid">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="services__detail-feature-item">
                      <div className="services__check-circle">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald services__detail-cta"
              >
                <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
                <span>Orçamento no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          )}

          {/* Mobile Swipe Carousel of All Cards (Mobile only) */}
          <div ref={mobileCarouselRef} className="services__mobile-carousel">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="services__detail-panel services__mobile-card"
              >
                <div
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <div className="services__detail-header">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.25rem",
                      }}
                    >
                      <div className="services__detail-icon-box">
                        {service.icon}
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "0.76rem",
                            fontWeight: 800,
                            color: "#0082c8",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            display: "block",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Especialidade Técnica Certificada
                        </span>
                        <h3
                          className="services__detail-title"
                          style={{ marginBottom: 0 }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="services__detail-desc">{service.description}</p>

                  <div className="services__detail-features-grid">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="services__detail-feature-item">
                        <div className="services__check-circle">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald services__detail-cta"
                >
                  <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
                  <span>Orçamento</span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
