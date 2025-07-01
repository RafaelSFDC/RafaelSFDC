"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadResume() {
  const handleDownload = () => {
    // Criar um link temporário para download
    const link = document.createElement('a');
    link.href = '/Curriculo.docx';
    link.download = 'Rafael_Carvalho_Curriculo.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="gap-2 bg-cyan-600 hover:bg-cyan-700"
      size="lg"
    >
      <Download className="h-4 w-4" />
      Baixar Currículo
    </Button>
  );
}
