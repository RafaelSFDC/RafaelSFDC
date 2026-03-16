"use client"

import { useEffect, useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import Hero5 from "@/components/hero"
import HeroHeader from "@/components/header"
import DownloadResume from "@/components/download-resume"
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
} from "react-icons/fa"
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
  SiPrisma,
  SiFirebase,
  SiRedis,
  SiTestinglibrary,
} from "react-icons/si"
import { TbBrandVscode, TbGitMerge, TbApi } from "react-icons/tb"
import { MdSecurity, MdMailOutline, MdPhoneInTalk } from "react-icons/md"
import { DiScrum } from "react-icons/di"
import { cn } from "@/lib/utils"

export default function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 }
    )

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const SectionHeading = ({ children, icon: Icon, id }: { children: string, icon: any, id?: string }) => (
    <div className="section-heading reveal" ref={addToRefs}>
      <div className="flex items-center gap-3">
        <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-cyan-400">
          <Icon size={24} />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{children}</h2>
      </div>
      <div className="section-heading-line flex-grow ml-4 opacity-50" />
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white custom-scrollbar selection:bg-cyan-500/30">
      <HeroHeader />
      
      <main className="relative z-10">
        <Hero5 />

        {/* Projects Section */}
        <section id="projetos" className="container mx-auto py-24 px-4">
          <SectionHeading icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          )}>
            Projetos Selecionados
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal reveal-delay-2" ref={addToRefs}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="container mx-auto py-24 px-4 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent">
          <SectionHeading icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6.5l5-3 5 3V2"></path>
              <path d="M2 22V2"></path>
              <path d="M2 17h20"></path>
              <path d="M2 12h20"></path>
              <path d="M2 7h20"></path>
            </svg>
          )}>
            Habilidades Técnicas
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass-card p-8 rounded-2xl reveal reveal-delay-1" ref={addToRefs}>
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-zinc-100">
                <span className="h-8 w-1 bg-cyan-500 rounded-full mr-1" />
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "HTML", icon: <FaHtml5 size={16} /> },
                  { name: "CSS", icon: <FaCss3Alt size={16} /> },
                  { name: "JavaScript", icon: <FaJs size={16} /> },
                  { name: "TypeScript", icon: <SiTypescript size={16} /> },
                  { name: "React", icon: <FaReact size={16} /> },
                  { name: "React Native", icon: <FaMobile size={16} /> },
                  { name: "Next.js", icon: <SiNextdotjs size={16} /> },
                  { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> },
                  { name: "Prisma", icon: <SiPrisma size={16} /> },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 text-zinc-400 group transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-cyan-400/70 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-zinc-200 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-card p-8 rounded-2xl reveal reveal-delay-2" ref={addToRefs}>
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-zinc-100">
                <span className="h-8 w-1 bg-emerald-500 rounded-full mr-1" />
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Node.js", icon: <FaNodeJs size={16} /> },
                  { name: "Express", icon: <SiExpress size={16} /> },
                  { name: "PHP", icon: <FaPhp size={16} /> },
                  { name: "Laravel", icon: <FaLaravel size={16} /> },
                  { name: "MongoDB", icon: <SiMongodb size={16} /> },
                  { name: "PostgreSQL", icon: <SiPostgresql size={16} /> },
                  { name: "Firebase", icon: <SiFirebase size={16} /> },
                  { name: "Redis", icon: <SiRedis size={16} /> },
                  { name: "REST API", icon: <TbApi size={16} /> },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 text-zinc-400 group transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-emerald-400/70 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-zinc-200 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ferramentas */}
            <div className="glass-card p-8 rounded-2xl reveal reveal-delay-3" ref={addToRefs}>
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-zinc-100">
                <span className="h-8 w-1 bg-purple-500 rounded-full mr-1" />
                Workflow
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Git", icon: <FaGitAlt size={16} /> },
                  { name: "GitHub", icon: <FaGithub size={16} /> },
                  { name: "Docker", icon: <FaDocker size={16} /> },
                  { name: "CI/CD", icon: <TbGitMerge size={16} /> },
                  { name: "VS Code", icon: <TbBrandVscode size={16} /> },
                  { name: "Figma", icon: <FaFigma size={16} /> },
                  { name: "Auth", icon: <MdSecurity size={16} /> },
                  { name: "Scrum", icon: <DiScrum size={16} /> },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2.5 text-zinc-400 group transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-purple-400/70 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-zinc-200 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="container mx-auto py-24 px-4 overflow-hidden">
          <SectionHeading icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          )}>
            Sobre Rafael
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal reveal-delay-2" ref={addToRefs}>
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="font-display text-2xl font-bold mb-5 flex items-center gap-2 text-zinc-100">
                  Quem sou eu
                </h3>
                <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                  <p>
                    Meu nome é <span className="text-cyan-400 font-medium">Rafael</span> e sou Desenvolvedor Full-Stack com <span className="text-zinc-200 font-medium">6 anos de experiência</span> como freelancer.
                  </p>
                  <p>
                    Minha jornada começou pelo Front-End, onde descobri minha paixão por criar interfaces intuitivas e responsivas. Com o tempo, expandi para o Back-End, tornando-me capaz de construir aplicações completas e soluções robustas que realmente resolvem problemas.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/10" />
                <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2 text-zinc-100">
                  Interesses & Experiência
                </h3>
                <div className="space-y-4 text-zinc-400 text-sm">
                  <p>
                    Além do código, sou fascinado por <span className="text-cyan-400">UI/UX Design</span> e <span className="text-emerald-400">Inteligência Artificial</span>. Acredito que a tecnologia deve ser poderosa, mas simples de usar.
                  </p>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="font-medium text-zinc-200 mb-2">Expertise em:</p>
                    <ul className="grid grid-cols-1 gap-2 opacity-80">
                      <li>• Dashboards & Sistemas SaaS complexos</li>
                      <li>• E-commerces & Lojas Online de alta conversão</li>
                      <li>• APIs RESTful & Integrações de terceiros</li>
                      <li>• Performance Web & SEO Técnico</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="container mx-auto py-24 px-4">
          <SectionHeading icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          )}>
            Vamos Conversar?
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal reveal-delay-2" ref={addToRefs}>
            {/* Informações de Contato */}
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-cyan-500">
              <h3 className="font-display text-xl font-bold mb-6 text-zinc-100 italic">Get in touch</h3>
              <div className="space-y-6">
                <a href="mailto:rafaelsfcarvalho@outlook.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-all duration-300">
                    <MdMailOutline size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-zinc-200 font-medium transition-colors group-hover:text-cyan-400">rafaelsfcarvalho@outlook.com</p>
                  </div>
                </a>

                <a href="whatsapp://send?phone=+5521979674045" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
                    <MdPhoneInTalk size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Telefone</p>
                    <p className="text-zinc-200 font-medium transition-colors group-hover:text-emerald-400">+55 (21) 97967-4045</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl bg-zinc-950/40">
              <h3 className="font-display text-xl font-bold mb-6 text-zinc-100 italic">Find me on</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/RafaelSFDC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-800 text-zinc-300 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaGithub size={20} className="text-zinc-400" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-800 text-zinc-300 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaLinkedinIn size={20} className="text-[#0A66C2]" />
                    LinkedIn
                  </a>
                </div>
                
                <div className="pt-4 mt-2 border-t border-zinc-800/50">
                  <DownloadResume />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FaLinkedinIn({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 448 512" 
      className={className} 
      height={size} 
      width={size} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  )
}
