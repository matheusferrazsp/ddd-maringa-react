import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import { getPublishedPosts, syncPostsFromApi, BLOG_CATEGORIES } from '../services/blogService';
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import '../styles/blog.css';

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = 'Blog & Dicas de Controle de Pragas e Desentupimento | Dedetizadora Maringá';
    setPosts(getPublishedPosts());

    // Sincroniza com a API PostgreSQL em tempo real
    syncPostsFromApi().then(() => {
      setPosts(getPublishedPosts());
    });
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  const whatsappUrl =
    'https://wa.me/+5511940724379?text=Ol%C3%A1!%20Estava%20lendo%20o%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento.';

  return (
    <div className="blog-page">
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="section-tag" style={{ margin: 0 }}>
                <Sparkles className="w-3.5 h-3.5" /> Blog Especializado
              </span>
              
            </div>

            <h1 className="blog-hero__title">
              Informação Técnica, Prevenção e{' '}
              <span className="gradient-text-cyan">Soluções Rápidas</span>
            </h1>

            <p className="blog-hero__desc">
              Artigos produzidos pela nossa equipe de biólogos e técnicos hidráulicos para proteger sua
              casa, condomínio ou empresa contra pragas urbanas e entupimentos em São Paulo.
            </p>

            {/* Search & Categories Bar */}
            <div className="blog-controls">
              <div className="blog-search-wrapper">
                <Search className="w-5 h-5 blog-search-icon" />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Buscar artigos por palavras-chave (ex: cupins, baratas, ralo, ANVISA, hidrojateamento)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="blog-categories">
                <button
                  type="button"
                  className={`blog-category-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  Todos os Artigos ({posts.length})
                </button>
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`blog-category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content Container */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {/* Featured Post Spotlight */}
        {featuredPost && (
          <div className="blog-featured">
            <Link to={`/blog/${featuredPost.slug}`} className="blog-featured-card">
              <div className="blog-featured-card__media">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverImageAlt || featuredPost.title}
                  className="blog-featured-card__img"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
                  }}
                />
                <span className="blog-featured-card__badge">Destaque da Semana</span>
              </div>

              <div className="blog-featured-card__body">
                <div className="blog-meta-row">
                  <span className="blog-category-tag">{featuredPost.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featuredPost.publishDate).toLocaleDateString('pt-BR')}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTimeMinutes} min de leitura
                  </span>
                </div>

                <h2 className="blog-featured-card__title">{featuredPost.title}</h2>
                <p className="blog-featured-card__excerpt">{featuredPost.excerpt}</p>

                <div className="blog-featured-card__footer">
                  <div className="blog-author-bar">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="blog-author-avatar"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/logos/favicon-icon.png';
                      }}
                    />
                    <div>
                      <div className="blog-author-name">{featuredPost.author.name}</div>
                      <div className="blog-author-role">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <span className="blog-featured-card__read-more">
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {remainingPosts.length > 0 && (
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
              }}
            >
              Mais Publicações Recentes
            </h3>

            <div className="blog-grid">
              {remainingPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__media">
                    <img
                      src={post.coverImage}
                      alt={post.coverImageAlt || post.title}
                      className="blog-card__img"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        zIndex: 2,
                      }}
                    >
                      <span className="blog-category-tag" style={{ background: 'rgba(255,255,255,0.95)' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="blog-card__body">
                    <div className="blog-meta-row" style={{ marginBottom: '0.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.publishDate).toLocaleDateString('pt-BR')}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTimeMinutes} min
                      </span>
                    </div>

                    <h3 className="blog-card__title" title={post.title}>{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>

                    <div className="blog-card__footer">
                      <div className="blog-card__author-label" title={post.author.name}>
                        Por {post.author.name}
                      </div>
                      <span className="blog-card__read-more">
                        Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Empty Search Result State */}
        {filteredPosts.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 1rem',
              background: '#f8fafc',
              borderRadius: 'var(--radius-xl)',
              border: '1px dashed var(--border-subtle)',
              margin: '3rem 0',
            }}
          >
            <ShieldCheck className="w-12 h-12 mx-auto text-sky-500 mb-3" style={{ color: '#0284c7' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Nenhum artigo encontrado para sua busca
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Tente buscar por termos mais genéricos como "cupim", "barata", "ralo" ou selecione outra categoria.
            </p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Limpar Filtros e Ver Todos
            </button>
          </div>
        )}

        {/* Bottom Commercial CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: 'var(--shadow-glow-cyan)',
            marginTop: '2rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              Atendimento 24 Horas em Toda SP
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.75rem',
              }}
            >
              Pragas no imóvel ou emergência com esgoto entupido?
            </h3>
            <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.6 }}>
              Não espere a situação piorar. Nossa frota volante realiza orçamento gratuito e visita técnica
              imediata com certificado de garantia por escrito.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald"
              style={{
                padding: '0.9rem 1.85rem',
                fontSize: '1rem',
                borderRadius: '9999px',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
              }}
            >
              <img
                src="/images/logos/whatsapp-white.svg"
                alt="WhatsApp"
                className="w-5 h-5 flex-shrink-0 object-contain"
              />
              <span>Falar no WhatsApp Agora</span>
            </a>

            <a
              href="tel:11940724379"
              className="btn btn-outline"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.4)',
                color: '#ffffff',
                borderRadius: '9999px',
              }}
            >
              <Phone className="w-4 h-4" />
              <span>(11) 94072-4379</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
