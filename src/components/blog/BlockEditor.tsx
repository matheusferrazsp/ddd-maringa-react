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
  ChevronUp,
  ChevronDown,
  Copy,
  Trash2,
  Heading2,
  AlignLeft,
  Lightbulb,
  PhoneCall,
  CheckSquare,
  Quote,
  Image as ImageIcon,
  BarChart3,
  HelpCircle,
  Plus,
  Minimize2,
  Maximize2,
} from 'lucide-react';

interface BlockEditorProps {
  block: BlogBlock;
  index: number;
  totalBlocks: number;
  onChange: (updated: BlogBlock) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const BlockEditor: React.FC<BlockEditorProps> = ({
  block,
  index,
  totalBlocks,
  onChange,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const getBlockMeta = () => {
    switch (block.type) {
      case 'heading':
        return {
          title: `Subtítulo (${(block as HeadingBlock).level.toUpperCase()})`,
          icon: <Heading2 className="w-4 h-4 text-sky-600" />,
          color: '#0284c7',
        };
      case 'paragraph':
        return {
          title: 'Texto / Parágrafo',
          icon: <AlignLeft className="w-4 h-4 text-slate-600" />,
          color: '#475569',
        };
      case 'callout':
        return {
          title: 'Caixa de Destaque',
          icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
          color: '#d97706',
        };
      case 'cta':
        return {
          title: 'Chamada para Ação (CTA Comercial)',
          icon: <PhoneCall className="w-4 h-4 text-emerald-600" />,
          color: '#10b981',
        };
      case 'checklist':
        return {
          title: 'Lista / Checklist de Pontos',
          icon: <CheckSquare className="w-4 h-4 text-emerald-600" />,
          color: '#059669',
        };
      case 'quote':
        return {
          title: 'Citação / Depoimento',
          icon: <Quote className="w-4 h-4 text-purple-600" />,
          color: '#8b5cf6',
        };
      case 'image':
        return {
          title: 'Imagem com Legenda',
          icon: <ImageIcon className="w-4 h-4 text-blue-600" />,
          color: '#2563eb',
        };
      case 'stat':
        return {
          title: 'Métrica / Número em Destaque',
          icon: <BarChart3 className="w-4 h-4 text-cyan-600" />,
          color: '#0891b2',
        };
      case 'faq':
        return {
          title: 'Dúvidas Frequentes (FAQ)',
          icon: <HelpCircle className="w-4 h-4 text-indigo-600" />,
          color: '#6366f1',
        };
    }
  };

  const meta = getBlockMeta();

  return (
    <div className="copy-block-card">
      {/* Block Header Bar */}
      <div className="copy-block-card__bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>
            #{index + 1}
          </span>
          <span className="copy-block-tag">
            {meta.icon}
            <span>{meta.title}</span>
          </span>
        </div>

        <div className="copy-block-card__actions">
          <button
            type="button"
            className="copy-icon-btn"
            onClick={onMoveUp}
            disabled={index === 0}
            title="Mover para Cima"
            style={{ opacity: index === 0 ? 0.35 : 1 }}
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="copy-icon-btn"
            onClick={onMoveDown}
            disabled={index === totalBlocks - 1}
            title="Mover para Baixo"
            style={{ opacity: index === totalBlocks - 1 ? 0.35 : 1 }}
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="copy-icon-btn"
            onClick={onDuplicate}
            title="Duplicar Bloco"
          >
            <Copy className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="copy-icon-btn"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expandir' : 'Recolher'}
          >
            {collapsed ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            className="copy-icon-btn danger"
            onClick={onDelete}
            title="Excluir Bloco"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Block Content Editor */}
      {!collapsed && (
        <div className="copy-block-card__content">
          {block.type === 'heading' && (
            <HeadingEditor
              block={block as HeadingBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'paragraph' && (
            <ParagraphEditor
              block={block as ParagraphBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'callout' && (
            <CalloutEditor
              block={block as CalloutBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'cta' && (
            <CtaEditor
              block={block as CtaBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'checklist' && (
            <ChecklistEditor
              block={block as ChecklistBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'quote' && (
            <QuoteEditor
              block={block as QuoteBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'image' && (
            <ImageEditor
              block={block as ImageBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'stat' && (
            <StatEditor
              block={block as StatBlock}
              onChange={(b) => onChange(b)}
            />
          )}

          {block.type === 'faq' && (
            <FaqEditor
              block={block as FaqBlock}
              onChange={(b) => onChange(b)}
            />
          )}
        </div>
      )}
    </div>
  );
};

/* --- Individual Block Editors --- */

const HeadingEditor: React.FC<{
  block: HeadingBlock;
  onChange: (b: HeadingBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div className="copy-grid-2" style={{ marginBottom: '0.85rem' }}>
        <div>
          <label className="copy-label">Nível Hierárquico</label>
          <select
            className="copy-select"
            value={block.level}
            onChange={(e) => onChange({ ...block, level: e.target.value as 'h2' | 'h3' })}
          >
            <option value="h2">H2 — Seção Principal (Gera Sumário)</option>
            <option value="h3">H3 — Subtítulo Interno</option>
          </select>
        </div>
        <div>
          <label className="copy-label">
            Texto do Subtítulo <span className="hint">({block.text.length} carac.)</span>
          </label>
          <input
            type="text"
            className="copy-input"
            value={block.text}
            placeholder="Ex: Como Funciona a Aplicação Química de Barreira..."
            onChange={(e) => onChange({ ...block, text: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

const ParagraphEditor: React.FC<{
  block: ParagraphBlock;
  onChange: (b: ParagraphBlock) => void;
}> = ({ block, onChange }) => {
  const wordCount = block.content.trim() ? block.content.trim().split(/\s+/).length : 0;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
        <label className="copy-label" style={{ margin: 0 }}>
          Conteúdo do Parágrafo
        </label>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {wordCount} palavras • {block.content.length} caracteres
        </span>
      </div>
      <textarea
        className="copy-textarea"
        style={{ minHeight: '120px' }}
        value={block.content}
        placeholder="Escreva seu parágrafo persuasivo aqui. Pressione Enter duas vezes para quebrar linhas se desejar."
        onChange={(e) => onChange({ ...block, content: e.target.value })}
      />
    </div>
  );
};

const CalloutEditor: React.FC<{
  block: CalloutBlock;
  onChange: (b: CalloutBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div className="copy-grid-2" style={{ marginBottom: '0.85rem' }}>
        <div>
          <label className="copy-label">Estilo do Destaque</label>
          <select
            className="copy-select"
            value={block.variant}
            onChange={(e) => onChange({ ...block, variant: e.target.value as 'tip' | 'warning' | 'info' })}
          >
            <option value="tip">💡 Dica Prática (Verde / Emerald)</option>
            <option value="warning">⚠️ Alerta Crítico (Vermelho / Red)</option>
            <option value="info">ℹ️ Informação Técnica (Azul / Cyan)</option>
          </select>
        </div>
        <div>
          <label className="copy-label">Título da Caixa</label>
          <input
            type="text"
            className="copy-input"
            value={block.title}
            placeholder="Ex: Alerta de Segurança ANVISA"
            onChange={(e) => onChange({ ...block, title: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="copy-label">Mensagem em Destaque</label>
        <textarea
          className="copy-textarea"
          value={block.content}
          placeholder="Texto de impacto para prender a atenção do leitor..."
          onChange={(e) => onChange({ ...block, content: e.target.value })}
        />
      </div>
    </div>
  );
};

const CtaEditor: React.FC<{
  block: CtaBlock;
  onChange: (b: CtaBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div className="copy-grid-2" style={{ marginBottom: '0.85rem' }}>
        <div>
          <label className="copy-label">Chamada Principal (H3)</label>
          <input
            type="text"
            className="copy-input"
            value={block.title}
            placeholder="Ex: Sofrendo com Pragas Urbanas?"
            onChange={(e) => onChange({ ...block, title: e.target.value })}
          />
        </div>
        <div>
          <label className="copy-label">Texto do Botão</label>
          <input
            type="text"
            className="copy-input"
            value={block.buttonText}
            placeholder="Ex: Falar com Especialista no WhatsApp"
            onChange={(e) => onChange({ ...block, buttonText: e.target.value })}
          />
        </div>
      </div>

      <div className="copy-grid-2" style={{ marginBottom: '0.85rem' }}>
        <div>
          <label className="copy-label">Tipo de Ação</label>
          <select
            className="copy-select"
            value={block.variant}
            onChange={(e) => onChange({ ...block, variant: e.target.value as 'whatsapp' | 'phone' })}
          >
            <option value="whatsapp">📱 WhatsApp Comercial</option>
            <option value="phone">📞 Ligação Telefônica Direta</option>
          </select>
        </div>
        <div>
          <label className="copy-label">Link de Destino</label>
          <input
            type="text"
            className="copy-input"
            value={block.buttonLink}
            placeholder="https://wa.me/+5511940724379 ou tel:11940724379"
            onChange={(e) => onChange({ ...block, buttonLink: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="copy-label">Texto Descritivo Persuasivo</label>
        <textarea
          className="copy-textarea"
          style={{ minHeight: '70px' }}
          value={block.description}
          placeholder="Ex: Atendimento emergencial 24h em São Paulo e região. Orçamento sem compromisso!"
          onChange={(e) => onChange({ ...block, description: e.target.value })}
        />
      </div>
    </div>
  );
};

const ChecklistEditor: React.FC<{
  block: ChecklistBlock;
  onChange: (b: ChecklistBlock) => void;
}> = ({ block, onChange }) => {
  const updateItem = (idx: number, val: string) => {
    const newItems = [...block.items];
    newItems[idx] = val;
    onChange({ ...block, items: newItems });
  };

  const addItem = () => {
    onChange({ ...block, items: [...block.items, 'Novo ponto de atenção'] });
  };

  const removeItem = (idx: number) => {
    onChange({ ...block, items: block.items.filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <div style={{ marginBottom: '0.85rem' }}>
        <label className="copy-label">Título da Lista</label>
        <input
          type="text"
          className="copy-input"
          value={block.title}
          placeholder="Ex: 5 Sintomas de que o Esgoto Está Entupido"
          onChange={(e) => onChange({ ...block, title: e.target.value })}
        />
      </div>

      <div>
        <label className="copy-label">Itens da Lista ({block.items.length})</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {block.items.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="text"
                className="copy-input"
                value={item}
                placeholder={`Item ${idx + 1}`}
                onChange={(e) => updateItem(idx, e.target.value)}
              />
              <button
                type="button"
                className="copy-icon-btn danger"
                onClick={() => removeItem(idx)}
                disabled={block.items.length <= 1}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline"
          onClick={addItem}
          style={{ minHeight: '34px', padding: '0.35rem 0.85rem', fontSize: '0.82rem' }}
        >
          <Plus className="w-4 h-4" /> Adicionar Item
        </button>
      </div>
    </div>
  );
};

const QuoteEditor: React.FC<{
  block: QuoteBlock;
  onChange: (b: QuoteBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div style={{ marginBottom: '0.85rem' }}>
        <label className="copy-label">Frase de Citação / Depoimento</label>
        <textarea
          className="copy-textarea"
          value={block.quote}
          placeholder="Insira a frase marcante do especialista ou depoimento de cliente..."
          onChange={(e) => onChange({ ...block, quote: e.target.value })}
        />
      </div>
      <div className="copy-grid-2">
        <div>
          <label className="copy-label">Autor da Frase</label>
          <input
            type="text"
            className="copy-input"
            value={block.author}
            placeholder="Ex: Dr. Roberto Alencar"
            onChange={(e) => onChange({ ...block, author: e.target.value })}
          />
        </div>
        <div>
          <label className="copy-label">Cargo ou Identificação</label>
          <input
            type="text"
            className="copy-input"
            value={block.role}
            placeholder="Ex: Engenheiro Químico & Responsável Técnico"
            onChange={(e) => onChange({ ...block, role: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

const ImageEditor: React.FC<{
  block: ImageBlock;
  onChange: (b: ImageBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div style={{ marginBottom: '0.85rem' }}>
        <label className="copy-label">URL da Imagem</label>
        <input
          type="text"
          className="copy-input"
          value={block.url}
          placeholder="/images/trabalho/telhado.jpg ou URL externa da imagem"
          onChange={(e) => onChange({ ...block, url: e.target.value })}
        />
      </div>

      <div className="copy-grid-2">
        <div>
          <label className="copy-label">Legenda da Imagem</label>
          <input
            type="text"
            className="copy-input"
            value={block.caption}
            placeholder="Ex: Técnico realizando vistoria em telhado"
            onChange={(e) => onChange({ ...block, caption: e.target.value })}
          />
        </div>
        <div>
          <label className="copy-label">Texto Alternativo (Alt SEO)</label>
          <input
            type="text"
            className="copy-input"
            value={block.alt}
            placeholder="Ex: Dedetizador aplicando barreira química"
            onChange={(e) => onChange({ ...block, alt: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

const StatEditor: React.FC<{
  block: StatBlock;
  onChange: (b: StatBlock) => void;
}> = ({ block, onChange }) => {
  return (
    <div>
      <div className="copy-grid-2" style={{ marginBottom: '0.85rem' }}>
        <div>
          <label className="copy-label">Número / Métrica em Destaque</label>
          <input
            type="text"
            className="copy-input"
            value={block.number}
            placeholder="Ex: 100.000+ ou 24h ou 99.8%"
            onChange={(e) => onChange({ ...block, number: e.target.value })}
          />
        </div>
        <div>
          <label className="copy-label">Título da Métrica</label>
          <input
            type="text"
            className="copy-input"
            value={block.label}
            placeholder="Ex: Indivíduos por Colônia"
            onChange={(e) => onChange({ ...block, label: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="copy-label">Explicação Detalhada</label>
        <textarea
          className="copy-textarea"
          value={block.description}
          placeholder="Ex: Uma única colônia de cupins pode destruir metros de vigas..."
          onChange={(e) => onChange({ ...block, description: e.target.value })}
        />
      </div>
    </div>
  );
};

const FaqEditor: React.FC<{
  block: FaqBlock;
  onChange: (b: FaqBlock) => void;
}> = ({ block, onChange }) => {
  const updateItem = (idx: number, field: 'question' | 'answer', val: string) => {
    const newItems = [...block.items];
    newItems[idx] = { ...newItems[idx], [field]: val };
    onChange({ ...block, items: newItems });
  };

  const addItem = () => {
    onChange({
      ...block,
      items: [
        ...block.items,
        { question: 'Nova pergunta comum dos clientes?', answer: 'Resposta explicativa com orientações claras.' },
      ],
    });
  };

  const removeItem = (idx: number) => {
    onChange({ ...block, items: block.items.filter((_, i) => i !== idx) });
  };

  return (
    <div>
      <div style={{ marginBottom: '0.85rem' }}>
        <label className="copy-label">Título da Seção de FAQ</label>
        <input
          type="text"
          className="copy-input"
          value={block.title}
          placeholder="Ex: Perguntas Frequentes sobre Descupinização"
          onChange={(e) => onChange({ ...block, title: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '0.85rem' }}>
        {block.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '0.85rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              background: '#f8fafc',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan-dark)' }}>
                Pergunta #{idx + 1}
              </span>
              <button
                type="button"
                className="copy-icon-btn danger"
                onClick={() => removeItem(idx)}
                disabled={block.items.length <= 1}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <input
              type="text"
              className="copy-input"
              style={{ marginBottom: '0.5rem' }}
              value={item.question}
              placeholder="Pergunta..."
              onChange={(e) => updateItem(idx, 'question', e.target.value)}
            />
            <textarea
              className="copy-textarea"
              style={{ minHeight: '60px' }}
              value={item.answer}
              placeholder="Resposta..."
              onChange={(e) => updateItem(idx, 'answer', e.target.value)}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-outline"
        onClick={addItem}
        style={{ minHeight: '34px', padding: '0.35rem 0.85rem', fontSize: '0.82rem' }}
      >
        <Plus className="w-4 h-4" /> Adicionar Pergunta & Resposta
      </button>
    </div>
  );
};
