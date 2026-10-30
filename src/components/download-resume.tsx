"use client";

import { Download } from "lucide-react";

export default function DownloadResume() {
  return (
    <a
      href="/Curriculo_Rafael_Carvalho.pdf"
      download="Curriculo_Rafael_Carvalho.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 px-8 bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-2 hover:brightness-110 hover:scale-[1.02] transition-all"
    >
      <Download className="size-5" />
      Currículo
    </a>
  );
}
