"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import { BrandLogo } from "@/components/navbar/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight, Menu, X, Calendar, Mail } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Overview", desc: "Hero, client review & flagship catalog" },
  { href: "/projects", label: "Systems", desc: "Interactive production sandbox directory" },
  { href: "/book", label: "The Book", desc: "The Ecommerce Startup That Sells (75-page PDF)" },
  { href: "/blog", label: "Writing", desc: "Reflections on systems & commercial code" },
  { href: "/about", label: "About", desc: "Background, AI methodology & milestones" },
];

function GithubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const morphicNavItems = {
    "/": { name: "Overview" },
    "/projects": { name: "Systems" },
    "/book": { name: "The Book" },
    "/blog": { name: "Writing" },
    "/about": { name: "About" },
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 px-3 sm:px-4 transition-all duration-300 w-full max-w-6xl flex justify-center">
      
      {/* ─────────────────────────────────────────────────────────────
          1. DESKTOP & TABLET NAVBAR (Screen width >= 768px: md+)
         ───────────────────────────────────────────────────────────── */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:flex items-center gap-2 lg:gap-3 rounded-full border border-border bg-background/90 p-1.5 lg:p-2 shadow-lg backdrop-blur-2xl transition-all"
      >
        {/* Brand Emblem */}
        <div className="pl-2 pr-1">
          <BrandLogo className="h-6 w-auto" />
        </div>

        {/* Vertical Divider */}
        <div className="h-4 w-px bg-border" />

        {/* Morphic Navigation Tabs (with cohesive green dot light) */}
        <MorphicNavbar
          items={morphicNavItems}
          defaultPath={pathname || "/"}
          compact={false}
          className="p-0"
        />

        {/* Vertical Divider */}
        <div className="h-4 w-px bg-border" />

        {/* Actions: Theme Toggle & Direct Cal.com Trigger */}
        <div className="flex items-center gap-2 pr-1">
          <ThemeToggle />

          <a
            href="https://cal.com/reitumetse-sethabela/30min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 30-minute architecture session on Cal.com"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-forest hover:bg-forest-dark text-white px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
            </span>
            <span>Book Call</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-80" />
          </a>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          2. MOBILE-FIRST RESPONSIVE CAPSULE (< 768px: Mobile Phones)
         ───────────────────────────────────────────────────────────── */}
      <div className="md:hidden w-full max-w-md">
        <div className="flex items-center justify-between rounded-full border border-border bg-background/95 px-3 py-1.5 shadow-xl backdrop-blur-2xl transition-all">
          
          {/* Left: Brand Emblem + Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo className="h-6 w-auto" link={false} />
            <span className="font-serif italic text-base font-normal text-foreground group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors">
              Reitumetse
            </span>
          </Link>

          {/* Right: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-secondary text-foreground transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-5 text-forest dark:text-emerald-400" />
              ) : (
                <Menu className="size-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-3xl border border-border bg-card/98 p-5 shadow-2xl backdrop-blur-3xl animate-in fade-in slide-in-from-top-3 duration-200 space-y-4">
            
            {/* Navigation Links with large touch targets */}
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                      isActive
                        ? "bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-semibold"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-medium flex items-center gap-2">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                        )}
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>

                    <span className="text-xs font-mono text-muted-foreground/60">→</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions: Direct Cal.com Trigger */}
            <div className="pt-3 border-t border-border space-y-2">
              <a
                href="https://cal.com/reitumetse-sethabela/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-2xl bg-forest hover:bg-forest-dark text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="size-3.5" />
                <span>Book 30-min Architecture Call</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              {/* Quick Contact & GitHub */}
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-1 px-1">
                <a
                  href="https://github.com/Allen-Reiley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="size-3.5" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href="mailto:rsethabela@auraworks.co.za"
                  className="hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  <Mail className="size-3.5" />
                  <span>rsethabela@auraworks.co.za</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </div>

    </header>
  );
}
