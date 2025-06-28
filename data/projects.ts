import type { ProjectDetails } from "@/types/project"

export const projects: ProjectDetails[] = [
  {
    id: "Unilink",
    title: "Unilink",
    description: "Uma aplicação moderna de link tree construída com Next.js para centralizar todos os seus links importantes.",
    longDescription:
      "Unilink é uma aplicação web moderna que permite aos usuários criar uma página personalizada com todos os seus links importantes em um só lugar. Desenvolvida com Next.js, TypeScript e Tailwind CSS, a aplicação oferece múltiplos templates, customização de temas, analytics de cliques e uma interface administrativa completa. Ideal para influenciadores, criadores de conteúdo e profissionais que precisam compartilhar múltiplos links de forma organizada.",
    image: "/placeholder.svg?height=400&width=600",
    status: "public",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "PostgreSQL" }
    ],
    demoUrl: "https://unilink-ruddy.vercel.app/",
    codeUrl: "https://github.com/RafaelSFDC/Unilink",
    features: [
      "Múltiplos templates de design (Minimal, Modern, Vibrant, Professional, Creative)",
      "Customização completa de cores e temas",
      "Dashboard administrativo para gerenciar links",
      "Analytics de cliques em tempo real",
      "Interface responsiva para todos os dispositivos",
      "Sistema de autenticação seguro",
      "URLs personalizadas para cada usuário",
      "Preview em tempo real das mudanças"
    ],
    challenges: [
      "Implementação de sistema de templates dinâmicos",
      "Otimização de performance para carregamento rápido",
      "Desenvolvimento de analytics precisos de cliques",
      "Criação de interface intuitiva para customização de temas"
    ],
    year: 2025,
    category: "Web Development",
  },
  {
    id: "ecommerce-demo",
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce completa com painel administrativo e sistema de pagamentos.",
    longDescription:
      "Uma plataforma de e-commerce moderna desenvolvida para um cliente corporativo. Inclui catálogo de produtos, carrinho de compras, sistema de pagamentos integrado, painel administrativo completo e dashboard de analytics. A aplicação foi desenvolvida com foco em performance e experiência do usuário.",
    image: "/placeholder.svg?height=400&width=600",
    status: "demo-only",
    technologies: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Stripe" }
    ],
    demoUrl: "https://ecommerce-demo.vercel.app/",
    features: [
      "Catálogo de produtos com filtros avançados",
      "Carrinho de compras persistente",
      "Sistema de pagamentos com Stripe",
      "Painel administrativo completo",
      "Dashboard de analytics em tempo real",
      "Sistema de avaliações e comentários",
      "Notificações por email automatizadas"
    ],
    challenges: [
      "Integração complexa com gateway de pagamento",
      "Otimização de consultas no banco de dados",
      "Implementação de sistema de cache eficiente",
      "Desenvolvimento de interface administrativa intuitiva"
    ],
    year: 2024,
    category: "E-commerce",
  },
  {
    id: "venda-facil",
    title: "Venda Fácil",
    description: "Sistema completo de gestão de vendas com dashboard intuitivo para controle de clientes, produtos e relatórios.",
    longDescription:
      "Venda Fácil é um sistema completo de gestão de vendas desenvolvido com Next.js e TypeScript. A aplicação oferece um dashboard intuitivo para gerenciamento de clientes, vendas, produtos, parcelamentos customizáveis, processamento manual de pagamentos com datas, detalhes e comprovantes, além de geração de relatórios detalhados. O sistema conta com fluxo de autenticação completo e interface responsiva otimizada para dispositivos móveis.",
    image: "/placeholder.svg?height=400&width=600",
    status: "demo-only",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/ui" },
      { name: "Prisma" },
      { name: "PostgreSQL" }
    ],
    demoUrl: "https://vendafacil.onrender.com",
    features: [
      "Dashboard completo de gestão de vendas",
      "Gerenciamento de clientes e produtos",
      "Sistema de parcelamentos customizáveis",
      "Processamento manual de pagamentos com comprovantes",
      "Geração de relatórios detalhados",
      "Interface responsiva e mobile-friendly",
      "Sistema de autenticação em português",
      "Carrinho de compras inteligente",
      "Edição flexível de parcelas individuais"
    ],
    challenges: [
      "Implementação de sistema de parcelamentos flexível",
      "Desenvolvimento de interface mobile-friendly para carrinho e parcelas",
      "Criação de sistema de relatórios dinâmicos",
      "Otimização da experiência do usuário em dispositivos móveis",
      "Integração de componentes Shadcn/ui de forma consistente"
    ],
    year: 2025,
    category: "Business Management",
  },
  {
    id: "forum-app",
    title: "Forum App",
    description: "Aplicação de fórum moderna inspirada no Reddit, construída com Laravel e React usando Inertia.js.",
    longDescription:
      "Forum App é uma aplicação web moderna de fórum desenvolvida com Laravel 12 e React 19, utilizando Inertia.js como bridge entre backend e frontend. A aplicação oferece uma experiência similar ao Reddit com funcionalidades completas de fórum, incluindo sistema de posts, comentários, votação, categorias, autenticação segura e interface responsiva. Desenvolvida com foco em performance através de Server-Side Rendering (SSR) e uma arquitetura moderna que combina o melhor do PHP e JavaScript.",
    image: "/placeholder.svg?height=400&width=600",
    status: "public",
    demoUrl: "https://forum-laravel-app.onrender.com",
    codeUrl: "https://github.com/RafaelSFDC/forum-app-laravel",
    technologies: [
      { name: "Laravel 12" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Inertia.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/ui" },
      { name: "SQLite" },
      { name: "Vite" }
    ],
    features: [
      "Sistema completo de posts e comentários",
      "Votação (upvote/downvote) em posts e comentários",
      "Categorias e tags para organização de conteúdo",
      "Sistema de autenticação e perfis de usuário",
      "Interface responsiva inspirada no Reddit",
      "Tema claro/escuro com persistência",
      "Server-Side Rendering (SSR) para performance otimizada",
      "Componentes Shadcn/ui para consistência visual",
      "Sistema de busca e filtros avançados",
      "Notificações em tempo real",
      "Moderação de conteúdo",
      "Acessibilidade completa (WCAG)"
    ],
    challenges: [
      "Implementação de SSR com Inertia.js para performance otimizada",
      "Desenvolvimento de sistema de votação em tempo real",
      "Criação de interface responsiva complexa inspirada no Reddit",
      "Integração seamless entre Laravel backend e React frontend",
      "Implementação de sistema de notificações eficiente",
      "Otimização de consultas de banco de dados para threads complexas",
      "Desenvolvimento de sistema de moderação flexível"
    ],
    year: 2025,
    category: "Forum/Community",
  },
]
