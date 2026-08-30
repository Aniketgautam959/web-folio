"use client";

import { ArrowUpRight } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  return (
    <div className="border-t border-border/80 py-16 sm:py-20">
      <p className="section-kicker">Contact</p>
      <h2 className="mt-4 max-w-xl font-serif text-[2.1rem] font-normal leading-[1.1] sm:text-[3rem]">
        Let’s build something
        <span className="italic text-muted-foreground"> useful.</span>
      </h2>

      <div className="mt-8 flex flex-col items-start gap-5">
        {personalInfo.replyTime && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {personalInfo.replyTime}
          </p>
        )}

        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-2 font-serif text-[1.5rem] italic leading-none text-foreground transition-colors duration-300 hover:text-highlight sm:text-[2.15rem]">
          {personalInfo.email}
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-7 sm:w-7" />
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href={`tel:${personalInfo.phone}`} className="soft-link">
            {personalInfo.phone}
          </a>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </div>
  );
}
