import type { ProjectDetails } from "@/types/project";
import type { Locale } from "@/i18n/translations";

export const projectsPt: ProjectDetails[] = [
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
    id: "cadence",
    type: "saas",
    title: "Cadence",
    tagline: "O sistema operacional ágil para times de alta performance",
    description:
      "Plataforma SaaS multi-tenant ágil com gestão de projetos, tarefas, formulários dinâmicos de intake, colaboração com presença ao vivo e automações com IA.",
    longDescription:
      "Cadence é uma plataforma SaaS moderna de gestão ágil e colaboração em tempo real multi-tenant para times de alto rendimento. Reúne projetos com quadros Kanban, listas, sprints e metas estratégicas (OKRs), construtor visual de formulários para intake automatizado de demandas, presença ao vivo com WebSocket via Cloudflare Durable Objects, controle de acesso RBAC por workspace, automações inteligentes com IA para triagem de tarefas e checkout por workspace via Stripe. Construído sobre arquitetura dual-runtime com TanStack Start, React 19, Drizzle ORM e Cloudflare Edge (Workers, D1, R2 e Durable Objects).",
    image: "/cadence-home.webp",
    images: ["/cadence-home.webp", "/cadence-pricing.webp", "/cadence-about.webp"],
    status: "demo-only",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "Stripe Billing" },
    ],
    demoUrl: "https://cadence.rafaelsfcarvalho.workers.dev/",
    features: [
      "Arquitetura SaaS Multi-Tenant com isolamento estrito de dados e equipes por workspace",
      "Gestão ágil com visualizações flexíveis em quadros Kanban, listas, sprints e metas estratégicas (OKRs)",
      "Construtor visual de formulários para intake de demandas com conversão automática em tarefas",
      "Colaboração e presença em tempo real com WebSockets persistentes via Cloudflare Durable Objects",
      "Assistente de IA nativo para triagem inteligente de chamados e resumos automáticos",
      "Transição instantânea clientside-first (0ms) sem bloqueios ou spinners de navegação",
      "Faturamento independente por workspace com Stripe Checkout e gestão de licenças",
      "Governança empresarial com RBAC granular, convites de equipe e trilha de auditoria",
    ],
    results: [
      { label: "Navegação", value: "0ms Latência" },
      { label: "Tempo Real", value: "Durable Objects" },
      { label: "Isolamento", value: "Multi-Tenant 100%" },
      { label: "Infraestrutura", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Navegação Instantânea 0ms",
        description:
          "Padrão clientside-first com transições de tela imediatas sem barreiras de carregamento no dashboard.",
        icon: "zap",
      },
      {
        title: "Presença & Tempo Real no Edge",
        description:
          "Sincronização persistente de alta performance através de WebSockets com Cloudflare Durable Objects.",
        icon: "users",
      },
      {
        title: "Intake com Formulários Dinâmicos",
        description:
          "Construtor de formulários públicos com validação em tempo real e conversão instantânea de respostas em tarefas.",
        icon: "layers",
      },
    ],
    challenges: [
      "Arquitetura multi-tenant com isolamento estrito de dados e controle RBAC em edge SQLite (Cloudflare D1)",
      "Orquestração de presença ao vivo e broadcast em tempo real com Cloudflare Durable Objects",
      "Engine de formulários dinâmicos com schema mutável e pipeline de conversão em tarefas",
      "Suporte dual-runtime (SQLite local com WAL e Cloudflare Edge distribuído)",
    ],
    year: 2026,
    category: "SaaS / Gestão Ágil & Produtividade",
  },
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
];

export const projectsEn: ProjectDetails[] = [
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
    id: "cadence",
    type: "saas",
    title: "Cadence",
    tagline: "The agile operating system for high-performance teams",
    description:
      "Modern agile multi-tenant SaaS platform featuring project & task management, dynamic intake forms, live presence collaboration, and AI automation.",
    longDescription:
      "Cadence is a modern agile multi-tenant SaaS and real-time collaboration operating system built for high-velocity teams. Combines project boards (Kanban, lists, sprints, OKRs), visual intake form builder that converts submissions into tasks automatically, live presence and instant sync via Cloudflare Durable Objects, strict workspace-level RBAC isolation, native AI triage and summaries, and integrated Stripe subscriptions. Built on a dual-runtime architecture with TanStack Start, React 19, Drizzle ORM, and Cloudflare Edge (Workers, D1, R2, and Durable Objects).",
    image: "/cadence-home.webp",
    images: ["/cadence-home.webp", "/cadence-pricing.webp", "/cadence-about.webp"],
    status: "demo-only",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "Cloudflare D1 & R2" },
      { name: "Durable Objects" },
      { name: "Drizzle ORM" },
      { name: "Better Auth" },
      { name: "Tailwind CSS v4" },
      { name: "Stripe Billing" },
    ],
    demoUrl: "https://cadence.rafaelsfcarvalho.workers.dev/",
    features: [
      "Multi-tenant SaaS architecture with strict workspace data isolation and team permissions",
      "Agile management with flexible views: Kanban boards, lists, sprints, and strategic goals (OKRs)",
      "Visual intake form builder with automatic response-to-task conversion",
      "Real-time collaboration and live member presence via Cloudflare Durable Objects",
      "Native AI assistant for smart task triage, auto-categorization, and summaries",
      "Zero-latency (0ms) clientside-first navigation without loading spinners",
      "Independent per-workspace billing with Stripe Checkout and seat management",
      "Enterprise governance with granular RBAC, team invites, and audit trail",
    ],
    results: [
      { label: "Navigation", value: "0ms Latency" },
      { label: "Realtime", value: "Durable Objects" },
      { label: "Isolation", value: "100% Multi-Tenant" },
      { label: "Infrastructure", value: "Cloudflare Edge" },
    ],
    highlights: [
      {
        title: "Instant 0ms Navigation",
        description:
          "Clientside-first architecture with immediate transitions and zero loading barriers across dashboard views.",
        icon: "zap",
      },
      {
        title: "Edge Realtime & Live Presence",
        description:
          "High-performance persistent WebSocket sync powered by Cloudflare Durable Objects.",
        icon: "users",
      },
      {
        title: "Dynamic Form Intake",
        description:
          "Public form builder with real-time validation that turns submissions into actionable workspace tasks.",
        icon: "layers",
      },
    ],
    challenges: [
      "Strict multi-tenant workspace isolation and RBAC access control on distributed edge SQLite (Cloudflare D1)",
      "Orchestrating live member presence and real-time state broadcasts via Cloudflare Durable Objects",
      "Dynamic form engine with schema flexibility and direct conversion pipeline into tasks",
      "Dual-runtime support for local SQLite development and distributed Cloudflare Edge",
    ],
    year: 2026,
    category: "SaaS / Agile Management & Productivity",
  },
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
];

export function getProjects(lang: Locale = "pt"): ProjectDetails[] {
  return lang === "en" ? projectsEn : projectsPt;
}

export const projects: ProjectDetails[] = projectsPt;
