"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-zinc-800/80 dark:bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 dark:hover:bg-zinc-700/80 shadow-lg border border-zinc-700/50 dark:border-zinc-700/50"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-purple-500" />}
    </Button>
  )
}
