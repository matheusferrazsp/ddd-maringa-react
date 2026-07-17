import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgImgRef.current && bannerRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (contentRef.current && bannerRef.current) {
        gsap.fromTo(
          contentRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="parallax-banner">
      {/* Parallax Background Layer */}
      <div 
        ref={bgImgRef}
        className="parallax-banner__bg"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.35) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Dark & Glow Overlays */}
      <div className="parallax-banner__overlay-dark" />
      <div className="parallax-banner__overlay-glow" />

      {/* Content */}
      <div ref={contentRef} className="container relative z-10">
        <div className="parallax-banner__content">
          
          <div className="parallax-banner__tag">
            <Leaf className="w-4 h-4" style={{ color: '#ffffff' }} />
            <span>Sustentabilidade & Compromisso</span>
          </div>

          <h2 className="parallax-banner__title">
            Utilizamos Medidas Seguras e <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: '#22c55e' }}>Amigas do Meio Ambiente</span>
          </h2>

          <p className="parallax-banner__desc">
            Operamos conforme rigorosos protocolos de cuidados ambientais, preservando a natureza e a saúde da sua família e animais de estimação, ao mesmo tempo em que garantimos a eliminação implacável das pragas e entupimentos.
          </p>

          <div className="parallax-banner__grid">
            
            <div className="parallax-banner__card">
              <div className="parallax-banner__card-icon parallax-banner__card-icon--emerald">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="parallax-banner__card-title">Garantia em Contrato</h4>
              <p className="parallax-banner__card-desc">Todas as nossas visitas e aplicações contam com laudo e garantia total de eficácia.</p>
            </div>

            <div className="parallax-banner__card">
              <div className="parallax-banner__card-icon parallax-banner__card-icon--emerald">
                <Leaf className="w-7 h-7" />
              </div>
              <h4 className="parallax-banner__card-title">Segurança & Controle Técnico</h4>
              <p className="parallax-banner__card-desc">Formulações modernas de alta eficácia com tecnologia internacional e respeito ao ambiente.</p>
            </div>

            <div className="parallax-banner__card">
              <div className="parallax-banner__card-icon parallax-banner__card-icon--cyan">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h4 className="parallax-banner__card-title">Honestidade e Ética</h4>
              <p className="parallax-banner__card-desc">Orçamento transparente sem surpresas. Construímos uma reputação sólida há anos.</p>
            </div>

          </div>

          <a 
            href="tel:11940724379" 
            className="btn btn-emerald parallax-banner__btn"
          >
            <PhoneCall className="w-5 h-5 flex-shrink-0" />
            <span>Falar com Especialista</span>
          </a>

        </div>
      </div>
    </section>
  );
};
