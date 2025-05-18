import type { LucideIcon } from "lucide-react"

export type ProjectStatus = "public" | "private" | "demo"

export interface Technology {
  name: string
  icon?: LucideIcon
}

export interface ProjectDetails {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  status: ProjectStatus
  technologies: Technology[]
  demoUrl?: string
  codeUrl?: string
  features?: string[]
  challenges?: string[]
  year: number
  category: string
}
