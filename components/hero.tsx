"use client";
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    //Aqui mostre minhas skills
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Bem vindo ao meu Portfólio
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="text-spektr-cyan-50">
                Meu nome é Rafael
                <br /> sou Desenvolvedor
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              Desenvolvedor Full-Stack com 3 anos de experiência como freelancer, apaixonado por criar soluções digitais inovadoras.
              Especializado em desenvolvimento web moderno com React, Next.js e tecnologias full-stack.
              Transformo ideias em aplicações funcionais, sistemas robustos e experiências digitais excepcionais.
            </p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="#contato">
              <Button size="lg" className="gap-4">
                Entre em contato <PhoneCall className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projetos">
              <Button size="lg" className="gap-4 text-cyan-400" variant="outline">
                Ver meus projetos <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
            {/* <ResumeGenerator /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
