import pg from 'pg';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const isProduction = process.env.NODE_ENV === 'production';
const isRailway = Boolean(
  process.env.RAILWAY_ENVIRONMENT ||
  process.env.DATABASE_URL?.includes('rlwy.net') ||
  process.env.DATABASE_URL?.includes('railway')
);

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ddd_maringa_blog',
  ssl: isProduction || isRailway ? { rejectUnauthorized: false } : undefined,
});

// Default seeded posts
const INITIAL_POSTS = [
  {
    id: 'post-1',
    slug: 'como-eliminar-cupins-madeira-solo-guia-completo',
    title: 'Guia Completo: Como Identificar e Eliminar Cupins de Madeira e Solo com Segurança',
    excerpt: 'Descubra as diferenças críticas entre cupins de madeira seca e subterrâneos, os sinais silenciosos de destruição na sua estrutura e como o tratamento profissional químico cria uma barreira protetora duradoura.',
    category: 'Dedetização',
    tags: ['Cupins', 'Controle de Pragas', 'Dicas Residenciais', 'Descupinização'],
    cover_image: '/images/trabalho/telhado.jpg',
    cover_image_alt: 'Técnico especialista da Dedetizadora Maringá inspecionando forro de madeira',
    author_name: 'Redação Dedetizadora Maringá',
    author_role: 'Especialistas em Descupinização',
    author_avatar: '/images/logos/favicon-icon.png',
    publish_date: '2026-10-10',
    read_time_minutes: 6,
    status: 'published',
    meta_description: 'Aprenda a identificar e erradicar cupins de madeira seca e cupins de solo. Dicas práticas de prevenção e métodos profissionais de descupinização em SP.',
    keywords: 'descupinização sp, cupim de solo, cupim de madeira seca, dedetizadora de cupins maringá, controle de cupins',
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
        content: 'Ao encontrar asas caídas perto de janelas ou um pó granulado fino saindo de móveis, a colônia já pode estar instalada há mais de 12 meses. Não use inseticidas aerossóis de supermercado, pois eles dispersam o ninho para outras paredes.',
      },
      {
        id: 'b-3',
        type: 'heading',
        level: 'h2',
        text: 'Cupim de Madeira Seca vs. Cupim Subterrâneo: Principais Diferenças',
      },
      {
        id: 'b-4',
        type: 'paragraph',
        content: 'O cupim de madeira seca habita diretamente a peça afetada. Já o cupim de solo cria ninhos na terra ou em vãos de dilatação estruturais, construindo túneis de terra para transitar até as áreas habitadas.',
      },
      {
        id: 'b-5',
        type: 'cta',
        variant: 'whatsapp',
        title: 'Suspeita de Infestação de Cupins no Imóvel?',
        description: 'Solicite uma inspeção técnica sem compromisso. Nossos técnicos utilizam barreira química e termonebulização certificada com laudo para vigilância sanitária.',
        buttonText: 'Falar com Especialista em Cupins (11) 94072-4379',
        buttonLink: 'https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20suspeito%20de%20cupins%20no%20meu%20im%C3%B3vel%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica.',
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'pia-da-cozinha-borbulhando-e-descendo-devagar-o-que-fazer',
    title: 'Pia da Cozinha Borbulhando e Descendo Devagar? Entenda os Riscos e Como Desentupir com Segurança',
    excerpt: 'Barulhos de borbulhamento no ralo e lentidão no escoamento são os primeiros indícios de acúmulo de gordura e crostas nas tubulações. Veja o que fazer para evitar o refluxo de esgoto na cozinha.',
    category: 'Desentupimento',
    tags: ['Desentupimento', 'Cozinha', 'Prevenção', 'Hidrojateamento'],
    cover_image: '/images/servicos/area-interna.jpg',
    cover_image_alt: 'Manutenção técnica de tubulação em bancada de cozinha',
    author_name: 'Redação Dedetizadora Maringá',
    author_role: 'Técnicos em Desentupimento',
    author_avatar: '/images/logos/favicon-icon.png',
    publish_date: '2026-10-08',
    read_time_minutes: 5,
    status: 'published',
    meta_description: 'Pia da cozinha descendo devagar ou borbulhando? Saiba os perigos da soda cáustica e como o maquinário rotativo Roto Rooter desobstrui o encanamento.',
    keywords: 'desentupidora pia cozinha sp, pia borbulhando, desentupimento pia ralo sp, hidrojateamento residencial',
    blocks: [
      {
        id: 'b-201',
        type: 'paragraph',
        content: 'O barulho de ar borbulhando na pia não é normal: ele sinaliza que o ar da tubulação está tentando escapar porque a passagem do fluxo de água já está obstruída em mais de 70% por gordura saponificada.',
      },
      {
        id: 'b-202',
        type: 'callout',
        variant: 'tip',
        title: 'Cuidado: Nunca use soda cáustica',
        content: 'A soda cáustica reage com a gordura residual gerando uma massa dura como sabão de pedra, piorando o entupimento e podendo corroer canos de PVC e conexões.',
      },
      {
        id: 'b-203',
        type: 'cta',
        variant: 'urgent',
        title: 'Pia Totalmente Trancada ou com Mau Cheiro?',
        description: 'Técnicos equipados com maquinário K-50 e K-500 chegam ao local em até 40 minutos em São Paulo e cidades vizinhas.',
        buttonText: 'Ligue Agora para Socorro 24h (11) 94072-4379',
        buttonLink: 'https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20estou%20com%20a%20pia%20entupida%20e%20preciso%20de%20atendimento%20urgente.',
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'dedetizacao-empresas-comercio-alimentos-normas-anvisa',
    title: 'Dedetização Comercial e Normas ANVISA: O que Bares, Restaurantes e Indústrias Precisam Cumprir',
    excerpt: 'Conheça as exigências legais da RDC 52 da ANVISA, a frequência obrigatória de controle integrado de pragas para estabelecimentos alimentícios e a importância do Certificado Técnico de Execução.',
    category: 'Corporativo (PJ)',
    tags: ['Comercial', 'ANVISA', 'Restaurantes', 'Laudo Técnico'],
    cover_image: '/images/servicos/igreja.jpg',
    cover_image_alt: 'Inspeção sanitária em grande ambiente comercial',
    author_name: 'Redação Dedetizadora Maringá',
    author_role: 'Responsável Técnico Sanitarista',
    author_avatar: '/images/logos/favicon-icon.png',
    publish_date: '2026-10-05',
    read_time_minutes: 7,
    status: 'published',
    meta_description: 'Tudo sobre a RDC 52 ANVISA e controle de pragas para restaurantes, mercados e comércios. Emissão de laudo técnico e cronograma de dedetização.',
    keywords: 'dedetização comercial sp, rdc 52 anvisa pragas, controle integrado de pragas restaurantes, dedetizadora com laudo tecnico',
    blocks: [
      {
        id: 'b-301',
        type: 'paragraph',
        content: 'Para empresas do setor alimentício, hospitalar e hoteleiro, o controle de pragas não é opcional: é uma exigência legal rigorosa fiscalizada por órgãos de Vigilância Sanitária em níveis municipal e estadual.',
      },
      {
        id: 'b-302',
        type: 'cta',
        variant: 'primary',
        title: 'Precisa Adequar sua Empresa às Normas da ANVISA?',
        description: 'Emitimos Ordem de Serviço, Mapa de Iscas, Ficha dos Produtos Utilizados e Certificado com validade legal e Responsável Técnico (CRQ/CREA).',
        buttonText: 'Solicitar Orçamento PJ com Laudo',
        buttonLink: 'https://wa.me/+5511940724379?text=Ol%C3%A1%2C%20preciso%20de%20or%C3%A7amento%20para%20minha%20empresa%20com%20laudo%20ANVISA.',
      },
    ],
  },
];

/**
 * Initializes PostgreSQL schema and seeds initial production credentials
 */
export async function initDb(): Promise<void> {
  const client = await pool.connect();
  try {
    console.log('🔄 Inicializando tabelas no PostgreSQL...');

    // 1. Tabela de Usuários
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'copywriter',
        avatar TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // 2. Tabela de Postagens do Blog
    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id VARCHAR(50) PRIMARY KEY,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title TEXT NOT NULL,
        excerpt TEXT,
        category VARCHAR(100) NOT NULL,
        tags JSONB NOT NULL DEFAULT '[]'::jsonb,
        cover_image TEXT,
        cover_image_alt TEXT,
        author_id VARCHAR(50) REFERENCES users(id) ON DELETE SET NULL,
        author_name VARCHAR(150),
        author_role VARCHAR(150),
        author_avatar TEXT,
        publish_date VARCHAR(50),
        read_time_minutes INTEGER DEFAULT 5,
        status VARCHAR(20) NOT NULL DEFAULT 'draft',
        meta_description TEXT,
        keywords TEXT,
        blocks JSONB NOT NULL DEFAULT '[]'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // Índices de alta performance
    await client.query(`CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);`);

    // 3. Seed: Usuária Débora Pedrialli (Copywriter)
    const deboraCheck = await client.query('SELECT id FROM users WHERE email = $1', ['mccdeborapedrialli@gmail.com']);
    if (deboraCheck.rows.length === 0) {
      console.log('🌱 Criando usuário oficial Débora Pedrialli no banco...');
      const deboraHash = await bcrypt.hash('debora2026', 10);
      await client.query(
        `INSERT INTO users (id, name, email, password_hash, role, avatar)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          'user-debora-1',
          'Débora Pedrialli',
          'mccdeborapedrialli@gmail.com',
          deboraHash,
          'copywriter',
          '/images/logos/favicon-icon.png',
        ]
      );
    }

    // 4. Seed: Administrador Técnico
    const adminCheck = await client.query('SELECT id FROM users WHERE email = $1', ['admin@dedetizadoramaringa.com.br']);
    if (adminCheck.rows.length === 0) {
      console.log('🌱 Criando usuário administrador no banco...');
      const adminHash = await bcrypt.hash('admin2026', 10);
      await client.query(
        `INSERT INTO users (id, name, email, password_hash, role, avatar)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          'user-admin-1',
          'Administração DDD Maringá',
          'admin@dedetizadoramaringa.com.br',
          adminHash,
          'admin',
          '/images/logos/favicon-icon.png',
        ]
      );
    }

    // 5. Seed de postagens padrão se o banco estiver vazio
    const postsCount = await client.query('SELECT COUNT(*) FROM posts');
    if (parseInt(postsCount.rows[0].count, 10) === 0) {
      console.log('🌱 Semeando matérias técnicas iniciais no PostgreSQL...');
      for (const p of INITIAL_POSTS) {
        await client.query(
          `INSERT INTO posts (
            id, slug, title, excerpt, category, tags, cover_image, cover_image_alt,
            author_name, author_role, author_avatar, publish_date, read_time_minutes,
            status, meta_description, keywords, blocks
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
          [
            p.id,
            p.slug,
            p.title,
            p.excerpt,
            p.category,
            JSON.stringify(p.tags),
            p.cover_image,
            p.cover_image_alt,
            p.author_name,
            p.author_role,
            p.author_avatar,
            p.publish_date,
            p.read_time_minutes,
            p.status,
            p.meta_description,
            p.keywords,
            JSON.stringify(p.blocks),
          ]
        );
      }
    }

    // 6. Assegura que todas as postagens no banco tenham como autor oficial a "Redação Dedetizadora Maringá"
    await client.query("UPDATE posts SET author_name = 'Redação Dedetizadora Maringá' WHERE author_name != 'Redação Dedetizadora Maringá';");

    console.log('✅ Banco PostgreSQL sincronizado com sucesso.');
  } catch (error) {
    console.error('❌ Erro na inicialização do PostgreSQL:', error);
    throw error;
  } finally {
    client.release();
  }
}
