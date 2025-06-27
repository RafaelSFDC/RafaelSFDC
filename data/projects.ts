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
    id: "banking-app",
    title: "Banking Mobile App",
    description: "Aplicativo bancário móvel com funcionalidades completas de gestão financeira.",
    longDescription:
      "Aplicativo bancário desenvolvido para uma instituição financeira. Inclui todas as funcionalidades essenciais como transferências, pagamentos, investimentos e controle de gastos. O projeto foi desenvolvido com foco máximo em segurança e usabilidade.",
    image: "/placeholder.svg?height=400&width=600",
    status: "private",
    technologies: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Redis" }
    ],
    features: [
      "Transferências e pagamentos instantâneos",
      "Controle de gastos com categorização automática",
      "Investimentos com acompanhamento em tempo real",
      "Cartão virtual com controles de segurança",
      "Biometria e autenticação em duas etapas",
      "Notificações push personalizadas",
      "Relatórios financeiros detalhados"
    ],
    challenges: [
      "Implementação de protocolos de segurança bancária",
      "Otimização para diferentes dispositivos móveis",
      "Integração com sistemas bancários legados",
      "Desenvolvimento de interface intuitiva para todas as idades"
    ],
    year: 2024,
    category: "Mobile Development",
  },
]
