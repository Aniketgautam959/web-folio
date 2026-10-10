"use client";

import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();
  const [first, last] = personalInfo.name.split(" ");

  return (
    <section className="relative pb-2 pt-4 md:pb-4 md:pt-8">
      <p className="rise font-script text-3xl text-foreground sm:text-4xl">
        hello, i’m
      </p>

      <h1 className="mt-3 text-foreground">
        <span className="rise d1 inline-flex -rotate-2 items-center rounded-full border border-foreground/70 px-5 py-1 font-script text-[clamp(4.25rem,11vw,7rem)] leading-none">
          {first}
        </span>
        <span className="rise d2 mt-4 block font-sans text-[clamp(2.75rem,6.5vw,4.25rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
          {last}
        </span>
      </h1>

      <p className="rise d3 mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {aboutInfo.bio}
      </p>

      <p className="rise d3 mt-3 font-script text-2xl text-foreground">
        {personalInfo.title}
        <span className="text-muted-foreground"> · {personalInfo.location}</span>
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
    </section>
  );
}
