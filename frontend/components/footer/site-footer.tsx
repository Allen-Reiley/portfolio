"use client";

import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 w-full border-t border-border py-16 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border">
          {/* Identity & Status */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-lg text-foreground font-normal">
                Reitumetse Sethabela
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 dark:border-emerald-500/20 bg-forest/10 dark:bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-forest dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEMS OPERATIONAL
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-mono flex items-center gap-2">
              <span>Johannesburg, South Africa · UTC+2</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Terminal className="size-3 opacity-60" />
                AuraWorks (Pty) Ltd · Est. 2025
              </span>
            </p>
          </div>

          {/* Social & Booking Triggers */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono">
            <a
              href="https://cal.com/reitumetse-sethabela/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-forest dark:text-emerald-400 font-semibold hover:underline transition-all"
            >
              <span>Schedule 30m</span>
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://github.com/Allen-Reiley"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground text-muted-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="size-3 opacity-60" />
            </a>
            <a
              href="https://linkedin.com/in/reitumetse-sethabela"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground text-muted-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3 opacity-60" />
            </a>
            <a
              href="https://x.com/allenreiley"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground text-muted-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="size-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© 2026 Reitumetse Sethabela (Allen Reiley). Built with Next.js 15, FastAPI & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Systems
            </Link>
            <span>•</span>
            <Link href="/book" className="hover:text-foreground transition-colors">
              The Book
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Writing
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
