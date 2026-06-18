"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  MessageCircle,
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  Tag,
  Truck,
  Bell,
  CreditCard,
  Store,
  Star,
  ChevronDown,
  ExternalLink,
  ArrowRight,
  Check,
  XCircle,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <Store className="w-6 h-6" />,
    title: "Cardápio Digital",
    desc: "Visual moderno e rápido para celular.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp Business",
    desc: "Integração nativa e inteligente.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Painel de Controle",
    desc: "Gestão simplificada de estoque.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Entrega por Bairro",
    desc: "Taxas de entrega configuráveis.",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Cupons de Desconto",
    desc: "Fidelize seus clientes com ofertas.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Status do Pedido",
    desc: "Aviso automático de produção.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Pagamento Online",
    desc: "Receba via PIX ou Cartão.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Marca Própria",
    desc: "Suas cores, sua logo, sua marca.",
  },
];

const comparison = [
  { label: "Comissão", ifood: "Até 30% por pedido", pd: "Zero comissão" },
  { label: "Controle de Dados", ifood: "Eles mandam no cliente", pd: "Os dados são 100% seus" },
  { label: "Marca Própria", ifood: "Não (Você é apenas mais um)", pd: "Sim (Identidade visual total)" },
  { label: "Pedidos no WhatsApp", ifood: "Não", pd: "Sim (Foco total no Whats)" },
  { label: "Relatórios", ifood: "Básicos", pd: "Completos e Estratégicos" },
];

const testimonials = [
  {
    stars: 5,
    text: '"Reduzi minhas taxas em 80% no primeiro mês. O sistema se pagou em apenas 3 dias de uso intenso."',
    name: "João Pedro",
    role: "Pizzaria do Vale",
  },
  {
    stars: 5,
    text: '"O atendimento pelo WhatsApp era uma bagunça. Agora recebemos tudo organizado, com o endereço e o troco certinho."',
    name: "Mariana Costa",
    role: "Burger House",
  },
  {
    stars: 5,
    text: '"Meus clientes adoraram o cardápio. É muito mais rápido que baixar PDF ou ficar perguntando preços."',
    name: "Ricardo Silva",
    role: "Sushiman Express",
  },
];

const faqs = [
  {
    q: "Como recebo os pagamentos?",
    a: "Você pode configurar para receber via PIX (com envio automático do comprovante), cartão na entrega ou integrar com gateways de pagamento online. O dinheiro cai direto na sua conta.",
  },
  {
    q: "Preciso baixar algum aplicativo?",
    a: "Não! O PedeFacil funciona direto no navegador do seu celular ou computador. Seus clientes também não precisam baixar nada, basta clicar no link.",
  },
  {
    q: "Posso usar minha própria marca?",
    a: "Sim, o cardápio é totalmente personalizável com sua logomarca, cores principais e fotos dos seus produtos.",
  },
  {
    q: "Tem limite de pedidos ou produtos?",
    a: "Nossos planos são ilimitados. Você pode cadastrar quantos produtos quiser e receber infinitos pedidos sem cobrança extra.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Oferecemos suporte humano via WhatsApp em horário comercial para ajudar você a configurar tudo e tirar qualquer dúvida técnica.",
  },
  {
    q: "Existe fidelidade no contrato?",
    a: "Não. Você paga mensalmente e pode cancelar a qualquer momento sem multas ou burocracia.",
  },
];

const showcaseImages = [
  {
    src: "/placeholder.svg",
    alt: "Cardápio digital do PedeFacil em smartphone",
    label: "Cardápio Mobile",
  },
  {
    src: "/placeholder.svg",
    alt: "Painel administrativo do PedeFacil",
    label: "Painel Administrativo",
  },
  {
    src: "/placeholder.svg",
    alt: "Pedidos via WhatsApp formatados",
    label: "Pedidos no WhatsApp",
  },
  {
    src: "/placeholder.svg",
    alt: "Relatórios e métricas do PedeFacil",
    label: "Relatórios",
  },
];

