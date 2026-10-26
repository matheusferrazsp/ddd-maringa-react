import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  Bug,
  AlertTriangle,
  Zap,
  Home,
  Building2,
  Store,
  Camera,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Phone,
} from "lucide-react";
import { usePageSEO } from "../utils/seo";
import "../styles/dedetizadora-embu.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const EMBU_SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://dedetizadoramaringa.com.br/#localbusiness",
      name: "Dedetizadora Maringá",
      url: "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
      telephone: "+55-11-94072-4379",
      image:
        "https://dedetizadoramaringa.com.br/images/dedetizadora-maringa-tecnico-atendimento-residencial-og.jpg",
      description:
        "Empresa de controle de pragas sediada em Embu das Artes. Atendimento para casas, apartamentos, condomínios e comércios com dedetização de baratas, desratização, descupinização, controle de mosquitos e percevejos e manejo de pombos e morcegos.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Embu das Artes",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Embu das Artes" },
        { "@type": "City", name: "Taboão da Serra" },
        { "@type": "City", name: "Itapecerica da Serra" },
        { "@type": "City", name: "Cotia" },
        { "@type": "City", name: "Osasco" },
        { "@type": "City", name: "Barueri" },
        { "@type": "City", name: "São Paulo" },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#service",
      name: "Dedetização em Embu das Artes",
      serviceType: "Controle de Pragas e Dedetização",
      provider: {
        "@id": "https://dedetizadoramaringa.com.br/#localbusiness",
      },
      areaServed: {
        "@type": "City",
        name: "Embu das Artes",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de dedetização em Embu das Artes",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Dedetização de baratas" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Desratização" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Descupinização" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Controle de mosquitos e pernilongos",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Controle de percevejo de cama",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Controle de pombos" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Manejo de morcegos" },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#webpage",
      url: "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
      name: "Dedetizadora em Embu das Artes | Dedetizadora Maringá",
      description:
        "Empresa de dedetização de Embu das Artes: baratas, ratos, cupins, mosquitos, percevejos, pombos e morcegos. Conte o problema e peça orçamento pelo WhatsApp.",
      inLanguage: "pt-BR",
      breadcrumb: {
        "@id":
          "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#breadcrumb",
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
          name: "Dedetizadora em Embu das Artes",
          item: "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto custa uma dedetização em Embu das Artes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O valor depende da praga, do tamanho do imóvel, do nível de infestação e do serviço necessário — tratar baratas na cozinha de um apartamento é bem diferente de tratar cupins no telhado de uma casa. Por isso o orçamento é feito depois de entender o caso, pelas fotos ou em uma avaliação no local.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso sair de casa durante a dedetização?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende do método e do produto definidos para o seu caso. Em alguns serviços a rotina muda pouco; em outros, pessoas e animais precisam ficar fora do ambiente por um período. Você recebe essa orientação antes do serviço, para se organizar.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo dura o efeito da dedetização?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não existe um prazo único. A duração varia com a praga, o produto, o local tratado e os cuidados depois do serviço. Limpeza pesada das áreas tratadas, obras e pragas que chegam de imóveis vizinhos ou da rede de esgoto podem reduzir o efeito.",
          },
        },
        {
          "@type": "Question",
          name: "Como saber se uma dedetizadora é confiável?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pergunte pela licença sanitária da empresa, por quem é o responsável técnico e por quais produtos serão usados, que precisam ter registro na Anvisa. Desconfie de quem fecha o serviço sem perguntar nada sobre o imóvel ou promete resolver qualquer praga da mesma forma.",
          },
        },
        {
          "@type": "Question",
          name: "A dedetização é segura para crianças e animais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Os riscos dependem do produto, da forma de aplicação e do cumprimento das orientações de preparo e de retorno ao ambiente. Por isso perguntamos, no primeiro contato, quem vive no imóvel, e as orientações são passadas antes do serviço.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês atendem condomínios e empresas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Atendemos condomínios residenciais, comércios e empresas, com data e horário combinados com o síndico ou o responsável pelo local.",
          },
        },
        {
          "@type": "Question",
          name: "O que devo informar para pedir o orçamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O bairro, o tipo e o tamanho aproximado do imóvel, a praga que aparece (ou uma foto), há quanto tempo o problema existe e se há crianças, gestantes ou animais no local.",
          },
        },
      ],
    },
  ],
};

