"use client";
import Image from "next/image";
import { SocialLinks } from "@/components/social-links";
import { MapPin, FileText, ArrowUpRight } from "lucide-react";
import { getPersonalInfo, getAboutInfo } from "@/lib/data";

export function ProfileNameBio() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-2xl">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500/60 to-transparent" />
      {/* Subtle glow behind avatar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10">

        {/* ── Top Hero Area ── */}
        <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
          {/* Avatar */}
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent blur scale-125 pointer-events-none" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-zinc-700/80 ring-4 ring-zinc-900">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-zinc-950" />
          </div>

          {/* Name */}
          <h1 className="text-[1.6rem] font-bold text-white leading-tight tracking-tight">
            {personalInfo.name}
          </h1>

          {/* Role pill */}
          <span className="mt-2 inline-block bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {personalInfo.title}
          </span>

          {/* Location */}
          <div className="flex items-center justify-center gap-1 mt-3 text-xs text-zinc-500">
            <MapPin className="w-3 h-3" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mx-6 h-px bg-zinc-800/70" />

        {/* ── Badges ── */}
        <div className="px-6 py-5 flex flex-wrap gap-2 justify-center">
          {personalInfo.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mx-6 h-px bg-zinc-800/70" />

        {/* ── Bio ── */}
        <div className="px-6 py-5">
          <p className="text-[13px] text-zinc-400 leading-[1.8] text-left">
            {aboutInfo.bio}
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="mx-6 h-px bg-zinc-800/70" />

        {/* ── Social & CTA ── */}
        <div className="px-6 py-5 flex flex-col items-center gap-4">
          <SocialLinks socialLinks={personalInfo.social} />

          <a
            href="https://drive.google.com/file/d/1TvHwTS_2V8I6KsnDHvGhSFGneSF8pAU7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-100 active:scale-[0.97] transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            View Resume
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
    </div>
  );
}