// ─── Sections ──────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#showcase", label: "Showcase" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-bright/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max mx-auto gutter h-20 flex items-center justify-between">
        <a href="#" className="font-headline-md font-bold text-primary">
          PedeFacil
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-on-surface-variant font-label-md hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-on-surface-variant font-label-md px-6 py-2.5 hover:opacity-90 transition-all active:scale-95"
          >
            Entrar
          </a>
          <a
            href="#cta"
            className="bg-secondary text-on-secondary font-label-md px-6 py-2.5 rounded-lg hover:opacity-90 transition-all active:scale-95"
          >
            Quero testar grátis
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-on-surface p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-surface-bright border-t border-outline-variant/30">
          <div className="container-max mx-auto gutter py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-on-surface-variant font-body-md py-2 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-max mx-auto gutter grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 z-10">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-md rounded-full w-fit text-sm">
            Taxa Zero sobre Vendas
          </span>
          <h1 className="font-headline-xl text-primary leading-tight">
            Seu cardápio digital profissional. Pedidos direto no WhatsApp.{" "}
            <span className="text-secondary">Sem comissão.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg">
            Automatize seus pedidos, economize com taxas e tenha total controle
            do seu negócio com um sistema simples e potente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#cta"
              className="bg-whatsapp text-white flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-headline-sm shadow-lg whatsapp-pulse hover:bg-whatsapp-hover transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Quero testar grátis
            </a>
            <a
              href="#como-funciona"
              className="border-2 border-primary text-primary px-6 py-4 rounded-xl font-headline-sm hover:bg-primary hover:text-white transition-all text-center"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative order-first lg:order-last flex justify-center">
          <div className="absolute -inset-8 bg-primary-fixed blur-3xl opacity-20 rounded-full" />
          <div className="relative z-10 w-72 md:w-80">
            <div className="bg-surface-container rounded-[2rem] p-3 shadow-2xl border border-outline-variant/20">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Store className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-headline-sm text-sm">
                        Pizzaria do João
                      </p>
                      <p className="text-on-primary-container text-xs">
                        Aberto agora
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍕
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Pizza Margherita
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Queijo, molhinho...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 45
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍔
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Smash Burger
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Blend, queijo...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 38
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-lg">
                        🍟
                      </div>
                      <div>
                        <p className="font-headline-sm text-sm">
                          Batata Frita
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          Porção grande...
                        </p>
                      </div>
                    </div>
                    <p className="font-headline-sm text-secondary text-sm">
                      R$ 22
                    </p>
                  </div>
                  <button className="w-full bg-whatsapp text-white py-3 rounded-xl font-headline-sm flex items-center justify-center gap-2 hover:bg-whatsapp-hover transition-all">
                    <MessageCircle className="w-4 h-4" />
                    Pedir via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  const pains = [
    {
      icon: <span className="material-symbols-outlined text-3xl">money_off</span>,
      title: "Altas comissões do iFood",
      desc: "Pare de entregar até 30% do seu faturamento para os aplicativos de delivery. O lucro deve ser seu.",
      color: "bg-error-container/20 text-error",
    },
    {
      icon: (
        <span className="material-symbols-outlined text-3xl">alarm_off</span>
      ),
      title: "Caos no WhatsApp",
      desc: "Atendimento demorado, erros nos pedidos e esquecimentos. Organize o fluxo de mensagens de forma profissional.",
      color: "bg-tertiary-fixed/20 text-tertiary-fixed-dim",
    },
    {
      icon: (
        <span className="material-symbols-outlined text-3xl">
          file_present
        </span>
      ),
      title: "Cardápios em PDF",
      desc: "Arquivos pesados e difíceis de atualizar que frustram o cliente. Ofereça uma experiência de navegação rápida e fluida.",
      color: "bg-primary-fixed/20 text-primary-fixed",
    },
  ];

  return (
    <section className="bg-primary-container py-20">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-surface-bright mb-2">
            Chega de perder dinheiro e tempo
          </h2>
          <p className="font-body-md text-on-primary-container opacity-80">
            O delivery tradicional está sufocando o seu restaurante?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest/5 p-6 rounded-xl border border-white/10 flex flex-col gap-3"
            >
              <div
                className={`w-12 h-12 rounded-full ${p.color} flex items-center justify-center`}
              >
                {p.icon}
              </div>
              <h3 className="font-headline-sm text-surface-bright">
                {p.title}
              </h3>
              <p className="font-body-sm text-on-primary-container">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Cadastre seu cardápio",
      desc: "Adicione fotos, descrições e preços de forma intuitiva no nosso painel exclusivo.",
    },
    {
      num: 2,
      title: "Divulgue seu link",
      desc: "Coloque seu link personalizado na bio do Instagram e no status do seu WhatsApp.",
    },
    {
      num: 3,
      title: "Receba pedidos no WhatsApp",
      desc: "O cliente fecha o carrinho e você recebe o pedido pronto para imprimir e produzir.",
    },
  ];

  return (
    <section className="py-20 bg-surface" id="como-funciona">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          Simples de usar para você e seu cliente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-outline-variant/30 -z-0" />
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex flex-col items-center text-center gap-3 relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary font-headline-md border-4 border-surface">
                {s.num}
              </div>
              <h3 className="font-headline-sm mt-2">{s.title}</h3>
              <p className="font-body-sm text-on-surface-variant max-w-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-surface-container-low" id="showcase">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-primary mb-3">
            Veja o PedeFacil em ação
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Interface moderna, rápida e pensada para conversão. Seus clientes
            vão adorar pedir pelo celular.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-outline-variant/20">
            <div className="relative aspect-video">
              <Image
                src={showcaseImages[active].src}
                alt={showcaseImages[active].alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-headline-sm">
                  {showcaseImages[active].label}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {showcaseImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active
                    ? "bg-secondary w-8"
                    : "bg-outline-variant/40 hover:bg-outline-variant/60"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {showcaseImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  i === active
                    ? "border-secondary shadow-md"
                    : "border-outline-variant/20 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container-max mx-auto gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-primary">
            Tudo o que você precisa para vender mais
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20 hover:border-secondary transition-all"
            >
              <div className="text-secondary mb-3">{f.icon}</div>
              <h4 className="font-headline-sm text-sm mb-1">{f.title}</h4>
              <p className="text-xs text-on-surface-variant leading-tight">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="py-20" id="vantagens">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          PedeFacil vs Aplicativos de Terceiros
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="p-4 text-left font-headline-sm">Recurso</th>
                <th className="p-4 text-center font-headline-sm text-error">
                  iFood / Rappi
                </th>
                <th className="p-4 text-center font-headline-sm text-secondary bg-secondary-container/20">
                  PedeFacil
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {comparison.map((row, i) => (
                <tr key={i}>
                  <td className="p-4 font-body-md font-bold">{row.label}</td>
                  <td className="p-4 text-center text-on-surface-variant">
                    {row.ifood}
                  </td>
                  <td className="p-4 text-center text-secondary font-bold">
                    {row.pd}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-surface-container">
      <div className="container-max mx-auto gutter">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          Quem usa, recomenda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-3"
            >
              <div className="flex text-on-tertiary-container">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="font-body-md italic text-on-surface-variant">
                {t.text}
              </p>
              <div className="mt-3">
                <p className="font-bold">{t.name}</p>
                <p className="text-body-sm opacity-70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-headline-lg text-center text-primary mb-16">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-headline-sm text-base">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-on-surface-variant transition-transform ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 text-on-surface-variant font-body-md">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-surface-bright" id="cta">
      <div className="container-max mx-auto gutter text-center flex flex-col items-center gap-6">
        <h2 className="font-headline-xl">
          Pronto para profissionalizar seu restaurante?
        </h2>
        <p className="font-body-lg opacity-80 max-w-2xl">
          Junte-se a centenas de estabelecimentos que recuperaram sua margem de
          lucro com o PedeFacil. Aproveite nosso piloto gratuito por tempo
          limitado.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
          <a
            href="#"
            className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-headline-md shadow-xl hover:opacity-90 transition-all active:scale-95"
          >
            Quero meu cardápio digital
          </a>
          <a
            href="#"
            className="border border-surface-bright/30 bg-surface-bright/5 px-8 py-4 rounded-xl font-headline-md hover:bg-surface-bright/10 transition-all active:scale-95"
          >
            Falar com consultor
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-container-highest py-16">
      <div className="container-max mx-auto gutter flex flex-col md:flex-row justify-between items-center gap-6 border-b border-outline-variant/20 pb-8 mb-8">
        <div className="font-headline-sm font-bold text-on-surface">
          PedeFacil
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Ajuda
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all"
          >
            Contato
          </a>
        </div>
      </div>
      <div className="container-max mx-auto gutter flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-sm text-on-surface-variant">
          &copy; 2025 PedeFacil. Todos os direitos reservados.
        </p>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PedeFacilPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <HowItWorks />
        <Showcase />
        <FeaturesGrid />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}