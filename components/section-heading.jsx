import { ZineBox, ZineSmile } from "@/components/zine";

export function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-wrap items-center gap-3">
        {index && (
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {index}
          </span>
        )}
        <ZineBox as="h2" className="px-4 py-2 text-xl sm:text-2xl">
          {title}
        </ZineBox>
        <ZineSmile className="hidden sm:block" />
      </div>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
