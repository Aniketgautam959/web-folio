"use client";

import { getAboutInfo } from "@/lib/data";

export function ProfileAbout() {
  const aboutInfo = getAboutInfo();

  return (
    <div className="grid gap-10 border-t border-border/80 py-12 sm:grid-cols-3 sm:gap-12 sm:py-14">
      <div>
        <p className="section-kicker">Focus</p>
        <ul className="mt-4 space-y-3">
          {aboutInfo.focus.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed text-muted-foreground">
              <span className="mr-2 font-serif italic text-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="section-kicker">Languages</p>
        <ul className="mt-4 space-y-2">
          {aboutInfo.languages.map((language) => (
            <li key={language.name} className="text-sm text-foreground">
              {language.name}
              <span className="ml-2 text-muted-foreground">{language.proficiency}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="section-kicker">Interests</p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {aboutInfo.interests.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}
