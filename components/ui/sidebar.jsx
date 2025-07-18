"use client"
import { Link } from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const Sidebar = ({ className, items, ...props }) => {
  const pathname = usePathname()

  if (!items?.length) return null

  return (
    <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          item.href && (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-3 py-2 hover:underline",
                item.href.includes(pathname) ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {item.title}
            </Link>
          )
        )
      })}
    </div>
  )
}

export { Sidebar }
