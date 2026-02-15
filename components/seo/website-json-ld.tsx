import { WithContext, WebSite } from "schema-dts";

export function WebsiteJsonLd() {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RafaelSFDC",
    url: "https://rafaelsfcarvalho.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://rafaelsfcarvalho.vercel.app/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    } as any,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
