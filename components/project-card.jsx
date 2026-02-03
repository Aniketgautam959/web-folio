"use client";

import { Card } from "@/components/ui/card";

export function ProjectCard({ title, category, onClick }) {
  return (
    <button onClick={onClick} className="block h-full w-full text-left">
      <Card className="bg-zinc-800/50 dark:bg-zinc-800/50 border-zinc-700 dark:border-zinc-700 overflow-hidden group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all h-full">
        <div className="relative p-6 sm:p-8">
          <div className="text-xs text-blue-400 dark:text-blue-400 mb-2 font-medium uppercase tracking-wider">
            {category}
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-white dark:text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="mt-4 text-sm text-zinc-400 dark:text-zinc-400">
            Click to view details →
          </div>
        </div>
      </Card>
    </button>
  );
}
