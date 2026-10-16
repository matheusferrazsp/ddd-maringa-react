# Padrão de Engenharia de Software e Design Ultra Moderno

Este documento estabelece as diretrizes e regras de qualidade para todo o desenvolvimento, refatoração e expansão de recursos no projeto DDD Maringá.

---

## 1. Segurança & Confiabilidade (Security First)
- **Zero Raw HTML Injection**: Nunca injetar marcações ou dados dinâmicos diretamente com `dangerouslySetInnerHTML` sem sanitização ativa contra XSS. Preferir sempre renderizadores estruturados em blocos com tipagem estrita.
- **Isolamento e Defesa em Armazenamento**: Acessos a `localStorage` ou `sessionStorage` devem ser envolvidos em blocos `try/catch` para evitar falhas silenciosas ou travamento do app em modos anônimos/restritos.
- **Controle de Acesso em Rotas Sensíveis**: Painéis de criação, edição, administração ou publicação devem ser protegidos por `ProtectedRoute` exigindo autenticação válida.
- **Links Externos Seguros**: Todo link apontando para fora do domínio com `target="_blank"` deve conter `rel="noopener noreferrer"`.
- **Credenciais e Segredos**: Nunca comitar credenciais sensíveis ou chaves de produção no código-fonte.
- **Git Push Seguro**: NUNCA executar `git push` para repositórios remotos sem autorização explícita do usuário.

---

## 2. Escalabilidade & Arquitetura Limpa (Clean Code)
- **TypeScript Estrito & `verbatimModuleSyntax`**:
  - Toda importação de interfaces ou types DEVE usar explicitamente `import type { ... }`.
  - Proibido o uso de `any`. Definir sempre contratos claros com interfaces ou uniões discriminadas (*discriminated unions*).
- **Separação Rígida em Camadas**:
  - `types/`: Contratos de dados puros sem efeitos colaterais.
  - `services/`: Lógica de negócio, regras e persistência/APIs.
  - `context/`: Gerenciamento de estado global e provedores.
  - `components/`: Componentes modulares, desacoplados e com responsabilidade única.
  - `pages/`: Views completas orquestrando componentes e rotas.
  - `styles/`: Design tokens centrais e estilos reutilizáveis.
- **Code-Splitting Obrigatório**:
  - Páginas devem ser carregadas sob demanda com `React.lazy` e `Suspense`.
- **Validação de Build Contínua**:
  - Antes de qualquer entrega, executar `npm run build` (`tsc -b && vite build`) garantindo 0 erros de compilação.

---

## 3. Design Ultra Moderno & UX de Alta Conversão
- **Fidelidade ao Design System**:
  - Usar sempre os Design Tokens centrais (`--bg-primary`, `--accent-cyan`, `--accent-emerald`, `--shadow-tech`, etc.).
  - Paleta com estética limpa (*Pristine White*), contrastes refinados em Navy Slate e acentos tecnológicos em Cyan e Emerald.
- **Tipografia Escalar Fluida**:
  - *Outfit* para títulos (H1, H2, H3) e *Plus Jakarta Sans* para corpos de texto.
  - Utilizar `clamp()` para tamanhos de títulos responsivos sem quebra de layout.
- **Microinterações Dinâmicas**:
  - Animações com curva cúbica refinada: `transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1)`.
  - Cards interativos com elevação suave em hover (`translateY(-4px)` e realce de borda com brilho suave).
  - Feedback visual imediato para carregamentos, erros, sucessos e alterações salvas.
- **Ergonomia e Foco Comercial**:
  - Botões com altura mínima de 44px para toque fácil em dispositivos móveis.
  - Hierarquia clara com chamadas para ação (CTAs) estratégicas para WhatsApp comercial e telefone 24h.
