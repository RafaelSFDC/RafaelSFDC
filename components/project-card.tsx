"use client"

import { ExternalLink, Lock, Code, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { ProjectDetails } from "@/types/project"
import { useState } from "react"
import { ProjectDetailsModal } from "@/components/project-details-modal"

interface ProjectCardProps {
  project: ProjectDetails
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const isPrivate = project.status === "private"
  const isDemoOnly = project.status === "demo-only"
  const isPublic = project.status === "public"

  return (
    <>
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
        <div className="relative h-[250px] lg:h-[400px] overflow-hidden">
          {isPrivate && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10 flex items-center justify-center">
              <Lock className="h-12 w-12 text-cyan-400/50" />
            </div>
          )}
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} Project`}
            width={600}
            height={400}
            className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${isPrivate ? "opacity-50" : ""}`}
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl text-white">{project.title}</CardTitle>
            {isPrivate && <Badge className="bg-zinc-700 text-zinc-300">Privado</Badge>}
            {isDemoOnly && <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30">Demo</Badge>}
          </div>
          <CardDescription className="text-zinc-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-sm text-zinc-400 mb-2">Tecnologias Usadas</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech.name} variant="outline" className="bg-transparent border-cyan-500 text-cyan-400">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20"
            onClick={() => setShowDetails(true)}
          >
            <Info className="mr-2 h-4 w-4" /> Detalhes
          </Button>

          {isPrivate ? (
            <Button
              variant="outline"
              className="bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700 cursor-not-allowed opacity-70"
              disabled
            >
              <Lock className="mr-2 h-4 w-4" /> Acesso Restrito
            </Button>
          ) : (
            <>
              {project.demoUrl && (
                <Button
                  variant="outline"
                  className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Online
                  </a>
                </Button>
              )}

              {/* Só mostra o código fonte se for público (não demo-only) */}
              {project.codeUrl && isPublic && (
                <Button
                  variant="outline"
                  className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" /> Código Fonte
                  </a>
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>

      <ProjectDetailsModal project={project} open={showDetails} onOpenChange={setShowDetails} />
    </>
  )
}
