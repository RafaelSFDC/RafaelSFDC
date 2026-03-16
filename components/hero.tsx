"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { value: "6+", label: "Anos de Experiência" },
  { value: "30+", label: "Projetos Entregues" },
  { value: "Full-Stack", label: "React · Next.js · Laravel" },
];

const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Full-Stack", "Frontend", "Backend", "React", "Next.js"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 py-28 lg:py-44">
          {/* Welcome badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-1.5 text-sm text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Disponível para projetos
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="flex flex-col items-center gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-base font-medium uppercase tracking-[0.3em] text-zinc-500"
            >
              Desenvolvedor
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="font-display max-w-4xl text-center text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Me chamo{" "}
              <span className="gradient-text">Rafael</span>
              <br />
              <span className="text-zinc-300">sou Dev </span>
              <span className="relative inline-flex justify-center overflow-hidden text-center align-bottom md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="shimmer-text absolute font-extrabold"
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ type: "spring", stiffness: 60, damping: 14 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -120 : 120,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-2xl text-center text-base leading-relaxed tracking-tight text-zinc-400 md:text-lg"
            >
              Desenvolvedor Full-Stack com 6 anos de experiência como freelancer,
              apaixonado por criar soluções digitais inovadoras. Transformo ideias em
              aplicações robustas, sistemas de alta performance e experiências
              digitais excepcionais.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="#contato">
              <Button
                size="lg"
                className="group rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-400/40"
              >
                Entre em contato
                <PhoneCall className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </Link>
            <Link href="#projetos">
              <Button
                size="lg"
                variant="outline"
                className="group rounded-full border-zinc-700 bg-transparent px-8 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-cyan-500/8 hover:text-cyan-400"
              >
                Ver meus projetos
                <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mt-4 flex flex-wrap items-center justify-center gap-px overflow-hidden rounded-2xl border border-zinc-800"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-8 py-4 transition-colors duration-200 hover:bg-zinc-900/60"
                style={{
                  borderRight:
                    index < stats.length - 1
                      ? "1px solid rgba(63,63,70,1)"
                      : "none",
                }}
              >
                <span className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-xs text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
