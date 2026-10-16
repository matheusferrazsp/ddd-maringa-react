# 🚀 Backend & API REST — Blog DDD Maringá

API em **Node.js + Express + TypeScript** conectada ao banco de dados **PostgreSQL** para autenticação e sincronização em tempo real das postagens do Blog da Dedetizadora e Desentupidora Maringá.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** (v18+) & **Express**
- **TypeScript** para tipagem estrita
- **PostgreSQL** (Driver nativo `pg`)
- **Bcrypt.js** para hash seguro de senhas
- **JWT (JSON Web Token)** para sessões protegidas da redação
- **CORS** para comunicação segura com o frontend React

---

## 📦 Instalação e Execução Local

### 1. Instalar as dependências do servidor
```bash
cd server
npm install
```

### 2. Configurar o arquivo `.env`
Renomeie ou edite o arquivo `server/.env`:
```env
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/ddd_maringa_blog
JWT_SECRET=sua_chave_secreta_jwt_longa_e_segura
CLIENT_URL=http://localhost:5173,http://localhost:5174,https://dedetizadoramaringa.com.br
```

### 3. Iniciar o servidor em desenvolvimento
```bash
npm run dev
```

O servidor inicializará automaticamente as tabelas `users` e `posts` no PostgreSQL caso ainda não existam.

---

## 🌐 Como Subir no seu Servidor de Produção (VPS / Cloud)

### Opção A: Servidor Linux (Ubuntu / Debian com PM2)

1. **Instalar PostgreSQL e Node.js no servidor**:
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm postgresql postgresql-contrib
   ```

2. **Criar o Banco de Dados no PostgreSQL**:
   ```bash
   sudo -u postgres psql
   ```
   No prompt do PostgreSQL:
   ```sql
   CREATE DATABASE ddd_maringa_blog;
   CREATE USER maringa_user WITH ENCRYPTED PASSWORD 'CrieUmaSenhaForte2026!';
   GRANT ALL PRIVILEGES ON DATABASE ddd_maringa_blog TO maringa_user;
   \q
   ```

3. **Configurar as variáveis de ambiente no servidor**:
   No arquivo `server/.env` de produção:
   ```env
   PORT=3001
   NODE_ENV=production
   DATABASE_URL=postgresql://maringa_user:CrieUmaSenhaForte2026!@localhost:5432/ddd_maringa_blog
   JWT_SECRET=super_secret_jwt_key_ddd_maringa_2026_prod
   CLIENT_URL=https://dedetizadoramaringa.com.br
   ```

4. **Compilar e Rodar com PM2**:
   ```bash
   npm run build
   npm install -g pm2
   pm2 start dist/index.js --name "ddd-maringa-api"
   pm2 startup
   pm2 save
   ```

---

### Opção B: Via Docker / Docker Compose

Se preferir rodar com Docker, você pode rodar o PostgreSQL em container:
```bash
docker run --name ddd-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ddd_maringa_blog -p 5432:5432 -d postgres:16-alpine
```

---

## 🔐 Usuários Padrão Inicializados no Banco

Na primeira inicialização do banco, os usuários são criados automaticamente com senhas criptografadas por `bcrypt`:

1. **Redatora / Copywriter Oficial**:
   - **E-mail**: `mccdeborapedrialli@gmail.com`
   - **Senha**: `debora2026`
   - **Papel**: `copywriter`

2. **Administrador**:
   - **E-mail**: `admin@dedetizadoramaringa.com.br`
   - **Senha**: `admin2026`
   - **Papel**: `admin`

---

## 📡 Endpoints da API

### Autenticação
- `POST /api/auth/login` → Realiza login e retorna `{ token, user }`
- `GET /api/auth/me` *(Auth)* → Valida token e retorna usuário atual

### Blog (Público)
- `GET /api/posts` → Lista posts publicados (suporta `?category=...` e `?search=...`)
- `GET /api/posts/:slug` → Carrega matéria completa pelo slug

### Redação & Painel Administrativo (Privado / Requer Token JWT)
- `GET /api/admin/posts` → Lista todas as matérias (incluindo rascunhos)
- `GET /api/admin/posts/:id` → Busca matéria por ID
- `POST /api/admin/posts` → Cria ou atualiza matéria (com blocos, fotos e SEO)
- `DELETE /api/admin/posts/:id` → Exclui matéria do banco
