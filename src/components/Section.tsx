import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * ID da seção para âncoras e navegação na página (ex: "projetos", "trabalhos").
   */
  id?: string

  /**
   * Conteúdo principal da seção.
   */
  children: React.ReactNode

  /**
   * Cabeçalho opcional (ex: `<SectionHeader ... />`).
   */
  header?: React.ReactNode

  /**
   * Classes extras aplicadas à tag `<section>` externa (ex: cores de fundo, bordas, gaps verticais adicionais).
   */
  className?: string

  /**
   * Classes extras aplicadas ao container interno centralizado (`max-w-container-max`).
   */
  containerClassName?: string

  /**
   * Se true, desativa o container com largura máxima e padding horizontal padrão.
   */
  fluid?: boolean
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      children,
      header,
      className,
      containerClassName,
      fluid = false,
      ...props
    },
    ref
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "w-full",
          className
        )}
        {...props}
      >
        {fluid ? (
          <>
            {header}
            {children}
          </>
        ) : (
          <div
            className={cn(
              "max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col",
              containerClassName
            )}
          >
            {header}
            {children}
          </div>
        )}
      </section>
    )
  }
)

Section.displayName = "Section"

export default Section
