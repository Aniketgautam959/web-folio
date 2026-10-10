"use client";

import { ArrowUpRight } from "lucide-react";
import { getPersonalInfo } from "@/lib/data";

export function ProfileContact() {
  const personalInfo = getPersonalInfo();

  return (
    <div className="glass relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <p className="section-kicker">Contact</p>
      <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-tight dark:uppercase dark:tracking-[0.04em] sm:text-6xl">
        Let’s build
        <span className="italic text-primary dark:not-italic dark:text-foreground">
          {" "}
          something useful.
        </span>
      </h2>

      {personalInfo.replyTime && (
        <p className="mt-6 text-sm text-muted-foreground">
          {personalInfo.replyTime}
        </p>
      )}

      <a
        href={`mailto:${personalInfo.email}`}
        className="group mt-6 inline-flex items-center gap-2 font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
        {personalInfo.email}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <a href={`tel:${personalInfo.phone}`} className="soft-link">
          {personalInfo.phone}
        </a>
        <span>{personalInfo.location}</span>
      </div>

      <a href={`mailto:${personalInfo.email}`} className="btn-gold mt-8">
        Connect with me
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
