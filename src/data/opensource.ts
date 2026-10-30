export interface EdgekitModule {
  id: string
  name: string
  shortName: string
  badge: string
  tagline: string
  description: string
  highlights: string[]
  technologies: string[]
  githubUrl: string
}

export const edgekitModules: EdgekitModule[] = [
  {
    id: "platform",
    name: "Edgekit Platform",
    shortName: "Platform",
    badge: "BaaS & D1 SQLite",
    tagline: "Backend-as-a-Service (BaaS) Serverless e Self-Hosted na Cloudflare",
    description:
      "O hub central do ecossistema Edgekit. Fornece banco de dados distribuído SQLite (Cloudflare D1) com Drizzle ORM, REST Data API automática estilo Supabase, SQL Runner interativo, chaves de API segregadas (anon / service_role) e painel administrativo Studio.",
    highlights: [
      "Banco D1 distribuído com 5M de leituras diárias gratuitas",
      "REST Data API automática e consultas fluentes com Drizzle ORM",
      "Admin Studio embutido com Setup Wizard sem necessidade de terminal",
      "Sistema de chaves de API: anon_key (cliente) e service_role_key (root)",
      "Documentação interativa Swagger e Scalar integrada em /docs",
    ],
    technologies: ["Cloudflare Workers", "Hono", "D1 SQLite", "Drizzle ORM", "React Studio"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Platform",
  },
  {
    id: "auth",
    name: "Edgekit Auth",
    shortName: "Auth",
    badge: "Passkeys & FIDO2",
    tagline: "Engine de Autenticação na Borda com Passkeys e Validação JWKS",
    description:
      "Motor moderno de autenticação para a borda global construído sobre Hono e Better Auth. Suporte nativo a biometria/Passkeys (FIDO2), 2FA/TOTP com códigos de backup, Magic Links e emissão de JWKS para validação offline de sessões em microsserviços.",
    highlights: [
      "Passkeys biométricas (FaceID, TouchID, Windows Hello) via WebAuthn",
      "Autenticação em 2 etapas (TOTP via Google Authenticator) com backup",
      "Passwordless com Magic Link integrado e modo local de testes",
      "Multi-tenancy com organizações, convites por e-mail e RBAC",
      "Validação offline ultra-rápida de sessões na borda via JWKS",
    ],
    technologies: ["Cloudflare Workers", "Better Auth", "WebAuthn / FIDO2", "JWKS", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Auth",
  },
  {
    id: "storage",
    name: "Edgekit Storage",
    shortName: "Storage",
    badge: "Object Storage R2",
    tagline: "Armazenamento em Cloudflare R2 com Zero Taxa de Egress e HMAC-SHA256",
    description:
      "Alternativa open-source e serverless ao Uploadthing e AWS S3, construída sobre Cloudflare R2. Aproveita transferência de saída 100% gratuita, geração de URLs temporárias assinadas via HMAC-SHA256 e dashboard interativo em React 19.",
    highlights: [
      "Zero Egress Fee: downloads ilimitados sem custo de transferência",
      "URLs temporárias assinadas com HMAC-SHA256 para arquivos privados",
      "Dashboard web em React 19 com galeria e upload drag & drop",
      "Deleção em lote e paginação real por cursor nativo do R2",
      "Snippet TypeScript estilo shadcn com zero dependências externas",
    ],
    technologies: ["Cloudflare R2", "Cloudflare Workers", "HMAC-SHA256", "React 19", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Storage",
  },
  {
    id: "queue",
    name: "Edgekit Queue",
    shortName: "Queue",
    badge: "Filas & Redis REST",
    tagline: "Filas Assíncronas e Redis REST Serverless com Durable Objects",
    description:
      "Alternativa self-hosted ao Upstash (QStash + Redis). Elimina a necessidade de servidores dedicados de Redis ou cron jobs de terceiros, utilizando os alarmes nativos de Durable Objects da Cloudflare com retries automáticos e Dead Letter Queue.",
    highlights: [
      "Zero servidores externos: alarmes nativos de Durable Objects",
      "Agendamento com atraso dinâmico: 10s, 30s, 5m, 1h, 1d ou timestamp",
      "Retries automáticos com exponential backoff e Dead Letter Queue (DLQ)",
      "Clone do Upstash Redis REST compatível com SDK @upstash/redis oficial",
      "Dashboard visual para inspecionar filas, chaves e disparar testes",
    ],
    technologies: ["Cloudflare Workers", "Durable Objects", "SQLite", "QStash v2", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Queue",
  },
  {
    id: "events",
    name: "Edgekit Events",
    shortName: "Events",
    badge: "WebSockets Realtime",
    tagline: "WebSockets em Tempo Real na Borda com Custo R$ 0 em Idle",
    description:
      "Clone open-source de Pusher e Ably rodando sobre Cloudflare Durable Objects. Projetado com a WebSocket Hibernation API, garantindo que conexões ociosas tenham custo zero de computação. 100% compatível com pusher-js e Laravel Echo.",
    highlights: [
      "Custo zero em conexões ociosas via WebSocket Hibernation API",
      "100% compatível com pusher-js (Protocolo v7) e Laravel Echo",
      "Disparo direto por requisição REST simples (ideal até para PHP/cPanel)",
      "Canais públicos, privados autenticados e presença de usuários",
      "Escala global em mais de 300 data centers da Cloudflare",
    ],
    technologies: ["Cloudflare Workers", "Durable Objects", "WebSocket Hibernation", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Events",
  },
]
