import type { BlogPost } from '../types/blog';
import { apiClient } from './apiClient';

const STORAGE_KEY = 'ddd_maringa_blog_posts_v1';

export const BLOG_CATEGORIES = [
  'Dedetização',
  'Desentupimento',
  'Dicas & Prevenção',
  'Corporativo (PJ)',
  'Saúde & Sanitização',
] as const;

export const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'como-eliminar-cupins-madeira-solo-guia-completo',
    title: 'Guia Completo: Como Identificar e Eliminar Cupins de Madeira e Solo com Segurança',
    excerpt: 'Descubra as diferenças críticas entre cupins de madeira seca e subterrâneos, os sinais silenciosos de destruição na sua estrutura e como o tratamento profissional químico cria uma barreira protetora duradoura.',
    category: 'Dedetização',
    tags: ['Cupins', 'Controle de Pragas', 'Dicas Residenciais', 'Descupinização'],
    coverImage: '/images/trabalho/telhado.jpg',
    coverImageAlt: 'Técnico especialista da Dedetizadora Maringá inspecionando forro de madeira',
    author: {
      name: 'Equipe Técnica DDD Maringá',
      role: 'Especialistas em Descupinização',
      avatar: '/images/logos/favicon-icon.png',
    },
    publishDate: '2026-10-10',
    readTimeMinutes: 6,
    status: 'published',
    metaDescription: 'Aprenda a identificar e erradicar cupins de madeira seca e cupins de solo. Dicas práticas de prevenção e métodos profissionais de descupinização em SP.',
    keywords: 'descupinização sp, cupim de solo, cupim de madeira seca, dedetizadora de cupins maringá, controle de cupins',
    createdAt: '2026-10-10T10:00:00.000Z',
    updatedAt: '2026-10-10T10:00:00.000Z',
    blocks: [
      {
        id: 'b-1',
        type: 'paragraph',
        content: 'Os cupins estão entre as pragas urbanas mais devastadoras para residências, condomínios e instalações comerciais. Diferente de baratas ou formigas que causam incômodo visual imediato, os cupins agem em silêncio durante meses ou anos, corroendo vigas de sustentação, batentes de portas, pisos de madeira e até livros ou caixas de papelão.',
      },
      {
        id: 'b-2',
        type: 'callout',
        variant: 'warning',
        title: 'Alerta da Equipe Técnica',
        content: 'O pozinho fino granulado encontrado no chão perto de móveis ou rodapés não é serragem comum: são as fezes (microrrecifes) de cupins de madeira seca. Ao ver esse sinal, a colônia já está consolidada no interior da peça.',
      },
      {
        id: 'b-3',
        type: 'heading',
        level: 'h2',
        text: 'Diferença Fundamental: Cupim de Madeira Seca vs. Cupim Subterrâneo',
      },
      {
        id: 'b-4',
        type: 'paragraph',
        content: 'Saber qual espécie está atacando o imóvel é decisivo para aplicar o protocolo correto de erradicação. O cupim de madeira seca instala seu ninho diretamente dentro do móvel ou batente. Já o cupim de solo (subterrâneo) constrói ninhos colossais na terra e constrói túneis de terra para invadir o concreto e alcançar a madeira.',
      },
      {
        id: 'b-5',
        type: 'stat',
        number: '100.000+',
        label: 'Indivíduos por Colônia Subterrânea',
        description: 'Uma única colônia de cupins de solo pode devorar até 5 kg de madeira por mês e percorrer dezenas de metros por tubulações elétricas e fissuras estruturais.',
      },
      {
        id: 'b-6',
        type: 'heading',
        level: 'h2',
        text: '5 Sinais Críticos de Infestação para Ficar Atento',
      },
      {
        id: 'b-7',
        type: 'checklist',
        title: 'Checklist de Inspeção Rápida no seu Imóvel',
        items: [
          'Pó fino cor de areia ou café perto de rodapés, forros e armários.',
          'Madeira oca: ao bater com os nós dos dedos, o som soa vazio e a superfície afunda com leve pressão.',
          'Asas translúcidas caídas perto de lâmpadas ou janelas após dias chuvosos (revoada de siriris/alados).',
          'Túneis ou cordões de terra terrosa subindo por paredes, rodapés ou shafts.',
          'Portas ou janelas emperrando subitamente sem causa aparente de umidade.',
        ],
      },
      {
        id: 'b-8',
        type: 'callout',
        variant: 'tip',
        title: 'Por que venenos caseiros de supermercado não funcionam?',
        content: 'Inseticidas aerossóis comuns apenas matam os operários superficiais e assustam o restante da colônia. O efeito repelente faz com que a rainha e os reprodutores migrem para cômodos vizinhos, espalhando a praga por todo o imóvel.',
      },
      {
        id: 'b-9',
        type: 'cta',
        title: 'Suspeita de cupins no seu telhado, forro ou móveis?',
        description: 'A Dedetizadora Maringá realiza inspeção técnica minuciosa com barreira química de longo prazo e garantia com laudo técnico.',
        buttonText: 'Solicitar Vistoria Gratuita via WhatsApp',
        buttonLink: 'https://wa.me/+5511940724379?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20cupins%20e%20gostaria%20de%20agendar%20uma%20vistoria%20t%C3%A9cnica.',
        variant: 'whatsapp',
      },
      {
        id: 'b-10',
        type: 'heading',
        level: 'h2',
        text: 'Perguntas Frequentes sobre Descupinização (FAQ)',
      },
      {
        id: 'b-11',
        type: 'faq',
        title: 'Dúvidas Mais Comuns de Nossos Clientes',
        items: [
          {
            question: 'É necessário sair de casa durante a aplicação?',
            answer: 'Para tratamento localizado em móveis pontuais, nem sempre. Porém, para barreira química em forros ou calda cupinicida profunda, recomendamos afastamento de crianças e pets de 4 a 12 horas, seguindo rigorosamente as normas de segurança ANVISA.',
          },
          {
            question: 'O tratamento de descupinização tem garantia?',
            answer: 'Sim! Todos os nossos serviços contam com certificado técnico e garantia por escrito de até 1 ano para tratamentos integrais de barreira protetora.',
          },
          {
            question: 'A aplicação mancha pisos de madeira nobre ou porcelanato?',
            answer: 'Não. Utilizamos equipamentos de injeção precisa e solventes de grau farmacêutico e hidrodispersíveis que não agridem vernizes, tintas nem resinas de acabamento.',
          },
        ],
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'desentupimento-preventivo-5-sinais-canos-entupidos',
    title: 'Desentupimento Preventivo: 5 Sinais de que Seus Canos Estão Prestes a Transbordar',
    excerpt: 'Mau cheiro repentino nos ralos, água descendo devagar na pia ou gorgolejo nas tubulações? Conheça os indícios precoces e evite infiltrações graves com técnicas modernas de hidrojateamento.',
    category: 'Desentupimento',
    tags: ['Desentupimento 24h', 'Hidrojateamento', 'Esgoto', 'Prevenção'],
    coverImage: '/images/trabalho/abracaf.jpg',
    coverImageAlt: 'Equipamento de hidrojateamento e equipe técnica desentupidora maringá',
    author: {
      name: 'Carlos Oliveira',
      role: 'Chefe de Operações Hidráulicas',
      avatar: '/images/logos/favicon-icon.png',
    },
    publishDate: '2026-10-08',
    readTimeMinutes: 5,
    status: 'published',
    metaDescription: 'Entenda os sinais de alerta de tubulações obstruídas e como o desentupimento preventivo economiza até 70% em reparos hidráulicos em São Paulo.',
    keywords: 'desentupidora sp, desentupimento de pia, desentupimento de ralo, hidrojateamento 24h, desentupidora maringá',
    createdAt: '2026-10-08T14:30:00.000Z',
    updatedAt: '2026-10-08T14:30:00.000Z',
    blocks: [
      {
        id: 'b-201',
        type: 'paragraph',
        content: 'Poucas emergências domésticas ou comerciais causam tanto estresse e prejuízo quanto um retorno de esgoto. Quando a água transborda pela privada ou ralo do banheiro, a contaminação e o odor tornam o ambiente inabitável em questão de minutos.',
      },
      {
        id: 'b-202',
        type: 'callout',
        variant: 'info',
        title: 'Você Sabia?',
        content: 'Mais de 80% dos entupimentos severos poderiam ter sido prevenidos com uma limpeza técnica de rotina. O acúmulo de gordura vegetal, sabonetes e fios de cabelo cria uma crosta sólida que reduz gradualmente o diâmetro útil da tubulação.',
      },
      {
        id: 'b-203',
        type: 'heading',
        level: 'h2',
        text: 'Os 5 Sinais de Alerta Mais Frequentes',
      },
      {
        id: 'b-204',
        type: 'checklist',
        title: 'Identifique antes do transbordamento:',
        items: [
          'Escoamento lento persistente na pia da cozinha mesmo sem restos aparentes de comida.',
          'Barulho de "borbulhamento" ou ar voltando pelo vaso sanitário quando a máquina de lavar drena.',
          'Odor de esgoto recorrente que sobe pelas caixas sifonadas e ralos, especialmente à noite.',
          'Nível da água do vaso sanitário oscilando sem ninguém ter acionado a descarga.',
          'Água da pia da cozinha retornando pelo ralo do quintal ou área de serviço.',
        ],
      },
      {
        id: 'b-205',
        type: 'quote',
        quote: 'Nunca utilize soda cáustica ou ácidos abrasivos para tentar desobstruir canos de PVC. Além de cristalizarem a gordura, esses produtos corroem as conexões e geram rompimentos na alvenaria.',
        author: 'Eng. Hidráulico DDD Maringá',
        role: 'Consultoria de Manutenção Predial',
      },
      {
        id: 'b-206',
        type: 'heading',
        level: 'h2',
        text: 'A Solução Definitiva: Hidrojateamento de Alta Pressão',
      },
      {
        id: 'b-207',
        type: 'paragraph',
        content: 'O hidrojateamento consiste na projeção de jatos d’água pressurizada através de torpedos e bicos rotativos especiais. O método não danifica os canos e remove 100% dos resíduos graxos, raízes e incrustações calcárias das paredes da tubulação, restaurando o diâmetro original do encanamento.',
      },
      {
        id: 'b-208',
        type: 'cta',
        title: 'Emergência com cano entupido ou caixa de gordura cheia?',
        description: 'Plantão 24 horas em São Paulo, Embu das Artes e toda a Região Metropolitana com atendimento em até 40 minutos.',
        buttonText: 'Ligue ou Chame no WhatsApp 24h',
        buttonLink: 'https://wa.me/+5511940724379?text=Emerg%C3%AAncia%20de%20desentupimento!%20Preciso%20de%20atendimento%20imediato.',
        variant: 'whatsapp',
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'dedetizacao-empresas-pj-certificado-anvisa-vigilancia-sanitaria',
    title: 'Dedetização para Empresas (PJ): Como Garantir Conformidade com a ANVISA e Evitar Multas',
    excerpt: 'Restaurantes, indústrias, clínicas e comércios precisam manter o MIP (Manejo Integrado de Pragas) rigorosamente em dia. Veja o que a legislação exige e como emitimos o certificado oficial aceito pela Vigilância Sanitária.',
    category: 'Corporativo (PJ)',
    tags: ['Empresas PJ', 'ANVISA', 'Vigilância Sanitária', 'Certificado', 'Controle Integrado'],
    coverImage: '/images/servicos/igreja.jpg',
    coverImageAlt: 'Técnico aplicando sanitização e controle de pragas em ambiente corporativo',
    author: {
      name: 'Dra. Mariana Sanches',
      role: 'Responsável Técnica & Bióloga',
      avatar: '/images/logos/favicon-icon.png',
    },
    publishDate: '2026-10-05',
    readTimeMinutes: 7,
    status: 'published',
    metaDescription: 'Descubra os requisitos da ANVISA (RDC 52) para controle de pragas corporativo. Certificado técnico válido, cronograma de aplicação e laudo detalhado para estabelecimentos comerciais.',
    keywords: 'dedetização para empresas sp, controle de pragas pj, laudo anvisa dedetização, dedetizadora restaurantes são paulo',
    createdAt: '2026-10-05T09:00:00.000Z',
    updatedAt: '2026-10-05T09:00:00.000Z',
    blocks: [
      {
        id: 'b-301',
        type: 'paragraph',
        content: 'Para empresas do setor alimentício, farmacêutico, hoteleiro ou corporativo em geral, a presença de pragas não é apenas uma questão de imagem: é uma infração sanitária grave sujeita a multas pesadas, interdição do estabelecimento e responsabilização civil.',
      },
      {
        id: 'b-302',
        type: 'heading',
        level: 'h2',
        text: 'O que diz a RDC nº 52 da ANVISA?',
      },
      {
        id: 'b-303',
        type: 'paragraph',
        content: 'A Resolução da Diretoria Colegiada (RDC) nº 52 estabelece que serviços de controle de vetores e pragas urbanas só podem ser executados por empresas especializadas devidamente licenciadas junto aos órgãos de vigilância sanitária e ambiental, contando com Responsável Técnico habilitado (Químico ou Biólogo).',
      },
      {
        id: 'b-304',
        type: 'callout',
        variant: 'tip',
        title: 'Documentos Obrigatórios em Toda Fiscalização',
        content: 'A Vigilância Sanitária exige a apresentação imediata do Certificado de Execução do Serviço, Ordem de Serviço assinada pelo responsável técnico e FISPQ (Ficha de Informações de Segurança de Produtos Químicos) dos defensivos empregados.',
      },
      {
        id: 'b-305',
        type: 'stat',
        number: '100%',
        label: 'Legalidade e Conformidade Sanitária',
        description: 'Fornecemos pasta técnica completa com cronograma de rotina, mapa de iscas numeradas e relatórios de não-conformidade para auditorias de qualidade.',
      },
      {
        id: 'b-306',
        type: 'heading',
        level: 'h2',
        text: 'Vantagens do Contrato Preventivo Mensal para Empresas',
      },
      {
        id: 'b-307',
        type: 'checklist',
        title: 'Benefícios Exclusivos do Nosso Plano Corporativo',
        items: [
          'Atendimento em horários alternativos (noturno ou fins de semana) sem interromper suas vendas.',
          'Produtos sem cheiro e com baixa toxicidade humana, adequados para cozinhas industriais.',
          'Garantia contínua com repasses imediatos caso haja qualquer atividade de pragas entre visitas.',
          'Condições especiais de pagamento faturado no boleto com emissão de Nota Fiscal eletrônica.',
        ],
      },
      {
        id: 'b-308',
        type: 'cta',
        title: 'Sua empresa precisa de adequação imediata para a Vigilância Sanitária?',
        description: 'Receba uma proposta técnica personalizada com valores corporativos especiais para o seu segmento de atuação.',
        buttonText: 'Falar com Consultor B2B no WhatsApp',
        buttonLink: 'https://wa.me/+5511940724379?text=Ol%C3%A1!%20Sou%20empresa%20e%20gostaria%20de%20um%20or%C3%A7amento%20corporativo%20com%20laudo%20ANVISA.',
        variant: 'whatsapp',
      },
    ],
  },
];

export const getPosts = (): BlogPost[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
      return DEFAULT_POSTS;
    }
    return parsed;
  } catch (e) {
    console.error('Erro ao ler posts do blog no localStorage:', e);
    return DEFAULT_POSTS;
  }
};

