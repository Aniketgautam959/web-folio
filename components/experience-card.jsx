export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) {
  return (
    <article className="zine-frame p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-bold uppercase tracking-tight">
            {title}
          </h3>
          <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
            {company}
          </p>
        </div>
        <time className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em]">
          {period}
        </time>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed">{description}</p>

      <ul className="mt-4 max-w-2xl space-y-2">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-sm leading-relaxed before:mr-2 before:content-['*']">
            {achievement}
          </li>
        ))}
      </ul>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
        {technologies.join("  ·  ")}
      </p>
    </article>
  );
}
