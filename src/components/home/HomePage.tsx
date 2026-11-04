import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { SectionHeader } from "@/components/SectionHeader"
import { useEffect, useRef, useState } from "react"
import { SiteCard } from "@/components/site-card"
import { getProjects } from "@/data/projects"
import { getSites } from "@/data/sites"
import Hero5 from "@/components/hero"
import HeroHeader from "@/components/header"
import DownloadResume from "@/components/download-resume"
import { translations, type Locale } from "@/i18n/translations"
import {
  FolderKanban,
  Briefcase,
  Code2,
  Search,
  CheckCircle,
  ExternalLink,
  Eye,
  Mail,
  Smartphone,
  Kanban,
  Zap,
  ShieldCheck,
} from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiNodedotjs,
  SiLaravel,
  SiCloudflare,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiDrizzle,
  SiPrisma,
  SiRedis,
  SiTauri,
  SiRust,
  SiDocker,
  SiGit,
  SiFigma,
  SiGooglegemini,
  SiWebrtc,
  SiWhatsapp,
} from "react-icons/si"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { ProjectLandingModal } from "@/components/project-landing-modal"
import { OpenSourceSection } from "@/components/home/OpenSourceSection"
import type { ProjectDetails } from "@/types/project"

const getSkillCategories = (lang: Locale) => [
  {
    title: lang === "en" ? "Frontend & Web" : "Frontend & Web",
    skills: [
      { name: "React & React 19", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TanStack (Start / Router / Query)", icon: SiReactquery },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Astro (SSG / SSR)", icon: SiAstro },
      { name: "React Native (Mobile)", icon: Smartphone },
    ],
  },
  {
    title: lang === "en" ? "Backend & Edge" : "Backend & Edge",
    skills: [
      { name: "Node.js & Express", icon: SiNodedotjs },
      { name: "PHP & Laravel", icon: SiLaravel },
      { name: "Cloudflare Workers & Pages", icon: SiCloudflare },
      { name: "Durable Objects & WebSockets", icon: Zap },
      { name: "WebRTC (P2P Audio & Mesh)", icon: SiWebrtc },
      { name: "Better Auth (OAuth & JWT)", icon: ShieldCheck },
      { name: lang === "en" ? "AI Integration (Gemini & AI SDK)" : "Integração IA (Gemini & AI SDK)", icon: SiGooglegemini },
    ],
  },
  {
    title: lang === "en" ? "Databases & Storage" : "Bancos & Storage",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite (Local & Embedded)", icon: SiSqlite },
      { name: "Cloudflare D1 (Serverless SQL)", icon: SiCloudflare },
      { name: "Drizzle ORM & Kit", icon: SiDrizzle },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: lang === "en" ? "Redis & Structured Cache" : "Redis & Cache Estruturado", icon: SiRedis },
    ],
  },
  {
    title: lang === "en" ? "Desktop & DevOps" : "Desktop & DevOps",
    skills: [
      { name: "Tauri (Desktop Apps)", icon: SiTauri },
      { name: "Rust (Performance & Core)", icon: SiRust },
      { name: "Cloudflare R2 (Object Storage)", icon: SiCloudflare },
      { name: lang === "en" ? "Docker & Containerization" : "Docker & Conteinerização", icon: SiDocker },
      { name: "Git, GitHub & CI/CD", icon: SiGit },
      { name: "UI/UX Design (Figma)", icon: SiFigma },
      { name: lang === "en" ? "Agile Methodologies (Scrum)" : "Metodologias Ágeis (Scrum)", icon: Kanban },
    ],
  },
]

interface HomePageProps {
  lang?: Locale
}

