export type Locale = "pt" | "en";

export interface Translations {
  nav: {
    products: string;
    opensource: string;
    works: string;
    skills: string;
    about: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    navigation: string;
  };
  hero: {
    headlinePrefix: string;
    headlineSuffix: string;
    bio: string;
    ctaContact: string;
    ctaProjects: string;
  };
  sections: {
    products: {
      title: string;
      description: string;
    };
    opensource: {
      title: string;
      descriptionIntro: string;
      descriptionEdgekit: string;
      descriptionSuffix: string;
      bannerTitle: string;
      bannerSubtitle: string;
      viewGithub: string;
      highlightsTitle: string;
      techTitle: string;
    };
    works: {
      title: string;
      description: string;
      badgeClient: string;
    };
    skills: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      whoIAmTitle: string;
      whoIAmP1: string;
      whoIAmP2: string;
      expertiseTitle: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    contact: {
      title: string;
      subtitle: string;
      emailLabel: string;
      whatsappLabel: string;
      whatsappAria: string;
    };
  };
  cards: {
    visitSite: string;
    details: string;
    landingPage: string;
    openSource: string;
  };
  resume: {
    label: string;
    fileName: string;
    downloadPath: string;
  };
  footer: {
    copyright: string;
  };
  meta: {
    title: string;
    description: string;
    jobTitle: string;
  };
}

