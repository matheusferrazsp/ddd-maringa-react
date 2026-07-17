import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useAutoScrollCarousel } from "../hooks/useAutoScrollCarousel";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  content: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Cliente Verificado",
    role: "Avaliação Google",
    content:
      "O rapaz Lucas Ferraz é bastante atencioso e minucioso na hora de executar o seu trabalho, muito eficiente e eficaz, perfeito recomendo muito!",
    location: "Embu das Artes - SP",
    rating: 5,
  },
  {
    name: "Marcos Silva",
    role: "Sindico / Condomínio Residencial",
    content:
      "Equipe muito profissional e empenhada. Serviço de qualidade! Realmente resolvem o problema, fiquei satisfeito e recomendo a todos da Grande São Paulo.",
    location: "São Paulo - SP",
    rating: 5,
  },
  {
    name: "Ana Beatriz Souza",
    role: "Gestora Comercial",
    content:
      "Atendimento, Pontualidade, Profissionalismo, Qualidade e Valor justíssimo! Agendaram a visita imediatamente e eliminaram o foco de pragas na nossa loja com total limpeza e eficiência.",
    location: "Embu das Artes - SP",
    rating: 5,
  },
];

/* TEMPORARIAMENTE COMENTADO JUNTO COM AS BANNERS DO GOOGLE:
const GoogleLogo = ({
  className = "w-6 h-6 flex-shrink-0",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
    />
    <path
      fill="#34A853"
      d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
    />
    <path
      fill="#EA4335"
      d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
    />
  </svg>
);
*/

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useAutoScrollCarousel(cardsRef, 4000);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current?.children) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            duration: 0.7,
            ease: "back.out(1.4)",
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

  /* Link direto para abrir o perfil da Dedetizadora Maringá no Google Maps / Google Meu Negócio (descomentar com o link curto após reativação)
  const googleUrl =
    "https://www.google.com/maps/search/?api=1&query=Dedetizadora+e+Desentupidora+Maring%C3%A1+Embu+das+Artes+Rua+Maring%C3%A1+278";
  */

  return (
    <section ref={sectionRef} id="depoimentos" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Depoimentos Reais</span>
          <h2 className="section-title">
            O Que Nossos{" "}
            <span style={{ color: "#00a8ff" }}>Clientes Estão Dizendo</span>
          </h2>
          <p className="section-subtitle">
            Construímos uma imagem sólida e de confiança com nossa honestidade,
            pontualidade e dedicação total ao resultado.
          </p>

          {/* TEMPORARIAMENTE COMENTADO: Aguardando reativação da ficha no Google Meu Negócio.
              Assim que o Google aprovar a contestação e reativar o perfil, basta descomentar abaixo
              e colar o link oficial curto de compartilhamento na variável `googleUrl`.
          <div className="google-badge-strip">
            <div className="google-badge-strip__left">
              <div className="google-badge-strip__icon">
                <GoogleLogo className="w-7 h-7 flex-shrink-0" />
              </div>
              <div>
                <div className="google-badge-strip__rating">
                  <span className="google-badge-strip__score">4.9 / 5.0</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="google-badge-strip__verified">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verificado pelo Google
                  </span>
                </div>
                <p className="google-badge-strip__desc">
                  Baseado em mais de <strong>150+ avaliações reais e auditadas</strong> de clientes na Grande São Paulo.
                </p>
              </div>
            </div>

            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge-strip__btn"
            >
              <span>Ver no Google Ao Vivo</span>
              <span className="google-badge-strip__btn-arrow">↗</span>
            </a>
          </div>
          */}
        </div>

        <div ref={cardsRef} className="testimonials__grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="testimonial-card__header">
                  <div className="testimonial-card__stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote
                    className="w-8 h-8"
                    style={{ color: "rgba(0, 168, 255, 0.18)" }}
                  />
                </div>

                <p className="testimonial-card__quote">"{item.content}"</p>
              </div>

              <div className="testimonial-card__footer">
                <div className="testimonial-card__author-row">
                  <h4 className="testimonial-card__author">
                    <span>{item.name}</span>
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: "#22c55e", flexShrink: 0 }}
                    />
                  </h4>
                  <span className="testimonial-card__location">
                    {item.location}
                  </span>
                </div>
                <span className="testimonial-card__role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* TEMPORARIAMENTE COMENTADO: Painel Google CTA inferior (descomentar quando o Google Meu Negócio for reativado)
        <div className="google-live-box">
          <div className="google-live-box__content">
            <div className="google-live-box__badge">
              <GoogleLogo className="w-5 h-5" />
              <span className="font-bold">Google Meu Negócio • Avaliações ao Vivo</span>
            </div>
            <h3 className="google-live-box__title">
              Sua opinião ou relato também pode estar aqui!
            </h3>
            <p className="google-live-box__text">
              Já contratou os serviços da <strong>Dedetizadora Maringá</strong>? Deixe sua avaliação de 5 estrelas diretamente no nosso painel do Google ou confira os últimos depoimentos postados por outros clientes satisfeitos.
            </p>
          </div>

          <div className="google-live-box__actions">
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald google-live-box__btn-primary"
              style={{ backgroundColor: "#0284c7", borderColor: "#0284c7" }}
            >
              <GoogleLogo className="w-5 h-5 flex-shrink-0 bg-white p-0.5 rounded-full shadow-sm" />
              <span>Avaliar com 5 Estrelas no Google</span>
            </a>

            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline google-live-box__btn-secondary"
            >
              <span>Ler Todas as 150+ Avaliações ↗</span>
            </a>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
