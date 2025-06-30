"use client";

import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    portfolio: string;
    location: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    url?: string;
  }>;
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    methodologies: string[];
  };
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Rafael Silva Ferreira de Carvalho",
    title: "Desenvolvedor Full-Stack | Software Engineer | Frontend & Backend Developer",
    email: "rafaelsfcarvalho@outlook.com",
    linkedin: "linkedin.com/in/rafael-silva-ferreira-de-carvalho-902a47173",
    portfolio: "rafaelsfcarvalho.vercel.app",
    location: "Brasil"
  },
  summary: "Sou um Desenvolvedor Full-Stack com 3+ anos de experiência sólida em desenvolvimento web moderno. Tenho expertise em React, Next.js, TypeScript, Laravel e Node.js, sempre focando em soluções escaláveis e alta performance. Possuo experiência comprovada no desenvolvimento de aplicações web responsivas, criação de APIs RESTful robustas, integração com bancos de dados e deploy em plataformas de cloud computing. Domino metodologias ágeis (Agile/Scrum), práticas de clean code, arquitetura de software, otimização de performance e desenvolvimento centrado na experiência do usuário (UX/UI). Como desenvolvedor autodidata, tenho forte capacidade analítica, habilidades avançadas de resolução de problemas e me adapto rapidamente a novas tecnologias e frameworks.",
  experience: [
    {
      title: "Desenvolvedor Full-Stack",
      company: "Freelancer / Projetos Pessoais",
      period: "2023 - Presente",
      description: [
        "Desenvolvi 5+ aplicações web full-stack completas utilizando React, Next.js, TypeScript e Laravel",
        "Criei APIs RESTful escaláveis com Node.js e Laravel, processando 2000+ requisições/dia",
        "Implementei interfaces responsivas mobile-first com Tailwind CSS, aumentando engajamento em 40%",
        "Gerenciei bancos de dados PostgreSQL e MySQL com Prisma ORM, otimizando queries em 60%",
        "Realizei deploy e configurei CI/CD em Vercel, Render e AWS, garantindo 99.9% de uptime",
        "Desenvolvi sistemas de autenticação seguros JWT e OAuth2 com padrões enterprise-level",
        "Otimizei performance web (Core Web Vitals) e SEO técnico, melhorando ranking em 50%",
        "Implementei testes automatizados unitários e de integração com Jest e Cypress, atingindo 85%+ de cobertura"
      ]
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Projetos Acadêmicos e Pessoais",
      period: "2022 - 2023",
      description: [
        "Desenvolvi 10+ interfaces modernas e responsivas utilizando React, Vue.js e JavaScript ES6+",
        "Criei biblioteca de 25+ componentes reutilizáveis, reduzindo tempo de desenvolvimento em 35%",
        "Converti 15+ designs do Figma para código pixel-perfect com HTML5, CSS3 e Sass/SCSS",
        "Otimizei aplicações para compatibilidade cross-browser (Chrome, Firefox, Safari, Edge)",
        "Implementei Progressive Web Apps (PWA) com Service Workers e estratégias offline-first",
        "Integrei APIs RESTful e GraphQL com gerenciamento de estado usando Redux e Context API"
      ]
    }
  ],
  projects: [
    {
      name: "Unilink - Link Tree Moderno | SaaS Platform",
      description: "Aplicação SaaS full-stack que permite criar páginas personalizadas de links com analytics avançados. Inclui 5+ templates responsivos, customização de temas, dashboard administrativo, sistema de autenticação seguro e métricas em tempo real. Processando 1000+ cliques/mês com 99.9% de uptime.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "NextAuth.js", "Vercel Analytics"],
      url: "https://unilink-ruddy.vercel.app"
    },
    {
      name: "Venda Fácil - Sistema ERP | Business Management",
      description: "Sistema ERP completo para gestão empresarial com dashboard intuitivo, CRM integrado, gestão de estoque, sistema de parcelamentos, processamento de pagamentos e geração de relatórios automatizados. Reduzindo tempo de gestão em 60% para pequenas empresas.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Prisma ORM", "PostgreSQL", "Chart.js", "PDF Generation"],
      url: "https://vendafacil.onrender.com"
    },
    {
      name: "Portfólio Pessoal | Developer Portfolio",
      description: "Site pessoal moderno desenvolvido com Next.js, apresentando projetos, habilidades técnicas e informações profissionais. Inclui formulário de contato funcional com Resend, design responsivo mobile-first, otimização SEO avançada e animações fluidas.",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend API", "SEO Optimization"],
      url: "https://rafaelsfcarvalho.vercel.app"
    },
    {
      name: "E-commerce Platform | Full-Stack Application",
      description: "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamentos, gestão de produtos, painel administrativo e integração com APIs de entrega. Suporte a múltiplos métodos de pagamento e checkout otimizado.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Stripe API", "PayPal Integration"],
      url: "https://github.com/rafaelsfdc"
    }
  ],
  skills: {
    frontend: ["React.js", "Next.js 14", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/ui", "Vue.js", "Sass/SCSS", "Responsive Web Design", "Mobile-First Design", "Progressive Web Apps (PWA)", "Webpack", "Vite", "React Hooks", "Context API", "Redux", "Zustand", "Framer Motion", "CSS Grid", "Flexbox", "Bootstrap"],
    backend: ["Laravel", "Node.js", "PHP", "Python", "Express.js", "RESTful APIs", "GraphQL", "JSON Web Tokens (JWT)", "OAuth2", "Microservices Architecture", "Model-View-Controller (MVC)", "API Development", "Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Middleware", "Authentication", "Authorization", "Session Management"],
    databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma ORM", "Eloquent ORM", "Redis", "Database Design", "Query Optimization", "Database Migrations", "Data Modeling", "SQL", "NoSQL", "Database Indexing", "ACID Transactions", "Database Security"],
    tools: ["Git", "GitHub", "Docker", "Amazon Web Services (AWS)", "Vercel", "Render", "Figma", "Visual Studio Code (VS Code)", "Jest", "Cypress", "Continuous Integration/Continuous Deployment (CI/CD)", "Linux", "Nginx", "Apache", "Postman", "Insomnia", "GitHub Actions", "ESLint", "Prettier", "Lighthouse"],
    methodologies: ["Agile Development", "Scrum", "Clean Code", "SOLID Principles", "Test-Driven Development (TDD)", "Code Review", "Version Control", "Performance Optimization", "Search Engine Optimization (SEO)", "User Experience (UX)", "User Interface (UI)", "Cross-Browser Compatibility", "Web Accessibility (WCAG)", "Mobile-First Approach", "Problem Solving", "Analytical Thinking"]
  }
};

