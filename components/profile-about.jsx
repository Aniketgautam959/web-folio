"use client";

import { getAboutInfo } from "@/lib/data";
import { ZineAsterisk } from "@/components/zine";

export function ProfileAbout() {
  const aboutInfo = getAboutInfo();

  return (
    <div className="grid gap-0 border-y-2 border-foreground py-0 sm:grid-cols-3">
      <div className="border-foreground p-5 sm:border-r-2">
        <p className="section-kicker mb-4">
          Focus <ZineAsterisk />
        </p>
        <ul className="space-y-3">
          {aboutInfo.focus.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">
              <span className="mr-2 font-mono text-[11px] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t-2 border-foreground p-5 sm:border-l-0 sm:border-r-2 sm:border-t-0">
        <p className="section-kicker mb-4">Languages</p>
        <ul className="space-y-2">
          {aboutInfo.languages.map((language) => (
            <li key={language.name} className="text-sm">
              {language.name}
              <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {language.proficiency}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t-2 border-foreground p-5 sm:border-t-0">
        <p className="section-kicker mb-4">Interests</p>
        <p className="font-mono text-[12px] uppercase leading-7 tracking-[0.06em] text-muted-foreground">
          {aboutInfo.interests.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}
