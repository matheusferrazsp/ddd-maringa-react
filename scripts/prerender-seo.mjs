import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const baseHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(baseHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

const EMBU_SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://dedetizadoramaringa.com.br/#localbusiness",
      "name": "Dedetizadora Maringá",
      "url": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
      "telephone": "+55-11-94072-4379",
      "image": "https://dedetizadoramaringa.com.br/images/dedetizadora-maringa-tecnico-atendimento-residencial-og.jpg",
      "description":
        "Empresa de controle de pragas sediada em Embu das Artes. Atendimento para casas, apartamentos, condomínios e comércios com dedetização de baratas, desratização, descupinização, controle de mosquitos e percevejos e manejo de pombos e morcegos.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Embu das Artes",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "areaServed": [
        { "@type": "City", "name": "Embu das Artes" },
        { "@type": "City", "name": "Taboão da Serra" },
        { "@type": "City", "name": "Itapecerica da Serra" },
        { "@type": "City", "name": "Cotia" },
        { "@type": "City", "name": "Osasco" },
        { "@type": "City", "name": "Barueri" },
        { "@type": "City", "name": "São Paulo" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#service",
      "name": "Dedetização em Embu das Artes",
      "serviceType": "Controle de Pragas e Dedetização",
      "provider": {
        "@id": "https://dedetizadoramaringa.com.br/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Embu das Artes"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de dedetização em Embu das Artes",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedetização de baratas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desratização" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Descupinização" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Controle de mosquitos e pernilongos" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Controle de percevejo de cama" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Controle de pombos" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manejo de morcegos" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#webpage",
      "url": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
      "name": "Dedetizadora em Embu das Artes | Dedetizadora Maringá",
      "description":
        "Empresa de dedetização de Embu das Artes: baratas, ratos, cupins, mosquitos, percevejos, pombos e morcegos. Conte o problema e peça orçamento pelo WhatsApp.",
      "inLanguage": "pt-BR",
      "breadcrumb": {
        "@id": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://dedetizadoramaringa.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dedetizadora em Embu das Artes",
          "item": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto custa uma dedetização em Embu das Artes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor depende da praga, do tamanho do imóvel, do nível de infestação e do serviço necessário — tratar baratas na cozinha de um apartamento é bem diferente de tratar cupins no telhado de uma casa. Por isso o orçamento é feito depois de entender o caso, pelas fotos ou em uma avaliação no local."
          }
        },
        {
          "@type": "Question",
          "name": "Preciso sair de casa durante a dedetização?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do método e do produto definidos para o seu caso. Em alguns serviços a rotina muda pouco; em outros, pessoas e animais precisam ficar fora do ambiente por um período. Você recebe essa orientação antes do serviço, para se organizar."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo dura o efeito da dedetização?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não existe um prazo único. A duração varia com a praga, o produto, o local tratado e os cuidados depois do serviço. Limpeza pesada das áreas tratadas, obras e pragas que chegam de imóveis vizinhos ou da rede de esgoto podem reduzir o efeito."
          }
        },
        {
          "@type": "Question",
          "name": "Como saber se uma dedetizadora é confiável?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pergunte pela licença sanitária da empresa, por quem é o responsável técnico e por quais produtos serão usados, que precisam ter registro na Anvisa. Desconfie de quem fecha o serviço sem perguntar nada sobre o imóvel ou promete resolver qualquer praga da mesma forma."
          }
        },
        {
          "@type": "Question",
          "name": "A dedetização é segura para crianças e animais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os riscos dependem do produto, da forma de aplicação e do cumprimento das orientações de preparo e de retorno ao ambiente. Por isso perguntamos, no primeiro contato, quem vive no imóvel, e as orientações são passadas antes do serviço."
          }
        },
        {
          "@type": "Question",
          "name": "Vocês atendem condomínios e empresas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Atendemos condomínios residenciais, comércios e empresas, com data e horário combinados com o síndico ou o responsável pelo local."
          }
        },
        {
          "@type": "Question",
          "name": "O que devo informar para pedir o orçamento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O bairro, o tipo e o tamanho aproximado do imóvel, a praga que aparece (ou uma foto), há quanto tempo o problema existe e se há crianças, gestantes ou animais no local."
          }
        }
      ]
    }
  ]
};

