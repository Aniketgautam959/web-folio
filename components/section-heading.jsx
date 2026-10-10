export function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-end gap-4">
        {index && <p className="section-kicker mb-1">{index}</p>}
        <h2 className="section-title">{title}</h2>
      </div>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
