import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ddd_cookie_consent");
    if (!consent) {
      // Pequeno delay para a página carregar primeiro
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = (type: "all" | "essential") => {
    localStorage.setItem("ddd_cookie_consent", type);
    setIsVisible(false);
    setHasConsented(true);
    
    // Aqui seria feita a integração com o Consent Mode v2 do Google Tag Manager
    // Exemplo: window.gtag('consent', 'update', { ad_storage: type === 'all' ? 'granted' : 'denied', ... })
  };

  const openBanner = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Botão flutuante para reabrir configurações */}
      {!isVisible && hasConsented && (
        <button 
          onClick={openBanner} 
          className="floating-cookie-toggle" 
          aria-label="Configurações de Privacidade"
        >
          <Cookie className="w-6 h-6" />
        </button>
      )}

      {isVisible && (
        <div className="cookie-consent-banner">
          <div className="cookie-consent-content">
            <div className="cookie-consent-header">
              <div className="cookie-icon-wrapper">
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="cookie-title">Sua privacidade importa</h3>
              <button onClick={() => setIsVisible(false)} className="cookie-close" aria-label="Fechar">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="cookie-text">
              Nós e nossos parceiros utilizamos cookies e tecnologias semelhantes para garantir o funcionamento do site, 
              analisar o tráfego e personalizar a publicidade. Ao clicar em "Aceitar Todos", você concorda com essas 
              condições e com nossa <Link to="/politica-de-privacidade" className="cookie-link">Política de Privacidade</Link>.
            </p>
            <div className="cookie-actions">
              <button onClick={() => handleAccept("essential")} className="cookie-btn cookie-btn-outline">
                Apenas Essenciais
              </button>
              <button onClick={() => handleAccept("all")} className="cookie-btn cookie-btn-primary">
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
