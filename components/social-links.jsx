import * as LucideIcons from "lucide-react";

export function SocialLinks({ socialLinks }) {
  return (
    <div className="flex justify-center gap-2">
      {socialLinks.map((link, index) => {
        const IconComponent = LucideIcons[link.icon];

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={link.platform}>
            {IconComponent && <IconComponent className="h-4 w-4" />}
          </a>
        );
      })}
    </div>
  );
}
