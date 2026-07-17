import React from "react";
import { Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20gratuito.";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand Info */}
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}
            >
              <img
                src="/images/logos/logo.png"
                alt="Dedetizadora Maringá"
                style={{ height: "84px", width: "auto", objectFit: "contain" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/logos/logo.svg";
                }}
              />
            </div>

            <p className="footer__brand-text">
              Dedicamo-nos integralmente a assegurar ambientes livres de
              infestações e entupimentos, proporcionando tranquilidade para sua
              residência ou empresa com honestidade, pontualidade e métodos 100%
              sustentáveis e seguros.
            </p>

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/maringadedetizadora/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dedetizadoramaringa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer__heading">Navegação</h4>
            <ul className="footer__nav-list">
              <li>
                <a href="#inicio" className="footer__nav-link">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="footer__nav-link">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#empresas" className="footer__nav-link">
                  Para Empresas (PJ)
                </a>
              </li>
              <li>
                <a href="#metodologia" className="footer__nav-link">
                  Abordagem & Metodologia
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="footer__nav-link">
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="footer__nav-link">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="footer__heading">Especialidades</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-link" style={{ cursor: "default" }}>
                Dedetização Geral
              </li>
              <li className="footer__nav-link" style={{ cursor: "default" }}>
                Descupinização (Cupins)
              </li>
              <li className="footer__nav-link" style={{ cursor: "default" }}>
                Desentupimento 24 Horas
              </li>
              <li className="footer__nav-link" style={{ cursor: "default" }}>
                Controle de Roedores
              </li>
              <li className="footer__nav-link" style={{ cursor: "default" }}>
                Percevejos e Mosquitos
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer__heading">Plantão 24h</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <div
                  className="footer__contact-icon-box"
                  style={{ color: "#00a8ff" }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong
                    style={{
                      color: "var(--text-primary)",
                      display: "block",
                      fontSize: "0.98rem",
                    }}
                  >
                    (11) 94072-4379
                  </strong>
                  <span style={{ fontSize: "0.85rem" }}>(11) 96097-2283</span>
                </div>
              </li>

              <li className="footer__contact-item">
                <div
                  className="footer__contact-icon-box"
                  style={{ color: "#00a8ff" }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <span style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--text-primary)" }}>
                    Rua Maringá, 278
                  </strong>
                  <br />
                  Embu das Artes - SP
                  <br />
                  Atendimento na Grande São Paulo
                </span>
              </li>

              <li style={{ paddingTop: "0.5rem" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald"
                  style={{
                    padding: "0.75rem 1.4rem",
                    fontSize: "0.88rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <img src="/images/logos/whatsapp-white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0 object-contain" />
                  <span>Atendimento WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Dedetizadora e Desentupidora Maringá.
            Todos os direitos reservados.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span>
              <a
                className="w-4 h-4 text-cyan-500 fill-cyan-500"
                style={{ color: "#00a8ff", fill: "#00a8ff" }}
                href="https://matheuferrazdev.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desenvolvido por FerrazDev
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
