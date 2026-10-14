"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";
import { useResumeUrl } from "@/hooks/use-resume-url";
import { useAvatar } from "@/hooks/use-avatar";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();
  const resumeUrl = useResumeUrl(personalInfo.resumeUrl);
  const avatar = useAvatar(personalInfo.avatar);
  const [first, last] = personalInfo.name.split(" ");

  return (
    <section className="relative grid items-center gap-8 pb-2 pt-4 md:grid-cols-[minmax(0,1.15fr)_minmax(240px,420px)] md:gap-x-8 md:gap-y-0 md:pb-4 md:pt-10">
      <div>
        <p className="rise font-script text-3xl text-foreground sm:text-4xl">
          hello, i’m
        </p>

        <h1 className="mt-3 text-foreground">
          <span className="rise d1 inline-flex -rotate-2 items-center rounded-full border border-foreground/70 px-5 py-1 font-script text-[clamp(3.75rem,8vw,6.25rem)] leading-none">
            {first}
          </span>
          <span className="rise d2 mt-4 block font-sans text-[clamp(2.5rem,5.5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
            {last}
          </span>
        </h1>
      </div>

      <div className="rise d2 relative mx-auto w-[240px] sm:w-[280px] md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:w-[320px] md:justify-self-end">
        <div
          aria-hidden
          className="absolute -right-2.5 -top-2.5 h-full w-full rounded-[1.75rem] border border-foreground/25"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
          <Image
            key={avatar}
            src={avatar}
            alt={personalInfo.name}
            fill
            priority
            sizes="(min-width: 768px) 320px, 70vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div>
        <p className="rise d3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px] md:mt-6">
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
            href={resumeUrl}
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
