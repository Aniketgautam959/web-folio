import { cn } from "@/lib/utils";

export function ZineBox({
  as: Tag = "span",
  href,
  children,
  className,
  fillOnHover = true,
  ...props
}) {
  const classes = cn("zine-box", fillOnHover && "zine-box-fill", className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

export function ZineStar({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 shrink-0", className)}
      fill="currentColor"
      aria-hidden>
      <path d="M12 1.6 14.4 8.7 22 9.4 16.4 14.2 18.2 22 12 17.8 5.8 22 7.6 14.2 2 9.4 9.6 8.7 12 1.6Z" />
    </svg>
  );
}

export function ZineSmile({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-9 w-9", className)}
      aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="21" r="1.6" fill="currentColor" />
      <circle cx="30.5" cy="21" r="1.6" fill="currentColor" />
      <path
        d="M16 29c2.4 4 13.6 4 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZineArrow({ className }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      className={cn("zine-draw h-16 w-28", className)}
      aria-hidden>
      <path
        pathLength="1"
        d="M8 48C28 12 78 8 108 28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        pathLength="1"
        d="M92 18l18 12-16 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ZineAsterisk({ className }) {
  return (
    <span className={cn("inline-block font-mono text-lg leading-none", className)} aria-hidden>
      *
    </span>
  );
}
