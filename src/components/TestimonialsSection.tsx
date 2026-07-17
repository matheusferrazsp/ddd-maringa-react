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
      </div>
    </section>
  );
};
