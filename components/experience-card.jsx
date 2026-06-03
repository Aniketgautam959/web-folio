import { SkillTag } from "@/components/skill-tag";

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) {
  return (
    <article className="space-y-4 border-b border-border pb-8 last:border-0 last:pb-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="text-base font-medium text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <time className="w-fit rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
          {period}
        </time>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="space-y-2">
        <p className="portfolio-section-label">Highlights</p>
        <ul className="space-y-1.5">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:text-muted-foreground/60 before:content-['—']">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, index) => (
          <SkillTag key={index}>{tech}</SkillTag>
        ))}
      </div>
    </article>
  );
}
