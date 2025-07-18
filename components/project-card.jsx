"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function ProjectCard({ title, category, image, onClick }) {
  return (
    <button onClick={onClick} className="block h-full w-full text-left">
      <Card className="bg-zinc-800/50 dark:bg-zinc-800/50 border-zinc-700 dark:border-zinc-700 overflow-hidden group hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all h-full">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 sm:p-4">
            <div className="text-xs text-purple-400 dark:text-purple-400 mb-1">
              {category}
            </div>
            <h3 className="font-medium text-sm sm:text-base text-white dark:text-white">
              {title}
            </h3>
          </div>
        </div>
      </Card>
    </button>
  );
}
