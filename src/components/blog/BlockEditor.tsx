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
  Upload,
  Link2,
  X,
} from 'lucide-react';
import { normalizePublicImageUrl, readImageFileAsDataUrl } from '../../utils/imageUrl';

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

const QUICK_INTERNAL_LINKS = [
  { label: 'Descupinização', url: '/descupinizacao' },
  { label: 'Dedetizadora Embu', url: '/dedetizadora-embu-das-artes' },
  { label: 'Serviços', url: '/servicos' },
  { label: 'WhatsApp', url: 'https://wa.me/+5511940724379' },
];

const RichTextarea: React.FC<{
  label: string;
  value: string;
  onChange: (newVal: string) => void;
  placeholder?: string;
  minHeight?: string;
  showWordCount?: boolean;
}> = ({ label, value, onChange, placeholder, minHeight = '120px', showWordCount = false }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [showLinkBox, setShowLinkBox] = useState(false);
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [selectionRange, setSelectionRange] = useState<{ start: number; end: number }>({ start: 0, end: 0 });

  const plainTextForCount = value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  const wordCount = plainTextForCount.trim() ? plainTextForCount.trim().split(/\s+/).length : 0;

  // Extract existing inline links [texto](url) to display badges below the textarea
  const existingLinks = React.useMemo(() => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const found: Array<{ fullMatch: string; text: string; url: string; index: number }> = [];
    let m: RegExpExecArray | null;
    while ((m = regex.exec(value)) !== null) {
      found.push({
        fullMatch: m[0],
        text: m[1],
        url: m[2],
        index: m.index,
      });
    }
    return found;
  }, [value]);

  const handleOpenLinkTool = () => {
    const el = textareaRef.current;
    if (el) {
      const start = el.selectionStart ?? value.length;
      const end = el.selectionEnd ?? value.length;
      const selected = value.slice(start, end);
      setSelectionRange({ start, end });
      setLinkText(selected || '');
    } else {
      setSelectionRange({ start: value.length, end: value.length });
      setLinkText('');
    }
    setLinkUrl('');
    setShowLinkBox(true);
  };

  const handleInsertLink = () => {
    const cleanText = linkText.trim() || linkUrl.trim();
    let cleanUrl = linkUrl.trim();
    if (!cleanText || !cleanUrl) return;

    if (
      !cleanUrl.startsWith('http://') &&
      !cleanUrl.startsWith('https://') &&
      !cleanUrl.startsWith('/') &&
      !cleanUrl.startsWith('#') &&
      !cleanUrl.startsWith('mailto:') &&
      !cleanUrl.startsWith('tel:')
    ) {
      cleanUrl = `https://${cleanUrl}`;
    }

    const markdownLink = `[${cleanText}](${cleanUrl})`;
    const { start, end } = selectionRange;
    const before = value.slice(0, start);
    const after = value.slice(end);
    const needLeadingSpace = before.length > 0 && start === end && !/\s$/.test(before);
    const updated = `${before}${needLeadingSpace ? ' ' : ''}${markdownLink}${after}`;

    onChange(updated);
    setShowLinkBox(false);
    setLinkText('');
    setLinkUrl('');
  };

  const handleRemoveInlineLink = (fullMatch: string, plainLabel: string) => {
    onChange(value.replace(fullMatch, plainLabel));
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '0.45rem',
        }}
      >
        <label className="copy-label" style={{ margin: 0 }}>
          {label}
        </label>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            type="button"
            onClick={() => (showLinkBox ? setShowLinkBox(false) : handleOpenLinkTool())}
            className="btn btn-outline"
            style={{
              padding: '0.2rem 0.65rem',
              minHeight: '28px',
              fontSize: '0.76rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              borderColor: showLinkBox ? 'var(--accent-cyan)' : undefined,
              color: showLinkBox ? 'var(--accent-cyan-dark)' : undefined,
              background: showLinkBox ? 'rgba(2, 132, 199, 0.08)' : undefined,
            }}
            title="Selecione um trecho do texto (ou clique aqui) para inserir um link"
          >
            <Link2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Inserir Link</span>
          </button>

          {showWordCount && (
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {wordCount} palavras • {plainTextForCount.length} caracteres
            </span>
          )}
        </div>
      </div>

      {showLinkBox && (
        <div
          style={{
            marginBottom: '0.65rem',
            padding: '0.85rem',
            borderRadius: 'var(--radius-md)',
            background: '#f0f9ff',
            border: '1px solid rgba(2, 132, 199, 0.28)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.55rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0369a1', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Link2 className="w-3.5 h-3.5" /> Inserir Link no Texto
            </span>
            <button
              type="button"
              onClick={() => setShowLinkBox(false)}
              className="copy-icon-btn"
              style={{ width: '24px', height: '24px' }}
              title="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="copy-grid-2" style={{ marginBottom: '0.55rem' }}>
            <div>
              <label className="copy-label" style={{ fontSize: '0.74rem' }}>
                Texto que ficará clicável
              </label>
              <input
                type="text"
                className="copy-input"
                value={linkText}
                placeholder="Ex: estudo na Scientia Agricola"
                onChange={(e) => setLinkText(e.target.value)}
              />
            </div>
            <div>
              <label className="copy-label" style={{ fontSize: '0.74rem' }}>
                URL / Link de Destino
              </label>
              <input
                type="text"
                className="copy-input"
                value={linkUrl}
                placeholder="https://... ou /descupinizacao"
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleInsertLink();
                  }
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Atalhos:</span>
              {QUICK_INTERNAL_LINKS.map((q) => (
                <button
                  key={q.url}
                  type="button"
                  onClick={() => {
                    setLinkUrl(q.url);
                    if (!linkText.trim()) setLinkText(q.label);
                  }}
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(2, 132, 199, 0.25)',
                    background: '#ffffff',
                    color: '#0369a1',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowLinkBox(false)}
                style={{ minHeight: '30px', padding: '0.25rem 0.7rem', fontSize: '0.78rem' }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-cyan"
                onClick={handleInsertLink}
                disabled={!linkUrl.trim()}
                style={{
                  minHeight: '30px',
                  padding: '0.25rem 0.85rem',
                  fontSize: '0.78rem',
                  opacity: linkUrl.trim() ? 1 : 0.5,
                }}
              >
                Aplicar Link
              </button>
            </div>
          </div>
        </div>
      )}

      <textarea
        ref={textareaRef}
        className="copy-textarea"
        style={{ minHeight }}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

      {existingLinks.length > 0 && (
        <div
          style={{
            marginTop: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.4rem',
          }}
        >
          <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Links no texto:
          </span>
          {existingLinks.map((lnk, i) => (
            <span
              key={`${lnk.index}-${i}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.15rem 0.55rem',
                borderRadius: '9999px',
                background: '#f0f9ff',
                border: '1px solid rgba(2, 132, 199, 0.22)',
                fontSize: '0.74rem',
                color: '#0369a1',
              }}
            >
              <Link2 className="w-3 h-3" />
              <strong>{lnk.text}</strong>
              <span style={{ color: '#64748b', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                ({lnk.url})
              </span>
              <button
                type="button"
                onClick={() => handleRemoveInlineLink(lnk.fullMatch, lnk.text)}
                title="Remover link (mantendo o texto)"
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                }}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const OptionalBlockLinkEditor: React.FC<{
  linkText?: string;
  linkUrl?: string;
  onChange: (linkText?: string, linkUrl?: string) => void;
}> = ({ linkText, linkUrl, onChange }) => {
  const hasLink = Boolean(linkText !== undefined || linkUrl !== undefined);

  if (!hasLink) {
    return (
      <div style={{ marginTop: '0.6rem' }}>
        <button
          type="button"
          onClick={() => onChange('', '')}
          className="btn btn-outline"
          style={{
            minHeight: '30px',
            padding: '0.25rem 0.7rem',
            fontSize: '0.76rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <Link2 className="w-3.5 h-3.5 text-sky-600" />
          <span>+ Adicionar Botão de Link Opcional no Fim do Bloco</span>
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: '0.75rem',
        padding: '0.75rem',
        borderRadius: 'var(--radius-md)',
        background: '#f8fafc',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Link2 className="w-3.5 h-3.5 text-sky-600" /> Botão / Link Opcional do Bloco
        </span>
        <button
          type="button"
          onClick={() => onChange(undefined, undefined)}
          className="copy-icon-btn danger"
          style={{ width: '24px', height: '24px' }}
          title="Remover botão de link opcional"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="copy-grid-2">
        <div>
          <label className="copy-label" style={{ fontSize: '0.74rem' }}>
            Texto do Botão / Link
          </label>
          <input
            type="text"
            className="copy-input"
            value={linkText || ''}
            placeholder="Ex: Acessar estudo completo ou Ver página de Descupinização"
            onChange={(e) => onChange(e.target.value, linkUrl || '')}
          />
        </div>
        <div>
          <label className="copy-label" style={{ fontSize: '0.74rem' }}>
            URL de Destino
          </label>
          <input
            type="text"
            className="copy-input"
            value={linkUrl || ''}
            placeholder="https://... ou /descupinizacao"
            onChange={(e) => onChange(linkText || '', e.target.value)}
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
  return (
    <div>
      <RichTextarea
        label="Conteúdo do Parágrafo"
        value={block.content}
        onChange={(content) => onChange({ ...block, content })}
        placeholder="Escreva seu parágrafo persuasivo aqui. Selecione qualquer palavra e clique em 'Inserir Link' para adicionar um hiperlink."
        minHeight="120px"
        showWordCount
      />
      <OptionalBlockLinkEditor
        linkText={block.linkText}
        linkUrl={block.linkUrl}
        onChange={(linkText, linkUrl) => onChange({ ...block, linkText, linkUrl })}
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
      <RichTextarea
        label="Mensagem em Destaque"
        value={block.content}
        onChange={(content) => onChange({ ...block, content })}
        placeholder="Texto de impacto para prender a atenção do leitor..."
        minHeight="90px"
      />
      <OptionalBlockLinkEditor
        linkText={block.linkText}
        linkUrl={block.linkUrl}
        onChange={(linkText, linkUrl) => onChange({ ...block, linkText, linkUrl })}
      />
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
        <RichTextarea
          label="Frase de Citação / Depoimento"
          value={block.quote}
          onChange={(quote) => onChange({ ...block, quote })}
          placeholder="Insira a frase marcante do especialista ou depoimento de cliente..."
          minHeight="80px"
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
  const [loadError, setLoadError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const normalizedUrl = normalizePublicImageUrl(block.url);

  const handleUrlChange = (val: string) => {
    setLoadError(false);
    const normalized = normalizePublicImageUrl(val);
    onChange({ ...block, url: normalized });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      setLoadError(false);
      const dataUrl = await readImageFileAsDataUrl(file);
      onChange({ ...block, url: dataUrl });
    } catch (err: any) {
      alert(err.message || 'Erro ao carregar arquivo de imagem.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
          <label className="copy-label" style={{ margin: 0 }}>URL Pública da Imagem</label>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="btn btn-outline"
            style={{ padding: '0.25rem 0.65rem', fontSize: '0.78rem', minHeight: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            title="Selecione uma imagem do seu computador"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{isUploading ? 'Carregando...' : 'Carregar do Computador'}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </div>

        <input
          type="text"
          className="copy-input"
          value={block.url}
          placeholder="https://exemplo.com/foto.jpg ou link do Google Drive, Dropbox, Imgur"
          onChange={(e) => handleUrlChange(e.target.value)}
        />
        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          💡 Suporta links diretos (PNG, JPG, WebP), compartilhamento do <strong>Google Drive</strong>, <strong>Dropbox</strong>, <strong>Imgur</strong> ou fotos do seu computador.
        </div>

        {/* Live Preview do Bloco de Imagem */}
        {block.url && (
          <div
            style={{
              marginTop: '0.75rem',
              padding: '0.65rem',
              background: '#f8fafc',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
            }}
          >
            {loadError ? (
              <div style={{ padding: '0.5rem', color: '#dc2626', fontSize: '0.82rem' }}>
                ⚠️ Não foi possível carregar esta imagem. Verifique se o link é público e aberto para visualização.
              </div>
            ) : (
              <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
                <img
                  src={normalizedUrl}
                  alt={block.alt || 'Prévia'}
                  referrerPolicy="no-referrer"
                  style={{
                    maxHeight: '180px',
                    maxWidth: '100%',
                    borderRadius: 'var(--radius-sm)',
                    objectFit: 'cover',
                  }}
                  onLoad={() => setLoadError(false)}
                  onError={() => setLoadError(true)}
                />
                <div style={{ fontSize: '0.72rem', color: '#16a34a', marginTop: '0.25rem', fontWeight: 600 }}>
                  ✓ Prévia da imagem carregada com sucesso
                </div>
              </div>
            )}
          </div>
        )}
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
      <RichTextarea
        label="Explicação Detalhada"
        value={block.description}
        onChange={(description) => onChange({ ...block, description })}
        placeholder="Ex: Uma única colônia de cupins pode destruir metros de vigas..."
        minHeight="80px"
      />
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
            <RichTextarea
              label="Resposta"
              value={item.answer}
              onChange={(answer) => updateItem(idx, 'answer', answer)}
              placeholder="Resposta..."
              minHeight="65px"
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
