export function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-baseline gap-4">
        <span className="section-kicker">{index}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
