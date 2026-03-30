import * as LucideIcons from "lucide-react"

export function SocialLinks({ socialLinks }) {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 my-2 sm:my-3">
      {socialLinks.map((link, index) => {
        const IconComponent = LucideIcons[link.icon]

        return (
          <a
            key={index}
            href={link.url}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />}
          </a>
        )
      })}
    </div>
  )
}
