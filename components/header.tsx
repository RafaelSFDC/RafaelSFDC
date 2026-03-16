"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-3 max-w-6xl px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border border-zinc-800/80 bg-zinc-950/75 backdrop-blur-xl lg:px-5 shadow-lg shadow-black/30"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="#"
                className="font-display text-xl font-bold tracking-tight"
              >
                <span className="gradient-text">Rafael</span>
                <span className="text-zinc-500">.</span>
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 duration-200 text-zinc-300 ${
                    menuState ? "scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 duration-200 text-zinc-300 ${
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* Desktop nav — centered */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group relative block text-zinc-400 transition-colors duration-200 hover:text-white"
                    >
                      <span>{item.name}</span>
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons */}
            <div
              className={cn(
                "bg-zinc-900",
                menuState ? "block" : "hidden",
                "lg:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-zinc-800 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none"
              )}
            >
              {/* Mobile links */}
              <div className="lg:hidden">
                <ul className="space-y-5 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block text-zinc-300 transition-colors duration-150 hover:text-cyan-400"
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop CTAs */}
              <div className="flex w-full flex-col gap-2 sm:flex-row md:w-fit">
                <Link
                  href="#contato"
                  className={cn(
                    "hidden rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/8 hover:text-cyan-400 lg:inline-flex items-center justify-center",
                    isScrolled && "lg:hidden"
                  )}
                >
                  Contato
                </Link>
                <Link
                  href="#projetos"
                  className={cn(
                    "rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center",
                    isScrolled && "lg:hidden"
                  )}
                >
                  Ver Projetos
                </Link>
                <Link
                  href="#contato"
                  className={cn(
                    "rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 items-center justify-center",
                    isScrolled ? "lg:inline-flex" : "hidden"
                  )}
                >
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeroHeader;
