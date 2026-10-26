import { useEffect } from "react";

export interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setOrUpdateMeta(selector: string, attrName: "name" | "property", attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrUpdateLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://dedetizadoramaringa.com.br/images/logos/logo.png",
  ogImageAlt = "Dedetizadora Maringá",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  jsonLd,
}: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    setOrUpdateMeta('meta[name="description"]', "name", "description", description);
    setOrUpdateMeta('meta[name="robots"]', "name", "robots", robots);
    setOrUpdateLink("canonical", canonical);

    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDescription = ogDescription || description;

    setOrUpdateMeta('meta[property="og:title"]', "property", "og:title", resolvedOgTitle);
    setOrUpdateMeta('meta[property="og:description"]', "property", "og:description", resolvedOgDescription);
    setOrUpdateMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setOrUpdateMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setOrUpdateMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", ogImage);
    setOrUpdateMeta('meta[property="og:image:alt"]', "property", "og:image:alt", ogImageAlt);

    setOrUpdateMeta('meta[name="twitter:title"]', "name", "twitter:title", resolvedOgTitle);
    setOrUpdateMeta('meta[name="twitter:description"]', "name", "twitter:description", resolvedOgDescription);
    setOrUpdateMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    let scriptEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptEl = document.head.querySelector<HTMLScriptElement>('script[data-page-schema="true"]');
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.type = "application/ld+json";
        scriptEl.setAttribute("data-page-schema", "true");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else {
      const existing = document.head.querySelector<HTMLScriptElement>('script[data-page-schema="true"]');
      if (existing) {
        existing.remove();
      }
    }

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogImageAlt, robots, jsonLd]);
}

