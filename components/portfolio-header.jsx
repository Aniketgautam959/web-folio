"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { getNavItems, getPersonalInfo } from "@/lib/data";

export function PortfolioHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0);

      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 80) {
        setActiveSection("");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 dark:bg-background">
      <div
        aria-hidden
        className="h-[2px] w-full origin-left bg-primary"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="site-shell pt-3">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full border border-border/70 bg-background/70 px-3 backdrop-blur-xl transition-shadow duration-500 dark:rounded-none dark:border-x-0 dark:border-t-0 dark:bg-background dark:px-0 dark:shadow-none dark:backdrop-blur-none sm:px-4 dark:sm:px-0",
            scrolled &&
              "shadow-[0_16px_40px_-24px_hsl(var(--foreground)/0.55)] dark:shadow-none"
          )}>
          <Link
            href="/"
            className="pl-2 font-serif text-lg tracking-tight text-foreground">
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors duration-300",
                    isActive
                      ? "bg-primary/15 text-foreground"
                      : "hover:text-foreground"
                  )}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-2 rounded-3xl border border-border bg-background/90 p-2 backdrop-blur-xl dark:rounded-none dark:bg-background dark:backdrop-blur-none md:hidden">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm",
                    isActive
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
