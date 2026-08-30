"use client";

import { FileDown } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity duration-200 hover:opacity-80">
      <FileDown className="h-3.5 w-3.5" />
      Download PDF
    </button>
  );
}