export const getPublishedPosts = (): BlogPost[] => {
  return getPosts().filter((p) => p.status === 'published');
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find((p) => p.slug === slug);
};

export const getPostById = (id: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find((p) => p.id === id);
};

export const savePost = (post: BlogPost): void => {
  const posts = getPosts();
  const existingIndex = posts.findIndex((p) => p.id === post.id);

  const updatedPost: BlogPost = {
    ...post,
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    posts[existingIndex] = updatedPost;
  } else {
    posts.unshift(updatedPost);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));

  // Sincroniza com a API PostgreSQL em segundo plano
  apiClient
    .post<BlogPost>('/admin/posts', updatedPost)
    .catch((err) => {
      console.warn('Post salvo localmente. Sincronização com API PostgreSQL pendente:', err);
    });
};

export const deletePost = (id: string): boolean => {
  const posts = getPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length !== posts.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }

  // Sincroniza exclusão com a API PostgreSQL em segundo plano
  apiClient
    .delete(`/admin/posts/${id}`)
    .catch((err) => {
      console.warn('Post removido localmente. Sincronização de exclusão com API PostgreSQL pendente:', err);
    });

  return true;
};

/**
 * Sincroniza matérias da API PostgreSQL para o cache local
 */
export const syncPostsFromApi = async (): Promise<BlogPost[]> => {
  try {
    const isAuth = Boolean(apiClient.getToken());
    const endpoint = isAuth ? '/admin/posts' : '/posts';
    const remotePosts = await apiClient.get<BlogPost[]>(endpoint);
    if (Array.isArray(remotePosts) && remotePosts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(remotePosts));
      return remotePosts;
    }
  } catch (err) {
    // API offline ou em desenvolvimento, fallback silencioso para cache local
  }
  return getPosts();
};