export const translations: Record<Locale, Translations> = {
  pt: {
    nav: {
      products: "Produtos",
      opensource: "Open-Source",
      works: "Trabalhos",
      skills: "Habilidades",
      about: "Sobre",
      contact: "Contato",
      menuOpen: "Abrir Menu",
      menuClose: "Fechar Menu",
      navigation: "Navegação",
    },
    hero: {
      headlinePrefix: "SaaS e sites que carregam rápido e convertem",
      headlineSuffix: "_",
      bio: "Sou Rafael, desenvolvedor full-stack há 6+ anos. Construo SaaS, sistemas e sites com performance, SEO técnico e foco em conversão — do MVP à escala.",
      ctaContact: "Entre em contato",
      ctaProjects: "Ver meus projetos",
    },
    sections: {
      products: {
        title: "Produtos SaaS",
        description: "Produtos digitais e plataformas SaaS de alta performance desenvolvidos do MVP à escala.",
      },
      opensource: {
        title: "Open-Source & Developer Tools",
        descriptionIntro: "Além de construir produtos comerciais, criei o ",
        descriptionEdgekit: "Edgekit",
        descriptionSuffix: " — uma suíte open-source modular de Backend-as-a-Service (BaaS) e infraestrutura serverless executada na borda global da Cloudflare com custo zero em idle.",
        bannerTitle: "Edgekit — A Nuvem Serverless na Borda",
        bannerSubtitle: "5 módulos desacoplados para substituir Firebase, Supabase, Auth0, S3, QStash e Pusher sem servidores dedicados ou custos fixos.",
        viewGithub: "Repositório no GitHub",
        highlightsTitle: "Recursos & Diferenciais",
        techTitle: "Tecnologias & Arquitetura",
      },
      works: {
        title: "Trabalhos & Clientes",
        description: "Aplicações web completas, landing pages de alta conversão e sistemas sob medida para empresas e clientes.",
        badgeClient: "Cliente",
      },
      skills: {
        title: "Habilidades Técnicas",
        description: "Stack completa de ferramentas modernas, frameworks e infraestrutura que utilizo no dia a dia.",
      },
      about: {
        title: "Sobre Mim",
        description: "Conheça mais sobre minha trajetória de 6+ anos desenvolvendo aplicações e soluções sob medida.",
        whoIAmTitle: "Quem sou eu",
        whoIAmP1: "Meu nome é Rafael e sou Desenvolvedor Full-Stack com 6 anos de experiência como freelancer. Minha jornada começou pelo Front-End, onde descobri minha paixão por criar interfaces intuitivas e responsivas.",
        whoIAmP2: "Com o tempo, expandi para o Back-End, tornando-me capaz de construir aplicações completas e soluções robustas que realmente resolvem problemas de negócio e escalam conforme a necessidade.",
        expertiseTitle: "Expertise & Foco",
        items: [
          {
            title: "Dashboards & SaaS",
            description: "Criação de ecossistemas complexos com foco em UX e performance de dados.",
          },
          {
            title: "E-commerce de Alta Conversão",
            description: "Lojas online otimizadas para carregamento rápido e máxima conversão.",
          },
          {
            title: "Performance Web & SEO",
            description: "Garanto que sua aplicação não seja apenas bonita, mas rápida e visível.",
          },
        ],
      },
      contact: {
        title: "Vamos Conversar?",
        subtitle: "Conte com quem já entregou 30+ projetos: SaaS, sistemas e sites que performam. Chama no email, no WhatsApp ou no LinkedIn.",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        whatsappAria: "Conversar com Rafael pelo WhatsApp",
      },
    },
    cards: {
      visitSite: "Visitar Site",
      details: "Detalhes",
      landingPage: "Landing Page",
      openSource: "Open-Source",
    },
    resume: {
      label: "Currículo",
      fileName: "Curriculo_Rafael_Carvalho.pdf",
      downloadPath: "/Curriculo_Rafael_Carvalho.pdf",
    },
    footer: {
      copyright: "© 2026 Rafael SFDC. Todos os direitos reservados.",
    },
    meta: {
      title: "Rafael SFDC | Desenvolvedor Full-Stack, Next.js & SEO Técnico",
      description: "Portfólio de Rafael SFDC, desenvolvedor full-stack especializado em Next.js, React, performance web, SEO técnico e aplicações sob medida.",
      jobTitle: "Desenvolvedor Full-Stack",
    },
  },
  en: {
    nav: {
      products: "Products",
      opensource: "Open-Source",
      works: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      menuOpen: "Open Menu",
      menuClose: "Close Menu",
      navigation: "Navigation",
    },
    hero: {
      headlinePrefix: "High-performance SaaS and web apps built to convert",
      headlineSuffix: "_",
      bio: "I'm Rafael, a Full-Stack Developer with 6+ years of experience. I build production-grade SaaS, edge architectures, and high-conversion web applications — from MVP to scale.",
      ctaContact: "Get in touch",
      ctaProjects: "Explore my work",
    },
    sections: {
      products: {
        title: "SaaS Products",
        description: "High-performance digital products and full-featured SaaS platforms built from zero to scale.",
      },
      opensource: {
        title: "Open-Source & Developer Tools",
        descriptionIntro: "Beyond building commercial products, I created ",
        descriptionEdgekit: "Edgekit",
        descriptionSuffix: " — a modular open-source Backend-as-a-Service (BaaS) suite engineered for Cloudflare's global edge with zero idle compute cost.",
        bannerTitle: "Edgekit — Serverless Cloud on the Edge",
        bannerSubtitle: "5 decoupled modules replacing Firebase, Supabase, Auth0, S3, QStash, and Pusher with zero dedicated servers or fixed costs.",
        viewGithub: "GitHub Repository",
        highlightsTitle: "Key Features & Architecture",
        techTitle: "Tech Stack & Protocols",
      },
      works: {
        title: "Client Projects & Systems",
        description: "Full-stack web apps, high-conversion landing pages, and bespoke software solutions built for business impact.",
        badgeClient: "Client",
      },
      skills: {
        title: "Technical Skills",
        description: "Modern full-stack technologies, frameworks, and edge infrastructure I use daily in production.",
      },
      about: {
        title: "About Me",
        description: "Get to know my journey over 6+ years designing, building, and deploying bespoke software solutions.",
        whoIAmTitle: "Who I Am",
        whoIAmP1: "My name is Rafael, and I am a Full-Stack Developer with 6+ years of experience. My journey began in Front-End engineering, where I mastered building intuitive, lightning-fast interfaces.",
        whoIAmP2: "Over the years, I expanded deep into Back-End and Edge computing, architecting robust, end-to-end applications that solve real business bottlenecks and scale effortlessly.",
        expertiseTitle: "Core Expertise",
        items: [
          {
            title: "Dashboards & SaaS Systems",
            description: "Complex software ecosystems engineered with UX excellence and real-time data throughput.",
          },
          {
            title: "High-Converting Web Applications",
            description: "Online platforms optimized for sub-second load times, technical SEO, and conversion.",
          },
          {
            title: "Edge Architectures & Performance",
            description: "Ensuring your system is not only beautifully designed, but globally distributed, resilient, and ultra-fast.",
          },
        ],
      },
      contact: {
        title: "Let's Talk",
        subtitle: "Over 30+ delivered projects: SaaS platforms, custom software, and high-performance websites. Reach out via email, WhatsApp, or LinkedIn.",
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        whatsappAria: "Chat with Rafael on WhatsApp",
      },
    },
    cards: {
      visitSite: "Visit Live",
      details: "Details",
      landingPage: "Landing Page",
      openSource: "Open-Source",
    },
    resume: {
      label: "Resume",
      fileName: "Curriculo_Rafael_Carvalho.pdf",
      downloadPath: "/Curriculo_Rafael_Carvalho.pdf",
    },
    footer: {
      copyright: "© 2026 Rafael SFDC. All rights reserved.",
    },
    meta: {
      title: "Rafael SFDC | Full-Stack Developer, Next.js & Edge Architectures",
      description: "Portfolio of Rafael SFDC, full-stack engineer specialized in Next.js, React 19, Cloudflare Edge, technical SEO, and scalable SaaS solutions.",
      jobTitle: "Full-Stack Developer",
    },
  },
};
