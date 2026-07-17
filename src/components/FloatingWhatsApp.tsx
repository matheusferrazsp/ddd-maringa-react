import React from "react";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

  return (
    <div className="floating-wa">
      <div className="floating-wa__tooltip">
        <span className="pulse-dot" />
        <span>WhatsApp 24h</span>
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
      </a>
    </div>
  );
};