const routes = [
  {
    route: "dedetizadora-embu-das-artes",
    title: "Dedetizadora em Embu das Artes | Dedetizadora Maringá",
    description:
      "Empresa de dedetização de Embu das Artes: baratas, ratos, cupins, mosquitos, percevejos, pombos e morcegos. Conte o problema e peça orçamento pelo WhatsApp.",
    canonical: "https://dedetizadoramaringa.com.br/dedetizadora-embu-das-artes",
    ogTitle: "Dedetizadora em Embu das Artes — Dedetizadora Maringá",
    ogDescription:
      "Controle de baratas, ratos, cupins e outras pragas em Embu das Artes. Orçamento pelo WhatsApp (11) 94072-4379.",
    ogImage:
      "https://dedetizadoramaringa.com.br/images/dedetizadora-maringa-tecnico-atendimento-residencial-og.jpg",
    jsonLd: EMBU_SCHEMA_JSON_LD,
  },
  {
    route: "sobre",
    title: "Sobre a Dedetizadora Maringá | Controle de Pragas em SP",
    description:
      "Conheça a história, os valores e a estrutura da Dedetizadora Maringá. Sede em Embu das Artes e 6 anos de experiência em dedetização e desentupimento na Grande SP.",
    canonical: "https://dedetizadoramaringa.com.br/sobre",
  },
  {
    route: "servicos",
    title: "Serviços de Dedetização e Desentupimento | Dedetizadora Maringá",
    description:
      "Conheça todos os serviços da Dedetizadora Maringá: dedetização geral, descupinização, desratização, controle de pombos, limpeza de caixa d'água e desentupimento 24h.",
    canonical: "https://dedetizadoramaringa.com.br/servicos",
  },
  {
    route: "empresas",
    title: "Atendimento para Empresas e Condomínios | Dedetizadora Maringá",
    description:
      "Controle integrado de pragas (MIP), laudo técnico com ART e conformidade ANVISA para condomínios, restaurantes, comércios, indústrias e escolas na Grande SP.",
    canonical: "https://dedetizadoramaringa.com.br/empresas",
  },
  {
    route: "contato",
    title: "Contato e Orçamento 24h | Dedetizadora Maringá",
    description:
      "Fale com a Dedetizadora Maringá pelo WhatsApp (11) 94072-4379 ou solicite um orçamento online. Base em Embu das Artes e atendimento 24h na Grande São Paulo.",
    canonical: "https://dedetizadoramaringa.com.br/contato",
  },
  {
    route: "blog",
    title: "Blog & Dicas de Controle de Pragas e Desentupimento | Dedetizadora Maringá",
    description:
      "Artigos produzidos pela equipe da Dedetizadora Maringá para proteger sua casa, condomínio ou empresa contra pragas urbanas e entupimentos em São Paulo.",
    canonical: "https://dedetizadoramaringa.com.br/blog",
  },
  {
    route: "politica-de-privacidade",
    title: "Política de Privacidade | Dedetizadora Maringá",
    description:
      "Política de Privacidade e proteção de dados pessoais (LGPD) da Dedetizadora e Desentupidora Maringá.",
    canonical: "https://dedetizadoramaringa.com.br/politica-de-privacidade",
  },
];

for (const cfg of routes) {
  let html = baseHtml;
  const ogTitle = cfg.ogTitle || cfg.title;
  const ogDesc = cfg.ogDescription || cfg.description;
  const ogImg = cfg.ogImage || "https://dedetizadoramaringa.com.br/images/logos/logo.png";

  html = html.replace(/<title>.*?<\/title>/s, `<title>${cfg.title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${cfg.description}" />`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${cfg.canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${ogTitle}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${ogDesc}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${cfg.canonical}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${ogImg}" />`
  );
  html = html.replace(
    /<meta property="og:image:secure_url" content=".*?" \/>/,
    `<meta property="og:image:secure_url" content="${ogImg}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${ogTitle}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${ogDesc}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${ogImg}" />`
  );

  if (cfg.jsonLd) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json" data-page-schema="true">\n${JSON.stringify(cfg.jsonLd, null, 2)}\n</script>`
    );
  }

  const routeDir = path.join(distDir, cfg.route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
  fs.writeFileSync(path.join(distDir, `${cfg.route}.html`), html, "utf-8");
  console.log(`Generated static SEO HTML for /${cfg.route}`);
}
