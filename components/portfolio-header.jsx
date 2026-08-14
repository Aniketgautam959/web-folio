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

  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "site-shell !px-3 sm:!px-4 rounded-full border transition-colors duration-200",
          scrolled || mobileMenuOpen
            ? "border-border bg-background/75 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md"
        )}>
        <div className="flex h-12 items-center justify-between">
          <Link
            href="/"
            className="pl-2 font-serif text-[15px] italic text-foreground">
            {personalInfo.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13px] transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
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
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="site-shell mt-2 rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-xl md:hidden">
          {navItems.slice(1).map((item) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block rounded-xl px-3 py-2.5 text-sm",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
