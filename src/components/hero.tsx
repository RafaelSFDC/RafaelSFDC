import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { translations, type Locale } from "@/i18n/translations";

interface HeroProps {
  lang?: Locale;
}

const Hero5 = ({ lang = "pt" }: HeroProps) => {
  const t = translations[lang].hero;

  return (
    <section className="flex flex-col justify-center items-center text-center px-margin-mobile pt-32 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] glow-bg -z-10 pointer-events-none" />

      <h1 className="font-body text-display-xl-mobile md:text-display-xl mb-6 max-w-4xl mx-auto text-balance">
        {t.headlinePrefix}
        <span className="text-surface-tint animate-blink">{t.headlineSuffix}</span>
      </h1>

      <p className="font-body text-xl sm:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
        {t.bio}
      </p>

      <div className="flex flex-col sm:flex-row gap-stack-md w-full sm:w-auto">
        <Button render={<a href="#contato" />} size="xl">
          {t.ctaContact}
          <ArrowRight className="size-5" />
        </Button>
        <Button render={<a href="#projetos" />} size="xl" variant="outline">
          {t.ctaProjects}
        </Button>
      </div>
    </section>
  );
};

export default Hero5;
