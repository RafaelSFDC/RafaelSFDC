import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  /**
   * Ícone da seção. Pode ser um componente (ex: `FolderKanban`, `Briefcase`)
   * ou um nó/elemento JSX já instanciado (ex: `<EdgekitLogo size={26} module="platform" />`).
   */
  icon?: React.ElementType | React.ReactNode

  /**
   * Título principal da seção.
   */
  title: React.ReactNode

  /**
   * Descrição ou parágrafo explicativo da seção.
   */
  description?: React.ReactNode

  /**
   * Conteúdo opcional alternativo ou complementar à descrição.
   */
  children?: React.ReactNode

  /**
   * Alinhamento: 'left' (padrão) ou 'center'.
   */
  align?: "left" | "center"

  /**
   * Elemento opcional de ação (botão, badge, link de atalho).
   */
  action?: React.ReactNode

  /**
   * Classes extras para o container raiz.
   */
  className?: string

  /**
   * Classes extras para a linha do cabeçalho (ícone + título).
   */
  headerClassName?: string

  /**
   * Classes extras para o título (h2).
   */
  titleClassName?: string

  /**
   * Classes extras para a descrição (p).
   */
  descriptionClassName?: string

  /**
   * Classes extras para o container quadrado do ícone.
   */
  iconContainerClassName?: string
}

function renderIcon(icon: React.ElementType | React.ReactNode) {
  if (!icon) return null
  if (React.isValidElement(icon)) {
    return icon
  }
  const IconComponent = icon as React.ElementType
  return <IconComponent className="size-6 text-surface-tint" aria-hidden="true" />
}

export function SectionHeader({
  icon,
  title,
  description,
  children,
  align = "left",
  action,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
  iconContainerClassName,
}: SectionHeaderProps) {
  const contentDescription = description ?? children
  const isCentered = align === "center"

  return (
    <div
      className={cn(
        "w-full",
        isCentered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          contentDescription ? "mb-4" : "mb-8 sm:mb-12",
          isCentered && "justify-center",
          action && "justify-between",
          headerClassName
        )}
      >
        <div className={cn("flex items-center gap-4", isCentered && "justify-center")}>
          {icon && (
            <div
              className={cn(
                "size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0",
                iconContainerClassName
              )}
            >
              {renderIcon(icon)}
            </div>
          )}
          <h2
            className={cn(
              "text-balance text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground",
              titleClassName
            )}
          >
            {title}
          </h2>
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>

      {contentDescription && (
        <p
          className={cn(
            "text-muted-foreground text-balance text-base sm:text-lg leading-relaxed mb-10 max-w-3xl",
            isCentered && "mx-auto text-center",
            descriptionClassName
          )}
        >
          {contentDescription}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
