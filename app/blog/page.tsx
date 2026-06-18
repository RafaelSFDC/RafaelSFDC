import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { BlogsList } from "./blogs-list";
import { Metadata } from "next";
import { CollectionJsonLd } from "@/components/seo/collection-json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog sobre SEO Técnico, Performance e Estratégia Digital",
  description:
    "Artigos sobre SEO técnico, desenvolvimento web, performance, segurança e estratégias digitais para crescer com tecnologia.",
  keywords: [
    "seo técnico",
    "performance web",
    "next.js",
    "segurança web",
    "estratégia digital",
    "blog desenvolvimento web",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: "Blog Rafael SFDC | SEO Técnico, Performance e Estratégia Digital",
    description:
      "Artigos sobre SEO técnico, desenvolvimento web, performance, segurança e estratégias digitais para crescer com tecnologia.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blog Rafael SFDC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Rafael SFDC | SEO Técnico, Performance e Estratégia Digital",
    description:
      "Artigos sobre SEO técnico, desenvolvimento web, performance, segurança e estratégias digitais para crescer com tecnologia.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
    "tags",
    "featured",
  ]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  const collectionItems = posts.map((post) => ({
    name: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
  }));

  return (
    <>
      <CollectionJsonLd
        name="Blog Rafael SFDC"
        description="Artigos sobre SEO técnico, desenvolvimento web, performance, segurança e estratégia digital."
        url={`${SITE_URL}/blog`}
        items={collectionItems}
      />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex items-center gap-4 mb-6">
          <FileText className="size-8 text-surface-tint" />
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            Blog Estratégico
          </h1>
        </div>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mb-16">
          Aprenda estratégias práticas para vender mais e crescer sua presença
          online.
        </p>

        <BlogsList
          initialFeaturedPost={featuredPost}
          initialRegularPosts={regularPosts}
          allPosts={posts}
        />

        {/* Newsletter CTA */}
        <div className="glass-card p-12 md:p-16 rounded-2xl text-center relative overflow-hidden mt-section-gap">
          <div className="absolute top-0 left-0 w-full h-full glow-bg opacity-30 pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative">
            <span className="font-label-sm text-label-sm text-surface-tint uppercase tracking-widest mb-2 block">
              Newsletter
            </span>
            <h3 className="font-headline-md text-headline-md">
              Receba conteúdos semanais na sua caixa de entrada
            </h3>
            <p className="text-on-surface-variant">
              Junte-se a mais de 10.000 empreendedores que recebem nossas
              dicas de gestão e e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-white/5 border-white/10 text-on-surface placeholder:text-on-surface-variant/50"
              />
              <button className="px-8 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-sm">
                Inscrever-se
              </button>
            </div>
            <p className="text-xs text-on-surface-variant/60 pt-2">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
