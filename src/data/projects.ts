import type { ProjectDetails } from "@/types/project";
import type { Locale } from "@/i18n/translations";

export const projectsPt: ProjectDetails[] = [
  {
    id: "reroll",
    type: "saas",
    title: "Reroll",
    tagline: "Sua estante pessoal de animes, mangás, séries, livros e games",
    description:
      "Plataforma completa de catálogo e comunidade com estante pessoal, controle de progresso, feed colaborativo e chat em tempo real.",
    longDescription:
      "Reroll é uma plataforma de catálogo e comunidade estilo Discord e MyAnimeList, permitindo aos usuários organizarem animes, mangás, manhwas, séries, filmes, livros e games em um só lugar. O sistema conta com acompanhamento dinâmico de progresso (capítulos e episódios), notas, status, tier lists interativas (drag-and-drop), feed de atualizações por servidor e canais de texto e voz com chat em tempo real via Cloudflare Durable Objects e WebRTC. Construído com TanStack Start, React 19, Drizzle ORM, Better Auth e Cloudflare Workers (D1, R2 e Durable Objects).",
    image: "/reroll-home.webp",
    images: ["/reroll-home.webp", "/reroll-features.webp", "/reroll-signin.webp"],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "WebRTC" },
    ],
    demoUrl: "https://reroll.rafaelsfcarvalho.workers.dev/",
    codeUrl: "https://github.com/RafaelSFDC/Reroll",
    features: [
      "Catálogo completo para 10+ tipos de mídias (animes, mangás, séries, livros, games)",
      "Acompanhamento ágil de progresso com barra de status e atalhos rápidos",
      "Workspaces e servidores estilo Discord com feed de atividades em tempo real",
      "Chat em tempo real com canais, threads e mensagens via Durable Objects",
      "Chamadas de voz P2P em malha WebRTC sem necessidade de servidor de mídia dedicado",
      "Tier List interativa drag-and-drop e métricas de consumo de mídia",
      "Autenticação moderna com Better Auth e uploads com Cloudflare R2",
    ],
    results: [
      { label: "Tipos de mídia", value: "10+" },
      { label: "Tempo Real", value: "Durable Objects" },
      { label: "Chamadas", value: "WebRTC P2P" },
      { label: "Infraestrutura", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Estante Pessoal & Social",
        description: "Controle individual detalhado de consumo integrado ao feed compartilhado do servidor com amigos.",
        icon: "layers",
      },
      {
        title: "Edge Realtime",
        description: "Comunicação instantânea e persistente através de WebSockets com Cloudflare Durable Objects e banco D1.",
        icon: "zap",
      },
      {
        title: "Comunidade Estilo Discord",
        description: "Servidores compartilhados com canais temáticos, cargos, reações e chamadas de voz P2P.",
        icon: "users",
      },
    ],
    challenges: [
      "Arquitetura serverless edge com Durable Objects para gerenciar conexões WebSocket",
      "Implementação de malha WebRTC mesh direta para chamadas de áudio entre membros",
      "Modelagem e sincronização relacional no Cloudflare D1 com Drizzle ORM",
      "Renderização SSR reativa com TanStack Start e React 19",
    ],
    year: 2026,
    category: "SaaS / Plataforma Social",
  },
  {
    id: "kataly",
    type: "saas",
    title: "Kataly",
    tagline: "O Sistema Operacional Multi-Workspace para Negócios Digitais",
    description:
      "Plataforma SaaS all-in-one multi-tenant com 4 verticais de negócio, storefronts por workspace, CRM, automação de workflows e integração oficial com WhatsApp e IA.",
    longDescription:
      "Kataly é uma plataforma SaaS all-in-one multi-workspace projetada para pequenos negócios e microempreendedores brasileiros (e-commerce, restaurantes, serviços profissionais e imobiliárias). O sistema permite criar storefronts profissionais em minutos com o Page Builder Puck, gerenciar vendas com checkout transparente (Mercado Pago Pix/cartão e Stripe), automatizar processos com editor de workflows em nós (XY Flow) e engajar clientes com atendimento automatizado 24/7 via WhatsApp Cloud API oficial da Meta integrado ao Gemini. Construído com arquitetura serverless moderna em TanStack Start, React 19, Drizzle ORM e Cloudflare Edge (Workers, D1, R2 e Durable Objects).",
    image: "/optimized-app.webp",
    images: [
      "/optimized-app.webp",
      "/kataly-dashboard.webp",
      "/kataly-page-builder.webp",
      "/kataly-personalize.webp",
    ],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "WhatsApp Cloud API" },
      { name: "Google Gemini AI" },
      { name: "Tailwind CSS v4" },
      { name: "Mercado Pago & Stripe" },
    ],
    demoUrl: "https://kataly.com.br",
    codeUrl: "https://github.com/RafaelSFDC/kataly",
    features: [
      "Arquitetura SaaS Multi-Workspace com isolamento por tenant e equipes",
      "4 Verticais integradas: E-commerce, Restaurantes (PDV/KDS), Serviços (Agenda/OS) e Imobiliária",
      "Sub-sites e storefronts públicos independentes por workspace (/loja, /restaurante, /servicos, /imobiliaria)",
      "WhatsApp Cloud API oficial (Meta) com inbox compartilhado, templates e auto-resposta com IA (Gemini 24/7)",
      "Page Builder drag-and-drop proprietário (Puck CMS) com IA para customização visual",
      "Automação de workflows visuais baseada em nós via XY Flow com histórico de execuções",
      "CRM completo com funil de vendas (Kanban de negócios e leads), clientes e tarefas",
      "Checkout transparente direto na conta do vendedor com Mercado Pago (PIX instantâneo) e Stripe",
      "Módulos de gestão de despesas, fornecedores, faturas públicas e integração com Bling ERP e SuperFrete",
    ],
    results: [
      { label: "Verticais integradas", value: "4" },
      { label: "Rotas & Módulos", value: "120+" },
      { label: "WhatsApp & IA", value: "Meta Cloud API" },
      { label: "Infraestrutura", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "WhatsApp Oficial & IA Nativa",
        description: "Meta Cloud API oficial integrada com caixa de entrada unificada multi-workspace, templates e agente Gemini 24/7.",
        icon: "brain",
      },
      {
        title: "4 Verticais num Só Produto",
        description: "Lojas virtuais, delivery/restaurantes com PDV/KDS, serviços com agenda/OS e imobiliárias em uma só plataforma.",
        icon: "layers",
      },
      {
        title: "Edge & Local-First Stack",
        description: "Alta velocidade com TanStack Start, React 19, Drizzle ORM, D1 SQLite e Durable Objects para tempo real.",
        icon: "zap",
      },
    ],
    challenges: [
      "Arquitetura multi-tenant com isolamento estrito de workspaces em SQLite distribuído (Cloudflare D1)",
      "Integração bidirecional em tempo real com WhatsApp Cloud API oficial da Meta e suporte a templates",
      "Orquestração de múltiplos subsistemas verticais (PDV, KDS, Agendamento e Imóveis) num core unificado",
      "Motor de automação de workflows com interface gráfica baseada em nós via XY Flow",
    ],
    year: 2026,
    category: "SaaS / Ecossistema de Negócios",
  },
  {
    id: "unilink",
    type: "saas",
    title: "UniLink",
    tagline: "Plataforma Moderna de Link na Bio, Captura de Leads & Apoio via PIX",
    description:
      "Plataforma SaaS de Link na Bio de alta conversão com geração de PIX nativo padrão BACEN, captura de leads em tempo real, editor visual com simulador mobile e analytics com pixels de rastreamento.",
    longDescription:
      "UniLink é uma plataforma SaaS moderna de Link na Bio, captura de leads e monetização direta voltada para criadores de conteúdo, profissionais autônomos, infoprodutores e marcas. O sistema conta com páginas de bio personalizadas (/p/:handle) com múltiplos temas profissionais, blocos ricos de mídia (YouTube, Spotify, TikTok, FAQ e contagem regressiva), apoio via PIX nativo com geração de BR Code no padrão BACEN (EMV QRCPS / CRC-16) sem taxas de intermediação, formulários integrados de captura de leads com exportação para CRM, além de painel de analytics em tempo real com rastreamento via Meta Pixel, Google Analytics 4 e TikTok Pixel. Construído em arquitetura serverless edge com TanStack Start, React 19, Drizzle ORM, Better Auth e Cloudflare (Workers, D1, R2 e Durable Objects).",
    image: "/unilink-home.webp",
    images: ["/unilink-home.webp", "/unilink-dashboard.webp"],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "Stripe & PIX" },
    ],
    codeUrl: "https://github.com/RafaelSFDC/Unilink",
    features: [
      "Páginas de bio ultra-rápidas (/p/:handle) com 8 temas profissionais e personalização visual",
      "Apoio e monetização via PIX nativo padrão BACEN (EMV QRCPS / CRC-16) com QR Code dinâmico e chave Copia e Cola direto na conta",
      "Captura de leads e contatos em tempo real integrada com exportação em CSV para CRM",
      "Blocos ricos de mídia: links dinâmicos, FAQ Accordion, contador regressivo, WhatsApp direto e players de YouTube, Spotify e TikTok",
      "Editor visual interativo com simulador de smartphone em tempo real e reordenação drag-and-drop (@dnd-kit)",
      "Métricas completas de visualizações, cliques e taxa de conversão (CTR) com mapeamento de origens de tráfego",
      "Integração nativa com pixels de conversão: Meta Pixel (Facebook), Google Analytics 4 (gtag) e TikTok Pixel",
      "Arquitetura SaaS Multi-Tenant com isolamento de workspaces, gestão de equipe e assinaturas com Stripe",
    ],
    results: [
      { label: "Blocos & Mídia", value: "8+ Tipos" },
      { label: "Pagamentos", value: "PIX BACEN" },
      { label: "Métricas", value: "Tempo Real" },
      { label: "Infraestrutura", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "PIX Nativo Padrão BACEN",
        description:
          "Geração instantânea de QR Code e Copia e Cola EMV QRCPS / CRC-16 com valor fixo ou livre, direto na conta do usuário sem intermediários.",
        icon: "zap",
      },
      {
        title: "Editor Visual com Live Preview",
        description:
          "Simulador mobile interativo com reordenação drag-and-drop, customização de estilos e atualização em tempo real.",
        icon: "smartphone",
      },
      {
        title: "Edge & TanStack Start",
        description:
          "Arquitetura moderna com SSR ultra-veloz, React 19, Drizzle ORM, Cloudflare D1 serverless e Durable Objects.",
        icon: "layers",
      },
    ],
    challenges: [
      "Implementação do algoritmo de montagem e validação de payload EMV QRCPS e cálculo de CRC-16 para PIX BACEN sem bibliotecas pesadas",
      "Construção de editor visual de alta performance com drag-and-drop reativo (@dnd-kit) sincronizado ao simulador mobile",
      "Arquitetura serverless multi-tenant escalável com TanStack Start, React 19 e isolamento estrito de workspaces no Cloudflare D1",
      "Pipeline de agregação de eventos de analytics e disparos otimizados de pixels de conversão em runtime edge",
    ],
    year: 2026,
    category: "SaaS / Link na Bio & Conversão",
  },
];

