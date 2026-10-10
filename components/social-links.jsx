import * as LucideIcons from "lucide-react";

export function SocialLinks({ socialLinks }) {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link, index) => {
        const IconComponent = LucideIcons[link.icon];

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            aria-label={link.platform}>
            {IconComponent && <IconComponent className="h-4 w-4" />}
          </a>
        );
      })}
    </div>
  );
}
