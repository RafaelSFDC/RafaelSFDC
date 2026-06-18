import type { ProjectDetails } from "@/types/project";

export const sistemas: ProjectDetails[] = [
  {
    id: "pedefacil",
    type: "whitelabel",
    title: "PedeFácil",
    tagline: "Cardápio digital e pedidos via WhatsApp para restaurantes — pronto para sua marca",
    description:
      "Sistema white label para restaurantes: cardápio digital, pedidos via WhatsApp, painel administrativo completo — tudo sob sua marca.",
    longDescription:
      "PedeFácil é um sistema completo e moderno para restaurantes que desejam digitalizar sua operação de pedidos — disponível para licenciamento sob a sua marca. A plataforma oferece um cardápio digital mobile-first, checkout integrado com WhatsApp, gestão de menu, categorias, produtos, variações, adicionais, preços, disponibilidade, importação/exportação CSV, cupons de desconto, zonas de entrega por bairro, relatórios operacionais e um painel administrativo completo com autenticação segura. Construído com TanStack Start, React 19, Drizzle ORM e Cloudflare D1/R2 para máxima performance e escalabilidade.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "TanStack Start" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Drizzle ORM" },
      { name: "Tailwind CSS" },
      { name: "Cloudflare D1/R2" },
      { name: "Better Auth" },
    ],
    contactUrl: "#contato",
    targetAudience: "Restaurantes, delivery, lanchonetes e negócios de alimentação que precisam digitalizar seus pedidos, modernizar o cardápio e profissionalizar a operação via WhatsApp.",
    features: [
      "Cardápio digital mobile-first com categorias e produtos",
      "Variações e adicionais personalizáveis por produto",
      "Checkout integrado com WhatsApp estruturado",
      "Gestão completa de menu, preços e disponibilidade",
      "Importação e exportação de cardápio em CSV",
      "Cupons de desconto com validação server-side",
      "Zonas de entrega por bairro com taxas específicas",
      "Painel administrativo com autenticação segura",
      "Relatórios operacionais e exportação de dados",
      "Gestão de pedidos com status em tempo real",
      "Rastreamento público de pedidos com código de acesso",
      "Reuso de dados de cliente e endereço para pedidos recorrentes",
    ],
    highlights: [
      {
        title: "100% White Label",
        description: "Sua logo, suas cores, seu domínio. O sistema é entregue completamente personalizado para seu restaurante.",
        icon: "tag",
      },
      {
        title: "Mobile-First",
        description: "Interface projetada para dispositivos móveis —/cardápio e checkout otimizados para smartphone.",
        icon: "smartphone",
      },
      {
        title: "Integração WhatsApp",
        description: "Pedidos estruturados são enviados diretamente via WhatsApp com mensagem formatada pronta para envio.",
        icon: "message-circle",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Entre em contato",
        description: "Agende uma demonstração e entenda como o sistema atende sua operação.",
      },
      {
        step: 2,
        title: "Personalização",
        description: "Adaptamos o sistema com sua identidade visual, cardápio e configurações de entrega.",
      },
      {
        step: 3,
        title: "Implantação",
        description: "Deploy na infraestrutura Cloudflare com domínio próprio e treinamento da equipe.",
      },
      {
        step: 4,
        title: "Suporte contínuo",
        description: "Suporte técnico dedicado e atualizações contínuas incluídos no plano.",
      },
    ],
    challenges: [
      "Implementação de cardápio digital com variações e adicionais complexos",
      "Integração estruturada com WhatsApp para pedidos",
      "Cálculo server-side de totais com zonas de entrega e cupons",
      "Arquitetura SaaS multi-tenant com Cloudflare D1/R2",
    ],
    year: 2025,
    category: "Sistema de Delivery",
  },
  {
    id: "aguia-help",
    type: "whitelabel",
    title: "Águia Help",
    tagline: "Sistema completo de gestão para serviços de guincho — pronto para sua marca",
    description:
      "Sistema white label para empresas de guincho e assistência veicular: checklist digital, fotos, assinaturas, geolocalização e relatórios em PDF — tudo sob sua marca.",
    longDescription:
      "Águia Help é um sistema robusto e completo para gerenciar serviços de guincho e assistência veicular — disponível para licenciamento sob a sua marca. A plataforma digitaliza todo o processo operacional: do registro do chamado com checklist multi-etapas, upload de fotos do veículo, assinatura digital do cliente, até a geração automática de relatórios em PDF. Tudo em tempo real, com painel administrativo completo.",
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    status: "private",
    technologies: [
      { name: "Laravel" },
      { name: "React" },
      { name: "Inertia.js" },
      { name: "MySQL" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    contactUrl: "#contato",
    targetAudience: "Empresas de guincho, assistências veiculares, frotas e seguradoras que precisam digitalizar e profissionalizar a gestão dos seus serviços de campo.",
    features: [
      "Checklist digital multi-etapas para serviços de guincho",
      "Upload e compressão automática de imagens (WebP)",
      "Assinatura digital do cliente e destinatário",
      "Geolocalização de origem e destino",
      "Relatórios em PDF com fotos e assinaturas",
      "Auto-salvamento do formulário",
      "Painel administrativo com CRUD completo",
      "Controle de acesso por permissões e papéis",
    ],
    highlights: [
      {
        title: "100% White Label",
        description: "Sua logo, suas cores, seu domínio. O sistema é entregue completamente personalizado para sua empresa.",
        icon: "tag",
      },
      {
        title: "Operação em Campo",
        description: "Interface mobile-first projetada para uso em campo — funciona em qualquer dispositivo, mesmo com sinal fraco.",
        icon: "smartphone",
      },
      {
        title: "Relatórios Profissionais",
        description: "Geração automática de relatórios em PDF com fotos, assinaturas e dados completos do serviço.",
        icon: "file-text",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Entre em contato",
        description: "Agende uma demonstração e entenda como o sistema atende sua operação.",
      },
      {
        step: 2,
        title: "Personalização",
        description: "Adaptamos o sistema com sua identidade visual, fluxos e necessidades específicas.",
      },
      {
        step: 3,
        title: "Implantação",
        description: "Deploy completo na sua infraestrutura ou em cloud, com treinamento da equipe.",
      },
      {
        step: 4,
        title: "Suporte contínuo",
        description: "Suporte técnico dedicado e atualizações contínuas incluídos no plano.",
      },
    ],
    challenges: [
      "Implementação de upload otimizado com compressão WebP",
      "Formulário multi-etapas com auto-save",
      "Geração de PDF com dados dinâmicos e imagens",
      "Sincronização de dados em tempo real",
    ],
    year: 2025,
    category: "Sistema de Campo",
  },
];
