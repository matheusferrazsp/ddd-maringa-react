export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'callout'
  | 'cta'
  | 'checklist'
  | 'quote'
  | 'image'
  | 'stat'
  | 'faq';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  level: 'h2' | 'h3';
  text: string;
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph';
  content: string;
}

export interface CalloutBlock extends BaseBlock {
  type: 'callout';
  variant: 'tip' | 'warning' | 'info';
  title: string;
  content: string;
}

export interface CtaBlock extends BaseBlock {
  type: 'cta';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant: 'whatsapp' | 'phone';
}

export interface ChecklistBlock extends BaseBlock {
  type: 'checklist';
  title: string;
  items: string[];
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  quote: string;
  author: string;
  role: string;
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  url: string;
  caption: string;
  alt: string;
}

export interface StatBlock extends BaseBlock {
  type: 'stat';
  number: string;
  label: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlock extends BaseBlock {
  type: 'faq';
  title: string;
  items: FaqItem[];
}

export type BlogBlock =
  | HeadingBlock
  | ParagraphBlock
  | CalloutBlock
  | CtaBlock
  | ChecklistBlock
  | QuoteBlock
  | ImageBlock
  | StatBlock
  | FaqBlock;

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  author: BlogAuthor;
  publishDate: string;
  readTimeMinutes: number;
  status: 'published' | 'draft';
  metaDescription: string;
  keywords: string;
  blocks: BlogBlock[];
  createdAt: string;
  updatedAt: string;
}
