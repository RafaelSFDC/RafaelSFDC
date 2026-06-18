import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Syne } from "next/font/google";
import "./pedefacil.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PedeFacil - Cardápio Digital White Label | Sem Assinatura & Código Próprio",
  description:
    "Cardápio digital profissional para restaurantes. Sem comissão e sem assinatura. Adquira a licença do código fonte e tenha total independência do seu delivery.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pedefacil.com.br",
    siteName: "PedeFacil",
    title: "PedeFacil - Cardápio Digital & Pedidos via WhatsApp | Taxa Zero",
    description:
      "Automatize seus pedidos, economize com taxas e tenha total controle do seu negócio com um sistema simples e potente.",
    images: [
      {
        url: "/og-pedefacil.png",
        width: 1200,
        height: 630,
        alt: "PedeFacil - Cardápio Digital para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PedeFacil - Cardápio Digital & Pedidos via WhatsApp",
    description: "Taxa zero sobre vendas. Pedidos direto no WhatsApp.",
    images: ["/og-pedefacil.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PedeFacilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`pedefacil-root ${plusJakartaSans.variable} ${inter.variable} ${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
