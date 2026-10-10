export function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          {index && <p className="section-kicker mb-3">{index}</p>}
          <h2 className="section-title">{title}</h2>
        </div>
      </div>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
