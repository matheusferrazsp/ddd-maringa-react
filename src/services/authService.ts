import type { User, LoginCredentials, AuthResponse } from '../types/auth';
import { apiClient } from './apiClient';

const SESSION_KEY = 'ddd_maringa_auth_session_v1';
const REMEMBER_KEY = 'ddd_maringa_auth_remember_v1';

// Authorized users for DDD Maringá Content & Blog platform (local fallback)
export const AUTHORIZED_USERS: Array<User & { passwordHash: string }> = [
  {
    id: 'user-debora-1',
    name: 'Débora Pedrialli',
    email: 'mccdeborapedrialli@gmail.com',
    role: 'copywriter',
    avatar: '/images/logos/favicon-icon.png',
    passwordHash: 'debora2026',
  },
  {
    id: 'user-admin-1',
    name: 'Administração DDD Maringá',
    email: 'admin@dedetizadoramaringa.com.br',
    role: 'admin',
    avatar: '/images/logos/favicon-icon.png',
    passwordHash: 'admin2026',
  },
];

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const cleanEmail = credentials.email.trim().toLowerCase();
    const cleanPassword = credentials.password.trim();

    // 1. Tenta autenticar na API do Servidor (PostgreSQL)
    try {
      const apiRes = await apiClient.post<{ success: boolean; token: string; user: User; error?: string }>(
        '/auth/login',
        {
          email: cleanEmail,
          password: cleanPassword,
          rememberMe: credentials.rememberMe,
        }
      );

      if (apiRes && apiRes.success && apiRes.token) {
        apiClient.setToken(apiRes.token, credentials.rememberMe);
        const storage = credentials.rememberMe ? localStorage : sessionStorage;
        storage.setItem(SESSION_KEY, JSON.stringify(apiRes.user));
        return { success: true, user: apiRes.user };
      }
    } catch (err: any) {
      // Se a API retornou erro de credenciais (401), propaga o erro
      if (err?.message && !err.message.includes('Failed to fetch') && !err.message.includes('NetworkError')) {
        return { success: false, error: err.message };
      }
      console.warn('API backend offline ou inacessível. Usando fallback local para desenvolvimento.', err);
    }

    // 2. Fallback de contingência local para desenvolvimento offline
    await new Promise((resolve) => setTimeout(resolve, 500));
    const matched = AUTHORIZED_USERS.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.passwordHash === cleanPassword
    );

    if (!matched) {
      return {
        success: false,
        error: 'E-mail ou senha incorretos. Verifique suas credenciais de acesso.',
      };
    }

    const authenticatedUser: User = {
      id: matched.id,
      name: matched.name,
      email: matched.email,
      role: matched.role,
      avatar: matched.avatar,
      lastLogin: new Date().toISOString(),
    };

    const storage = credentials.rememberMe ? localStorage : sessionStorage;
    try {
      storage.setItem(SESSION_KEY, JSON.stringify(authenticatedUser));
      if (credentials.rememberMe) {
        localStorage.setItem(REMEMBER_KEY, 'true');
      } else {
        localStorage.removeItem(REMEMBER_KEY);
      }
    } catch (e) {
      console.error('Erro ao salvar sessão de autenticação:', e);
    }

    return {
      success: true,
      user: authenticatedUser,
    };
  },

  logout(): void {
    try {
      apiClient.clearToken();
      localStorage.removeItem(SESSION_KEY);
      sessionStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(REMEMBER_KEY);
    } catch (e) {
      console.error('Erro ao encerrar sessão:', e);
    }
  },

  getCurrentUser(): User | null {
    try {
      const fromSession = sessionStorage.getItem(SESSION_KEY);
      if (fromSession) {
        const parsed = JSON.parse(fromSession) as User;
        if (AUTHORIZED_USERS.some((u) => u.email.toLowerCase() === parsed.email.toLowerCase())) {
          return parsed;
        }
        sessionStorage.removeItem(SESSION_KEY);
      }
      const fromLocal = localStorage.getItem(SESSION_KEY);
      if (fromLocal) {
        const parsed = JSON.parse(fromLocal) as User;
        if (AUTHORIZED_USERS.some((u) => u.email.toLowerCase() === parsed.email.toLowerCase())) {
          return parsed;
        }
        localStorage.removeItem(SESSION_KEY);
      }
      return null;
    } catch (e) {
      console.error('Erro ao recuperar usuário logado:', e);
      return null;
    }
  },

  isAuthenticated(): boolean {
    return Boolean(this.getCurrentUser());
  },
};
