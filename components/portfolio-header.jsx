"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavItems, getPersonalInfo } from "@/lib/data";

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1));

      // Find the current section in view
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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-full px-4">
      {/* Glassmorphism Navbar */}
      <nav className="relative">
        {/* Main Navigation Container */}
        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-zinc-300/20 dark:border-white/10 rounded-full px-6 py-3 ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-zinc-200/50 dark:bg-white/10 backdrop-blur-sm border border-zinc-300/50 dark:border-white/20 flex items-center justify-center hover:bg-zinc-300/50 dark:hover:bg-white/20 transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
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
                      "text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-black dark:text-white"
                        : "text-zinc-700/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                    )}>
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-zinc-200/50 dark:bg-white/10 backdrop-blur-sm border border-zinc-300/50 dark:border-white/20 rounded-full px-4 py-2 text-sm font-medium text-zinc-800 dark:text-white/90 hover:bg-zinc-300/50 dark:hover:bg-white/20 hover:text-black dark:hover:text-white transition-all duration-300">
                {personalInfo.email}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-zinc-200/50 dark:bg-white/10 backdrop-blur-sm border border-zinc-300/50 dark:border-white/20 flex items-center justify-center hover:bg-zinc-300/50 dark:hover:bg-white/20 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <X size={18} className="text-black dark:text-white" />
              ) : (
                <Menu size={18} className="text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 mt-2 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-zinc-300/20 dark:border-white/10 rounded-2xl shadow-2xl md:hidden transition-all duration-300 origin-top",
            mobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          )}>
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? activeSection === ""
                  : activeSection === item.href.substring(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-black dark:text-white bg-zinc-200/50 dark:bg-white/10"
                      : "text-zinc-700/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-zinc-200/30 dark:hover:bg-white/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact */}
            <div className="pt-2 border-t border-zinc-300/20 dark:border-white/10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-zinc-800 dark:text-white/90 bg-zinc-200/50 dark:bg-white/10 hover:bg-zinc-300/50 dark:hover:bg-white/20 transition-all duration-300 text-center"
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
