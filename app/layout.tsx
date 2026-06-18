import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { WebsiteJsonLd } from "@/components/seo/website-json-ld";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rafael SFDC | Desenvolvedor Full-Stack, Next.js & SEO Técnico",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Portfólio de Rafael SFDC, desenvolvedor full-stack especializado em Next.js, React, performance web, SEO técnico e aplicações sob medida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: "Rafael SFDC | Desenvolvedor Full-Stack, Next.js & SEO Técnico",
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
    title: "Rafael SFDC | Desenvolvedor Full-Stack, Next.js & SEO Técnico",
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
      <body className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
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
