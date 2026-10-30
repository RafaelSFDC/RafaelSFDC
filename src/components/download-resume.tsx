"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadResume() {
  return (
    <Button asChild size="xl">
      <a
        href="/Curriculo_Rafael_Carvalho.pdf"
        download="Curriculo_Rafael_Carvalho.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download className="size-5" />
        Currículo
      </a>
    </Button>
  );
}
