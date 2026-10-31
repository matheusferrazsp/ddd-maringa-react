import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Bug,
  AlertTriangle,
  Home,
  Building2,
  Store,
  Camera,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Phone,
  MapPin,
} from "lucide-react";
import { usePageSEO } from "../utils/seo";
import "../styles/dedetizadora-embu.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const DESCUPINIZACAO_SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://dedetizadoramaringa.com.br/#empresa",
      name: "Dedetizadora Maringá",
      url: "https://dedetizadoramaringa.com.br/",
      telephone: "+55-11-94072-4379",
      description:
        "Empresa de controle de pragas sediada em Embu das Artes (SP): dedetização de baratas, desratização, descupinização, controle de mosquitos e percevejos e manejo de pombos e morcegos.",
      areaServed: [
        { "@type": "City", name: "Embu das Artes" },
        { "@type": "City", name: "Taboão da Serra" },
        { "@type": "City", name: "Itapecerica da Serra" },
        { "@type": "City", name: "Cotia" },
        { "@type": "City", name: "Osasco" },
        { "@type": "City", name: "Barueri" },
        { "@type": "City", name: "Carapicuíba" },
        { "@type": "City", name: "Santana de Parnaíba" },
        { "@type": "City", name: "Itapevi" },
        { "@type": "City", name: "Jandira" },
        { "@type": "City", name: "Vargem Grande Paulista" },
        { "@type": "City", name: "Embu-Guaçu" },
        { "@type": "City", name: "São Lourenço da Serra" },
        { "@type": "City", name: "São Paulo" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://dedetizadoramaringa.com.br/descupinizacao#servico",
      name: "Descupinização",
      serviceType: "Controle de cupins",
      provider: {
        "@id": "https://dedetizadoramaringa.com.br/#empresa",
      },
      areaServed: [
        { "@type": "City", name: "Embu das Artes" },
        { "@type": "City", name: "Taboão da Serra" },
        { "@type": "City", name: "Itapecerica da Serra" },
        { "@type": "City", name: "Cotia" },
        { "@type": "City", name: "Osasco" },
        { "@type": "City", name: "Barueri" },
        { "@type": "City", name: "Carapicuíba" },
        { "@type": "City", name: "Santana de Parnaíba" },
        { "@type": "City", name: "Itapevi" },
        { "@type": "City", name: "Jandira" },
        { "@type": "City", name: "Vargem Grande Paulista" },
        { "@type": "City", name: "Embu-Guaçu" },
        { "@type": "City", name: "São Lourenço da Serra" },
        { "@type": "City", name: "São Paulo" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://dedetizadoramaringa.com.br/descupinizacao",
      url: "https://dedetizadoramaringa.com.br/descupinizacao",
      name: "Descupinização: tratamento de cupins | Dedetizadora Maringá",
      inLanguage: "pt-BR",
      about: {
        "@id": "https://dedetizadoramaringa.com.br/descupinizacao#servico",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://dedetizadoramaringa.com.br/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serviços",
            item: "https://dedetizadoramaringa.com.br/servicos",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Descupinização",
            item: "https://dedetizadoramaringa.com.br/descupinizacao",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://dedetizadoramaringa.com.br/descupinizacao#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qual a diferença entre descupinização e dedetização?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dedetização é o nome popular para o controle de pragas em geral, como baratas e formigas. Descupinização é o tratamento específico contra cupins, com vistoria e técnicas próprias para madeira e, quando necessário, para o solo e a estrutura do imóvel.",
          },
        },
        {
          "@type": "Question",
          name: "O cupim passa de um móvel para outro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pode passar. O cupim de madeira seca se espalha para peças próximas, e o cupim de solo pode chegar a vários cômodos pelo mesmo caminho. Por isso a vistoria verifica as madeiras ao redor do ponto onde o problema apareceu.",
          },
        },
        {
          "@type": "Question",
          name: "Dá para tratar só o móvel atacado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende do tipo de cupim. Quando o ataque é de cupim de madeira seca e está restrito a uma peça, o tratamento pode ser localizado. No cupim de solo, tratar apenas o móvel não resolve, porque a colônia continua fora dele.",
          },
        },
        {
          "@type": "Question",
          name: "Apartamento também tem cupim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tem. Em apartamentos, o cupim costuma aparecer em móveis planejados, portas, rodapés e armários. Se a origem estiver na estrutura do prédio, a solução passa pelo condomínio.",
          },
        },
        {
          "@type": "Question",
          name: "Vale mais a pena trocar a madeira do que tratar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende do estado da peça. Madeira muito comprometida precisa ser substituída, mas sem tratar o foco a peça nova também pode ser atacada. A vistoria indica o que pode ser tratado e o que precisa ser trocado.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto custa uma descupinização?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O valor depende do tipo de cupim, da quantidade de peças, da área atingida e do acesso aos focos — e por isso só é definido depois da vistoria no imóvel. As fotos enviadas pelo WhatsApp ajudam a preparar essa visita.",
          },
        },
        {
          "@type": "Question",
          name: "O que mandar pelo WhatsApp para pedir orçamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fotos do pó, dos furos ou dos túneis de terra, os cômodos onde o problema aparece, o tipo de imóvel e o bairro. Com isso agendamos a vistoria.",
          },
        },
      ],
    },
  ],
};