export const projectsEn: ProjectDetails[] = [
  {
    id: "reroll",
    type: "saas",
    title: "Reroll",
    tagline: "Your personal library for anime, manga, series, books, and games",
    description:
      "All-in-one catalog & community platform with media tracking, interactive tier lists, collaborative servers, and real-time chat & voice.",
    longDescription:
      "Reroll is a Discord- and MyAnimeList-inspired catalog and community platform for organizing anime, manga, manhwas, TV series, movies, books, and video games in one place. Features dynamic progress tracking (episodes/chapters), ratings, drag-and-drop tier lists, server activity feeds, text channels, and low-latency voice rooms powered by Cloudflare Durable Objects and WebRTC. Built with TanStack Start, React 19, Drizzle ORM, Better Auth, and Cloudflare Workers (D1, R2, and Durable Objects).",
    image: "/reroll-home.webp",
    images: ["/reroll-home.webp", "/reroll-features.webp", "/reroll-signin.webp"],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "WebRTC" },
    ],
    demoUrl: "https://reroll.rafaelsfcarvalho.workers.dev/",
    codeUrl: "https://github.com/RafaelSFDC/Reroll",
    features: [
      "Comprehensive catalog for 10+ media formats (anime, manga, TV series, books, games)",
      "Agile progress tracking with status bars and quick update shortcuts",
      "Discord-style community workspaces with live activity feeds",
      "Real-time chat with channels, threads, and persistence via Durable Objects",
      "Peer-to-peer WebRTC mesh voice rooms with zero dedicated SFU media server costs",
      "Interactive drag-and-drop tier lists and personal consumption metrics",
      "Modern authentication with Better Auth and asset uploads via Cloudflare R2",
    ],
    results: [
      { label: "Media Formats", value: "10+" },
      { label: "Realtime", value: "Durable Objects" },
      { label: "Voice Rooms", value: "WebRTC P2P" },
      { label: "Infrastructure", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Personal Library & Social Feed",
        description: "Granular individual consumption tracking seamlessly synced to community server feeds.",
        icon: "layers",
      },
      {
        title: "Edge Realtime",
        description: "Low-latency WebSocket sync powered by Cloudflare Durable Objects and distributed D1 SQLite.",
        icon: "zap",
      },
      {
        title: "Discord-Inspired Community",
        description: "Shared community servers featuring custom channels, roles, reactions, and P2P voice chat.",
        icon: "users",
      },
    ],
    challenges: [
      "Serverless edge architecture using Durable Objects to manage persistent WebSocket connections",
      "Mesh WebRTC direct audio implementation between connected voice room members",
      "Relational schema modeling and edge synchronization on Cloudflare D1 with Drizzle ORM",
      "Reactive SSR hydration using TanStack Start and React 19",
    ],
    year: 2026,
    category: "SaaS / Social Media Platform",
  },
  {
    id: "kataly",
    type: "saas",
    title: "Kataly",
    tagline: "The Multi-Workspace Operating System for Digital Businesses",
    description:
      "All-in-one multi-tenant SaaS platform featuring 4 business verticals, independent storefronts, visual workflow automation, CRM, and official Meta WhatsApp Cloud API.",
    longDescription:
      "Kataly is an all-in-one multi-tenant SaaS operating system tailored for SMBs and digital entrepreneurs (e-commerce, restaurants, professional services, and real estate). Allows instant creation of customized storefronts via Puck CMS page builder, online sales with seamless transparent checkout (Mercado Pago & Stripe), workflow automation using node-based XY Flow, and 24/7 AI-powered customer support via Meta's official WhatsApp Cloud API integrated with Google Gemini. Engineered with TanStack Start, React 19, Drizzle ORM, and Cloudflare Edge.",
    image: "/optimized-app.webp",
    images: [
      "/optimized-app.webp",
      "/kataly-dashboard.webp",
      "/kataly-page-builder.webp",
      "/kataly-personalize.webp",
    ],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "WhatsApp Cloud API" },
      { name: "Google Gemini AI" },
      { name: "Tailwind CSS v4" },
      { name: "Mercado Pago & Stripe" },
    ],
    demoUrl: "https://kataly.com.br",
    codeUrl: "https://github.com/RafaelSFDC/kataly",
    features: [
      "Multi-workspace SaaS architecture with strict tenant isolation and team roles",
      "4 integrated verticals: E-commerce, Restaurants (POS/KDS), Services (Scheduling), and Real Estate",
      "Independent public sub-storefronts per workspace (/store, /restaurant, /services, /real-estate)",
      "Official Meta WhatsApp Cloud API with shared team inbox, templates, and 24/7 Gemini AI replies",
      "Proprietary drag-and-drop page builder (Puck CMS) with AI visual customization",
      "Visual node-based workflow automation engine via XY Flow with execution logs",
      "Full CRM suite featuring sales pipelines (Kanban deals/leads), customer profiles, and tasks",
      "Transparent direct seller checkout with Mercado Pago instant PIX and Stripe cards",
      "Expense management, supplier tracking, public invoices, and Bling ERP & shipping integrations",
    ],
    results: [
      { label: "Verticals", value: "4" },
      { label: "Routes & Modules", value: "120+" },
      { label: "WhatsApp & AI", value: "Meta Cloud API" },
      { label: "Infrastructure", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Official WhatsApp & Native AI",
        description: "Integrated Meta Cloud API with unified multi-workspace inbox, message templates, and Gemini AI agent.",
        icon: "brain",
      },
      {
        title: "4 Verticals in One Product",
        description: "E-commerce, restaurant POS/KDS, service appointments, and real estate listings under a single platform.",
        icon: "layers",
      },
      {
        title: "Edge & Local-First Stack",
        description: "High-throughput architecture built with TanStack Start, React 19, Drizzle ORM, D1 SQLite, and Durable Objects.",
        icon: "zap",
      },
    ],
    challenges: [
      "Multi-tenant isolation across distributed edge SQLite databases (Cloudflare D1)",
      "Bidirectional real-time webhooks with Meta's official WhatsApp Cloud API",
      "Orchestrating diverse vertical workflows (POS, KDS, appointments) into a coherent core",
      "Building a performant node-based visual workflow automation engine with XY Flow",
    ],
    year: 2026,
    category: "SaaS / Business Operating System",
  },
  {
    id: "unilink",
    type: "saas",
    title: "UniLink",
    tagline: "Modern Link-in-Bio & Lead Capture Platform with Native Instant Payments",
    description:
      "High-converting link-in-bio SaaS with real-time lead capture, drag-and-drop visual editor with mobile preview, tracking pixels, and instant BACEN PIX / Stripe payments.",
    longDescription:
      "UniLink is a modern link-in-bio SaaS built for content creators, digital marketers, and independent brands. Features customizable bio landing pages (/p/:handle) with 8 themes, rich media widgets (YouTube, Spotify, TikTok, countdown timers, FAQ accordions), native zero-fee PIX payment codes (BACEN EMV QRCPS / CRC-16) and Stripe, real-time lead capture with CSV export, and analytics tracking with Meta, Google, and TikTok pixels. Powered by TanStack Start, React 19, Drizzle ORM, Better Auth, and Cloudflare Edge.",
    image: "/unilink-home.webp",
    images: ["/unilink-home.webp", "/unilink-dashboard.webp"],
    status: "public",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "Stripe & PIX" },
    ],
    codeUrl: "https://github.com/RafaelSFDC/Unilink",
    features: [
      "Ultra-fast bio landing pages (/p/:handle) with 8 professional themes and full style customization",
      "Direct monetization via BACEN-compliant instant PIX QR codes (EMV QRCPS / CRC-16) and Stripe",
      "Real-time lead & contact capture forms with direct CSV CRM export",
      "Rich media blocks: dynamic links, FAQ accordions, countdown timers, direct WhatsApp, YouTube & Spotify",
      "Interactive visual builder with real-time mobile simulator and drag-and-drop reordering (@dnd-kit)",
      "Comprehensive analytics for views, clicks, and CTR with traffic source attribution",
      "Native pixel tracking: Meta Pixel (Facebook), Google Analytics 4 (gtag), and TikTok Pixel",
      "Multi-tenant workspace isolation, team permissions, and subscription billing via Stripe",
    ],
    results: [
      { label: "Media Widgets", value: "8+ Types" },
      { label: "Payments", value: "BACEN & Stripe" },
      { label: "Analytics", value: "Realtime" },
      { label: "Infrastructure", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Direct Zero-Fee Payments",
        description: "Dynamic QR Code generation and standard EMV QRCPS / CRC-16 payload creation directly on client accounts.",
        icon: "zap",
      },
      {
        title: "Visual Builder with Live Preview",
        description: "Interactive mobile simulator featuring fluid drag-and-drop reordering and live style customization.",
        icon: "smartphone",
      },
      {
        title: "Edge & TanStack Start",
        description: "Cutting-edge SSR architecture powered by React 19, Drizzle ORM, Cloudflare D1 serverless, and Durable Objects.",
        icon: "layers",
      },
    ],
    challenges: [
      "Implementing custom EMV QRCPS payload generators and CRC-16 checksums without heavy external dependencies",
      "Constructing a high-performance visual builder with fluid drag-and-drop (@dnd-kit) synced to mobile preview",
      "Scalable multi-tenant architecture with TanStack Start, React 19, and strict D1 database partitioning",
      "Edge-runtime aggregation pipeline for tracking events and low-overhead pixel dispatches",
    ],
    year: 2026,
    category: "SaaS / Link-in-Bio & Conversion",
  },
];

export function getProjects(lang: Locale = "pt"): ProjectDetails[] {
  return lang === "en" ? projectsEn : projectsPt;
}

export const projects: ProjectDetails[] = projectsPt;
