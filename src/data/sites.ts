import type { ProjectDetails } from "@/types/project";
import type { Locale } from "@/i18n/translations";

export const sitesPt: ProjectDetails[] = [
  {
    id: "escola-criativa",
    type: "client",
    title: "Escola Criativa",
    tagline: "Site institucional que converte visitantes em alunos",
    description:
      "Site institucional com apresentação de cursos, metodologia de ensino e área de matrículas online — projetado para conversão.",
    longDescription:
      "A Escola Criativa precisava de uma presença digital que comunicasse com clareza sua proposta pedagógica diferenciada e convertesse visitantes em alunos matriculados. O projeto incluiu arquitetura de informação focada em conversão, galeria de cursos, depoimentos de alunos e sistema de matrículas online integrado.",
    image: "/escola-criativa.webp",
    images: ["/escola-criativa.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://escolacriativa.com/",
    contactUrl: "#contato",
    client: "Escola Criativa",
    features: [
      "Galeria de cursos com fichas detalhadas",
      "Sistema de matrículas online",
      "Depoimentos de alunos integrados",
      "SEO técnico para posicionamento local",
      "Design responsivo mobile-first",
      "Formulário de contato e WhatsApp integrado",
    ],
    testimonial: {
      author: "Coordenação Escola Criativa",
      role: "Gestão",
      text: "O site trouxe uma identidade digital que reflete exatamente nossa proposta pedagógica. As matrículas online simplificaram muito nosso processo.",
    },
    year: 2023,
    category: "Site Institucional",
  },
  {
    id: "promind-consultoria",
    type: "client",
    title: "Promind Consultoria",
    tagline: "Presença digital premium para consultoria empresarial",
    description:
      "Site corporativo que posiciona a Promind como referência em consultoria, com design profissional e geração de leads integrada.",
    longDescription:
      "A Promind precisava de um site que transmitisse autoridade e credibilidade no mercado de consultoria empresarial. O projeto entregou um site corporativo com páginas institucionais completas, blog para geração de conteúdo e formulário de contato integrado — tudo otimizado para conversão e SEO.",
    image: "/promind-consultoria.webp",
    images: ["/promind-consultoria.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://promindconsultoria.com.br/",
    contactUrl: "#contato",
    client: "Promind Consultoria",
    features: [
      "Páginas institucionais com estrutura de autoridade",
      "Blog para marketing de conteúdo",
      "Formulário de contato e geração de leads",
      "Otimização SEO técnica e de conteúdo",
      "Design responsivo e profissional",
    ],
    testimonial: {
      author: "Diretoria Promind",
      role: "Gestão Comercial",
      text: "Profissionalismo total. O site passou a imagem que precisávamos para fechar negócios maiores. Recomendo muito.",
    },
    year: 2023,
    category: "Site Corporativo",
  },
  {
    id: "alucamp-maquinas",
    type: "client",
    title: "Alucamp Máquinas",
    tagline: "Catálogo digital que gera orçamentos 24/7",
    description:
      "Site com catálogo completo de máquinas para locação e sistema de solicitação de orçamento online — gerando leads mesmo fora do horário comercial.",
    longDescription:
      "A Alucamp precisava digitalizar seu processo comercial e permitir que clientes da construção civil solicitassem orçamentos a qualquer hora. O projeto entregou um catálogo digital completo com fichas técnicas de equipamentos, fotos de qualidade e sistema de solicitação de orçamento integrado que notifica a equipe em tempo real.",
    image: "/alucamp-maquinas.webp",
    images: ["/alucamp-maquinas.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://www.alucampmaquinas.com.br/",
    contactUrl: "#contato",
    client: "Alucamp Máquinas",
    features: [
      "Catálogo de máquinas com fichas técnicas detalhadas",
      "Sistema de solicitação de orçamento online",
      "Notificação em tempo real para equipe comercial",
      "Galeria de fotos de equipamentos",
      "SEO local para construção civil",
      "Design responsivo e de fácil navegação",
    ],
    year: 2023,
    category: "Site Institucional",
  },
];

export const sitesEn: ProjectDetails[] = [
  {
    id: "escola-criativa",
    type: "client",
    title: "Escola Criativa",
    tagline: "Institutional website converting visitors into enrolled students",
    description:
      "Educational web portal featuring course syllabi, teaching methodology, and integrated online admissions.",
    longDescription:
      "Escola Criativa needed a high-conversion digital presence to communicate its innovative pedagogy and convert interested visitors into registered students. Delivered structured course directories, student testimonials, and seamless admissions workflows.",
    image: "/escola-criativa.webp",
    images: ["/escola-criativa.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://escolacriativa.com/",
    contactUrl: "#contato",
    client: "Escola Criativa",
    features: [
      "Course catalog with detailed syllabus cards",
      "Integrated online admission application system",
      "Verified student testimonial carousels",
      "Technical SEO for targeted local positioning",
      "Mobile-first responsive design",
      "Instant WhatsApp & contact lead forms",
    ],
    testimonial: {
      author: "Leadership Team, Escola Criativa",
      role: "Operations",
      text: "The website provided a distinct digital identity reflecting our pedagogical vision. Online enrollments dramatically streamlined our intake.",
    },
    year: 2023,
    category: "Institutional Website",
  },
  {
    id: "promind-consultoria",
    type: "client",
    title: "Promind Consultoria",
    tagline: "High-authority corporate presence for management consulting",
    description:
      "Corporate web platform positioning Promind as a consulting leader, equipped with modern branding and automated lead capture.",
    longDescription:
      "Promind required an authoritative digital portal to build credibility with executive-level corporate clients. The project delivered tailored service landing pages, a thought-leadership insights blog, and integrated CRM lead inquiry funnels.",
    image: "/promind-consultoria.webp",
    images: ["/promind-consultoria.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://promindconsultoria.com.br/",
    contactUrl: "#contato",
    client: "Promind Consultoria",
    features: [
      "Authoritative corporate service landing pages",
      "Insights & blog hub for content marketing",
      "Lead qualification and inquiry capture funnels",
      "Comprehensive technical & on-page SEO optimization",
      "Responsive high-trust aesthetic",
    ],
    testimonial: {
      author: "Executive Board, Promind",
      role: "Commercial Management",
      text: "Total professionalism. The site projected the exact credibility required to close high-value enterprise accounts. Highly recommended.",
    },
    year: 2023,
    category: "Corporate Website",
  },
  {
    id: "alucamp-maquinas",
    type: "client",
    title: "Alucamp Máquinas",
    tagline: "Digital catalog generating equipment rental quotes 24/7",
    description:
      "Heavy equipment rental catalog with real-time digital quote requests — generating commercial leads around the clock.",
    longDescription:
      "Alucamp sought to digitize industrial equipment rentals for construction contractors. Engineered a searchable technical catalog with specification sheets and instant quote forms that notify sales reps in real time.",
    image: "/alucamp-maquinas.webp",
    images: ["/alucamp-maquinas.webp"],
    status: "private",
    technologies: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    demoUrl: "https://www.alucampmaquinas.com.br/",
    contactUrl: "#contato",
    client: "Alucamp Máquinas",
    features: [
      "Industrial machinery catalog with technical specs",
      "24/7 online rental quote submission system",
      "Instant lead dispatch to commercial sales reps",
      "High-resolution machinery inspection gallery",
      "Targeted local SEO for commercial construction",
      "Fluid, responsive mobile navigation",
    ],
    year: 2023,
    category: "Equipment Catalog",
  },
];

export function getSites(lang: Locale = "pt"): ProjectDetails[] {
  return lang === "en" ? sitesEn : sitesPt;
}

export const sites: ProjectDetails[] = sitesPt;
