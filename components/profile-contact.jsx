"use client";

import { ArrowUpRight } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";
import { ZineBox } from "@/components/zine";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  return (
    <div className="py-6 sm:py-10">
      <p className="section-kicker">Contact</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <ZineBox as="h2" className="-rotate-1 px-4 py-2 text-xl sm:text-3xl">
          Let’s build
        </ZineBox>
        <ZineBox as="span" className="rotate-1 px-4 py-2 text-xl sm:text-3xl">
          something useful
        </ZineBox>
      </div>

      {personalInfo.replyTime && (
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
          ● {personalInfo.replyTime}
        </p>
      )}

      <a
        href={`mailto:${personalInfo.email}`}
        className="group mt-4 inline-flex items-center gap-2 text-lg font-bold uppercase tracking-tight hover:-translate-x-0.5 hover:-translate-y-0.5 sm:text-2xl">
        {personalInfo.email}
        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
        <a href={`tel:${personalInfo.phone}`} className="soft-link">
          {personalInfo.phone}
        </a>
        <span>{personalInfo.location}</span>
      </div>

      <ZineBox
        href={`mailto:${personalInfo.email}`}
        className="mt-8 px-5 py-2.5 text-sm">
        Connect with me
        <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
      </ZineBox>
    </div>
  );
}
