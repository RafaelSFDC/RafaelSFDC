import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import Hero5 from "@/components/hero";
import HeroHeader from "@/components/header";
import ContactForm from "@/components/contact-form";
import ResumeGenerator from "@/components/resume-generator";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaFire,
  FaLink,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaFigma,
  FaDocker,
  FaMobile,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiWebpack,
  SiJest,
} from "react-icons/si";
import { TbBrandVscode, TbGitMerge } from "react-icons/tb";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white custom-scrollbar">
      {/* Header */}
      <HeroHeader />
      <Hero5 />
      {/* Hero Section */}
      {/* <section className="container mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-no-repeat bg-right opacity-20"></div>
        <div className="relative z-10">
          <Button
            variant="outline"
            className="bg-cyan-500 text-white border-none hover:bg-cyan-600 mb-6"
          >
            Bem vindo ao meu Portfólio
          </Button>
          <h1 className="text-5xl font-bold mb-4">Me chamo Rafael</h1>
          <h2 className="text-3xl font-medium">Sou Desenvolvedor Full-Stack</h2>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projetos" className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v6.5l5-3 5 3V2"></path>
              <path d="M2 22V2"></path>
              <path d="M2 17h20"></path>
              <path d="M2 12h20"></path>
              <path d="M2 7h20"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Habilidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M2 12h10"></path>
                <path d="M9 4v16"></path>
                <path d="M14 9l3 3-3 3"></path>
                <path d="M14 4v4"></path>
                <path d="M14 16v4"></path>
              </svg>
              Frontend
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "HTML", icon: <FaHtml5 size={16} /> },
                { name: "CSS", icon: <FaCss3Alt size={16} /> },
                { name: "JavaScript", icon: <FaJs size={16} /> },
                { name: "TypeScript", icon: <SiTypescript size={16} /> },
                { name: "React", icon: <FaReact size={16} /> },
                { name: "React Native", icon: <FaMobile size={16} /> },
                { name: "Vue.js", icon: <FaVuejs size={16} /> },
                { name: "Next.js", icon: <SiNextdotjs size={16} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> },
                {
                  name: "Styled Components",
                  icon: <SiStyledcomponents size={16} />,
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-cyan-400">
                    {skill.icon}
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Node.js", icon: <FaNodeJs size={16} /> },
                { name: "Express", icon: <SiExpress size={16} /> },
                { name: "PHP", icon: <FaPhp size={16} /> },
                { name: "Laravel", icon: <FaLaravel size={16} /> },
                { name: "MongoDB", icon: <SiMongodb size={16} /> },
                { name: "PostgreSQL", icon: <SiPostgresql size={16} /> },
                { name: "Firebase", icon: <FaFire size={16} /> },
                { name: "REST API", icon: <FaLink size={16} /> },
                { name: "GraphQL", icon: <SiGraphql size={16} /> },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-cyan-400">
                    {skill.icon}
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Ferramentas */}
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Ferramentas & Outros
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Git", icon: <FaGitAlt size={16} /> },
                { name: "GitHub", icon: <FaGithub size={16} /> },
                { name: "VS Code", icon: <TbBrandVscode size={16} /> },
                { name: "Figma", icon: <FaFigma size={16} /> },
                { name: "Webpack", icon: <SiWebpack size={16} /> },
                { name: "Jest", icon: <SiJest size={16} /> },
                { name: "Docker", icon: <FaDocker size={16} /> },
                { name: "CI/CD", icon: <TbGitMerge size={16} /> },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-cyan-400">
                    {skill.icon}
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Sobre</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Quem sou eu
              </h3>
              <p className="text-zinc-300 mb-4">
                Meu nome é Rafael e sou Desenvolvedor Web. Comecei a estudar
                programação porque sempre fui fascinado por como as tecnologias
                funcionavam por trás das interfaces. Essa curiosidade me levou a
                mergulhar no mundo do desenvolvimento.
              </p>
              <p className="text-zinc-300">
                Minha jornada começou pelo Front-End, onde descobri minha paixão
                por criar interfaces intuitivas e responsivas. Com o tempo,
                expandi meus conhecimentos para o Back-End, tornando-me um
                desenvolvedor Full-Stack capaz de construir aplicações
                completas.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Interesses
              </h3>
              <p className="text-zinc-300">
                Além do desenvolvimento web, tenho interesse em UI/UX Design,
                Inteligência Artificial e novas tecnologias. Gosto de acompanhar
                as tendências do mercado e estou sempre em busca de aprender
                algo novo para aprimorar minhas habilidades e entregar soluções
                cada vez melhores.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Experiência Profissional
              </h3>
              <p className="text-zinc-300">
                Atualmente trabalho como desenvolvedor FreeLancer, colaborando
                com diversos clientes em projetos variados. Tenho experiência em
                desenvolvimento de sites institucionais, e-commerces, aplicações
                web e sistemas de gestão. Estou aberto a oportunidades de
                trabalho fixo em empresas que valorizem inovação e qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="text-cyan-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Contato</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <a
                      href="mailto:rafaelsfcarvalho@outlook.com"
                      className="text-cyan-400 hover:underline"
                    >
                      rafaelsfcarvalho@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Telefone</p>
                    <a
                      href="whatsapp://send?phone=+5521979674045"
                      className="text-cyan-400 hover:underline"
                    >
                      +55 (21) 97967-4045
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Botão de Download do Currículo */}
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                  Baixar Currículo
                </h4>
                <ResumeGenerator />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
