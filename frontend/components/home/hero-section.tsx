"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDown, Mail } from "lucide-react";

function GithubIcon({ className = "size-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20">
      {/* Soft Ambient Radial Backlight */}
      <div 
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(30,74,56,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.12),transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Swiss Editorial Copy & Dual Action Paths */}
        <div className="lg:col-span-8 space-y-7">
          
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-card border border-border text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span>Full-Stack Developer · Technical Founder</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-serif leading-[1.05] tracking-tight text-foreground font-normal">
            Engineering software with{" "}
            <span className="italic text-forest dark:text-emerald-400">
              commercial intent.
            </span>
          </h1>

          {/* Subheading Narrative */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
            I architect full-stack web applications, internal logistics engines, and resilient commercial systems. Combining engineering discipline with frontline sales experience to solve actual operational problems.
          </p>

          {/* Dual Action Controls: Recruiter & Client Paths */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#systems"
              className="px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-medium text-sm transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Explore Shipped Systems</span>
              <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href="https://cal.com/reitumetse-sethabela/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-card hover:bg-secondary text-foreground border border-border font-medium text-sm transition-all shadow-xs flex items-center gap-2 group"
            >
              <span>Book Architecture Session</span>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Recruiter & Telemetry Footnote */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground">
            <div>
              <span className="text-forest dark:text-emerald-400 font-semibold">Location:</span> Johannesburg (UTC+2)
            </div>
            <div>
              <span className="text-forest dark:text-emerald-400 font-semibold">Stack:</span> Next.js 15 · FastAPI · PostgreSQL · Railway
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Allen-Reiley"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <GithubIcon className="size-3" />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href="mailto:rsethabela@auraworks.co.za"
                className="hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <Mail className="size-3" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right: Natural Right-Aligned Chest Cutout Portrait */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] aspect-[4/5] bg-gradient-to-b from-card via-card/70 to-transparent rounded-3xl border border-border p-4 flex items-end justify-center overflow-hidden shadow-xl group">
            
            {/* Ambient Halos */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-teal/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-40 h-40 bg-forest/15 dark:bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Cutout Image with direct & fallback paths */}
            <div className="relative w-full h-[92%] flex items-end justify-center">
              <Image
                src="/images/reitumetse-chest.png"
                alt="Reitumetse Sethabela"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-contain object-bottom drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Floating Architectural Nameplate Pill */}
            <div className="absolute bottom-3 inset-x-3 bg-card/95 backdrop-blur-md border border-border rounded-xl px-3.5 py-2 z-20 flex items-center justify-between text-xs shadow-xs">
              <div>
                <p className="font-semibold text-foreground leading-tight">Reitumetse Sethabela</p>
                <p className="text-muted-foreground font-mono text-[10px] uppercase">Systems Architect</p>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
