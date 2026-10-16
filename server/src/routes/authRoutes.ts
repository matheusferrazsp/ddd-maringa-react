import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import { requireAuth, type AuthenticatedRequest } from '../middleware/auth.js';

export const authRouter = Router();

/**
 * POST /api/auth/login
 * Autentica usuário e retorna token JWT + perfil
 */
authRouter.post('/login', async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: 'E-mail e senha são obrigatórios.',
      });
      return;
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPassword = String(password).trim();

    const result = await pool.query(
      'SELECT id, name, email, password_hash, role, avatar FROM users WHERE LOWER(email) = $1',
      [cleanEmail]
    );

    if (result.rows.length === 0) {
      res.status(401).json({
        success: false,
        error: 'E-mail ou senha incorretos.',
      });
      return;
    }

    const user = result.rows[0];
    const passwordValid = await bcrypt.compare(cleanPassword, user.password_hash);

    if (!passwordValid) {
      res.status(401).json({
        success: false,
        error: 'E-mail ou senha incorretos.',
      });
      return;
    }

    const secret = process.env.JWT_SECRET || 'ddd_maringa_jwt_secret_super_seguro_2026_prod_key';
    const expiresIn = rememberMe ? '30d' : '7d';

    const tokenPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, secret, { expiresIn });

    // Atualiza last_login se desejado
    await pool.query('UPDATE users SET updated_at = NOW() WHERE id = $1', [user.id]);

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        lastLogin: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno no servidor ao processar autenticação.',
    });
  }
});

/**
 * GET /api/auth/me
 * Retorna os dados do usuário autenticado no token atual
 */
authRouter.get('/me', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    const result = await pool.query(
      'SELECT id, name, email, role, avatar FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        error: 'Usuário não encontrado.',
      });
      return;
    }

    const user = result.rows[0];
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar perfil atual:', error);
    res.status(500).json({
      success: false,
      error: 'Erro ao validar sessão do usuário.',
    });
  }
});
