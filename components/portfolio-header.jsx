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
          "site-shell !px-0 border-2 border-foreground bg-background transition-[box-shadow,transform] duration-200",
          scrolled || mobileMenuOpen
            ? "-translate-x-0.5 -translate-y-0.5 shadow-[5px_5px_0_0_hsl(var(--foreground))]"
            : ""
        )}>
        <div className="flex h-12 items-center justify-between px-3 sm:px-4">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
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
                    "border border-transparent px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-200",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "hover:border-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_hsl(var(--foreground))]"
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
              className="flex h-9 w-9 items-center justify-center border border-foreground md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="site-shell mt-2 border-2 border-foreground bg-background p-2 md:hidden">
          {navItems.slice(1).map((item) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 font-mono text-xs uppercase tracking-[0.14em]",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-foreground"
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