export const DedetizadoraEmbuPage: React.FC = () => {
  usePageSEO({
    title: "Dedetizadora em Embu das Artes | Dedetizadora Maringá",
    description:
      "Empresa de dedetização de Embu das Artes: baratas, ratos, cupins, mosquitos, percevejos, pombos e morcegos. Conte o problema e peça orçamento pelo WhatsApp.",
    canonical: "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
    ogTitle: "Dedetizadora em Embu das Artes — Dedetizadora Maringá",
    ogDescription:
      "Controle de baratas, ratos, cupins e outras pragas em Embu das Artes. Orçamento pelo WhatsApp (11) 94072-4379.",
    ogImage:
      "https://dedetizadoramaringa.com.br/images/dedetizadora-maringa-tecnico-atendimento-residencial-og.jpg",
    ogImageAlt:
      "Técnico da Dedetizadora Maringá, com equipamento de proteção, durante atendimento em uma residência",
    jsonLd: EMBU_SCHEMA_JSON_LD,
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
    topo: "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Dedetizadora%20em%20Embu%20das%20Artes%2C%20e%20gostaria%20de%20um%20or%C3%A7amento.",
    servicosFoto:
      "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Dedetizadora%20em%20Embu%20das%20Artes%2C%20e%20quero%20enviar%20uma%20foto%20da%20praga.",
    comoFunciona:
      "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Dedetizadora%20em%20Embu%20das%20Artes.%20Meu%20bairro%20%C3%A9%3A%20",
    final:
      "https://wa.me/5511940724379?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20p%C3%A1gina%20Dedetizadora%20em%20Embu%20das%20Artes%2C%20e%20quero%20falar%20com%20a%20equipe.",
  };

  return (
    <div className="dm-embu">
      {/* Navegação (breadcrumb): Início › Dedetizadora em Embu das Artes */}
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
              <span aria-current="page">Dedetizadora em Embu das Artes</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section (H1 + Foto 1 + Botão embu-topo) */}
      <section className="dm-hero" aria-labelledby="dm-h1-embu">
        <div className="container">
          <div className="dm-hero__grid">
            <div>
              <div className="dm-hero__badge">
                <MapPin className="w-4 h-4" />
                <span>Sede Própria em Embu das Artes • SP</span>
              </div>

              <h1 id="dm-h1-embu" className="dm-hero__title">
                Dedetizadora em Embu das Artes
              </h1>

              <p className="dm-hero__lead">
                A Dedetizadora Maringá é uma empresa de controle de pragas
                sediada em Embu das Artes. Atendemos casas, apartamentos,
                condomínios e comércios da cidade e da região com dedetização de
                baratas, desratização, descupinização, controle de mosquitos e
                percevejos e manejo de pombos e morcegos.
              </p>

              <div className="dm-hero__tip">
                Para pedir um orçamento, chame no WhatsApp e conte o que está
                acontecendo: qual praga aparece, em que parte do imóvel e desde
                quando. Uma foto ajuda bastante — da praga, das fezes, do pó de
                madeira ou do estrago.
              </div>

              <div className="dm-hero__cta-box">
                <a
                  href={waUrls.topo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-origem="embu-topo"
                  onClick={() => trackWhatsAppClick("embu-topo")}
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
                  Orçamento pelo WhatsApp: <strong>(11) 94072-4379</strong>
                </span>
              </div>
            </div>

            {/* [Foto 1] */}
            <figure className="dm-figure">
              <img
                src="/images/dedetizadora-maringa-tecnico-atendimento-residencial.webp"
                alt="Técnico da Dedetizadora Maringá, com equipamento de proteção, durante atendimento em uma residência"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                className="dm-figure__img"
              />
              <figcaption className="dm-figure__caption">
                <ShieldCheck
                  className="w-4 h-4"
                  style={{ color: "var(--accent-emerald)" }}
                />
                <span>
                  Atendimento técnico com equipamento de proteção individual
                  completo
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* H2 · Uma empresa de controle de pragas de Embu das Artes */}
      <section className="dm-section" aria-labelledby="dm-h2-empresa">
        <div className="container">
          <div className="dm-about-grid">
            <div className="dm-about-prose">
              <h2 id="dm-h2-empresa" className="dm-section__title">
                Uma empresa de controle de pragas de Embu das Artes
              </h2>
              <p>
                A Dedetizadora Maringá tem base em Embu das Artes e atende a
                partir daqui a própria cidade e os municípios vizinhos. Embu faz
                divisa com Taboão da Serra, Cotia, Itapecerica da Serra e com a
                Zona Sul de São Paulo — e é justamente essa a região onde
                trabalhamos no dia a dia.
              </p>
              <p>
                Você encontra a empresa no Google Maps e na Pesquisa Google como
                Dedetizadora Maringá, com o mesmo telefone desta página. O
                contato pelo WhatsApp é feito diretamente com a nossa equipe,
                que avalia o caso e passa o orçamento.
              </p>
            </div>

            <aside
              className="dm-advice-box"
              aria-label="Conselho importante antes de contratar"
            >
              <div className="dm-advice-box__badge">
                <ShieldCheck className="w-4 h-4" />
                <span>Dica de Transparência</span>
              </div>
              <p>
                Um conselho que vale para qualquer contratação: antes de fechar,
                confirme se você está falando com a empresa que vai executar o
                serviço ou com um site que repassa pedidos para terceiros. Quer
                saber mais sobre nós?{" "}
                <Link to="/sobre" className="dm-inline-link">
                  Conheça a Dedetizadora Maringá
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* H2 · Serviços de dedetização em Embu das Artes */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-servicos"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-servicos" className="dm-section__title">
              Serviços de dedetização em Embu das Artes
            </h2>
            <p className="dm-section__intro">
              O tratamento certo depende da praga, do local e do tamanho do
              problema, por isso o método é sempre definido depois da avaliação.
              Estes são os serviços que oferecemos em Embu das Artes — você
              também pode consultar{" "}
              <Link to="/servicos" className="dm-inline-link">
                todos os nossos serviços
              </Link>
              .
            </p>
          </div>

          {/* 3 Serviços Principais com Fotos (Foto 2, Foto 3, Foto 4) */}
          <div className="dm-services-featured">
            {/* H3 · Dedetização de baratas + [Foto 2] */}
            <article className="dm-service-card">
              <div className="dm-service-card__media">
                <img
                  src="/images/dedetizadora-maringa-atendimento-baratas-cozinha.jpg"
                  alt="Técnico da Dedetizadora Maringá em atendimento contra baratas em uma cozinha residencial"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="dm-service-card__img"
                />
              </div>
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <Bug className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">
                    Dedetização de baratas
                  </h3>
                </div>
                <p className="dm-service-card__text">
                  Baratas na cozinha, em armários, saindo de ralos ou circulando
                  à noite. A barata pequena que vive dentro de casa e a barata
                  grande que vem do esgoto pedem tratamentos diferentes; por
                  isso perguntamos onde ela aparece e, se possível, pedimos uma
                  foto antes de orçar.
                </p>
              </div>
            </article>

            {/* H3 · Desratização + [Foto 3] */}
            <article className="dm-service-card">
              <div className="dm-service-card__media">
                <img
                  src="/images/dedetizadora-maringa-desratizacao-inspecao.jpg"
                  alt="Técnico da Dedetizadora Maringá inspecionando possíveis pontos de entrada de ratos em um imóvel"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="dm-service-card__img"
                />
              </div>
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">Desratização</h3>
                </div>
                <p className="dm-service-card__text">
                  Barulho no forro à noite, fezes, fios ou embalagens roídos e
                  marcas de passagem em muros e telhados são os sinais mais
                  comuns. Além do controle dos roedores, a avaliação procura os
                  pontos por onde eles estão entrando, porque é isso que evita
                  que o problema volte.
                </p>
              </div>
            </article>

            {/* H3 · Descupinização + [Foto 4] */}
            <article className="dm-service-card">
              <div className="dm-service-card__media">
                <img
                  src="/images/dedetizadora-maringa-descupinizacao-madeira.jpg"
                  alt="Peça de madeira com sinais de ataque de cupim avaliada pela equipe da Dedetizadora Maringá"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="dm-service-card__img"
                />
              </div>
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">Descupinização</h3>
                </div>
                <p className="dm-service-card__text">
                  Pó de madeira perto de portas, rodapés e móveis, túneis de
                  terra nas paredes ou cupins com asas perto das lâmpadas
                  indicam que vale chamar uma avaliação. O tipo de cupim e a
                  extensão do ataque definem o tratamento — e é bom não esperar:
                  quanto antes o foco é encontrado, menor costuma ser o estrago.
                </p>
              </div>
            </article>
          </div>

          {/* 4 Demais Serviços (Mosquitos, Percevejo, Pombos, Morcegos) */}
          <div className="dm-services-secondary">
            <article className="dm-service-card">
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">
                    Mosquitos e pernilongos
                  </h3>
                </div>
                <p className="dm-service-card__text">
                  O controle de mosquitos começa pelos criadouros: água parada
                  em vasos, calhas, ralos, piscinas e objetos no quintal.
                  Avaliamos o imóvel, indicamos o que precisa ser corrigido e,
                  quando o caso pede, fazemos o tratamento das áreas de abrigo
                  dos insetos.
                </p>
              </div>
            </article>

            <article className="dm-service-card">
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <Home className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">Percevejo de cama</h3>
                </div>
                <p className="dm-service-card__text">
                  Picadas em sequência ao acordar e manchinhas escuras no
                  colchão ou na cabeceira são sinais típicos de percevejo. O
                  resultado depende muito da preparação do ambiente antes do
                  serviço, e passamos essas orientações com antecedência.
                </p>
              </div>
            </article>

            <article className="dm-service-card">
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">Pombos</h3>
                </div>
                <p className="dm-service-card__text">
                  O controle de pombos é feito com barreiras e vedações que
                  impedem o pouso e a entrada em telhados, forros, marquises e
                  varandas, além da orientação sobre a limpeza das áreas sujas
                  por fezes.
                </p>
              </div>
            </article>

            <article className="dm-service-card">
              <div className="dm-service-card__body">
                <div className="dm-service-card__header">
                  <div className="dm-service-card__icon">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="dm-service-card__title">Morcegos</h3>
                </div>
                <p className="dm-service-card__text">
                  Morcegos são fauna silvestre protegida por lei e não podem ser
                  mortos. O manejo correto consiste em identificar por onde eles
                  entram e impedir que voltem depois de saírem. Se um morcego
                  aparecer dentro de casa, não toque nele e mantenha crianças e
                  animais afastados.
                </p>
              </div>
            </article>
          </div>

          {/* [Botão WhatsApp — embu-servicos-foto] */}
          <div className="dm-photo-cta-banner">
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}
            >
              <Camera
                className="w-7 h-7 flex-shrink-0"
                style={{ color: "#38bdf8" }}
              />
              <p className="dm-photo-cta-banner__text">
                Não sabe que praga é? Mande a foto e a gente identifica.
              </p>
            </div>
            <a
              href={waUrls.servicosFoto}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-origem="embu-servicos-foto"
              onClick={() => trackWhatsAppClick("embu-servicos-foto")}
              className="dm-wa-btn"
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
      </section>

      {/* H2 · Atendimento para casas, condomínios e comércios */}
      <section className="dm-section" aria-labelledby="dm-h2-publicos">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-publicos" className="dm-section__title">
              Atendimento para casas, condomínios e comércios
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
                Quintal, jardim, telhado e madeira trazem pragas diferentes das
                de um apartamento. Junto com o serviço, indicamos o que vale
                corrigir no imóvel — uma telha sem vedação, um ralo sem tampa,
                galhos encostando no telhado — para reduzir a chance de
                reinfestação.
              </p>
            </div>

            <div className="dm-audience-card">
              <div className="dm-audience-card__top">
                <div className="dm-audience-card__icon">
                  <Building2 className="w-5 h-5" />
                </div>
                <strong className="dm-audience-card__label">
                  Condomínios.
                </strong>
              </div>
              <p>
                Em prédios e condomínios, a praga de uma unidade circula pelas
                tubulações e áreas comuns. O tratamento rende mais quando é
                planejado em conjunto com o síndico ou a administradora, com
                data combinada e aviso aos moradores.
              </p>
            </div>

            <div className="dm-audience-card">
              <div className="dm-audience-card__top">
                <div className="dm-audience-card__icon">
                  <Store className="w-5 h-5" />
                </div>
                <strong className="dm-audience-card__label">
                  Comércios e empresas.
                </strong>
              </div>
              <p>
                Restaurantes, padarias, mercados e outros estabelecimentos
                costumam precisar de controle de pragas periódico e de
                documentação do serviço para a fiscalização sanitária. O dia e o
                horário são combinados com o responsável pelo local. Conheça o
                nosso{" "}
                <Link to="/empresas" className="dm-inline-link">
                  atendimento para empresas e condomínios
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Onde atendemos */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-onde"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-onde" className="dm-section__title">
              Onde atendemos
            </h2>
          </div>

          <div className="dm-areas-box">
            <p>
              Atendemos Embu das Artes e a região oeste e sudoeste da Grande São
              Paulo, incluindo Taboão da Serra, Itapecerica da Serra, Cotia e
              Granja Viana, Osasco, Barueri e Alphaville, além de bairros das
              zonas Oeste e Sul da capital.
            </p>
            <p>
              Ao chamar no WhatsApp, informe o seu bairro para combinarmos o
              atendimento.
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
              <span className="dm-city-pill">Zona Sul de SP</span>
              <span className="dm-city-pill">Zona Oeste de SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Como funciona o atendimento */}
      <section className="dm-section" aria-labelledby="dm-h2-como-funciona">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-como-funciona" className="dm-section__title">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="dm-how-layout">
            <ol className="dm-steps-list">
              <li className="dm-step-item">
                <span className="dm-step-item__num">1</span>
                <p className="dm-step-item__text">
                  Você descreve o problema pelo WhatsApp: bairro, tipo de
                  imóvel, praga que aparece e se há crianças, idosos, gestantes
                  ou animais no local. Fotos ajudam.
                </p>
              </li>
              <li className="dm-step-item">
                <span className="dm-step-item__num">2</span>
                <p className="dm-step-item__text">
                  Avaliamos o caso. Às vezes as fotos bastam para entender a
                  situação; em outras, como cupim de solo ou ratos no forro, é
                  preciso ver o imóvel.
                </p>
              </li>
              <li className="dm-step-item">
                <span className="dm-step-item__num">3</span>
                <p className="dm-step-item__text">
                  Você recebe o orçamento com o que será feito, em quais áreas e
                  de que forma.
                </p>
              </li>
              <li className="dm-step-item">
                <span className="dm-step-item__num">4</span>
                <p className="dm-step-item__text">
                  Passamos as orientações de preparação indicadas para o serviço
                  contratado.
                </p>
              </li>
              <li className="dm-step-item">
                <span className="dm-step-item__num">5</span>
                <p className="dm-step-item__text">
                  Executamos o serviço conforme o plano definido na avaliação.
                </p>
              </li>
              <li className="dm-step-item">
                <span className="dm-step-item__num">6</span>
                <p className="dm-step-item__text">
                  Orientamos sobre os cuidados depois da aplicação e sobre o que
                  ajuda a manter o imóvel livre de pragas.
                </p>
              </li>
            </ol>

            <div className="dm-how-aside">
              {/* [Foto 5] */}
              <figure className="dm-figure">
                <img
                  src="/images/dedetizadora-maringa-equipe-equipamentos.webp"
                  alt="Equipe da Dedetizadora Maringá com os equipamentos usados nos atendimentos"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="dm-figure__img"
                />
                <figcaption className="dm-figure__caption">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "var(--accent-cyan)" }}
                  />
                  <span>
                    Equipe técnica equipada para atendimentos residenciais e
                    comerciais
                  </span>
                </figcaption>
              </figure>

              {/* [Botão WhatsApp — embu-como-funciona] */}
              <div className="dm-how-cta-card">
                <p className="dm-how-cta-card__prompt">
                  Diga o bairro, o tipo de imóvel e a praga.
                </p>
                <a
                  href={waUrls.comoFunciona}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wa-origem="embu-como-funciona"
                  onClick={() => trackWhatsAppClick("embu-como-funciona")}
                  className="dm-wa-btn"
                  style={{ width: "100%" }}
                >
                  <img
                    src="/images/logos/whatsapp-white.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 flex-shrink-0 object-contain"
                  />
                  <span>Pedir orçamento pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Segurança: o que observar antes e depois do serviço */}
      <section
        className="dm-section dm-section--alt"
        aria-labelledby="dm-h2-seguranca"
      >
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-seguranca" className="dm-section__title">
              Segurança: o que observar antes e depois do serviço
            </h2>
          </div>

          <div className="dm-safety-grid">
            <div className="dm-safety-card">
              <p>
                Os cuidados variam de acordo com o produto, o método de
                aplicação e as características do imóvel. Por isso, as
                orientações de cada atendimento são passadas antes do serviço e
                devem ser seguidas como indicado pelo responsável técnico.
              </p>
            </div>
            <div className="dm-safety-card">
              <p>
                No primeiro contato, avise se há no imóvel crianças, gestantes,
                idosos, pessoas com alergia ou problemas respiratórios e animais
                — inclusive aves, peixes e outros animais de estimação. Essas
                informações influenciam o planejamento.
              </p>
            </div>
            <div className="dm-safety-card">
              <p>
                Em muitos serviços, pede-se que alimentos e utensílios fiquem
                guardados, que os potes de água e ração dos animais sejam
                recolhidos e que o ambiente seja ventilado antes do retorno. O
                tempo fora do ambiente e o momento certo de limpar as áreas
                tratadas dependem do que foi aplicado.
              </p>
            </div>
            <div className="dm-safety-card">
              <p>
                Você também pode pedir o nome dos produtos que serão usados.
                Produtos para controle de pragas precisam ter registro na
                Anvisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 · Perguntas frequentes sobre dedetização em Embu das Artes */}
      <section className="dm-section" aria-labelledby="dm-h2-faq">
        <div className="container">
          <div className="dm-section__header">
            <h2 id="dm-h2-faq" className="dm-section__title">
              Perguntas frequentes sobre dedetização em Embu das Artes
            </h2>
          </div>

          <div className="dm-faq-list">
            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Quanto custa uma dedetização em Embu das Artes?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                O valor depende da praga, do tamanho do imóvel, do nível de
                infestação e do serviço necessário — tratar baratas na cozinha
                de um apartamento é bem diferente de tratar cupins no telhado de
                uma casa. Por isso o orçamento é feito depois de entender o
                caso, pelas fotos ou em uma avaliação no local.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Preciso sair de casa durante a dedetização?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Depende do método e do produto definidos para o seu caso. Em
                alguns serviços a rotina muda pouco; em outros, pessoas e
                animais precisam ficar fora do ambiente por um período. Você
                recebe essa orientação antes do serviço, para se organizar.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Quanto tempo dura o efeito da dedetização?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Não existe um prazo único. A duração varia com a praga, o
                produto, o local tratado e os cuidados depois do serviço.
                Limpeza pesada das áreas tratadas, obras e pragas que chegam de
                imóveis vizinhos ou da rede de esgoto podem reduzir o efeito.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Como saber se uma dedetizadora é confiável?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Pergunte pela licença sanitária da empresa, por quem é o
                responsável técnico e por quais produtos serão usados, que
                precisam ter registro na Anvisa. Desconfie de quem fecha o
                serviço sem perguntar nada sobre o imóvel ou promete resolver
                qualquer praga da mesma forma.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>A dedetização é segura para crianças e animais?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Os riscos dependem do produto, da forma de aplicação e do
                cumprimento das orientações de preparo e de retorno ao ambiente.
                Por isso perguntamos, no primeiro contato, quem vive no imóvel,
                e as orientações são passadas antes do serviço.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>Vocês atendem condomínios e empresas?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                Sim. Atendemos condomínios residenciais, comércios e empresas,
                com data e horário combinados com o síndico ou o responsável
                pelo local.
              </p>
            </article>

            <article className="dm-faq-item">
              <h3 className="dm-faq-item__question">
                <span>O que devo informar para pedir o orçamento?</span>
                <HelpCircle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </h3>
              <p className="dm-faq-item__answer">
                O bairro, o tipo e o tamanho aproximado do imóvel, a praga que
                aparece (ou uma foto), há quanto tempo o problema existe e se há
                crianças, gestantes ou animais no local.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* H2 · Fale com a Dedetizadora Maringá + [Botão WhatsApp — embu-final] */}
      <section className="dm-final-cta" aria-labelledby="dm-h2-fale">
        <div className="container">
          <div className="dm-final-cta__box">
            <h2 id="dm-h2-fale" className="dm-final-cta__title">
              Fale com a Dedetizadora Maringá
            </h2>
            <p className="dm-final-cta__desc">
              Barata na cozinha, barulho no forro, pó de madeira perto da porta,
              pombos no telhado: você não precisa saber o nome da praga para
              pedir ajuda. Mande uma mensagem contando o que está vendo, e a
              nossa equipe orienta o próximo passo.
            </p>

            <div className="dm-final-cta__actions">
              <a
                href={waUrls.final}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-origem="embu-final"
                onClick={() => trackWhatsAppClick("embu-final")}
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
                Prefere outro canal?{" "}
                <Link to="/contato">Veja outras formas de contato</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
