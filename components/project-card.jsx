"use client";

import { Card } from "@/components/ui/card";

export function ProjectCard({ title, category, onClick }) {
  return (
    <button onClick={onClick} className="block h-full w-full text-left">
      <Card className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md transition-all duration-300 h-full">
        <div className="relative p-6 sm:p-8">
          <div className="text-xs text-zinc-500 dark:text-zinc-500 mb-2 font-medium uppercase tracking-wider">
            {category}
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {title}
          </h3>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Click to view details →
          </div>
        </div>
      </Card>
    </button>
  );
}
