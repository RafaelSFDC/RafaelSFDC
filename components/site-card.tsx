"use client"

import { ExternalLink, Info, Lock } from "lucide-react"
import Image from "next/image"
import type { ProjectDetails } from "@/types/project"
import { useState } from "react"
import { ProjectLandingModal } from "@/components/project-landing-modal"
import { cn } from "@/lib/utils"

interface SiteCardProps {
  project: ProjectDetails
}

export function SiteCard({ project }: SiteCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const isPrivate = project.status === "private"

  return (
    <>
      <div className="glass-card rounded-2xl overflow-hidden group">
        <div className="aspect-video relative overflow-hidden">
          {isPrivate && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
              <Lock className="h-8 w-8 text-surface-tint/60" />
              <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                Acesso Restrito
              </span>
            </div>
          )}
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={340}
            className={cn(
              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              isPrivate && "opacity-40"
            )}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="p-8">
          <h3 className="font-headline-md text-headline-md mb-2">{project.title}</h3>
          <p className="text-on-surface-variant mb-6 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-label-sm uppercase tracking-wider"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-label-sm uppercase tracking-wider text-zinc-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowDetails(true)}
              className="flex-1 px-4 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-xs"
            >
              <Info className="size-4" /> Detalhes
            </button>
            {project.demoUrl && !isPrivate && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 border border-white/20 hover:border-surface-tint/50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-xs"
              >
                <ExternalLink className="size-4" /> Online
              </a>
            )}
          </div>
        </div>
      </div>

      <ProjectLandingModal project={project} open={showDetails} onOpenChange={setShowDetails} />
    </>
  )
}
