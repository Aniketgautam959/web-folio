"use client";

import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <section className="grid items-center gap-12 pb-4 pt-10 md:grid-cols-[1.15fr_auto] md:gap-16 md:pb-8 md:pt-16">
      <div>
        {personalInfo.availableForWork && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-[12px] text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {personalInfo.availabilityLabel || "Available for work"}
          </p>
        )}

        <h1 className="font-serif text-[2.85rem] font-normal leading-[0.95] text-foreground sm:text-[4.5rem] lg:text-[5.15rem]">
          Aniket
          <br />
          <span className="italic text-muted-foreground">Gautam</span>
        </h1>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-muted-foreground sm:text-base">
          <span>{personalInfo.title}</span>
          <span className="text-border">/</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {personalInfo.location}
          </span>
        </p>

        <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-muted-foreground">
          {aboutInfo.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-80">
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <SocialLinks socialLinks={personalInfo.social} />
        </div>
      </div>

      <div className="mx-auto h-64 w-52 overflow-hidden rounded-[1.75rem] ring-1 ring-border sm:h-80 sm:w-64 md:mx-0">
        <Image
          src={personalInfo.avatar || "/placeholder.svg"}
          alt={personalInfo.name}
          width={520}
          height={680}
          priority
          className="h-full w-full object-cover object-[50%_16%]"
        />
      </div>
    </section>
  );
}