export const DescupinizacaoPage: React.FC = () => {
  usePageSEO({
    title: "Descupinização: tratamento de cupins | Dedetizadora Maringá",
    description:
      "Descupinização para cupim de madeira seca e cupim de solo em casas, apartamentos, condomínios e empresas. Mande fotos e peça orçamento pelo WhatsApp.",
    canonical: "https://dedetizadoramaringa.com.br/descupinizacao",
    ogTitle: "Descupinização — Dedetizadora Maringá",
    ogDescription:
      "Tratamento de cupim de madeira seca e cupim de solo na região oeste e sudoeste da Grande São Paulo. Orçamento pelo WhatsApp (11) 94072-4379.",
    ogImage:
      "https://dedetizadoramaringa.com.br/images/dedetizadora-maringa-descupinizacao-vistoria-og.jpg",
    ogImageAlt:
      "Técnico da Dedetizadora Maringá fazendo vistoria de madeiramento durante serviço de descupinização",
    jsonLd: DESCUPINIZACAO_SCHEMA_JSON_LD,
  });

  const trackWhatsAppClick = (origem: string) => {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: origem,
          wa_origem: origem,
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "whatsapp_click",
          wa_origem: origem,
        });
      }
    }
  };

  const waUrls = {
    topo: "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Descupiniza%C3%A7%C3%A3o%2C%20e%20gostaria%20de%20um%20or%C3%A7amento.",
    foto: "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Descupiniza%C3%A7%C3%A3o%2C%20e%20quero%20enviar%20fotos%20de%20um%20poss%C3%ADvel%20cupim.",
    final:
      "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Descupiniza%C3%A7%C3%A3o%2C%20e%20quero%20falar%20com%20a%20equipe.",
  };

  return (
    <div className="dm-embu">
      {/* Navegação: Início › Serviços › Descupinização */}
      <nav className="dm-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="dm-breadcrumb">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <span aria-current="page">Descupinização</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section (H1 · Descupinização + [Foto 1] + [Botão WhatsApp — descupinizacao-topo]) */}
      <section className="dm-hero" aria-labelledby="dm-h1-descupinizacao">
        <div className="container">
          <div className="dm-hero__grid">
            <div>
              <h1 id="dm-h1-descupinizacao" className="dm-hero__title">
                Descupinização
              </h1>

              <p className="dm-hero__lead">
                Descupinização é o tratamento que elimina cupins de um imóvel e
                protege madeiras e estrutura contra novos ataques. A
                Dedetizadora Maringá faz descupinização em casas, apartamentos,
                condomínios e empresas de Embu das Artes e da região oeste e
                sudoeste da Grande São Paulo.
              </p>

              <div className="dm-hero__tip">
                Antes de qualquer aplicação, é preciso saber qual cupim está
                atacando e até onde ele chegou — é isso que define o tratamento.
                Pelo WhatsApp, fotos do pó, dos furos ou dos túneis de terra já
                ajudam a começar a avaliação.
              </div>

              <div className="dm-hero__cta-box">
                <a
                  href={waUrls.topo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-origem="descupinizacao-topo"
                  onClick={() => trackWhatsAppClick("descupinizacao-topo")}
                  className="dm-wa-btn"
                >
                  <img
                    src="/images/logos/whatsapp-white.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 flex-shrink-0 object-contain"
                  />
                  <span>Pedir orçamento pelo WhatsApp</span>
                </a>
                <span className="dm-wa-meta">
                  <Phone
                    className="w-4 h-4"
                    style={{ color: "var(--accent-cyan)" }}
                  />
                  Peça seu orçamento pelo WhatsApp:{" "}
                  <strong>(11) 94072-4379</strong>
                </span>
              </div>
            </div>

            {/* [Foto 1] */}
            <figure className="dm-figure">
              <img
                src="/images/dedetizadora-maringa-descupinizacao-vistoria.webp"
                alt="Técnico da Dedetizadora Maringá fazendo vistoria de madeiramento durante serviço de descupinização"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                className="dm-figure__img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* H2 · Sinais de que é hora de chamar a descupinização */}
      <section className="dm-section" aria-labelledby="dm-h2-sinais">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-sinais" className="dm-section__title">
              Sinais de que é hora de chamar a descupinização
            </h2>
          </div>

          <ul className="dm-signals-list">
            <li className="dm-signal-item">
              <AlertTriangle className="w-5 h-5 dm-signal-item__icon" />
              <span>
                Montinhos de grãos parecidos com areia ou pó de café perto de
                batentes, rodapés, móveis ou no chão abaixo do forro.
              </span>
            </li>
            <li className="dm-signal-item">
              <AlertTriangle className="w-5 h-5 dm-signal-item__icon" />
              <span>
                Pequenos furos na madeira e partes que soam ocas quando você
                bate.
              </span>
            </li>
            <li className="dm-signal-item">
              <AlertTriangle className="w-5 h-5 dm-signal-item__icon" />
              <span>
                Túneis de terra subindo por paredes, pisos, cantos e caixas de
                luz.
              </span>
            </li>
            <li className="dm-signal-item">
              <AlertTriangle className="w-5 h-5 dm-signal-item__icon" />
              <span>
                Asas soltas perto de janelas e lâmpadas, ou cupins voando dentro
                de casa.
              </span>
            </li>
            <li className="dm-signal-item">
              <AlertTriangle className="w-5 h-5 dm-signal-item__icon" />
              <span>
                Portas e janelas que começaram a emperrar, rodapés que esfarelam
                e piso de madeira afundando.
              </span>
            </li>
          </ul>

          <p className="dm-signals-note">
            Um sinal isolado não confirma que o ataque está ativo. Por isso a
            vistoria vem antes do orçamento.
          </p>
        </div>
      </section>

      {/* H2 · Cupim de madeira seca ou cupim de solo: por que a diferença importa */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-tipos"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-tipos" className="dm-section__title">
              Cupim de madeira seca ou cupim de solo: por que a diferença
              importa
            </h2>
          </div>

          <div className="dm-types-layout">
            <div>
              <div className="dm-types-cards">
                <article className="dm-service-card">
                  <div className="dm-service-card__body">
                    <div className="dm-service-card__header">
                      <div className="dm-service-card__icon">
                        <Bug className="w-5 h-5" />
                      </div>
                      <h3 className="dm-service-card__title">
                        Cupim de madeira seca
                      </h3>
                    </div>
                    <p className="dm-service-card__text">
                      Vive dentro da própria peça que ataca: batentes, portas,
                      móveis, rodapés, forros e o madeiramento do telhado. Não
                      depende de contato com o solo e costuma começar em algumas
                      peças, mas pode se espalhar quando há várias madeiras
                      próximas. O pó granulado que ele expulsa pelos furos é o
                      principal indício.
                    </p>
                  </div>
                </article>

                <article className="dm-service-card">
                  <div className="dm-service-card__body">
                    <div className="dm-service-card__header">
                      <div className="dm-service-card__icon">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h3 className="dm-service-card__title">
                        Cupim de solo (subterrâneo)
                      </h3>
                    </div>
                    <p className="dm-service-card__text">
                      Forma colônias na terra e chega à construção por frestas,
                      juntas de piso, tubulações e paredes, protegido pelos
                      túneis de barro que constrói. Além da madeira, ataca
                      papel, tecidos e outros materiais que encontra no caminho.
                      Como a colônia fica fora da peça danificada, tratar só a
                      madeira atacada não resolve: o tratamento precisa alcançar
                      o caminho que o cupim usa para entrar.
                    </p>
                  </div>
                </article>
              </div>

              <p className="dm-types-summary">
                Há imóveis com os dois tipos ao mesmo tempo. Identificar qual
                está presente é a primeira etapa do serviço.
              </p>
            </div>

            {/* [Foto 2] */}
            <figure className="dm-figure">
              <img
                src="/images/dedetizadora-maringa-cupim-madeira-danificada.webp"
                alt="Peça de madeira com furos e pó deixados por cupins"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="dm-figure__img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* H2 · Como é feita a descupinização */}
      <section className="dm-section" aria-labelledby="dm-h2-como-e-feita">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-como-e-feita" className="dm-section__title">
              Como é feita a descupinização
            </h2>
            <p className="dm-section__intro">
              O plano é montado depois da vistoria, de acordo com o tipo de
              cupim, as peças e áreas atingidas e a forma como o imóvel foi
              construído. Em linhas gerais, o serviço segue estas etapas:
            </p>
          </div>

          <div className="dm-how-layout">
            <div>
              <ol className="dm-steps-list">
                <li className="dm-step-item">
                  <span className="dm-step-item__num">1</span>
                  <p className="dm-step-item__text">
                    Vistoria: localização dos focos, das peças atacadas e, no
                    cupim de solo, dos pontos por onde ele entra.
                  </p>
                </li>
                <li className="dm-step-item">
                  <span className="dm-step-item__num">2</span>
                  <p className="dm-step-item__text">
                    Identificação do tipo de cupim e da extensão do ataque.
                  </p>
                </li>
                <li className="dm-step-item">
                  <span className="dm-step-item__num">3</span>
                  <p className="dm-step-item__text">
                    Plano de tratamento e orçamento, com as áreas e peças
                    incluídas e a técnica indicada para cada uma.
                  </p>
                </li>
                <li className="dm-step-item">
                  <span className="dm-step-item__num">4</span>
                  <p className="dm-step-item__text">
                    Orientações de preparação: o que retirar, cobrir ou
                    desocupar.
                  </p>
                </li>
                <li className="dm-step-item">
                  <span className="dm-step-item__num">5</span>
                  <p className="dm-step-item__text">
                    Aplicação conforme o plano definido.
                  </p>
                </li>
                <li className="dm-step-item">
                  <span className="dm-step-item__num">6</span>
                  <p className="dm-step-item__text">
                    Orientações finais, incluindo o que observar nos meses
                    seguintes.
                  </p>
                </li>
              </ol>

              <p className="dm-method-note">
                As técnicas variam. No cupim de madeira seca, o tratamento
                costuma ser feito diretamente nas peças afetadas; no cupim de
                solo, pode incluir o tratamento do solo e dos pontos de passagem
                na construção. A técnica usada no seu imóvel é definida na
                vistoria.
              </p>
            </div>

            <div className="dm-how-aside">
              {/* [Foto 3] */}
              <figure className="dm-figure">
                <img
                  src="/images/dedetizadora-maringa-descupinizacao-aplicacao.webp"
                  alt="Técnico da Dedetizadora Maringá aplicando tratamento contra cupins em peça de madeira"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="dm-figure__img"
                />
              </figure>

              {/* [Botão WhatsApp — descupinizacao-foto] */}
              <div className="dm-how-cta-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Camera
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: "var(--accent-cyan)", marginTop: "0.1rem" }}
                  />
                  <p
                    className="dm-how-cta-card__prompt"
                    style={{ marginBottom: 0 }}
                  >
                    Encontrou pó ou furos na madeira? Mande uma foto para
                    começarmos a avaliação.
                  </p>
                </div>
                <a
                  href={waUrls.foto}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-origem="descupinizacao-foto"
                  onClick={() => trackWhatsAppClick("descupinizacao-foto")}
                  className="dm-wa-btn"
                  style={{ width: "100%" }}
                >
                  <img
                    src="/images/logos/whatsapp-white.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 flex-shrink-0 object-contain"
                  />
                  <span>Mandar uma foto pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Descupinização em casas, apartamentos, condomínios e empresas */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-imoveis"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-imoveis" className="dm-section__title">
              Descupinização em casas, apartamentos, condomínios e empresas
            </h2>
          </div>

          <div className="dm-audience-grid">
            <div className="dm-audience-card">
              <div className="dm-audience-card__top">
                <div className="dm-audience-card__icon">
                  <Home className="w-5 h-5" />
                </div>
                <strong className="dm-audience-card__label">Casas.</strong>
              </div>
              <p>
                Telhado, forro, batentes e madeira guardada no quintal são os
                pontos que mais pedem atenção. Em casas térreas, o contato
                direto da construção com o solo também entra na vistoria.
              </p>
            </div>

            <div className="dm-audience-card">
              <div className="dm-audience-card__top">
                <div className="dm-audience-card__icon">
                  <Building2 className="w-5 h-5" />
                </div>
                <strong className="dm-audience-card__label">
                  Apartamentos.
                </strong>
              </div>
              <p>
                O ataque costuma aparecer em móveis planejados, armários
                embutidos, portas e rodapés. Quando o cupim de solo sobe pela
                estrutura do prédio, tratar só uma unidade pode não bastar, e o
                síndico precisa ser envolvido.
              </p>
            </div>

            <div className="dm-audience-card">
              <div className="dm-audience-card__top">
                <div className="dm-audience-card__icon">
                  <Store className="w-5 h-5" />
                </div>
                <strong className="dm-audience-card__label">
                  Condomínios e empresas.
                </strong>
              </div>
              <p>
                Áreas comuns, depósitos, arquivos de papel e estoques sobre
                paletes de madeira entram no planejamento, combinado com o
                síndico ou o responsável pelo local. Veja também o nosso{" "}
                <Link to="/empresas" className="dm-inline-link">
                  atendimento para empresas
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · O que define o orçamento de uma descupinização */}
      <section className="dm-section" aria-labelledby="dm-h2-orcamento">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-orcamento" className="dm-section__title">
              O que define o orçamento de uma descupinização
            </h2>
          </div>

          <ul className="dm-signals-list">
            <li className="dm-signal-item">
              <CheckCircle2 className="w-5 h-5 dm-signal-item__icon" />
              <span>O tipo de cupim — madeira seca, solo ou os dois.</span>
            </li>
            <li className="dm-signal-item">
              <CheckCircle2 className="w-5 h-5 dm-signal-item__icon" />
              <span>A quantidade de peças e a área atingida.</span>
            </li>
            <li className="dm-signal-item">
              <CheckCircle2 className="w-5 h-5 dm-signal-item__icon" />
              <span>O acesso aos focos: forro, telhado, piso, móveis fixos.</span>
            </li>
            <li className="dm-signal-item">
              <CheckCircle2 className="w-5 h-5 dm-signal-item__icon" />
              <span>
                A necessidade de tratar o solo ou a estrutura, e não apenas as
                peças.
              </span>
            </li>
            <li className="dm-signal-item">
              <CheckCircle2 className="w-5 h-5 dm-signal-item__icon" />
              <span>
                O tipo de imóvel e de uso: residência, condomínio, comércio ou
                indústria.
              </span>
            </li>
          </ul>

          <p className="dm-signals-note">
            Por isso o preço só é fechado depois da vistoria: duas casas do
            mesmo tamanho podem precisar de serviços muito diferentes.
          </p>
        </div>
      </section>

      {/* H2 · Cuidados antes e depois do tratamento */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-cuidados"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-cuidados" className="dm-section__title">
              Cuidados antes e depois do tratamento
            </h2>
          </div>

          <div className="dm-safety-grid">
            <div className="dm-safety-card">
              <p>
                Cada técnica tem cuidados próprios. Antes do serviço, você
                recebe a orientação sobre o que retirar dos ambientes, quanto
                tempo eles ficam desocupados e quando podem ser limpos, conforme
                indicado pelo responsável técnico.
              </p>
            </div>
            <div className="dm-safety-card">
              <p>
                No primeiro contato, avise se há no imóvel crianças, gestantes,
                idosos, pessoas com alergia ou problemas respiratórios e animais
                de estimação. E, antes de reformar, pintar ou trocar peças
                tratadas, converse com a nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Onde fazemos descupinização */}
      <section className="dm-section" aria-labelledby="dm-h2-onde">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-onde" className="dm-section__title">
              Onde fazemos descupinização
            </h2>
          </div>

          <div className="dm-areas-box">
            <p>
              Atendemos{" "}
              <Link to="/dedetizadora-embu-das-artes" className="dm-inline-link">
                Embu das Artes
              </Link>
              , onde fica a nossa base, e a região: Taboão da Serra, Itapecerica
              da Serra, Cotia e Granja Viana, Osasco, Barueri e Alphaville, além
              de bairros das zonas Oeste e Sul de São Paulo. Para conhecer todos
              os serviços, acesse a página de{" "}
              <Link to="/servicos" className="dm-inline-link">
                serviços
              </Link>
              .
            </p>

            <div
              className="dm-cities-pills"
              aria-label="Cidades e regiões atendidas"
            >
              <span className="dm-city-pill dm-city-pill--primary">
                <MapPin className="w-3.5 h-3.5" /> Embu das Artes (Base)
              </span>
              <span className="dm-city-pill">Taboão da Serra</span>
              <span className="dm-city-pill">Itapecerica da Serra</span>
              <span className="dm-city-pill">Cotia e Granja Viana</span>
              <span className="dm-city-pill">Osasco</span>
              <span className="dm-city-pill">Barueri e Alphaville</span>
              <span className="dm-city-pill">Zona Oeste de SP</span>
              <span className="dm-city-pill">Zona Sul de SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Perguntas frequentes sobre descupinização */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-faq"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-faq" className="dm-section__title">
              Perguntas frequentes sobre descupinização
            </h2>
          </div>

          <div className="dm-faq-list">
            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Qual a diferença entre descupinização e dedetização?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Dedetização é o nome popular para o controle de pragas em geral,
                como baratas e formigas. Descupinização é o tratamento
                específico contra cupins, com vistoria e técnicas próprias para
                madeira e, quando necessário, para o solo e a estrutura do
                imóvel.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>O cupim passa de um móvel para outro?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Pode passar. O cupim de madeira seca se espalha para peças
                próximas, e o cupim de solo pode chegar a vários cômodos pelo
                mesmo caminho. Por isso a vistoria verifica as madeiras ao redor
                do ponto onde o problema apareceu.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Dá para tratar só o móvel atacado?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Depende do tipo de cupim. Quando o ataque é de cupim de madeira
                seca e está restrito a uma peça, o tratamento pode ser
                localizado. No cupim de solo, tratar apenas o móvel não resolve,
                porque a colônia continua fora dele.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Apartamento também tem cupim?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Tem. Em apartamentos, o cupim costuma aparecer em móveis
                planejados, portas, rodapés e armários. Se a origem estiver na
                estrutura do prédio, a solução passa pelo condomínio.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Vale mais a pena trocar a madeira do que tratar?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Depende do estado da peça. Madeira muito comprometida precisa
                ser substituída, mas sem tratar o foco a peça nova também pode
                ser atacada. A vistoria indica o que pode ser tratado e o que
                precisa ser trocado.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Quanto custa uma descupinização?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                O valor depende do tipo de cupim, da quantidade de peças, da
                área atingida e do acesso aos focos — e por isso só é definido
                depois da vistoria no imóvel. As fotos enviadas pelo WhatsApp
                ajudam a preparar essa visita.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>O que mandar pelo WhatsApp para pedir orçamento?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Fotos do pó, dos furos ou dos túneis de terra, os cômodos onde o
                problema aparece, o tipo de imóvel e o bairro. Com isso
                agendamos a vistoria.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* H2 · Peça uma avaliação + [Botão WhatsApp — descupinizacao-final] */}
      <section className="dm-final-cta" aria-labelledby="dm-h2-avaliacao">
        <div className="container">
          <div className="dm-final-cta__box">
            <h2 id="dm-h2-avaliacao" className="dm-final-cta__title">
              Peça uma avaliação
            </h2>
            <p className="dm-final-cta__desc">
              Quanto antes o foco é encontrado, menos madeira se perde. Mande
              fotos do que você está vendo e a nossa equipe orienta o próximo
              passo.
            </p>

            <div className="dm-final-cta__actions">
              <a
                href={waUrls.final}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-origem="descupinizacao-final"
                onClick={() => trackWhatsAppClick("descupinizacao-final")}
                className="dm-wa-btn"
              >
                <img
                  src="/images/logos/whatsapp-white.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 flex-shrink-0 object-contain"
                />
                <span>Pedir orçamento pelo WhatsApp · (11) 94072-4379</span>
              </a>

              <p className="dm-final-cta__alt">
                Prefere outro canal? Veja{" "}
                <Link to="/contato">outras formas de contato</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
