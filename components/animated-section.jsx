"use client"

import { cn } from "@/lib/utils"

export function AnimatedSection({ children, className, id }) {
  // The component now simply renders its children with the provided className and id.
  // All animation logic based on scroll or settings has been removed.
  return (
    <section className={cn(className)} id={id}>
      {children}
    </section>
  )
}
