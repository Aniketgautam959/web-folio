"use client";

import { getAboutInfo, getPersonalInfo } from "@/lib/data";

export function ProfileAbout() {
  const aboutInfo = getAboutInfo();
  const personalInfo = getPersonalInfo();

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      <div className="glass p-6 sm:col-span-1">
        <p className="section-kicker mb-4">Focus</p>
        <ul className="space-y-3">
          {aboutInfo.focus.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">
              <span className="mr-2 font-serif italic text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="glass p-6">
        <p className="section-kicker mb-4">Now</p>
        <p className="font-serif text-2xl leading-tight tracking-tight">
          {personalInfo.badges.join(" · ")}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {personalInfo.workingHours}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {aboutInfo.languages.map((language) => (
            <span
              key={language.name}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {language.flag} {language.name}
              <span className="ml-1 text-foreground/70">
                {language.proficiency}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="glass p-6">
        <p className="section-kicker mb-4">Interests</p>
        <div className="flex flex-wrap gap-2">
          {aboutInfo.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs text-foreground">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
