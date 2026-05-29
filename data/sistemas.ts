import type { ProjectDetails } from "@/types/project";

export const sistemas: ProjectDetails[] = [
  {
    id: "aguia-help",
    title: "Águia Help",
    description:
      "Sistema completo de gestão para serviços de guincho e assistência veicular com checklist digital, fotos e assinaturas.",
    longDescription:
      "Águia Help é um sistema interno de gestão para empresas de guincho e assistência veicular. A plataforma permite o registro detalhado de serviços através de um formulário multi-etapas, incluindo checklist de condições do veículo, upload de fotos com compressão automática, assinatura digital do cliente, geolocalização de origem/destino e geração de relatórios em PDF. Desenvolvido com Laravel, React e Inertia.js.",
    image: "/placeholder.svg",
    status: "private",
    technologies: [
      { name: "Laravel" },
      { name: "React" },
      { name: "Inertia.js" },
      { name: "MySQL" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    features: [
      "Checklist digital multi-etapas para serviços de guincho",
      "Upload e compressão automática de imagens",
      "Assinatura digital do cliente e destinatário",
      "Geolocalização de origem e destino",
      "Relatórios em PDF com fotos e assinaturas",
      "Auto-salvamento do formulário",
      "Painel administrativo com CRUD completo",
      "Controle de acesso por permissões",
    ],
    challenges: [
      "Implementação de upload otimizado com compressão WebP",
      "Formulário multi-etapas com auto-save",
      "Geração de PDF com dados dinâmicos e imagens",
      "Sincronização de dados em tempo real",
    ],
    year: 2025,
    category: "Sistema Interno",
  },
];
