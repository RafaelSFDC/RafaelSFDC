import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { BlogsList } from "./blogs-list";
import { Metadata } from "next";
import { CollectionJsonLd } from "@/components/seo/collection-json-ld";

export const metadata: Metadata = {
  title: "Blog RafaelSFDC | Estratégias Digitais, E-commerce e SEO",
  description:
    "Aprenda estratégias práticas para vender mais e crescer sua presença online: tutoriais de e-commerce, dicas de SEO e marketing digital.",
  keywords:
    "blog ecommerce, dicas vendas online, tutoriais loja virtual, estratégias marketing digital, guia ecommerce, seo para loja virtual",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog RafaelSFDC | Estratégias Digitais, E-commerce e SEO",
    description:
      "Aprenda estratégias práticas para vender mais e crescer sua presença online: tutoriais de e-commerce, dicas de SEO e marketing digital.",
    url: "https://rafaelsfdc.com.br/blog",
    siteName: "RafaelSFDC",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog RafaelSFDC | Estratégias Digitais, E-commerce e SEO",
    description:
      "Aprenda estratégias práticas para vender mais e crescer sua presença online: tutoriais de e-commerce, dicas de SEO e marketing digital.",
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
    url: `https://rafaelsfcarvalho.vercel.app/blog/${post.slug}`,
  }));

  return (
    <>
      <CollectionJsonLd
        name="Blog RafaelSFDC"
        description="Aprenda estratégias práticas para vender mais: tutoriais de e-commerce, dicas de SEO e marketing digital."
        url="https://rafaelsfcarvalho.vercel.app/blog"
        items={collectionItems}
      />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Blog <span className="text-primary">Estratégico</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprenda estratégias práticas para vender mais e crescer sua presença
            online.
          </p>
        </div>

        <Separator className="my-12" />

        <BlogsList
          initialFeaturedPost={featuredPost}
          initialRegularPosts={regularPosts}
          allPosts={posts}
        />

        <Separator className="my-20" />

        {/* Newsletter CTA */}
        <Card className="relative overflow-hidden bg-background border-none shadow-none">
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-transparent rounded-3xl" />
          <CardContent className="relative z-10 p-8 sm:p-16 text-center border rounded-3xl bg-background/50 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-primary font-bold text-xs tracking-wider uppercase mb-2 block">
                Newsletter
              </span>
              <h3 className="text-3xl font-bold">
                Receba conteúdos semanais na sua caixa de entrada
              </h3>
              <p className="text-muted-foreground">
                Junte-se a mais de 10.000 empreendedores que recebem nossas
                dicas de gestão e e-commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 bg-background"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20">
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Sem spam. Cancele quando quiser.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
