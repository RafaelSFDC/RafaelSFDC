import type { ProjectDetails } from "@/types/project";

export const projects: ProjectDetails[] = [
  {
    id: "kataly",
    title: "Kataly",
    description:
      "O Sistema Operacional Completo para Negócios Digitais. Uma plataforma SaaS all-in-one que unifica CRM, Vendas e Automação.",
    longDescription:
      "Kataly é um ecossistema completo para microempreendedores, integrando dashboard de gestão (Mission Control), editor visual de páginas (Puck), e um assistente de IA nativo (Gemini). A plataforma oferece infraestrutura de e-commerce end-to-end, automação de workflows (estilo n8n), CRM integrado e dashboards financeiros detalhados. Desenvolvido com uma arquitetura moderna Next.js e Appwrite para escalabilidade e performance.",
    image: "/optimized-app.webp",
    status: "public",
    technologies: [
      { name: "Next.js" },
      { name: "Appwrite" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Gemini AI" },
      { name: "Stripe" },
    ],
    demoUrl: "https://kataly.com.br",
    features: [
      "Arquitetura SaaS Multitenant avançada",
      "Page Builder proprietário (Puck) drag-and-drop",
      "Assistente IA (Gemini) com 50+ skills especializadas",
      "Editor visual de automação de workflows",
      "CRM com pipeline de vendas e gestão de clientes",
      "Integrações com Mercado Pago, Stripe e Bling ERP",
      "Gestão de produtos físicos e digitais",
      "Dashboard Mission Control com 29+ módulos",
    ],
    challenges: [
      "Implementação de sistema de cache Local-First",
      "Desenvolvimento de motor de renderização dinâmico",
      "Integração de múltiplos gateways e APIs de ERP",
      "Criação de assistente IA com contexto em tempo real",
    ],
    year: 2024,
    category: "SaaS / E-commerce",
  },
];