export const duplicatePost = (id: string): BlogPost | null => {
  const post = getPostById(id);
  if (!post) return null;

  const newId = `post-${Date.now()}`;
  const duplicated: BlogPost = {
    ...post,
    id: newId,
    slug: `${post.slug}-copia-${Date.now().toString().slice(-4)}`,
    title: `${post.title} (Cópia)`,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  savePost(duplicated);
  return duplicated;
};

export const createNewPost = (): BlogPost => {
  const id = `post-${Date.now()}`;
  return {
    id,
    slug: 'novo-artigo-blog',
    title: '',
    excerpt: '',
    category: 'Dedetização',
    tags: ['Controle de Pragas', 'Dicas'],
    coverImage: '/images/trabalho/telhado.jpg',
    coverImageAlt: 'Imagem ilustrativa do artigo',
    author: {
      name: 'Especialista DDD Maringá',
      role: 'Redator Técnico',
      avatar: '/images/logos/favicon-icon.png',
    },
    publishDate: new Date().toISOString().split('T')[0],
    readTimeMinutes: 5,
    status: 'draft',
    metaDescription: '',
    keywords: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    blocks: [
      {
        id: `b-${Date.now()}-1`,
        type: 'paragraph',
        content: 'Comece seu artigo aqui com um gancho envolvente para capturar a atenção imediata do leitor.',
      },
      {
        id: `b-${Date.now()}-2`,
        type: 'callout',
        variant: 'tip',
        title: 'Dica do Especialista',
        content: 'Destaque uma informação técnica ou benefício direto para o cliente.',
      },
      {
        id: `b-${Date.now()}-3`,
        type: 'cta',
        title: 'Precisa de Ajuda Profissional?',
        description: 'Atendimento 24 horas em São Paulo e região com garantia técnica.',
        buttonText: 'Fale Conosco no WhatsApp',
        buttonLink: 'https://wa.me/+5511940724379',
        variant: 'whatsapp',
      },
    ],
  };
};

export const resetToDefaultPosts = (): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
};
