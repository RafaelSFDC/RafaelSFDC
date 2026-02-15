import { WithContext, Organization } from "schema-dts";

export function OrganizationJsonLd() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RafaelSFDC",
    alternateName: "Rafael Silva Ferreira de Carvalho",
    url: "https://rafaelsfcarvalho.vercel.app",
    logo: "https://rafaelsfcarvalho.vercel.app/logo.svg",
    description:
      "Consultoria e estratégias para e-commerce e marketing digital.",
    disambiguatingDescription:
      "Especialista em e-commerce e vendas online. Estratégias de SEO, marketing e tecnologia.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-21-97967-4045",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Geremário Dantas, 81, Bloco 3, Apt 101",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      postalCode: "22743-010",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    knowsAbout: [
      "E-commerce",
      "Loja Virtual",
      "Plataforma de E-commerce",
      "Como vender online",
      "Venda sem estoque",
      "CRM de Vendas",
      "Checkout Transparente",
      "Reforma Tributária 2026",
      "Gestão de Marketplaces",
    ],
    taxID: "64.201.961/0001-47",
    legalName: "Rafael Silva Ferreira de Carvalho",
    foundingDate: "2024",
    sameAs: ["https://github.com/RafaelSFDC"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
