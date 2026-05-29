import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const homeLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "#contato" },
];

const blogLinks = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/#contato" },
];

interface FooterProps {
  navigationMode?: "home" | "blog";
}

export default function Footer({ navigationMode = "home" }: FooterProps) {
  const navigationLinks = navigationMode === "blog" ? blogLinks : homeLinks;
  const homeHref = "/";

  return (
    <footer className="relative border-t border-zinc-800/50 bg-black pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand/Bio */}
          <div className="space-y-4">
            <Link href={homeHref} className="font-display text-2xl font-bold tracking-tight">
              <span className="gradient-text">Rafael</span>
              <span className="text-zinc-500">.</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Desenvolvedor Full-Stack focado em performance, 
              segurança e a criação de experiências digitais memoráveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-zinc-100 mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 text-sm hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-zinc-100 mb-6">Social</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/RafaelSFDC" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub de Rafael SFDC"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn de Rafael SFDC"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
              >
                <FaLinkedinIn size={18} />
              </a>
              {/* Add more if needed */}
            </div>
            <div className="mt-6">
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest mb-1">Localização</p>
              <p className="text-zinc-400 text-sm">Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 Rafael SFDC. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            SEO Técnico, Performance Web & Desenvolvimento Full-Stack.
          </p>
        </div>
      </div>
    </footer>
  );
}
