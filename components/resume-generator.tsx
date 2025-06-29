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
  education: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  certifications: string[];
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Rafael Silva Ferreira de Carvalho",
    title: "Desenvolvedor Full-Stack",
    email: "rafaelsfcarvalho@outlook.com",
    linkedin: "linkedin.com/in/rafael-silva-ferreira-de-carvalho-902a47173",
    portfolio: "rafaelsfcarvalho.vercel.app",
    location: "Brasil"
  },
  summary: "Desenvolvedor Full-Stack com 2+ anos de experiência em desenvolvimento web. Especialista em React, Next.js, TypeScript, Laravel e Node.js. Experiência comprovada em desenvolvimento de aplicações web escaláveis, APIs RESTful, bancos de dados relacionais e deploy em cloud. Foco em clean code, arquitetura de software, performance optimization e user experience. Autodidata com forte capacidade de aprendizado e adaptação a novas tecnologias.",
  experience: [
    {
      title: "Desenvolvedor Full-Stack",
      company: "Freelancer / Projetos Pessoais",
      period: "2023 - Presente",
      description: [
        "Desenvolveu 3+ aplicações web full-stack usando React, Next.js, TypeScript e Laravel",
        "Criou APIs RESTful escaláveis com Node.js e Laravel, servindo 1000+ requisições/dia",
        "Implementou interfaces responsivas mobile-first com Tailwind CSS, aumentando engajamento em 40%",
        "Gerenciou bancos de dados PostgreSQL e MySQL com Prisma ORM, otimizando queries em 60%",
        "Realizou deploy e CI/CD em Vercel, Render e AWS, garantindo 99.9% de uptime",
        "Desenvolveu sistemas de autenticação JWT e OAuth2 com segurança enterprise-level",
        "Otimizou performance web (Core Web Vitals) e SEO, melhorando ranking em 50%",
        "Implementou testes unitários e integração com Jest e Cypress, cobertura de 85%+"
      ]
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Projetos Acadêmicos e Pessoais",
      period: "2022 - 2023",
      description: [
        "Desenvolveu 5+ interfaces modernas e responsivas com React, Vue.js e JavaScript ES6+",
        "Criou biblioteca de 20+ componentes reutilizáveis, reduzindo tempo de desenvolvimento em 30%",
        "Converteu 10+ designs Figma para código pixel-perfect com HTML5, CSS3 e Sass",
        "Otimizou aplicações para cross-browser compatibility (Chrome, Firefox, Safari, Edge)",
        "Implementou Progressive Web Apps (PWA) com Service Workers e offline-first approach"
      ]
    }
  ],
  projects: [
    {
      name: "Unilink - Link Tree Moderno",
      description: "Aplicação web moderna que permite criar páginas personalizadas com links importantes. Inclui 5 templates únicos, customização de cores, dashboard administrativo, analytics em tempo real e sistema de autenticação.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      url: "https://unilink-ruddy.vercel.app"
    },
    {
      name: "Venda Fácil - Sistema de Gestão",
      description: "Sistema completo para gerenciamento de vendas com dashboard intuitivo, gestão de clientes e produtos, sistema de parcelamentos, processamento de pagamentos e geração de relatórios.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Prisma", "PostgreSQL"],
      url: "https://vendafacil.onrender.com"
    },
    {
      name: "Portfólio Pessoal",
      description: "Site pessoal desenvolvido com Next.js, apresentando projetos, habilidades e informações de contato. Inclui formulário de contato funcional, design responsivo e otimização para SEO.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
      url: "https://rafaelsfcarvalho.vercel.app"
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Shadcn/ui", "Vue.js", "Sass/SCSS", "Responsive Design", "Mobile-First", "PWA", "Webpack", "Vite"],
    backend: ["Laravel", "Node.js", "PHP", "Python", "Express.js", "RESTful APIs", "GraphQL", "JWT", "OAuth2", "Microservices", "MVC Architecture"],
    databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma ORM", "Eloquent ORM", "Redis", "Database Design", "Query Optimization"],
    tools: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Render", "Figma", "VS Code", "Jest", "Cypress", "CI/CD", "Linux", "Nginx", "Apache"],
    methodologies: ["Agile", "Scrum", "Clean Code", "SOLID Principles", "TDD", "Code Review", "Version Control", "Performance Optimization", "SEO"]
  },
  education: [
    {
      degree: "Autodidata em Desenvolvimento Web Full-Stack",
      institution: "Estudos Independentes e Cursos Online",
      period: "2022 - Presente"
    },
    {
      degree: "Certificações em Tecnologias Web",
      institution: "Plataformas Online (Udemy, YouTube, Documentações Oficiais)",
      period: "2022 - Presente"
    }
  ],
  certifications: [
    "React - The Complete Guide (Udemy)",
    "Next.js & React - The Complete Guide (Udemy)",
    "Laravel - The Complete Guide (Udemy)",
    "TypeScript - The Complete Developer's Guide",
    "Node.js - The Complete Guide (Udemy)",
    "AWS Cloud Practitioner (Em andamento)",
    "Docker & Kubernetes (Em andamento)"
  ]
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
              }),

              // Formação
              new Paragraph({
                children: [
                  new TextRun({
                    text: "FORMAÇÃO",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              ...resumeData.education.flatMap(edu => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: edu.degree,
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
                      text: `${edu.institution} - ${edu.period}`,
                      size: 20,
                      color: "6B7280"
                    })
                  ],
                  spacing: { after: 200 }
                })
              ]),

              // Certificações
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CERTIFICAÇÕES",
                    bold: true,
                    size: 24,
                    color: "1F2937"
                  })
                ],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 200 }
              }),

              ...resumeData.certifications.map(cert =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `• ${cert}`,
                      size: 20
                    })
                  ],
                  spacing: { after: 100 }
                })
              )
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
