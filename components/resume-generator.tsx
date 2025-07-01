"use client";

import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    portfolio: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    others: string[];
  };
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "RAFAEL SILVA FERREIRA DE CARVALHO",
    phone: "(21) 97967-4045",
    email: "rafaelsfcarvalho@outlook.com",
    portfolio: "Portfólio",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
  summary: "Desenvolvedor Full-Stack com 3 anos de experiência como freelancer, especializado em React, Next.js, Laravel e tecnologias modernas. Atuação em projetos web e mobile com foco em performance, testes, autenticação e usabilidade. Experiência no desenvolvimento de sites, sistemas de gestão, dashboards, e-commerces, aplicações SaaS e APIs. Domínio do estado com Context API e Redux, testes unitários, integração com backend e análise de qualidade. Facilidade de aprendizado e adaptação a diferentes ambientes de trabalho.",
  experience: [
    {
      title: "Freelancer - Alucam",
      company: "",
      period: "(02/2024 - 02/2024)",
      description: [
        "- Desenvolvimento completo de dashboard em Next.js",
        "- Implementação de níveis de autorização e fluxo de autenticação",
        "- Criação de design e fluxo de funcionalidades"
      ]
    },
    {
      title: "Freelancer - Rede Trade",
      company: "",
      period: "(09/2023 - 01/2024)",
      description: [
        "- Desenvolvimento de aplicação web em React.js utilizando Vite",
        "- Melhorias em design, lógica de funcionalidades e fluxo da aplicação",
        "- Suporte à migração com backend e decisões técnicas"
      ]
    }
  ],
  skills: {
    languages: ["React Native (Android/iOS)", "React.js", "Next.js"],
    frameworks: ["Testes unitários com Jest", "Context API, Redux", "Hooks"],
    databases: ["SonarQube, Jenkins, build de APK/IPA", "Geolocalização, desenvolvimento offline"],
    tools: ["OAuth, JWT, Keyrock, SSO (Desafio)", "Publicação em App Store e Google Play (Desafio)", "Node.js, Express, MongoDB, Firebase, Appwrite"],
    others: ["HTML, CSS, JavaScript, TypeScript", "PHP Laravel", "Inglês Intermediário"]
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
                    size: 28,
                    color: "1F2937"
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 }
              }),

              // Informações de contato
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${resumeData.personalInfo.phone} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: `${resumeData.personalInfo.email} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: `${resumeData.personalInfo.portfolio} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: `${resumeData.personalInfo.github} | `,
                    size: 20
                  }),
                  new TextRun({
                    text: resumeData.personalInfo.linkedin,
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
                    text: "- React Native (Android/iOS), React.js, Next.js",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Testes unitários com Jest",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Context API, Redux",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Hooks",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- SonarQube, Jenkins, build de APK/IPA",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Geolocalização, desenvolvimento offline",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- OAuth, JWT, Keyrock, SSO (Desafio)",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Publicação em App Store e Google Play (Desafio)",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Node.js, Express, MongoDB, Firebase, Appwrite",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- HTML, CSS, JavaScript, TypeScript",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- PHP Laravel",
                    size: 20
                  })
                ],
                spacing: { after: 100 }
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "- Inglês Intermediário",
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
