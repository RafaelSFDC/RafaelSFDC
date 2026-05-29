import type { ProjectDetails } from "@/types/project";

export const projects: ProjectDetails[] = [
  {
    id: "kataly",
    title: "Kataly Enterprise",
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
  {
    id: "unilink",
    title: "UniLink",
    description:
      "Dashboard universitário completo para gestão acadêmica, com controle de alunos, disciplinas e relatórios inteligentes.",
    longDescription:
      "UniLink é um sistema de gestão acadêmica desenvolvido para facilitar a administração de instituições de ensino. A plataforma oferece cadastro de alunos e professores, gerenciamento de disciplinas e turmas, emissão de relatórios de desempenho e muito mais. Construído com Laravel no backend e React no frontend, proporciona uma experiência fluida e responsiva.",
    image: "/unilink-home.png",
    status: "public",
    technologies: [
      { name: "Laravel" },
      { name: "React" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
    features: [
      "Gestão completa de alunos e professores",
      "Controle de disciplinas e turmas",
      "Relatórios de desempenho acadêmico",
      "Interface responsiva e moderna",
      "Autenticação e controle de acesso",
    ],
    challenges: [
      "Modelagem de banco de dados relacional complexo",
      "Integração de múltiplos módulos acadêmicos",
      "Performance em consultas de grande volume",
    ],
    year: 2024,
    category: "Sistema de Gestão",
  },
];
