import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { WebsiteJsonLd } from "@/components/seo/website-json-ld";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Portfólio de Rafael | Desenvolvedor Full-Stack e SEO Técnico",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Portfólio profissional de Rafael, desenvolvedor full-stack especializado em Next.js, React, Laravel, SEO técnico e aplicações web de alta performance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: "Portfólio de Rafael | Desenvolvedor Full-Stack e SEO Técnico",
    description:
      "Projetos, serviços e artigos sobre desenvolvimento web, performance, segurança e SEO técnico.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Portfólio Rafael SFDC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Rafael | Desenvolvedor Full-Stack e SEO Técnico",
    description:
      "Projetos, serviços e artigos sobre desenvolvimento web, performance, segurança e SEO técnico.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
