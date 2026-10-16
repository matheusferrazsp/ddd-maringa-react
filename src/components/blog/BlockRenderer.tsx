import React, { useState } from 'react';
import type {
  BlogBlock,
  HeadingBlock,
  ParagraphBlock,
  CalloutBlock,
  CtaBlock,
  ChecklistBlock,
  QuoteBlock,
  ImageBlock,
  StatBlock,
  FaqBlock,
} from '../../types/blog';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Info,
  Lightbulb,
  Phone,
  Quote,
} from 'lucide-react';

interface BlockRendererProps {
  block: BlogBlock;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case 'heading': {
      const b = block as HeadingBlock;
      const slug = b.text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      if (b.level === 'h3') {
        return (
          <h3 id={slug} className="block-heading-h3">
            {b.text}
          </h3>
        );
      }
      return (
        <h2 id={slug} className="block-heading-h2">
          {b.text}
        </h2>
      );
    }

    case 'paragraph': {
      const b = block as ParagraphBlock;
      return (
        <div className="block-paragraph">
          {b.content.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>
      );
    }

    case 'callout': {
      const b = block as CalloutBlock;
      let icon = <Info className="w-5 h-5 flex-shrink-0" />;
      if (b.variant === 'tip') {
        icon = <Lightbulb className="w-5 h-5 flex-shrink-0" />;
      } else if (b.variant === 'warning') {
        icon = <AlertTriangle className="w-5 h-5 flex-shrink-0" />;
      }

      return (
        <div className={`block-callout block-callout--${b.variant}`}>
          <div className="block-callout__header">
            {icon}
            <span>{b.title}</span>
          </div>
          <div className="block-callout__text">{b.content}</div>
        </div>
      );
    }

    case 'cta': {
      const b = block as CtaBlock;
      return (
        <div className="block-cta">
          <h3 className="block-cta__title">{b.title}</h3>
          <p className="block-cta__desc">{b.description}</p>
          <a
            href={b.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald"
            style={{
              padding: '0.85rem 2rem',
              fontSize: '1.05rem',
              borderRadius: '9999px',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
            }}
          >
            {b.variant === 'phone' ? (
              <Phone className="w-5 h-5" />
            ) : (
              <img
                src="/images/logos/whatsapp-white.svg"
                alt="WhatsApp"
                className="w-5 h-5 flex-shrink-0 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <span>{b.buttonText}</span>
          </a>
        </div>
      );
    }

    case 'checklist': {
      const b = block as ChecklistBlock;
      return (
        <div className="block-checklist">
          {b.title && <h4 className="block-checklist__title">{b.title}</h4>}
          <ul className="block-checklist__list">
            {b.items.map((item, idx) => (
              <li key={idx} className="block-checklist__item">
                <CheckCircle2 className="w-5 h-5 block-checklist__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case 'quote': {
      const b = block as QuoteBlock;
      return (
        <div className="block-quote">
          <Quote className="w-7 h-7 text-sky-400 mb-2 opacity-60" style={{ color: '#0284c7' }} />
          <p className="block-quote__text">"{b.quote}"</p>
          <div>
            <span className="block-quote__author">— {b.author}</span>
            {b.role && <span className="block-quote__role">({b.role})</span>}
          </div>
        </div>
      );
    }

    case 'image': {
      const b = block as ImageBlock;
      return (
        <figure style={{ margin: '2.5rem 0', textAlign: 'center' }}>
          <img
            src={b.url}
            alt={b.alt || b.caption}
            style={{
              width: '100%',
              maxHeight: '480px',
              objectFit: 'cover',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-tech)',
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/trabalho/telhado.jpg';
            }}
          />
          {b.caption && (
            <figcaption
              style={{
                marginTop: '0.65rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}
            >
              {b.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'stat': {
      const b = block as StatBlock;
      return (
        <div className="block-stat">
          <div className="block-stat__number">{b.number}</div>
          <div className="block-stat__label">{b.label}</div>
          {b.description && <div className="block-stat__desc">{b.description}</div>}
        </div>
      );
    }

    case 'faq': {
      const b = block as FaqBlock;
      return <FaqAccordionBlock block={b} />;
    }

    default:
      return null;
  }
};

const FaqAccordionBlock: React.FC<{ block: FaqBlock }> = ({ block }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="block-faq">
      <h3 className="block-faq__title">
        <HelpCircle
          className="w-5 h-5 inline-block mr-2"
          style={{ verticalAlign: 'middle', color: '#0284c7' }}
        />
        {block.title || 'Perguntas Frequentes'}
      </h3>
      <div>
        {block.items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div key={idx} className={`block-faq__item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="block-faq__btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {isOpen && <div className="block-faq__answer">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
