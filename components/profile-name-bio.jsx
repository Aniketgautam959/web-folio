"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";
import { ZineArrow, ZineAsterisk, ZineBox } from "@/components/zine";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <section className="inview relative grid items-end gap-10 pb-6 pt-8 md:grid-cols-[1.1fr_auto] md:gap-8 md:pb-10 md:pt-14">
      <div>
        <p className="section-kicker">
          {personalInfo.title}
          <ZineAsterisk className="ml-2" />
        </p>

        <h1 className="mt-6 flex flex-col items-start gap-3">
          <ZineBox
            as="span"
            className="-rotate-1 px-4 py-2 text-[2.4rem] sm:px-5 sm:text-[4.4rem]">
            Aniket
          </ZineBox>
          <ZineBox
            as="span"
            className="ml-4 rotate-1 px-4 py-2 text-[2.4rem] sm:ml-12 sm:px-5 sm:text-[4.4rem]">
            Gautam
          </ZineBox>
        </h1>

        <p className="mt-6 max-w-md font-mono text-[12px] uppercase leading-6 tracking-[0.08em] text-muted-foreground sm:text-[13px]">
          {personalInfo.location}
          {personalInfo.availableForWork && (
            <>
              {"  /  "}
              {personalInfo.availabilityLabel}
            </>
          )}
        </p>

        <p className="mt-5 max-w-md text-[15px] leading-[1.75]">
          {aboutInfo.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ZineBox
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 px-4 py-2 text-sm">
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </ZineBox>
          <SocialLinks socialLinks={personalInfo.social} />
        </div>
      </div>

      <div className="relative mx-auto w-fit md:mx-0 md:mb-4">
        <ZineArrow className="pointer-events-none absolute -left-16 top-6 hidden text-foreground md:block" />
        <div className="zine-frame-static h-64 w-52 overflow-hidden sm:h-[22rem] sm:w-64">
          <Image
            src={personalInfo.avatar || "/placeholder.svg"}
            alt={personalInfo.name}
            width={520}
            height={680}
            priority
            className="h-full w-full object-cover object-[50%_16%] grayscale"
          />
        </div>
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em]">
          Full stack / Ghaziabad
        </p>
      </div>
    </section>
  );
}
