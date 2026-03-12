import React from "react";
import HeroHeader from "@/components/header";
import Footer from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <HeroHeader />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
