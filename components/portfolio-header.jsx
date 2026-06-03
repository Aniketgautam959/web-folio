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

  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const handleScroll = () => {
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

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-full -translate-x-1/2 px-4 sm:top-5">
      <nav className="relative">
        <div className="rounded-2xl border border-border/80 bg-background/80 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="group flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/50 text-xs font-semibold text-foreground transition-colors group-hover:bg-muted">
                AG
              </div>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.slice(1).map((item) => {
                const isActive =
                  item.href === "/"
                    ? activeSection === ""
                    : activeSection === item.href.substring(1);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative text-sm transition-colors",
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-full max-w-[1.25rem] bg-foreground" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hidden rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:inline-block md:text-sm">
                Contact
              </a>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu">
                {mobileMenuOpen ? (
                  <X size={18} />
                ) : (
                  <Menu size={18} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-full mt-2 origin-top rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-md transition-all duration-200 md:hidden",
            mobileMenuOpen
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[0.98] opacity-0"
          )}>
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? activeSection === ""
                  : activeSection === item.href.substring(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-border pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block rounded-xl px-3 py-2.5 text-center text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}>
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
