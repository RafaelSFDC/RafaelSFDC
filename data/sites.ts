import type { ProjectDetails } from "@/types/project";

export const sites: ProjectDetails[] = [
  {
    id: "escola-criativa",
    title: "Escola Criativa",
    description:
      "Site institucional da Escola Criativa, com apresentação dos cursos, metodologia de ensino e área de matrículas online.",
    longDescription:
      "Site institucional moderno e responsivo para a Escola Criativa, destacando sua proposta pedagógica, galeria de cursos, depoimentos de alunos e sistema de matrículas online. Design focado em transmitir confiança e criatividade.",
    image: "/placeholder.svg",
    status: "public",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://escolacriativa.com/",
    year: 2023,
    category: "Site Institucional",
  },
  {
    id: "promind-consultoria",
    title: "Promind Consultoria",
    description:
      "Site corporativo para a Promind Consultoria, apresentando serviços de consultoria empresarial com design profissional.",
    longDescription:
      "Site corporativo desenvolvido para a Promind Consultoria, com foco em apresentar os serviços de consultoria de forma clara e profissional. Inclui páginas institucionais, blog e formulário de contato integrado.",
    image: "/placeholder.svg",
    status: "public",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://promindconsultoria.com.br/",
    year: 2023,
    category: "Site Corporativo",
  },
  {
    id: "alucamp-maquinas",
    title: "Alucamp Máquinas",
    description:
      "Site institucional para locação de máquinas e equipamentos, com catálogo de produtos e solicitação de orçamento online.",
    longDescription:
      "Plataforma online para a Alucamp Máquinas, especializada em locação de equipamentos para construção civil. O site apresenta o catálogo completo de máquinas, informações técnicas e sistema de solicitação de orçamento.",
    image: "/placeholder.svg",
    status: "public",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://www.alucampmaquinas.com.br/",
    year: 2023,
    category: "Site Institucional",
  },
];