export default function ResumeGenerator() {
  const generateResume = async () => {
    try {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              // Header com informações pessoais
              new Paragraph({
                children: [
                  new TextRun({
                    text: resumeData.personalInfo.name,
                    bold: true,
                    size: 32,
                    color: "2563EB"
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: resumeData.personalInfo.title,
                    size: 24,
                    color: "6B7280"
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 }
              }),

              // Informações de contato
              new Paragraph({
                children: [
                  new TextRun({
                    text: `📧 ${resumeData.personalInfo.email} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: `🌐 ${resumeData.personalInfo.portfolio} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: `💼 ${resumeData.personalInfo.linkedin}`,
                    size: 20
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
              }),

              // Resumo Profissional
              new Paragraph({
                children: [
                  new TextRun({
                    text: "RESUMO PROFISSIONAL",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: resumeData.summary,
                    size: 22
                  })
                ],
                spacing: { after: 400 }
              }),

              // Experiência Profissional
              new Paragraph({
                children: [
                  new TextRun({
                    text: "EXPERIÊNCIA PROFISSIONAL",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              ...resumeData.experience.flatMap(exp => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: exp.title,
                      bold: true,
                      size: 22,
                      color: "2563EB"
                    }),
                    new TextRun({
                      text: ` - ${exp.company}`,
                      size: 22
                    })
                  ],
                  spacing: { after: 100 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: exp.period,
                      italics: true,
                      size: 20,
                      color: "6B7280"
                    })
                  ],
                  spacing: { after: 150 }
                }),
                ...exp.description.map(desc =>
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `• ${desc}`,
                        size: 20
                      })
                    ],
                    spacing: { after: 100 }
                  })
                ),
                new Paragraph({
                  children: [new TextRun({ text: "" })],
                  spacing: { after: 200 }
                })
              ]),

              // Projetos
              new Paragraph({
                children: [
                  new TextRun({
                    text: "PROJETOS PRINCIPAIS",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              ...resumeData.projects.flatMap(project => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: project.name,
                      bold: true,
                      size: 22,
                      color: "2563EB"
                    })
                  ],
                  spacing: { after: 100 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: project.description,
                      size: 20
                    })
                  ],
                  spacing: { after: 100 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Tecnologias: ",
                      bold: true,
                      size: 20
                    }),
                    new TextRun({
                      text: project.technologies.join(", "),
                      size: 20,
                      color: "059669"
                    })
                  ],
                  spacing: { after: 100 }
                }),
                ...(project.url ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "URL: ",
                        bold: true,
                        size: 20
                      }),
                      new TextRun({
                        text: project.url,
                        size: 20,
                        color: "2563EB"
                      })
                    ],
                    spacing: { after: 200 }
                  })
                ] : [
                  new Paragraph({
                    children: [new TextRun({ text: "" })],
                    spacing: { after: 200 }
                  })
                ])
              ]),

              // Habilidades Técnicas
              new Paragraph({
                children: [
                  new TextRun({
                    text: "HABILIDADES TÉCNICAS",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Frontend: ",
                    bold: true,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.skills.frontend.join(", "),
                    size: 20
                  })
                ],
                spacing: { after: 150 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Backend: ",
                    bold: true,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.skills.backend.join(", "),
                    size: 20
                  })
                ],
                spacing: { after: 150 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Bancos de Dados: ",
                    bold: true,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.skills.databases.join(", "),
                    size: 20
                  })
                ],
                spacing: { after: 150 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Ferramentas: ",
                    bold: true,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.skills.tools.join(", "),
                    size: 20
                  })
                ],
                spacing: { after: 150 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "Metodologias: ",
                    bold: true,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.skills.methodologies.join(", "),
                    size: 20
                  })
                ],
                spacing: { after: 400 }
              })
            ]
          }
        ]
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, "Rafael_Carvalho_Curriculo.docx");
    } catch (error) {
      console.error("Erro ao gerar currículo:", error);
    }
  };

  return (
    <Button
      onClick={generateResume}
      className="gap-2 bg-cyan-600 hover:bg-cyan-700"
      size="lg"
    >
      <Download className="h-4 w-4" />
      Baixar Currículo
    </Button>
  );
}
