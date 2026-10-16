import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { BlogPost, HeadingBlock } from '../types/blog';
import { getPostBySlug, getPublishedPosts, syncPostsFromApi } from '../services/blogService';
import { BlockRenderer } from '../components/blog/BlockRenderer';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Phone,
  List,
  PenTool,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import '../styles/blog.css';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const published = getPublishedPosts();
    setAllPosts(published);
    if (slug) {
      const found = getPostBySlug(slug);
      if (found) {
        setPost(found);
        document.title = `${found.title} | Blog DDD Maringá`;
        window.scrollTo(0, 0);
      } else {
        setPost(null);
      }

      // Sincroniza com o PostgreSQL em background
      syncPostsFromApi().then((all) => {
        const freshFound = all.find((p) => p.slug === slug);
        if (freshFound) {
          setPost(freshFound);
          document.title = `${freshFound.title} | Blog DDD Maringá`;
        }
        setAllPosts(all.filter((p) => p.status === 'published'));
      });
    }
  }, [slug]);

  // Generate Table of Contents from H2 and H3 headings
  const tocItems = useMemo(() => {
    if (!post) return [];
    return post.blocks
      .filter((b) => b.type === 'heading')
      .map((b) => {
        const h = b as HeadingBlock;
        const anchor = h.text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        return {
          id: anchor,
          text: h.text,
          level: h.level,
        };
      });
  }, [post]);

  // Related posts from same category or general
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.id !== post.id)
      .slice(0, 3);
  }, [post, allPosts]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappShareUrl = post
    ? `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `Confira este artigo: "${post.title}" - ${window.location.href}`
      )}`
    : '';

  const whatsappDirectUrl =
    'https://wa.me/+5511940724379?text=Ol%C3%A1!%20Li%20o%20artigo%20no%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento.';

  if (!post) {
    return (
      <div className="blog-article" style={{ padding: '8rem 1rem 5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <ShieldCheck className="w-16 h-16 mx-auto text-sky-500 mb-4" style={{ color: '#0284c7' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
            Artigo não encontrado
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            O conteúdo que você procura pode ter sido alterado, movido ou ainda está em rascunho no painel.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/blog" className="btn btn-cyan">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Link>
            <Link to="/painel-copy" className="btn btn-outline">
              <PenTool className="w-4 h-4" /> Abrir Painel do Copywriter
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-article">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="blog-breadcrumb">
          <Link to="/">Início</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="blog-category-tag" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>
            {post.category}
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="blog-breadcrumb__current">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="blog-article__header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="blog-category-tag">{post.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishDate).toLocaleDateString('pt-BR')}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMinutes} min de leitura
            </span>
          </div>

          <h1 className="blog-article__title">{post.title}</h1>
          <p className="blog-article__lead">{post.excerpt}</p>

          {/* Author Card & Actions Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              padding: '1.25rem 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div className="blog-author-bar">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="blog-author-avatar"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/logos/favicon-icon.png';
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <div className="blog-author-name">{post.author.name}</div>
                <div className="blog-author-role">{post.author.role}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ minHeight: '36px', padding: '0.35rem 0.85rem', fontSize: '0.82rem' }}
                title="Compartilhar no WhatsApp"
              >
                <Share2 className="w-4 h-4 text-emerald-600" />
                <span>Compartilhar</span>
              </a>

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleCopyLink}
                style={{ minHeight: '36px', padding: '0.35rem 0.85rem', fontSize: '0.82rem' }}
                title="Copiar Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            className="blog-article__hero-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
            }}
          />
        )}

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="blog-article__layout">
          {/* Main Article Content Blocks */}
          <main className="blog-article__content">
            {post.blocks.map((block) => (
              <div key={block.id} className="block-container">
                <BlockRenderer block={block} />
              </div>
            ))}

            {/* Post Tags */}
            {post.tags.length > 0 && (
              <div
                style={{
                  marginTop: '3.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginRight: '0.75rem' }}>
                  Tags Relacionadas:
                </strong>
                <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: '#f1f5f9',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Sticky Sidebar */}
          <aside className="blog-sidebar">
            {/* Table of Contents (TOC) */}
            {tocItems.length > 0 && (
              <div className="sidebar-box">
                <div className="sidebar-box__title">
                  <List className="w-4 h-4 text-sky-600" />
                  <span>Sumário do Artigo</span>
                </div>
                <ul className="toc-list">
                  {tocItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={`#${item.id}`}
                        className={`toc-link ${item.level === 'h3' ? 'level-h3' : ''}`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sticky 24h WhatsApp CTA Box */}
            <div className="sidebar-cta-card">
              <span
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '0.65rem',
                }}
              >
                Plantão 24 Horas
              </span>
              <h4>Precisa de Dedetização ou Desentupimento?</h4>
              <p>
                Atendimento rápido em São Paulo e região. Técnicos credenciados, laudo técnico e garantia por escrito.
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
                }}
              >
                <img
                  src="/images/logos/whatsapp-white.svg"
                  alt="WhatsApp"
                  className="w-4 h-4 flex-shrink-0 object-contain"
                />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href="tel:11940724379"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  marginTop: '0.85rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                <Phone className="w-3.5 h-3.5" /> (11) 94072-4379
              </a>
            </div>

            {/* Related Posts Box */}
            {relatedPosts.length > 0 && (
              <div className="sidebar-box">
                <div className="sidebar-box__title">Artigos Recomendados</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blog/${rel.slug}`}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        style={{
                          width: '72px',
                          height: '56px',
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-sm)',
                          flexShrink: 0,
                        }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            lineHeight: 1.3,
                            color: 'var(--text-primary)',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {rel.title}
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {rel.readTimeMinutes} min de leitura
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};
