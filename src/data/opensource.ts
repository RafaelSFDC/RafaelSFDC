import type { Locale } from "@/i18n/translations";

export interface EdgekitModule {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
}

const edgekitModulesPt: EdgekitModule[] = [
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
];

const edgekitModulesEn: EdgekitModule[] = [
  {
    id: "platform",
    name: "Edgekit Platform",
    shortName: "Platform",
    badge: "BaaS & D1 SQLite",
    tagline: "Serverless & Self-Hosted BaaS on Cloudflare Edge with SQLite D1 & Drizzle",
    description:
      "The central hub of the Edgekit ecosystem. Provides distributed SQLite (Cloudflare D1) with Drizzle ORM, automatic Supabase-style REST Data API, interactive SQL Runner, tiered API keys (anon / service_role), and an embedded Admin Studio dashboard.",
    highlights: [
      "Distributed D1 SQLite database with 5M free daily reads",
      "Automatic REST Data API and fluent queries with Drizzle ORM",
      "Embedded Admin Studio with zero-terminal setup wizard",
      "Dual API key architecture: anon_key (client) & service_role_key (root)",
      "Interactive Swagger and Scalar OpenAPI docs integrated at /docs",
    ],
    technologies: ["Cloudflare Workers", "Hono", "D1 SQLite", "Drizzle ORM", "React Studio"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Platform",
  },
  {
    id: "auth",
    name: "Edgekit Auth",
    shortName: "Auth",
    badge: "Passkeys & FIDO2",
    tagline: "Edge Authentication Engine with Biometric Passkeys & JWKS Validation",
    description:
      "A high-performance edge auth engine built on Hono and Better Auth. Features native biometric Passkeys (FIDO2/WebAuthn), 2FA/TOTP with recovery codes, passwordless Magic Links, and public JWKS endpoints for lightning-fast offline session verification across microservices.",
    highlights: [
      "Biometric Passkeys (FaceID, TouchID, Windows Hello) via WebAuthn",
      "Two-factor authentication (TOTP via Authenticator apps) with backup codes",
      "Passwordless magic links with localized testing support",
      "Multi-tenant organizations, team invites, and granular RBAC",
      "Instant offline session verification at edge runtimes via JWKS",
    ],
    technologies: ["Cloudflare Workers", "Better Auth", "WebAuthn / FIDO2", "JWKS", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Auth",
  },
  {
    id: "storage",
    name: "Edgekit Storage",
    shortName: "Storage",
    badge: "Object Storage R2",
    tagline: "Cloudflare R2 Object Storage with Zero Egress Fees & HMAC-SHA256",
    description:
      "A serverless, open-source alternative to Uploadthing and AWS S3 powered by Cloudflare R2. Benefits from 100% free egress bandwidth, temporary presigned URLs using HMAC-SHA256 signatures, and a modern React 19 management dashboard.",
    highlights: [
      "Zero egress fees: unlimited downloads with zero bandwidth cost",
      "Temporary presigned URLs with HMAC-SHA256 for private asset delivery",
      "React 19 management dashboard with file gallery & drag-and-drop upload",
      "Batch file deletion and true cursor-based pagination via R2 native API",
      "Drop-in shadcn-style TypeScript upload component with zero dependencies",
    ],
    technologies: ["Cloudflare R2", "Cloudflare Workers", "HMAC-SHA256", "React 19", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Storage",
  },
  {
    id: "queue",
    name: "Edgekit Queue",
    shortName: "Queue",
    badge: "Queues & Redis REST",
    tagline: "Serverless Async Queues & Redis REST Powered by Durable Objects",
    description:
      "A self-hosted, edge-first alternative to Upstash (QStash + Redis). Eliminates external Redis clusters and cron runners by leveraging Cloudflare Durable Objects alarms with automatic retries and Dead Letter Queue (DLQ).",
    highlights: [
      "Zero external servers: powered by native Durable Objects alarms",
      "Flexible delayed execution: 10s, 30s, 5m, 1h, 1d, or exact timestamps",
      "Automatic retries with exponential backoff and Dead Letter Queue (DLQ)",
      "Drop-in Upstash Redis REST clone fully compatible with @upstash/redis SDK",
      "Visual web dashboard to inspect queues, browse keys, and dispatch test jobs",
    ],
    technologies: ["Cloudflare Workers", "Durable Objects", "SQLite", "QStash v2", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Queue",
  },
  {
    id: "events",
    name: "Edgekit Events",
    shortName: "Events",
    badge: "WebSockets Realtime",
    tagline: "Realtime Edge WebSockets with Zero Idle Cost via WebSocket Hibernation",
    description:
      "An open-source Pusher & Ably alternative running on Cloudflare Durable Objects. Engineered with the WebSocket Hibernation API so idle connections consume zero compute cost. 100% compatible with pusher-js and Laravel Echo.",
    highlights: [
      "Zero idle compute cost via Cloudflare's WebSocket Hibernation API",
      "100% compatible with pusher-js (v7 protocol) and Laravel Echo",
      "Broadcast events directly via standard REST API calls (works from any backend)",
      "Public channels, authenticated private channels, and user presence",
      "Instant global distribution across 300+ Cloudflare edge locations",
    ],
    technologies: ["Cloudflare Workers", "Durable Objects", "WebSocket Hibernation", "Hono"],
    githubUrl: "https://github.com/RafaelSFDC/Edgekit-Events",
  },
];

export function getEdgekitModules(lang: Locale = "pt"): EdgekitModule[] {
  return lang === "en" ? edgekitModulesEn : edgekitModulesPt;
}

export const edgekitModules: EdgekitModule[] = edgekitModulesPt;
