/**
 * Utilitário para normalizar e converter links públicos de imagens
 * Suporta Google Drive, Dropbox, Imgur e URLs com proteção anti-hotlink
 */
export function normalizePublicImageUrl(rawUrl: string): string {
  if (!rawUrl) return '';
  const url = rawUrl.trim();

  // 1. Google Drive Sharing Links
  // Ex: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Ex: https://drive.google.com/open?id=FILE_ID
  // Ex: https://drive.google.com/uc?id=FILE_ID
  const gDriveMatch = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/);
  if (gDriveMatch && gDriveMatch[1]) {
    const fileId = gDriveMatch[1];
    // lh3.googleusercontent.com é a CDN direta de alta velocidade do Google para imagens
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  // 2. Dropbox Links
  // Ex: https://www.dropbox.com/s/xyz/foto.jpg?dl=0 -> ?raw=1
  if (url.includes('dropbox.com')) {
    return url.replace(/[?&]dl=[01]/, '').concat(url.includes('?') ? '&raw=1' : '?raw=1');
  }

  // 3. Imgur Page Links
  // Ex: https://imgur.com/abc1234 -> https://i.imgur.com/abc1234.jpg
  const imgurMatch = url.match(/^https?:\/\/(?:www\.)?imgur\.com\/([a-zA-Z0-9]+)$/);
  if (imgurMatch && imgurMatch[1] && !['a', 'gallery'].includes(imgurMatch[1])) {
    return `https://i.imgur.com/${imgurMatch[1]}.jpg`;
  }

  // 4. Force HTTPS para evitar bloqueio de Mixed Content em conexões SSL (Cloudflare Pages)
  if (url.startsWith('http://') && !url.includes('localhost')) {
    return url.replace('http://', 'https://');
  }

  return url;
}

/**
 * Utilitário para comprimir e converter arquivos locais selecionados do computador em Base64 Data URL
 */
export function readImageFileAsDataUrl(file: File, maxWidth: number = 1600): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('O arquivo selecionado não é uma imagem válida.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (!result) {
        reject(new Error('Falha ao ler o arquivo de imagem.'));
        return;
      }

      // Se for SVG ou GIF animado, não redimensiona no canvas
      if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
        resolve(result);
        return;
      }

      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(result);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Salva em formato WebP/JPEG com excelente qualidade e peso reduzido
        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
        resolve(dataUrl);
      };

      img.onerror = () => resolve(result);
      img.src = result;
    };

    reader.onerror = () => reject(new Error('Erro ao ler imagem local.'));
    reader.readAsDataURL(file);
  });
}
