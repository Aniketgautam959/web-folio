"use client";
import { Card, CardContent } from "@/components/ui/card";
import { getAboutInfo } from "@/lib/data";

export function ProfileAbout() {
  const aboutInfo = getAboutInfo();

  return (
    <Card className="portfolio-section shadow-none">
      <CardContent className="space-y-6 p-6">
        <div className="space-y-3">
          <h3 className="portfolio-section-label">Focus</h3>
          <ul className="space-y-2">
            {aboutInfo.focus.map((item, index) => (
              <li
                key={index}
                className="text-sm leading-relaxed text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="portfolio-section-label">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {aboutInfo.languages.map((language, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
                {language.flag} {language.name}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="portfolio-section-label">Interests</h3>
          <div className="flex flex-wrap gap-1.5">
            {aboutInfo.interests.map((interest, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
