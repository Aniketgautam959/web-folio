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
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-700 dark:text-zinc-300" />}
          </a>
        )
      })}
    </div>
  )
}
