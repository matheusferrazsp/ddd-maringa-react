import React from "react";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/+5511940724379?text=Ol%C3%A1%21%20Vi%20o%20an%C3%BAncio%20e%20preciso%20de%20um%20or%C3%A7amento%20r%C3%A1pido.%20Podem%20me%20ajudar%3F";

  return (
    <div className="floating-wa">
      <div className="floating-wa__tooltip">
        <span className="pulse-dot" />
        <span>🟢 Online: Fale com um Técnico</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa__btn"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="floating-wa__pulse" />
        <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-7 h-7 object-contain" />
        <span className="floating-wa__text-mobile">Chamar no WhatsApp</span>
      </a>
    </div>
  );
};
