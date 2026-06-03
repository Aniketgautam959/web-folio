"use client";
import Image from "next/image";
import { SocialLinks } from "@/components/social-links";
import { MapPin, FileText, ArrowUpRight } from "lucide-react";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <div className="portfolio-section overflow-hidden">
      <div className="flex flex-col items-center px-6 pb-6 pt-8 text-center">
        <div className="relative mb-5">
          <Image
            src={personalInfo.avatar || "/placeholder.svg"}
            alt={personalInfo.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border border-border object-cover ring-2 ring-background"
          />
          {personalInfo.availableForWork && (
            <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-card bg-emerald-500" />
          )}
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {personalInfo.name}
        </h1>

        <p className="mt-1.5 text-sm text-muted-foreground">
          {personalInfo.title}
        </p>

        <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{personalInfo.location}</span>
        </div>
      </div>

      <div className="mx-6 border-t border-border" />

      <div className="flex flex-wrap justify-center gap-1.5 px-6 py-4">
        {personalInfo.badges.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {badge}
          </span>
        ))}
      </div>

      <div className="mx-6 border-t border-border" />

      <div className="px-6 py-5">
        <p className="text-left text-[13px] leading-relaxed text-muted-foreground">
          {aboutInfo.bio}
        </p>
      </div>

      <div className="mx-6 border-t border-border" />

      <div className="flex flex-col items-center gap-4 px-6 py-5">
        <SocialLinks socialLinks={personalInfo.social} />

        <a
          href="https://drive.google.com/file/d/1udNWZ0E-FdBhVmqqXoBCkPgyvwfspCxC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-foreground py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 active:scale-[0.99]">
          <FileText className="h-4 w-4" />
          View Resume
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
        </a>
      </div>
    </div>
  );
}
