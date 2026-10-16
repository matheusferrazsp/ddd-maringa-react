import { Router } from 'express';
import { pool } from '../db.js';
import { requireAuth, type AuthenticatedRequest } from '../middleware/auth.js';

export const postRouter = Router();

// Helper to format PostgreSQL row to BlogPost interface
function mapRowToBlogPost(row: any) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    category: row.category,
    tags: Array.isArray(row.tags) ? row.tags : typeof row.tags === 'string' ? JSON.parse(row.tags) : [],
    coverImage: row.cover_image,
    coverImageAlt: row.cover_image_alt,
    author: {
      name: row.author_name || 'Redação Dedetizadora Maringá',
      role: row.author_role || 'Redação Especializada',
      avatar: row.author_avatar || '/images/logos/favicon-icon.png',
    },
    publishDate: row.publish_date,
    readTimeMinutes: Number(row.read_time_minutes) || 5,
    status: row.status as 'draft' | 'published',
    metaDescription: row.meta_description || '',
    keywords: row.keywords || '',
    blocks: Array.isArray(row.blocks) ? row.blocks : typeof row.blocks === 'string' ? JSON.parse(row.blocks) : [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/**
 * GET /api/posts (Público)
 * Lista posts publicados para o diretório de blog
 */
postRouter.get('/posts', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = `SELECT * FROM posts WHERE status = 'published'`;
    const params: any[] = [];

    if (category && category !== 'all') {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }

    if (search) {
      params.push(`%${search}%`);
      query += ` AND (title ILIKE $${params.length} OR excerpt ILIKE $${params.length} OR meta_description ILIKE $${params.length})`;
    }

    query += ` ORDER BY publish_date DESC, created_at DESC`;

    const result = await pool.query(query, params);
    const posts = result.rows.map(mapRowToBlogPost);
    res.json(posts);
  } catch (error) {
    console.error('Erro ao buscar posts públicos:', error);
    res.status(500).json({ error: 'Erro ao carregar matérias do blog.' });
  }
});

/**
 * GET /api/posts/:slug (Público)
 * Retorna matéria completa publicada pelo slug
 */
postRouter.get('/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query(
      `SELECT * FROM posts WHERE slug = $1 AND status = 'published' LIMIT 1`,
      [slug]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Matéria não encontrada ou ainda não publicada.' });
      return;
    }

    res.json(mapRowToBlogPost(result.rows[0]));
  } catch (error) {
    console.error('Erro ao buscar post por slug:', error);
    res.status(500).json({ error: 'Erro ao carregar matéria.' });
  }
});

/**
 * GET /api/admin/posts (Protegido - Redação)
 * Lista todas as matérias (incluindo rascunhos) para o Painel do Copywriter
 */
postRouter.get('/admin/posts', requireAuth, async (_req: AuthenticatedRequest, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM posts ORDER BY updated_at DESC, created_at DESC`
    );
    const posts = result.rows.map(mapRowToBlogPost);
    res.json(posts);
  } catch (error) {
    console.error('Erro no painel ao buscar posts:', error);
    res.status(500).json({ error: 'Erro ao listar matérias no painel administrativo.' });
  }
});

/**
 * GET /api/admin/posts/:id (Protegido)
 */
postRouter.get('/admin/posts/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM posts WHERE id = $1 LIMIT 1`, [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Matéria não encontrada.' });
      return;
    }

    res.json(mapRowToBlogPost(result.rows[0]));
  } catch (error) {
    console.error('Erro ao carregar post por id:', error);
    res.status(500).json({ error: 'Erro ao carregar matéria.' });
  }
});

/**
 * POST /api/admin/posts (Protegido)
 * Cria ou atualiza uma matéria (Upsert no PostgreSQL)
 */
postRouter.post('/admin/posts', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const post = req.body;

    if (!post.title || !post.slug) {
      res.status(400).json({ error: 'Título e slug são campos obrigatórios.' });
      return;
    }

    const id = post.id || `post-${Date.now()}`;
    const authorName = 'Redação Dedetizadora Maringá';
    const authorRole = post.author?.role || 'Redação Especializada';
    const authorAvatar = post.author?.avatar || '/images/logos/favicon-icon.png';
    const authorId = req.user?.id || null;

    const query = `
      INSERT INTO posts (
        id, slug, title, excerpt, category, tags, cover_image, cover_image_alt,
        author_id, author_name, author_role, author_avatar, publish_date,
        read_time_minutes, status, meta_description, keywords, blocks, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8,
        $9, $10, $11, $12, $13,
        $14, $15, $16, $17, $18, NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        slug = EXCLUDED.slug,
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        category = EXCLUDED.category,
        tags = EXCLUDED.tags,
        cover_image = EXCLUDED.cover_image,
        cover_image_alt = EXCLUDED.cover_image_alt,
        author_name = EXCLUDED.author_name,
        author_role = EXCLUDED.author_role,
        author_avatar = EXCLUDED.author_avatar,
        publish_date = EXCLUDED.publish_date,
        read_time_minutes = EXCLUDED.read_time_minutes,
        status = EXCLUDED.status,
        meta_description = EXCLUDED.meta_description,
        keywords = EXCLUDED.keywords,
        blocks = EXCLUDED.blocks,
        updated_at = NOW()
      RETURNING *;
    `;

    const values = [
      id,
      post.slug,
      post.title,
      post.excerpt || '',
      post.category || 'Dedetização',
      JSON.stringify(post.tags || []),
      post.coverImage || '',
      post.coverImageAlt || '',
      authorId,
      authorName,
      authorRole,
      authorAvatar,
      post.publishDate || new Date().toISOString().split('T')[0],
      post.readTimeMinutes || 5,
      post.status || 'draft',
      post.metaDescription || '',
      post.keywords || '',
      JSON.stringify(post.blocks || []),
    ];

    const result = await pool.query(query, values);
    res.status(200).json(mapRowToBlogPost(result.rows[0]));
  } catch (error) {
    console.error('Erro ao salvar matéria no PostgreSQL:', error);
    res.status(500).json({ error: 'Erro ao gravar matéria no banco de dados.' });
  }
});

/**
 * DELETE /api/admin/posts/:id (Protegido)
 * Remove matéria do banco de dados
 */
postRouter.delete('/admin/posts/:id', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Matéria não encontrada para exclusão.' });
      return;
    }

    res.json({ success: true, message: 'Matéria excluída com sucesso.', id });
  } catch (error) {
    console.error('Erro ao excluir post:', error);
    res.status(500).json({ error: 'Erro ao excluir matéria.' });
  }
});
