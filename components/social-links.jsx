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
            className="flex h-9 w-9 items-center justify-center border-2 border-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-[3px_3px_0_0_hsl(var(--foreground))]"
            aria-label={link.platform}>
            {IconComponent && <IconComponent className="h-4 w-4" />}
          </a>
        );
      })}
    </div>
  );
}
