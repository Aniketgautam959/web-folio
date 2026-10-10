"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`no-print floating-cta fixed bottom-5 right-5 z-40 flex gap-2 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}>
      <a href={`mailto:${personalInfo.email}`} className="btn-ghost !py-2">
        Contact
      </a>
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold !py-2">
        <FileText className="h-3.5 w-3.5" />
        Resume
      </a>
    </div>
  );
}
