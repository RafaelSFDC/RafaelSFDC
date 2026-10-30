;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero5 = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-margin-mobile pt-32 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />

      <h1 className="font-body text-display-xl-mobile md:text-display-xl mb-6 max-w-4xl mx-auto text-balance">
        SaaS e sites que carregam rápido e convertem
        <span className="text-surface-tint animate-blink">_</span>
      </h1>

      <p className="font-body text-xl sm:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
        Sou Rafael, desenvolvedor full-stack há 6+ anos. Construo SaaS,
        sistemas e sites com performance, SEO técnico e foco em conversão —
        do MVP à escala.
      </p>

      <div className="flex flex-col sm:flex-row gap-stack-md w-full sm:w-auto">
        <Button render={<a href="#contato" />} size="xl">
          Entre em contato
          <ArrowRight className="size-5" />
        </Button>
        <Button render={<a href="#projetos" />} size="xl" variant="outline">
          Ver meus projetos
        </Button>
      </div>
    </section>
  );
};

export default Hero5;
