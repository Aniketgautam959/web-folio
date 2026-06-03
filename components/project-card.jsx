"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ title, category, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block h-full w-full text-left">
      <Card className="group h-full border-border bg-card/60 transition-colors hover:border-foreground/20 hover:bg-muted/30">
        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="portfolio-section-label mb-2">{category}</p>
            <h3 className="text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
              {title}
            </h3>
          </div>
          <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            View details
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Card>
    </button>
  );
}