export default function Home({ lang = "pt" }: HomePageProps) {
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const [detailsProject, setDetailsProject] = useState<ProjectDetails | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const t = translations[lang]
  const projects = getProjects(lang)
  const sites = getSites(lang)
  const skillCategories = getSkillCategories(lang)

  const handleOpenDetails = (project: ProjectDetails) => {
    setDetailsProject(project)
    setIsDetailsOpen(true)
  }

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

  const FeaturedCard = ({ project }: { project: ProjectDetails }) => (
    <div className="glass-card rounded-lg overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden aspect-video lg:aspect-auto">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="font-headline-md text-headline-md mb-4">{project.title}</h3>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-3 sm:gap-4 mt-auto">
            {project.demoUrl && (
              <Button
                render={<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" />}
                className="flex-1 sm:flex-initial"
              >
                <ExternalLink className="size-4" /> {t.cards.visitSite}
              </Button>
            )}
            <Button
              variant="outline"
              className="flex-1 sm:flex-initial"
              onClick={() => handleOpenDetails(project)}
              aria-label={`${t.cards.details} - ${project.title}`}
            >
              <Eye className="size-4" /> {t.cards.details}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-surface-tint/30">
      <HeroHeader lang={lang} />

      <main className="relative flex flex-col gap-20 md:gap-section-gap pb-20 md:pb-section-gap">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />
        <div className="absolute top-[1536px] right-0 w-full h-[1024px] glow-bg -z-10 pointer-events-none opacity-50" />

        <Hero5 lang={lang} />

        {/* Projetos / Produtos */}
        <Section id="projetos">
          <SectionHeader
            icon={FolderKanban}
            title={t.sections.products.title}
            description={t.sections.products.description}
          />

          <div className="grid grid-cols-1 gap-stack-lg" ref={addToRefs}>
            {projects.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        {/* Trabalhos */}
        <Section id="trabalhos">
          <SectionHeader
            icon={Briefcase}
            title={t.sections.works.title}
            description={t.sections.works.description}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
            ref={addToRefs}
          >
            {sites.map((site) => (
              <SiteCard
                key={site.id}
                project={site}
                badge={t.sections.works.badgeClient}
                lang={lang}
                onOpenDetails={() => handleOpenDetails(site)}
              />
            ))}
          </div>
        </Section>

        {/* Open-Source */}
        <OpenSourceSection lang={lang} />

        {/* Habilidades */}
        <Section id="habilidades" className="bg-surface-container-lowest/50 py-16 md:py-20">
          <SectionHeader
            icon={Code2}
            title={t.sections.skills.title}
            description={t.sections.skills.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass-card p-6 md:p-8 rounded-lg border-l-4 border-l-surface-tint flex flex-col justify-between hover:border-l-primary transition-all duration-300"
              >
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-white tracking-tight mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3.5 font-label-sm text-label-sm">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <li
                          key={skill.name}
                          className="flex items-center gap-3 text-on-surface hover:text-white transition-colors group"
                        >
                          <span className="size-5 flex items-center justify-center text-surface-tint shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="text-xs md:text-sm font-medium">{skill.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sobre */}
        <Section id="sobre">
          <SectionHeader
            icon={Search}
            title={t.sections.about.title}
            description={t.sections.about.description}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
            <div className="glass-card p-10 rounded-lg">
              <h3 className="font-headline-md text-headline-md mb-6">
                {t.sections.about.whoIAmTitle}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {t.sections.about.whoIAmP1}
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                {t.sections.about.whoIAmP2}
              </p>
            </div>

            <div className="glass-card p-10 rounded-lg">
              <h3 className="font-headline-md text-headline-md mb-6">
                {t.sections.about.expertiseTitle}
              </h3>
              <ul className="space-y-6">
                {t.sections.about.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle className="size-6 text-surface-tint shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contato */}
        <Section id="contato">
          <div className="glass-card p-6 sm:p-12 md:p-20 rounded-lg text-center relative overflow-hidden">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 sm:mb-8">
              {t.sections.contact.title}
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-12">
              {t.sections.contact.subtitle}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <a
                href="mailto:rafaelsfcarvalho@outlook.com"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-surface-tint/50 transition-colors">
                  <Mail className="size-8 text-surface-tint" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                  {t.sections.contact.emailLabel}
                </span>
                <span className="font-headline-md text-2xl md:text-headline-md break-all group-hover:text-surface-tint transition-colors">
                  rafaelsfcarvalho@outlook.com
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5521979674045&text=Ol%C3%A1%20Rafael!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label={t.sections.contact.whatsappAria}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-surface-tint/50 transition-colors">
                  <SiWhatsapp className="size-8 text-surface-tint" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                  {t.sections.contact.whatsappLabel}
                </span>
                <span className="font-headline-md text-headline-md group-hover:text-surface-tint transition-colors">
                  +55 (21) 97967-4045
                </span>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
              <Button
                render={
                  <a
                    href="https://github.com/RafaelSFDC"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Rafael SFDC"
                  />
                }
                variant="outline"
                size="lg"
              >
                <FaGithub className="size-5" />
              </Button>
              <Button
                render={
                  <a
                    href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Rafael SFDC"
                  />
                }
                variant="outline"
                size="lg"
              >
                <FaLinkedinIn className="size-5" />
              </Button>
              <DownloadResume lang={lang} />
            </div>
          </div>
        </Section>
      </main>

      {detailsProject && (
        <ProjectLandingModal
          project={detailsProject}
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
        />
      )}
    </div>
  )
}
