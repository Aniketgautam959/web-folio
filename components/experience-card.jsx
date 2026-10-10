export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) {
  return (
    <article className="relative pl-6 sm:pl-8">
      <span className="absolute left-0 top-2 h-full w-px bg-border" />
      <span className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background))]" />

      <div className="glass p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-primary">{company}</p>
          </div>
          <time className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
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
              className="text-sm leading-relaxed text-foreground/85 before:mr-2 before:text-primary before:content-['—']">
              {achievement}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] text-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
