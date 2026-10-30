"use client"

import { useState } from "react"
import { edgekitModules } from "@/data/opensource"
import {
  EdgekitLogo,
  type EdgekitModuleId,
  EDGEKIT_MODULE_COLORS,
} from "@/components/ui/edgekit-logo"
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import {
  SiCloudflare,
  SiHono,
  SiSqlite,
  SiDrizzle,
  SiReact,
  SiWebauthn,
  SiJsonwebtokens,
  SiUpstash,
  SiPusher,
} from "react-icons/si"

interface TechInfo {
  icon: React.ElementType
  color: string
}

const techDetails: Record<string, TechInfo> = {
  "Cloudflare Workers": {
    icon: SiCloudflare,
    color: "#F38020",
  },
  "Cloudflare R2": {
    icon: SiCloudflare,
    color: "#F38020",
  },
  Hono: {
    icon: SiHono,
    color: "#E36002",
  },
  "D1 SQLite": {
    icon: SiSqlite,
    color: "#0EA5E9",
  },
  SQLite: {
    icon: SiSqlite,
    color: "#0EA5E9",
  },
  "Drizzle ORM": {
    icon: SiDrizzle,
    color: "#C5F74F",
  },
  "React Studio": {
    icon: SiReact,
    color: "#61DAFB",
  },
  "React 19": {
    icon: SiReact,
    color: "#61DAFB",
  },
  "Better Auth": {
    icon: ShieldCheck,
    color: "#6366F1",
  },
  "WebAuthn / FIDO2": {
    icon: SiWebauthn,
    color: "#3B82F6",
  },
  JWKS: {
    icon: SiJsonwebtokens,
    color: "#D63AFF",
  },
  "HMAC-SHA256": {
    icon: Lock,
    color: "#10B981",
  },
  "Durable Objects": {
    icon: Zap,
    color: "#F38020",
  },
  "QStash v2": {
    icon: SiUpstash,
    color: "#00E599",
  },
  "WebSocket Hibernation": {
    icon: SiPusher,
    color: "#6875F5",
  },
}

