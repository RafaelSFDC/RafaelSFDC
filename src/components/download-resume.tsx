import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { translations, type Locale } from "@/i18n/translations";

interface DownloadResumeProps {
  lang?: Locale;
}

export default function DownloadResume({ lang = "pt" }: DownloadResumeProps) {
  const t = translations[lang].resume;

  return (
    <Button
      render={
        <a
          href={t.downloadPath}
          download={t.fileName}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
      size="lg"
      variant="outline"
    >
      <Download className="size-5" />
      {t.label}
    </Button>
  );
}
