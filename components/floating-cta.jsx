"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="no-print fixed bottom-5 right-5 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background shadow-lg transition-opacity duration-200 hover:opacity-80">
        <FileText className="h-3.5 w-3.5" />
        Resume
      </a>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center justify-center rounded-full border border-border bg-background/90 px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-muted">
        Contact
      </a>
    </div>
  );
}
