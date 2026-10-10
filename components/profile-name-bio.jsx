"use client";

import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();
  const [first, last] = personalInfo.name.split(" ");

  return (
    <section className="relative pb-4 pt-6 md:pb-6 md:pt-10">
      <div>
        <p className="rise">
          <span className="section-kicker inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {personalInfo.title}
          </span>
          <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {personalInfo.location}
          </span>
        </p>

        <h1 className="mt-5 font-serif text-[clamp(3.4rem,9vw,7.2rem)] font-medium leading-[0.88] tracking-[-0.045em] text-foreground dark:uppercase dark:leading-[0.86] dark:tracking-[-0.03em]">
          <span className="rise d1 block">{first}</span>
          <span className="rise d2 block italic text-primary dark:not-italic dark:text-foreground">
            {last}
          </span>
        </h1>

        <p className="rise d3 mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {aboutInfo.bio}
        </p>

        {personalInfo.availableForWork && (
          <p className="rise d4 mt-4 text-sm text-foreground/80">
            {personalInfo.availabilityLabel}
          </p>
        )}

        <div className="rise d5 mt-8 flex flex-wrap items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold">
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">
            Let’s talk
          </a>
          <SocialLinks socialLinks={personalInfo.social} />
        </div>
      </div>
    </section>
  );
}
