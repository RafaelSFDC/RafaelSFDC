import type { ProjectDetails } from "@/types/project";

export const sistemas: ProjectDetails[] = [
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
