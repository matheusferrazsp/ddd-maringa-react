import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost, BlogBlock, BlockType, HeadingBlock, ParagraphBlock } from '../types/blog';
import { useAuth } from '../context/AuthContext';
import {
  getPosts,
  getPostById,
  savePost,
  deletePost,
  duplicatePost,
  createNewPost,
  resetToDefaultPosts,
  syncPostsFromApi,
  BLOG_CATEGORIES,
} from '../services/blogService';
import { BlockEditor } from '../components/blog/BlockEditor';
import { BlockRenderer } from '../components/blog/BlockRenderer';
import {
  PenTool,
  Save,
  Eye,
  CheckCircle2,
  AlertCircle,
  Plus,
  Heading2,
  AlignLeft,
  Lightbulb,
  PhoneCall,
  CheckSquare,
  Quote,
  Image as ImageIcon,
  BarChart3,
  HelpCircle,
  Sparkles,
  Search,
  ExternalLink,
  Copy,
  Trash2,
  FileText,
  RotateCcw,
  Download,
  Share2,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import '../styles/blog.css';

export const CopywriterPanelPage: React.FC = () => {
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost>(createNewPost());
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'seo'>('editor');
  const [saveStatus, setSaveStatus] = useState<string>('Pronto para editar');
  const [newTagInput, setNewTagInput] = useState('');

  // Load posts on mount
  useEffect(() => {
    document.title = 'Painel do Copywriter | Blog DDD Maringá';
    const loaded = getPosts();
    setPosts(loaded);
    if (loaded.length > 0) {
      setCurrentPost(loaded[0]);
    }

    // Sincroniza com a API PostgreSQL em tempo real
    syncPostsFromApi().then((remote) => {
      if (remote && remote.length > 0) {
        setPosts(remote);
      }
    });
  }, []);

  // Recalculate read time and words whenever blocks or title change
  const wordCount = useMemo(() => {
    let count = currentPost.title ? currentPost.title.split(/\s+/).length : 0;
    count += currentPost.excerpt ? currentPost.excerpt.split(/\s+/).length : 0;
    currentPost.blocks.forEach((b) => {
      if (b.type === 'paragraph') count += (b as ParagraphBlock).content.split(/\s+/).length;
      if (b.type === 'heading') count += (b as HeadingBlock).text.split(/\s+/).length;
    });
    return count;
  }, [currentPost]);

  // Dynamic SEO Score calculation (0 - 100)
  const seoAudit = useMemo(() => {
    const checks = [
      {
        id: 'title-length',
        label: 'Título H1 entre 40 e 70 caracteres',
        passed: currentPost.title.length >= 40 && currentPost.title.length <= 70,
        tip: `Atual: ${currentPost.title.length} carac.`,
      },
      {
        id: 'meta-desc',
        label: 'Meta descrição entre 110 e 160 caracteres',
        passed: currentPost.metaDescription.length >= 110 && currentPost.metaDescription.length <= 160,
        tip: `Atual: ${currentPost.metaDescription.length} carac.`,
      },
      {
        id: 'word-count',
        label: 'Artigo com mais de 300 palavras',
        passed: wordCount >= 300,
        tip: `Atual: ${wordCount} palavras`,
      },
      {
        id: 'has-h2',
        label: 'Pelo menos um subtítulo H2',
        passed: currentPost.blocks.some((b) => b.type === 'heading' && (b as HeadingBlock).level === 'h2'),
        tip: 'Estruturação essencial para o Google',
      },
      {
        id: 'has-cta',
        label: 'Pelo menos uma chamada de conversão (CTA)',
        passed: currentPost.blocks.some((b) => b.type === 'cta'),
        tip: 'Garante geração de contatos comerciais',
      },
      {
        id: 'cover-image',
        label: 'Imagem de capa com texto alternativo (Alt)',
        passed: Boolean(currentPost.coverImage && currentPost.coverImageAlt),
        tip: 'Otimização visual e indexação no Google Imagens',
      },
      {
        id: 'slug-clean',
        label: 'URL amigável sem caracteres especiais',
        passed: /^[a-z0-9-]+$/.test(currentPost.slug) && currentPost.slug.length > 5,
        tip: `/${currentPost.slug}`,
      },
    ];

    const passedCount = checks.filter((c) => c.passed).length;
    const score = Math.round((passedCount / checks.length) * 100);

    return { checks, score };
  }, [currentPost, wordCount]);

  // Auto-generate slug when title changes (if user hasn't heavily customized)
  const handleTitleChange = (newTitle: string) => {
    const autoSlug = newTitle
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const autoReadTime = Math.max(1, Math.ceil(wordCount / 180));

    setCurrentPost((prev) => ({
      ...prev,
      title: newTitle,
      slug: prev.slug === 'novo-artigo-blog' || !prev.slug ? autoSlug : prev.slug,
      readTimeMinutes: autoReadTime,
    }));
  };

  // Add block handler
  const handleAddBlock = (type: BlockType) => {
    const newId = `b-${Date.now()}`;
    let newBlock: BlogBlock;

    switch (type) {
      case 'heading':
        newBlock = { id: newId, type: 'heading', level: 'h2', text: 'Novo Subtítulo da Seção' };
        break;
      case 'paragraph':
        newBlock = { id: newId, type: 'paragraph', content: 'Escreva aqui o conteúdo persuasivo e detalhado.' };
        break;
      case 'callout':
        newBlock = {
          id: newId,
          type: 'callout',
          variant: 'tip',
          title: 'Dica do Especialista',
          content: 'Inserir orientação técnica importante para o cliente.',
        };
        break;
      case 'cta':
        newBlock = {
          id: newId,
          type: 'cta',
          title: 'Precisa de Atendimento Imediato?',
          description: 'A equipe da DDD Maringá está pronta 24h para resolver seu problema com garantia.',
          buttonText: 'Chamar no WhatsApp (11) 94072-4379',
          buttonLink: 'https://wa.me/+5511940724379',
          variant: 'whatsapp',
        };
        break;
      case 'checklist':
        newBlock = {
          id: newId,
          type: 'checklist',
          title: 'Sinais Importantes',
          items: ['Primeiro ponto de inspeção', 'Segundo ponto relevante', 'Recomendação técnica'],
        };
        break;
      case 'quote':
        newBlock = {
          id: newId,
          type: 'quote',
          quote: 'A prevenção profissional reduz drasticamente os custos com sinistros em alvenarias e forros.',
          author: 'Eng. DDD Maringá',
          role: 'Especialista em Controle de Pragas',
        };
        break;
      case 'image':
        newBlock = {
          id: newId,
          type: 'image',
          url: '/images/trabalho/telhado.jpg',
          caption: 'Equipe especializada executando barreira química',
          alt: 'Técnico de dedetização trabalhando',
        };
        break;
      case 'stat':
        newBlock = {
          id: newId,
          type: 'stat',
          number: '24 Horas',
          label: 'Prontidão de Atendimento',
          description: 'Equipes volantes em toda São Paulo e Região Metropolitana.',
        };
        break;
      case 'faq':
        newBlock = {
          id: newId,
          type: 'faq',
          title: 'Perguntas Frequentes',
          items: [
            {
              question: 'Como funciona o atendimento de emergência?',
              answer: 'Nossos técnicos chegam ao local em até 40 minutos com equipamentos de ponta.',
            },
          ],
        };
        break;
    }

    setCurrentPost((prev) => ({
      ...prev,
      blocks: [...prev.blocks, newBlock],
    }));
  };

  // Block manipulation handlers
  const handleUpdateBlock = (index: number, updatedBlock: BlogBlock) => {
    setCurrentPost((prev) => {
      const newBlocks = [...prev.blocks];
      newBlocks[index] = updatedBlock;
      return { ...prev, blocks: newBlocks };
    });
  };

  const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
    setCurrentPost((prev) => {
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.blocks.length) return prev;
      const newBlocks = [...prev.blocks];
      const [moved] = newBlocks.splice(index, 1);
      newBlocks.splice(targetIndex, 0, moved);
      return { ...prev, blocks: newBlocks };
    });
  };

  const handleDuplicateBlock = (index: number) => {
    setCurrentPost((prev) => {
      const blockToDuplicate = prev.blocks[index];
      const duplicated: BlogBlock = {
        ...blockToDuplicate,
        id: `b-${Date.now()}`,
      };
      const newBlocks = [...prev.blocks];
      newBlocks.splice(index + 1, 0, duplicated);
      return { ...prev, blocks: newBlocks };
    });
  };

  const handleDeleteBlock = (index: number) => {
    setCurrentPost((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((_, i) => i !== index),
    }));
  };

  // Save current post
  const handleSave = (publish: boolean = false) => {
    const toSave: BlogPost = {
      ...currentPost,
      status: publish ? 'published' : currentPost.status,
      readTimeMinutes: Math.max(1, Math.ceil(wordCount / 180)),
      updatedAt: new Date().toISOString(),
    };

    savePost(toSave);
    setCurrentPost(toSave);
    const updatedList = getPosts();
    setPosts(updatedList);

    setSaveStatus(publish ? 'Publicado com Sucesso!' : 'Rascunho Salvo Localmente!');
    setTimeout(() => setSaveStatus('Tudo salvo'), 3000);
  };

  // Create new post
  const handleNewPost = () => {
    const fresh = createNewPost();
    setCurrentPost(fresh);
    setSaveStatus('Novo post criado');
  };

  // Select post from list
  const handleSelectPost = (id: string) => {
    const found = getPostById(id);
    if (found) {
      setCurrentPost(found);
      setSaveStatus('Post carregado');
    }
  };

  // Duplicate current post
  const handleDuplicateCurrentPost = () => {
    const dup = duplicatePost(currentPost.id);
    if (dup) {
      setPosts(getPosts());
      setCurrentPost(dup);
      setSaveStatus('Post duplicado com sucesso!');
    }
  };

  // Delete current post
  const handleDeleteCurrentPost = () => {
    if (window.confirm(`Tem certeza que deseja excluir "${currentPost.title || 'este post'}"?`)) {
      deletePost(currentPost.id);
      const remaining = getPosts();
      setPosts(remaining);
      if (remaining.length > 0) {
        setCurrentPost(remaining[0]);
      } else {
        handleNewPost();
      }
      setSaveStatus('Post removido');
    }
  };

  // Add tag
  const handleAddTag = () => {
    if (newTagInput.trim() && !currentPost.tags.includes(newTagInput.trim())) {
      setCurrentPost((prev) => ({
        ...prev,
        tags: [...prev.tags, newTagInput.trim()],
      }));
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setCurrentPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  // Export JSON
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentPost, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${currentPost.slug || 'post'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Preset image selection
  const COVER_PRESETS = [
    { label: 'Telhado / Forro', url: '/images/trabalho/telhado.jpg' },
    { label: 'Hidrojateamento', url: '/images/trabalho/abracaf.jpg' },
    { label: 'Área Externa', url: '/images/servicos/area-externa.jpg' },
    { label: 'Área Interna', url: '/images/servicos/area-interna.jpg' },
    { label: 'Comercial PJ', url: '/images/servicos/igreja.jpg' },
  ];

  // Copywriting headline hooks presets
  const COPY_HOOKS = [
    {
      title: 'Fórmula Problema & Alerta (PAS)',
      template: 'O Perigo Oculto de [Praga/Vazamento] que Pode Destruir seu Imóvel sem Você Notar',
    },
    {
      title: 'Fórmula Como Fazer (Guia Prático)',
      template: 'Como Identificar e Resolver [Problema] com Métodos Profissionais Definitivos',
    },
    {
      title: 'Fórmula Erro Fatal a Evitar',
      template: '3 Erros Comuns ao Tentar [Desentupir/Dedetizar] Sozinho que Pioram o Cenário',
    },
    {
      title: 'Fórmula Urgência & Prevenção',
      template: '5 Sinais Críticos de que É Hora de Chamar uma Equipe Técnica Especializada',
    },
  ];

  return (
    <div className="copy-panel">
      {/* Top Studio Bar - Modern 2-Tier Responsive Workspace Header */}
      <header className="copy-topbar-wrapper">
        {/* TIER 1: Brand Identity, Live Metrics & User Session */}
        <div className="copy-topbar-row copy-topbar-row--tier1">
          {/* Brand & Document Status */}
          <div className="copy-topbar-brand">
            <Link
              to="/"
              title="Ir para a página inicial do site"
              className="copy-brand-logo-link"
            >
              <img
                src="/images/logos/logo.webp"
                alt="Dedetizadora Maringá"
                className="copy-brand-logo"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/logos/logo.png';
                }}
              />
            </Link>

            <div className="copy-topbar-divider" />

            <div className="copy-topbar__title">
              <PenTool className="w-4 h-4 text-sky-600" />
              <span>Redação</span>
            </div>

            <span className={`copy-status-badge ${currentPost.status}`}>
              {currentPost.status === 'published' ? '● Publicado' : '○ Rascunho'}
            </span>

            <span className="copy-autosave-indicator">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span>{saveStatus}</span>
            </span>
          </div>

          {/* Quick Metrics in Header Center */}
          <div className="copy-topbar-metrics">
            <span className="copy-metric-pill">
              Palavras: <strong>{wordCount}</strong>
            </span>
            <span className="copy-metric-dot">•</span>
            <span className="copy-metric-pill">
              Leitura: <strong>{currentPost.readTimeMinutes || Math.max(1, Math.ceil(wordCount / 180))} min</strong>
            </span>
            <span className="copy-metric-dot">•</span>
            <span className="copy-metric-pill">
              Blocos: <strong>{currentPost.blocks.length}</strong>
            </span>
          </div>

          {/* User Profile & Logout */}
          <div className="copy-topbar-user-area">
            {user && (
              <div className="copy-user-capsule" title={`Logado como: ${user.name} (${user.role})`}>
                <UserIcon className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                <span className="copy-user-capsule__name">{user.role}</span>
              </div>
            )}

            <button
              type="button"
              className="copy-btn copy-btn--danger copy-btn--sm"
              onClick={() => logout()}
              title="Encerrar sessão"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {/* TIER 2: Workspace View Switcher & Core Actions Toolbar */}
        <div className="copy-topbar-row copy-topbar-row--tier2">
          {/* View Mode Switcher */}
          <div className="copy-mode-tabs">
            <button
              type="button"
              className={`copy-mode-tab ${activeTab === 'editor' ? 'active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              <PenTool className="w-4 h-4" />
              <span>Editor de Blocos</span>
            </button>
            <button
              type="button"
              className={`copy-mode-tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              <Eye className="w-4 h-4" />
              <span>Preview do Artigo</span>
            </button>
            <button
              type="button"
              className={`copy-mode-tab ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              <Search className="w-4 h-4" />
              <span>SEO & Google SERP</span>
              <span className={`copy-tab-badge ${seoAudit.score >= 70 ? 'good' : 'warning'}`}>
                {seoAudit.score}%
              </span>
            </button>
          </div>

          {/* Action Buttons Toolbar */}
          <div className="copy-topbar-actions">
            <Link
              to="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="copy-btn copy-btn--ghost"
              title="Abrir o blog público em uma nova aba"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Blog</span>
            </Link>

            <button
              type="button"
              className="copy-btn copy-btn--ghost"
              onClick={handleNewPost}
              title="Criar novo artigo do zero"
            >
              <Plus className="w-4 h-4" />
              <span>Novo Artigo</span>
            </button>

            <div className="copy-topbar-divider" />

            <button
              type="button"
              className="copy-btn copy-btn--cyan"
              onClick={() => handleSave(false)}
              title="Salvar alterações no rascunho local"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Rascunho</span>
            </button>

            <button
              type="button"
              className="copy-btn copy-btn--emerald"
              onClick={() => handleSave(true)}
              title="Publicar post no blog"
            >
              <Share2 className="w-4 h-4" />
              <span>Publicar Post</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="copy-workspace">
        {/* LEFT / CENTER: WORKSPACE CONTENT */}
        <main className="copy-canvas">
          {/* TAB 1: MODULAR BLOCK BUILDER */}
          {activeTab === 'editor' && (
            <>
              {/* Header Configuration Card */}
              <div className="copy-card">
                <div className="copy-card__header">
                  <div className="copy-card__title">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <span>Configurações Principais do Post</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {wordCount} palavras • ~{currentPost.readTimeMinutes} min de leitura
                  </span>
                </div>

                <div className="copy-card__body">
                  {/* Title (H1) */}
                  <div className="copy-field">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <label className="copy-label" style={{ margin: 0 }}>
                        Título Principal da Matéria (H1)
                      </label>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: currentPost.title.length > 70 ? 'var(--accent-red)' : 'var(--text-muted)',
                        }}
                      >
                        {currentPost.title.length} / 70 caracteres
                      </span>
                    </div>
                    <input
                      type="text"
                      className="copy-input"
                      style={{ fontSize: '1.15rem', fontWeight: 700 }}
                      placeholder="Ex: Como Eliminar Cupins de Madeira e Solo com Segurança"
                      value={currentPost.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                    />
                  </div>

                  {/* Slug & Category */}
                  <div className="copy-grid-2">
                    <div className="copy-field">
                      <label className="copy-label">
                        URL Amigável (Slug) <span className="hint">(/blog/...)</span>
                      </label>
                      <input
                        type="text"
                        className="copy-input"
                        placeholder="como-eliminar-cupins"
                        value={currentPost.slug}
                        onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                      />
                    </div>

                    <div className="copy-field">
                      <label className="copy-label">Categoria do Conteúdo</label>
                      <select
                        className="copy-select"
                        value={currentPost.category}
                        onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                      >
                        {BLOG_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Excerpt / Lead */}
                  <div className="copy-field">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <label className="copy-label" style={{ margin: 0 }}>
                        Resumo Inicial / Gancho do Artigo (Lead)
                      </label>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {currentPost.excerpt.length} caracteres
                      </span>
                    </div>
                    <textarea
                      className="copy-textarea"
                      placeholder="Breve introdução para atrair o leitor nos cards do blog e alimentar o resumo das redes sociais..."
                      value={currentPost.excerpt}
                      onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                    />
                  </div>

                  {/* Cover Image & Presets */}
                  <div className="copy-field">
                    <label className="copy-label">Imagem de Capa (URL)</label>
                    <input
                      type="text"
                      className="copy-input"
                      value={currentPost.coverImage}
                      placeholder="/images/trabalho/telhado.jpg"
                      onChange={(e) => setCurrentPost({ ...currentPost, coverImage: e.target.value })}
                    />

                    <div style={{ marginTop: '0.65rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        Fotos Recomendadas da Empresa:
                      </span>
                      <div className="copy-image-presets">
                        {COVER_PRESETS.map((p) => (
                          <button
                            key={p.url}
                            type="button"
                            className={`copy-preset-img-btn ${currentPost.coverImage === p.url ? 'active' : ''}`}
                            onClick={() => setCurrentPost({ ...currentPost, coverImage: p.url })}
                            title={p.label}
                          >
                            <img src={p.url} alt={p.label} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Alt Text & Meta Description */}
                  <div className="copy-grid-2">
                    <div className="copy-field">
                      <label className="copy-label">Texto Alternativo da Capa (Alt SEO)</label>
                      <input
                        type="text"
                        className="copy-input"
                        placeholder="Ex: Técnico dedetizador inspecionando forro"
                        value={currentPost.coverImageAlt}
                        onChange={(e) => setCurrentPost({ ...currentPost, coverImageAlt: e.target.value })}
                      />
                    </div>

                    <div className="copy-field">
                      <label className="copy-label">
                        Meta Descrição (Google SEO){' '}
                        <span className="hint">({currentPost.metaDescription.length} / 160)</span>
                      </label>
                      <input
                        type="text"
                        className="copy-input"
                        placeholder="Texto para aparecer no resumo de busca do Google..."
                        value={currentPost.metaDescription}
                        onChange={(e) => setCurrentPost({ ...currentPost, metaDescription: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="copy-field" style={{ margin: 0 }}>
                    <label className="copy-label">Tags & Palavras-chave do Artigo</label>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <input
                        type="text"
                        className="copy-input"
                        placeholder="Adicionar tag (ex: Dedetização 24h, Baratas)..."
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={handleAddTag}
                        style={{ minHeight: '42px', padding: '0.4rem 1rem' }}
                      >
                        <Plus className="w-4 h-4" /> Adicionar
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {currentPost.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '9999px',
                            background: '#f1f5f9',
                            color: 'var(--text-secondary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                          }}
                        >
                          #{tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Blocks Container */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}
                >
                  Blocos Dinâmicos de Conteúdo ({currentPost.blocks.length})
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Arraste ou use as setas para reorganizar
                </span>
              </div>

              <div className="copy-blocks-container">
                {currentPost.blocks.map((block, idx) => (
                  <BlockEditor
                    key={block.id}
                    block={block}
                    index={idx}
                    totalBlocks={currentPost.blocks.length}
                    onChange={(updated) => handleUpdateBlock(idx, updated)}
                    onMoveUp={() => handleMoveBlock(idx, 'up')}
                    onMoveDown={() => handleMoveBlock(idx, 'down')}
                    onDuplicate={() => handleDuplicateBlock(idx)}
                    onDelete={() => handleDeleteBlock(idx)}
                  />
                ))}
              </div>

              {/* Add New Block Selector Bar */}
              <div className="copy-add-bar">
                <div className="copy-add-bar__title">+ Adicionar Novo Bloco de Conteúdo</div>
                <div className="copy-block-types-grid">
                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('heading')}>
                    <Heading2 className="w-5 h-5 text-sky-600" />
                    <span>Subtítulo H2/H3</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('paragraph')}>
                    <AlignLeft className="w-5 h-5 text-slate-600" />
                    <span>Parágrafo</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('callout')}>
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <span>Caixa Destaque</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('cta')}>
                    <PhoneCall className="w-5 h-5 text-emerald-600" />
                    <span>Chamada CTA</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('checklist')}>
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                    <span>Checklist</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('quote')}>
                    <Quote className="w-5 h-5 text-purple-600" />
                    <span>Citação</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('image')}>
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                    <span>Imagem</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('stat')}>
                    <BarChart3 className="w-5 h-5 text-cyan-600" />
                    <span>Métrica</span>
                  </button>

                  <button type="button" className="copy-type-btn" onClick={() => handleAddBlock('faq')}>
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    <span>Dúvidas (FAQ)</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: LIVE PREVIEW IN THE EXACT SITE PATTERN */}
          {activeTab === 'preview' && (
            <div className="copy-card" style={{ padding: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="blog-category-tag">{currentPost.category}</span>
                <h1 className="blog-article__title" style={{ marginTop: '1rem' }}>
                  {currentPost.title || 'Título do Post Não Definido'}
                </h1>
                <p className="blog-article__lead">
                  {currentPost.excerpt || 'Insira o resumo inicial nas configurações.'}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>Por {currentPost.author.name}</span>
                  <span>•</span>
                  <span>{currentPost.publishDate}</span>
                  <span>•</span>
                  <span>{currentPost.readTimeMinutes} min de leitura</span>
                </div>
              </div>

              {currentPost.coverImage && (
                <img
                  src={currentPost.coverImage}
                  alt={currentPost.coverImageAlt || currentPost.title}
                  className="blog-article__hero-img"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
                  }}
                />
              )}

              <div className="blog-article__content">
                {currentPost.blocks.map((block) => (
                  <div key={block.id} className="block-container">
                    <BlockRenderer block={block} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SEO AUDIT & SIMULATORS */}
          {activeTab === 'seo' && (
            <div className="copy-card" style={{ padding: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                }}
              >
                Simulador de Indexação e Compartilhamento
              </h3>

              {/* Google SERP Preview */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Prévia no Resultado de Busca do Google (Desktop & Mobile)
                </h4>
                <div className="serp-preview">
                  <div className="serp-url">
                    <img src="/images/logos/favicon-icon.png" alt="favicon" style={{ width: 16, height: 16 }} />
                    <span>https://dedetizadoramaringa.com.br › blog › {currentPost.slug}</span>
                  </div>
                  <div className="serp-title">
                    {currentPost.title || 'Título do Artigo Aparecerá Aqui'} | Dedetizadora Maringá
                  </div>
                  <div className="serp-desc">
                    {currentPost.metaDescription ||
                      currentPost.excerpt ||
                      'Descrição otimizada para o Google. Insira uma meta descrição de 120 a 160 caracteres.'}
                  </div>
                </div>
              </div>

              {/* Social Card Preview */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Prévia no WhatsApp e Redes Sociais (OpenGraph)
                </h4>
                <div
                  style={{
                    maxWidth: '480px',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: '#ffffff',
                    boxShadow: 'var(--shadow-tech)',
                  }}
                >
                  <img
                    src={currentPost.coverImage || '/images/trabalho/telhado.jpg'}
                    alt="Social Preview"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
                    }}
                  />
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      dedetizadoramaringa.com.br
                    </span>
                    <h5 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0.35rem 0' }}>
                      {currentPost.title || 'Título do Artigo'}
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {currentPost.excerpt || 'Resumo do conteúdo compartilhado.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* RIGHT: COPYWRITER SIDEBAR TOOLS & ASSISTANT */}
        <aside className="copy-tools-sidebar">
          {/* Widget 1: SEO Score & Checklist */}
          <div className="copy-widget">
            <div className="copy-widget__title">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Score de Otimização SEO</span>
            </div>

            <div className="seo-score-container">
              <div
                className={`seo-score-circle ${
                  seoAudit.score >= 80 ? 'good' : seoAudit.score >= 50 ? 'medium' : ''
                }`}
              >
                <span>{seoAudit.score}%</span>
              </div>
              <div>
                <strong style={{ fontSize: '0.92rem', display: 'block', color: 'var(--text-primary)' }}>
                  {seoAudit.score >= 80
                    ? 'Excelente para Indexar!'
                    : seoAudit.score >= 50
                    ? 'Bom, com pontos a refinar'
                    : 'Precisa de mais dados'}
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {seoAudit.checks.filter((c) => c.passed).length} de {seoAudit.checks.length} critérios atendidos
                </span>
              </div>
            </div>

            <div className="seo-checklist">
              {seoAudit.checks.map((check) => (
                <div
                  key={check.id}
                  className={`seo-check-item ${check.passed ? 'passed' : 'failed'}`}
                >
                  {check.passed ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-slate-400" />
                  )}
                  <div>
                    <div>{check.label}</div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{check.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2: Copywriting Hooks Generator */}
          <div className="copy-widget">
            <div className="copy-widget__title">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Ganchos & Títulos de Alta Conversão</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
              Clique para usar como inspiração no seu H1 ou subtítulos:
            </p>
            {COPY_HOOKS.map((h, i) => (
              <div
                key={i}
                className="copy-hook-card"
                onClick={() => {
                  handleTitleChange(h.template);
                  setSaveStatus('Gancho aplicado no título!');
                }}
              >
                <div className="copy-hook-title">{h.title}</div>
                <div className="copy-hook-template">"{h.template}"</div>
              </div>
            ))}
          </div>

          {/* Widget 3: Saved Articles Manager */}
          <div className="copy-widget">
            <div className="copy-widget__title">
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Seus Artigos ({posts.length})</span>
            </div>

            <div className="copy-post-list">
              {posts.map((p) => (
                <div
                  key={p.id}
                  className={`copy-post-item ${p.id === currentPost.id ? 'active' : ''}`}
                  onClick={() => handleSelectPost(p.id)}
                >
                  <div style={{ maxWidth: '240px', overflow: 'hidden' }}>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {p.title || 'Sem título'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {p.category} • {p.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                style={{ flex: 1, minHeight: '36px', fontSize: '0.8rem' }}
                onClick={handleDuplicateCurrentPost}
                title="Duplicar post atual"
              >
                <Copy className="w-3.5 h-3.5" /> Duplicar
              </button>

              <button
                type="button"
                className="btn btn-outline"
                style={{ flex: 1, minHeight: '36px', fontSize: '0.8rem', color: 'var(--accent-red)' }}
                onClick={handleDeleteCurrentPost}
                title="Excluir post atual"
              >
                <Trash2 className="w-3.5 h-3.5" /> Excluir
              </button>
            </div>
          </div>

          {/* Widget 4: Backup & Tools */}
          <div className="copy-widget">
            <div className="copy-widget__title">
              <Download className="w-4 h-4 text-slate-600" />
              <span>Exportação & Dados</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleExportJson}
                style={{ width: '100%', minHeight: '36px', fontSize: '0.82rem' }}
              >
                <Download className="w-4 h-4" /> Baixar Post em JSON
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  if (window.confirm('Deseja restaurar os 3 posts de exemplo originais da Dedetizadora Maringá?')) {
                    resetToDefaultPosts();
                    const restored = getPosts();
                    setPosts(restored);
                    setCurrentPost(restored[0]);
                    setSaveStatus('Posts restaurados');
                  }
                }}
                style={{ width: '100%', minHeight: '36px', fontSize: '0.82rem' }}
              >
                <RotateCcw className="w-4 h-4" /> Restaurar Exemplos Iniciais
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