export function OpenSourceSection() {
  const [activeModuleId, setActiveModuleId] = useState<EdgekitModuleId>("platform")
  const activeModule =
    edgekitModules.find((m) => m.id === activeModuleId) || edgekitModules[0]
  const activeColor = EDGEKIT_MODULE_COLORS[activeModuleId]

  return (
    <section
      id="opensource"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
          <EdgekitLogo size={26} module="platform" />
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">
          Open-Source &amp; Developer Tools
        </h2>
      </div>

      <p className="text-on-surface-variant max-w-3xl mb-10 text-base md:text-lg leading-relaxed">
        Além de construir produtos comerciais, criei o{" "}
        <strong className="text-white font-semibold">Edgekit</strong> — uma
        suíte open-source modular de Backend-as-a-Service (BaaS) e infraestrutura
        serverless executada na borda global da Cloudflare com custo zero em
        idle.
      </p>

      {/* Banner de Ecossistema */}
      <div className="glass-card rounded-2xl p-6 md:p-10 mb-8 border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <EdgekitLogo size={36} module="platform" />
            </div>
            <div>
              <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-white mb-2">
                Edgekit — A Nuvem Serverless na Borda
              </h3>
              <p className="text-on-surface-variant max-w-2xl text-sm md:text-base">
                5 módulos desacoplados para substituir Firebase, Supabase, Auth0,
                S3, QStash e Pusher sem servidores dedicados ou custos fixos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://github.com/RafaelSFDC/Edgekit---LP"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl flex items-center gap-2 transition-all text-xs sm:text-sm"
            >
              <FaGithub className="size-4" /> Ver no GitHub
            </a>
          </div>
        </div>

        {/* Seletor de Módulos (Tabs com ícones oficiais do Edgekit) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-6 mb-8">
          {edgekitModules.map((module) => {
            const modId = module.id as EdgekitModuleId
            const isSelected = modId === activeModuleId
            const modColor = EDGEKIT_MODULE_COLORS[modId]

            return (
              <button
                key={module.id}
                onClick={() => setActiveModuleId(modId)}
                className={`p-3.5 rounded-xl text-left transition-all border flex items-center gap-3 ${
                  isSelected
                    ? "bg-white/10 text-white"
                    : "bg-white/[0.02] border-white/10 text-on-surface-variant hover:bg-white/[0.05] hover:text-white"
                }`}
                style={{
                  borderColor: isSelected ? modColor : undefined,
                }}
              >
                <span
                  className="size-8 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${modColor}15`,
                    borderColor: `${modColor}30`,
                  }}
                >
                  <EdgekitLogo size={20} module={modId} />
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-xs sm:text-sm truncate">
                    {module.shortName}
                  </div>
                  <div className="text-[10px] text-on-surface-variant truncate">
                    {module.badge}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detalhe do Módulo Ativo */}
        <div
          className="bg-background/60 border rounded-xl p-6 md:p-8 transition-all"
          style={{
            borderColor: `${activeColor}40`,
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="size-11 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${activeColor}15`,
                    borderColor: `${activeColor}30`,
                  }}
                >
                  <EdgekitLogo size={28} module={activeModuleId} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-headline-md text-xl md:text-2xl font-bold text-white">
                      {activeModule.name}
                    </h4>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${activeColor}20`,
                        color: activeColor,
                        border: `1px solid ${activeColor}40`,
                      }}
                    >
                      {activeModule.badge}
                    </span>
                  </div>
                  <p
                    className="text-xs sm:text-sm font-semibold mt-0.5"
                    style={{ color: activeColor }}
                  >
                    {activeModule.tagline}
                  </p>
                </div>
              </div>

              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-3xl mt-4">
                {activeModule.description}
              </p>
            </div>

            <a
              href={activeModule.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-xs sm:text-sm whitespace-nowrap shrink-0"
              style={{
                backgroundColor: activeColor,
              }}
            >
              <FaGithub className="size-4" /> Código Aberto
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 items-start">
            <div>
              <h5 className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-3 font-semibold">
                Destaques Técnicos
              </h5>
              <ul className="space-y-2">
                {activeModule.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                    <CheckCircle2
                      className="size-4 shrink-0 mt-0.5"
                      style={{ color: activeColor }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-3 font-semibold">
                Tecnologias Utilizadas
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {activeModule.technologies.map((tech) => {
                  const info =
                    techDetails[tech] || {
                      icon: SiCloudflare,
                      color: "#F38020",
                    }
                  const Icon = info.icon
                  const brandColor = info.color

                  return (
                    <div
                      key={tech}
                      title={tech}
                      aria-label={tech}
                      className="size-11 rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-default border"
                      style={{
                        color: brandColor,
                        backgroundColor: `${brandColor}15`,
                        borderColor: `${brandColor}35`,
                      }}
                    >
                      <Icon className="size-5" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Rápido com ícones oficiais do Edgekit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {edgekitModules.map((module) => {
          const modId = module.id as EdgekitModuleId
          const modColor = EDGEKIT_MODULE_COLORS[modId]

          return (
            <a
              key={module.id}
              href={module.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="size-8 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform border"
                    style={{
                      backgroundColor: `${modColor}15`,
                      borderColor: `${modColor}30`,
                    }}
                  >
                    <EdgekitLogo size={20} module={modId} />
                  </span>
                  <ExternalLink className="size-3.5 text-on-surface-variant group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-sm text-white mb-1 group-hover:text-surface-tint transition-colors">
                  {module.name}
                </h5>
                <p className="text-xs text-on-surface-variant line-clamp-2 mb-3">
                  {module.tagline}
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 text-[11px] font-medium transition-colors"
                style={{ color: modColor }}
              >
                <FaGithub className="size-3" /> Ver Repositório
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
