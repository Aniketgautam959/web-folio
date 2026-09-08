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
    <div className="no-print floating-cta fixed bottom-5 right-5 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 text-sm font-bold uppercase tracking-tight text-background transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]">
        <FileText className="h-3.5 w-3.5" />
        Resume
      </a>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-flex items-center justify-center border-2 border-foreground bg-background px-4 py-2 text-sm font-bold uppercase tracking-tight transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]">
        Contact
      </a>
    </div>
  );
}
