import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from './db.js';
import { authRouter } from './routes/authRoutes.js';
import { postRouter } from './routes/postRoutes.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// CORS setup - Suporta Cloudflare Pages, domínio próprio e desenvolvimento
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://dedetizadoramaringa.com.br',
  'https://www.dedetizadoramaringa.com.br',
];

const envOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

app.use(
  cors({
    origin: (origin, callback) => {
      // Permite requisições sem origin (mobile apps, curl, etc)
      if (!origin) return callback(null, true);

      const isAllowed =
        allowedOrigins.includes(origin) ||
        origin.endsWith('.pages.dev') || // Cloudflare Pages
        origin.endsWith('.railway.app') ||
        process.env.NODE_ENV !== 'production';

      if (isAllowed) {
        callback(null, true);
      } else {
        console.warn(`CORS bloqueado para origem: ${origin}`);
        callback(new Error(`Bloqueado pelas políticas de CORS para: ${origin}`));
      }
    },
    credentials: true,
  })
);

// Body parser com limite seguro para blocos de conteúdo e imagens
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Healthcheck na raiz e em /api/health para o Railway
app.get('/', (_req, res) => {
  res.json({
    status: 'online',
    service: 'API Blog DDD Maringá',
    health: '/api/health',
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    service: 'DDD Maringá Blog API',
    timestamp: new Date().toISOString(),
  });
});

// Rotas da API
app.use('/api/auth', authRouter);
app.use('/api', postRouter);

// Inicialização do servidor
async function startServer() {
  try {
    console.log('⏳ Conectando ao PostgreSQL e verificando migrações...');
    await initDb();
    console.log('🚀 Banco de dados PostgreSQL pronto.');
  } catch (error) {
    console.warn(
      '⚠️ Não foi possível conectar ao PostgreSQL agora. Verifique sua DATABASE_URL no arquivo server/.env.'
    );
    console.warn('A API subirá para responder requisições e diagnósticos.');
  }

  // O Railway exige escutar em 0.0.0.0
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`⚡ API do Blog DDD Maringá rodando com sucesso!`);
    console.log(`📡 Porta: ${PORT} (0.0.0.0)`);
    console.log(`🩺 Healthcheck: http://localhost:${PORT}/api/health`);
    console.log(`======================================================\n`);
  });
}

startServer();
