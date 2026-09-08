"use client";

import { FileDown } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print zine-box zine-box-fill gap-1.5 px-4 py-2 text-sm">
      <FileDown className="h-3.5 w-3.5" />
      Download PDF
    </button>
  );
}
