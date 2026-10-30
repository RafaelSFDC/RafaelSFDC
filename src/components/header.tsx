;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Produtos", href: "#projetos" },
  { name: "Open-Source", href: "#opensource" },
  { name: "Trabalhos", href: "#trabalhos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Sobre", href: "#sobre" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    if (!menuState) return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateOverflow = () => {
      document.documentElement.classList.toggle("overflow-hidden", mediaQuery.matches);
    };

    updateOverflow();
    mediaQuery.addEventListener("change", updateOverflow);

    return () => {
      mediaQuery.removeEventListener("change", updateOverflow);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menuState]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuState(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-30 font-sans">
      <nav
        data-state={menuState ? "active" : undefined}
        className="bg-background/90 backdrop-blur-md border-b border-border/40 fixed top-0 z-30 w-full max-lg:data-[state=active]:bottom-0 transition-colors"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative flex flex-wrap items-center justify-between gap-4 py-3.5 lg:gap-0">
            {/* Left: Brand Identity */}
            <div className="flex w-full items-center justify-between gap-6 lg:w-auto">
              <a
                href="/"
                aria-label="Rafael SFDC - Início"
                className="flex items-center space-x-2.5 focus:outline-none group"
              >
                <img
                  src="/logo.svg"
                  alt="Rafael SFDC"
                  className="h-6 w-auto shrink-0 group-hover:scale-105 transition-transform"
                />
                <span className="font-semibold text-base sm:text-lg tracking-tight text-foreground">
                  Rafael SFDC
                </span>
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
                className="relative z-20 block cursor-pointer p-1 lg:hidden focus:outline-none"
              >
                <div
                  aria-hidden
                  className={`${menuState ? "scale-0 opacity-0 rotate-180" : "scale-100 opacity-100"} size-5 m-auto flex flex-col items-center justify-center gap-[6px] duration-200`}
                >
                  <span className="bg-foreground h-0.5 w-5 rounded-full" />
                  <span className="bg-foreground h-0.5 w-5 rounded-full" />
                </div>

                <X
                  className={`${menuState ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"} absolute inset-0 m-auto size-6 duration-200 text-foreground`}
                />
              </button>

              {/* Desktop Nav Items */}
              <div className="max-lg:hidden flex items-center gap-7 ml-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div
              className={`${menuState ? "block" : "hidden"} lg:flex mb-4 w-full flex-wrap items-center justify-end max-lg:space-y-6 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-3`}
            >
              {/* Mobile menu content */}
              <div className="lg:hidden mt-4 w-full space-y-1 mb-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2">
                  Navegação
                </div>
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/5 text-foreground text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Action CTA Button */}
              <div className="flex w-full flex-col sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                <Button
                  render={<a href="#contato" onClick={() => setMenuState(false)} />}
                  
                  className="w-full sm:w-auto"
                >
                  <span>Contato</span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeroHeader;
