"use client"

import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarVariants = cva("flex h-full flex-col overflow-hidden border-r bg-background", {
  variants: {
    variant: {
      default: "w-64",
      collapsed: "w-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const Sidebar = React.forwardRef(({ className, variant, ...props }, ref) => (
  <aside ref={ref} className={cn(sidebarVariants({ variant }), className)} {...props} />
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-between p-4", className)} {...props} />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 overflow-y-auto p-4", className)} {...props} />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("border-t p-4", className)} {...props} />
))
SidebarFooter.displayName = "SidebarFooter"

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter }
