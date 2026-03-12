import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Info,
  AlertTriangle,
  Flame,
} from "lucide-react";
import fs from "fs";
import path from "path";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AudioPlayer } from "@/components/blog/audio-player";
import { Transcription } from "@/components/blog/transcription";
import { PDFDownloadButton } from "@/components/blog/pdf-download-button";
import { Metadata } from "next";
import { ShareButtons as ShareActions } from "@/components/blog/layout/ShareButtons";
import { MDXContent } from "@/components/blog/mdx-content";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQPageJsonLd } from "@/components/seo/faq-page-json-ld";
import { formatDate } from "@/lib/utils";
import { extractFAQFromMarkdown } from "@/lib/extract-faq";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

// Markdown components are now handled globally in @/components/blog/mdx-content

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ... existing imports

const logError = (slug: string, error: any, context: string) => {
  if (process.env.NODE_ENV !== "production") {
    const logDir = path.join(process.cwd(), "logs");
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    const logFile = path.join(logDir, "blog-errors.log");
    const timestamp = new Date().toISOString();
    const errorMessage = `[${timestamp}] [${context}] Error processing slug "${slug}": ${error?.message || error}\n`;
    fs.appendFileSync(logFile, errorMessage);
  }
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = SITE_URL;

  try {
    const post = getPostBySlug(slug, [
      "title",
      "excerpt",
      "ogImage",
      "coverImage",
      "author",
      "date",
      "category",
      "tags",
      "description",
      "seo",
      "author", // Ensure author is included fully
    ]);
    const postUrl = `${baseUrl}/blog/${slug}`;

    const metaDescription =
      post.seo?.description ||
      post.excerpt ||
      (post as any).description ||
      post.seo?.metaDescription;
    const imageUrl = post.ogImage?.url || post.coverImage || DEFAULT_OG_IMAGE;

    return {
      title: post.seo?.title || post.title,
      description: metaDescription,
      keywords: post.tags?.join(", "),
      alternates: {
        canonical: postUrl,
      },
      openGraph: {
        title: post.title,
        description: metaDescription,
        url: postUrl,
        siteName: SITE_NAME,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.coverImageAlt || post.title,
          },
        ],
        locale: "pt_BR",
        type: "article",
        publishedTime: post.date,
        authors: [post.author?.name || "Rafael SFDC"],
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: metaDescription,
        images: [imageUrl],
      },
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    };
  } catch (e) {
    logError(slug, e, "generateMetadata");
    return {
      title: "Post não encontrado",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug, [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "coverImageAlt",
      "excerpt",
      "category",
      "tags",
      "audio",
      "transcription",
      "pdfUrl",
      "audioUrl",
    ]);
  } catch (e) {
    logError(slug, e, "BlogPostPage");
    notFound();
  }

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / wordsPerMinute)} min leitura`;

  // Get other posts for "Continue lendo" section
  const otherPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "coverImage",
    "category",
  ])
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const baseUrl = SITE_URL;
  const postUrl = `${baseUrl}/blog/${slug}`;

  // Breadcrumb Schema
  const breadcrumbItems = [
    { name: "Home", item: baseUrl },
    { name: "Blog", item: `${baseUrl}/blog` },
    { name: post.title, item: postUrl },
  ];

  // Schema.org JSON-LD for rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || post.ogImage?.url,
    datePublished: post.date,
    dateModified: post.date, // Use published date as modified date if not specified
    author: {
      "@type": "Person",
      name: post.author?.name || "Rafael SFDC",
      url: baseUrl,
      sameAs: post.author?.social?.instagram
        ? [post.author.social.instagram]
        : [],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    wordCount: wordCount,
  };

  // Extract FAQ from content for FAQPage schema
  const faqItems = extractFAQFromMarkdown(post.content);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {faqItems.length > 0 && <FAQPageJsonLd mainEntity={faqItems} />}

      <div className="min-h-screen pb-16">
        {/* Header com Gradiente */}
        <div className="relative overflow-hidden mb-8 pt-8 pb-10">
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent -z-10" />

          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 size-4" />
                Voltar para Blog
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-muted-foreground mb-6">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary"
              >
                {post.category}
              </Badge>
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                {formatDate(post.date)}
              </div>
              <span className="opacity-30 hidden sm:inline">|</span>
              <div className="font-medium text-foreground hidden sm:inline">
                Por {post.author?.name}
              </div>
              <span className="opacity-30 hidden sm:inline">|</span>
              <div className="flex items-center gap-1" title="Tempo de leitura">
                <Clock className="size-3" />
                <span>{readingTime}</span>
              </div>
              <div className="sm:ml-auto">
                <ShareActions url={postUrl} title={post.title} />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-foreground">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-0">
              {post.excerpt}
            </p>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4">
          {post.coverImage && (
            <figure className="-mx-4 sm:mx-0 mb-12 sm:rounded-2xl overflow-hidden shadow-sm sm:shadow-lg border-y sm:border">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                className="w-full h-auto"
              />
            </figure>
          )}

          <div
            className="prose prose-lg prose-gray dark:prose-invert mx-auto max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-md
              prose-th:bg-muted/50 prose-th:p-2 prose-td:p-2
            "
          >
            {/* PDF Download Button */}
            {post.pdfUrl && (
              <PDFDownloadButton
                pdfUrl={post.pdfUrl}
                postTitle={post.title}
                postSlug={slug}
              />
            )}

            {/* Audio Player with Newsletter Gate */}
            {(post.audio || post.audioUrl) && (
              <AudioPlayer
                src={post.audio || post.audioUrl || ""}
                title={`Ouvir: ${post.title}`}
                postSlug={slug}
              />
            )}

            {post.transcription && (
              <Transcription content={post.transcription} />
            )}
            {post.content && <MDXContent source={post.content} />}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors px-3 py-1"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-muted/30 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 border">
            <Avatar className="size-20 border-2 border-background">
              <AvatarImage src={post.author?.picture} />
              <AvatarFallback>{post.author?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold mb-2">Sobre o autor</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {post.author?.bio ||
                  "Especialista em e-commerce e marketing digital, apaixonado por ajudar empreendedores a crescerem online."}
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-20 border-t bg-muted/20 py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold">Continue lendo</h3>
                <Link
                  href="/blog"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Ver todos
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherPosts.map((otherPost) => (
                  <Link
                    key={otherPost.slug}
                    href={`/blog/${otherPost.slug}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 py-0">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={otherPost.coverImage}
                          alt={otherPost.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-medium text-primary mb-2">
                          {otherPost.category}
                        </p>
                        <h4 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {otherPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground flex justify-between mt-4">
                          <span>{formatDate(otherPost.date)}</span>
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
