import type { ProjectDetails } from "@/types/project"

export const projects: ProjectDetails[] = [
  {
    id: "hoobank",
    title: "Hoobank",
    description: "Um projeto simples que visa criar uma landingpage de um site de banco.",
    longDescription:
      "Hoobank é uma landing page moderna para um banco digital fictício. O projeto foi desenvolvido com foco em UI/UX, utilizando React e Tailwind CSS para criar uma interface responsiva e atraente. A página apresenta seções de recursos, benefícios, depoimentos e chamadas para ação.",
    image: "/placeholder.svg?height=400&width=600",
    status: "public",
    technologies: [{ name: "React" }, { name: "Tailwind" }, { name: "JavaScript" }],
    demoUrl: "https://example.com/hoobank",
    codeUrl: "https://github.com/example/hoobank",
    features: [
      "Design responsivo para todos os dispositivos",
      "Animações suaves de scroll",
      "Formulário de contato funcional",
      "Integração com API de pagamentos",
    ],
    challenges: ["Otimização de performance para dispositivos móveis", "Implementação de acessibilidade WCAG 2.1"],
    year: 2023,
    category: "Web Development",
  },
  {
    id: "hilink",
    title: "Hilink",
    description: "Uma landingpage sobre um aplicativo de viagens.",
    longDescription:
      "Hilink é uma landing page para um aplicativo de viagens que conecta viajantes com guias locais. O projeto foi desenvolvido com Next.js e Tailwind CSS, focando em performance e SEO. A página apresenta recursos do aplicativo, destinos populares e depoimentos de usuários.",
    image: "/placeholder.svg?height=400&width=600",
    status: "public",
    technologies: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "TypeScript" }],
    demoUrl: "https://example.com/hilink",
    codeUrl: "https://github.com/example/hilink",
    features: [
      "Otimização de imagens com Next.js",
      "Internacionalização para 3 idiomas",
      "Modo escuro/claro",
      "Integração com API de mapas",
    ],
    challenges: ["Implementação de rotas dinâmicas para destinos", "Otimização de SEO para múltiplos idiomas"],
    year: 2024,
    category: "Web Development",
  },
  {
    id: "dashboard",
    title: "Dashboard Corporativo",
    description: "Dashboard analítico para empresa de e-commerce com métricas de vendas e comportamento de usuários.",
    longDescription:
      "Este dashboard corporativo foi desenvolvido para uma empresa de e-commerce, oferecendo análises detalhadas sobre vendas, comportamento de usuários e inventário. O projeto utiliza React para o frontend, Node.js para o backend e MongoDB para armazenamento de dados. Inclui gráficos interativos, relatórios exportáveis e alertas em tempo real.",
    image: "/placeholder.svg?height=400&width=600",
    status: "private",
    technologies: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    demoUrl: "https://example.com/dashboard-demo",
    features: [
      "Painéis personalizáveis por usuário",
      "Análise de dados em tempo real",
      "Exportação de relatórios em múltiplos formatos",
      "Sistema de alertas configurável",
      "Integração com APIs de pagamento e logística",
    ],
    challenges: [
      "Implementação de autenticação multi-fator",
      "Otimização de consultas para grandes volumes de dados",
      "Desenvolvimento de visualizações de dados complexas",
    ],
    year: 2024,
    category: "Business Intelligence",
  },
  {
    id: "link-tree-nextjs",
    title: "Link Tree NextJS",
    description: "Uma aplicação moderna de link tree construída com Next.js para centralizar todos os seus links importantes.",
    longDescription:
      "Link Tree NextJS é uma aplicação web moderna que permite aos usuários criar uma página personalizada com todos os seus links importantes em um só lugar. Desenvolvida com Next.js, TypeScript e Tailwind CSS, a aplicação oferece múltiplos templates, customização de temas, analytics de cliques e uma interface administrativa completa. Ideal para influenciadores, criadores de conteúdo e profissionais que precisam compartilhar múltiplos links de forma organizada.",
    image: "/placeholder.svg?height=400&width=600",
    status: "public",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "PostgreSQL" }
    ],
    demoUrl: "https://example.com/link-tree-demo",
    codeUrl: "https://github.com/example/link-tree-nextjs",
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
]
