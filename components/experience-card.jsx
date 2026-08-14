export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) {
  return (
    <article className="relative pl-7">
      <span className="absolute left-0 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground/70" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-serif text-[1.25rem] font-normal text-foreground">
            {title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{company}</p>
        </div>
        <time className="shrink-0 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {period}
        </time>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mt-4 max-w-2xl space-y-2">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:text-highlight before:content-['—']">
            {achievement}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[13px] tracking-wide text-muted-foreground">
        {technologies.join("  ·  ")}
      </p>
    </article>
  );
}
