"use client";

import { ArrowUpRight, Terminal, Globe, Server, Layers } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

export function ShippedSystemsShowcase() {
  return (
    <section id="systems" className="space-y-16 py-12 sm:py-20 scroll-mt-24">
      
      {/* Section Header */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold flex items-center gap-2">
            <Terminal className="size-3.5" />
            <span>Catalog of Production Systems</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-foreground italic mt-1 font-normal">
            Shipped Engineering Work
          </h2>
        </div>
        <div className="font-mono text-xs text-muted-foreground sm:text-right">
          <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground font-semibold inline-block">
            5 Active Production Deployments
          </span>
          <p className="mt-1.5">Full-Stack · Real Users · Zero Fake Metrics</p>
        </div>
      </div>

      {/* Flagship Bento Systems 01, 02, 03 */}
      <div className="space-y-12 sm:space-y-16">
        
        {/* System 01: Nubifurn Storefront */}
        <article className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-bold uppercase">
                  System 01
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground uppercase">E-Commerce & Luxury Showroom</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
                Nubifurn Luxury Furniture Storefront
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                Bespoke digital showroom engineered for South African furniture brand Nubifurn. Built with real-time fabric customizations, dynamic pricing formulas, and instant catalog transitions on cellular connections.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js 15 (App Router)", "React 19", "FastAPI", "Railway", "Vercel"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary font-mono text-xs text-foreground font-medium border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-4 h-full">
              <a
                href="https://nubifurn-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-medium text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5 group"
              >
                <span>Launch Live Storefront</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">Host: nubifurn-frontend.vercel.app</span>
            </div>
          </div>

          {/* Standalone Live Interactive Viewport */}
          <div className="rounded-2xl border border-border bg-stone-900 overflow-hidden shadow-inner">
            <div className="h-9 px-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-stone-300">https://nubifurn-frontend.vercel.app</span>
              </div>
              <span className="text-emerald-400 font-semibold">Active Sandbox</span>
            </div>
            <iframe
              src="https://nubifurn-frontend.vercel.app/"
              className="w-full h-[520px] bg-white border-0"
              loading="lazy"
              title="Nubifurn Storefront Sandbox"
            />
          </div>
        </article>

        {/* System 02: Nubifurn Operations Dashboard */}
        <article className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-bold uppercase">
                  System 02
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground uppercase">Internal Operations & Logistics</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
                Nubifurn Orders & Inventory Engine
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                Mission-critical warehouse and logistics dashboard. Gives management full operational control over dynamic furniture orders, production stage pipelines, supplier material reconciliation, and customer inquiry logs.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["FastAPI (Python)", "PostgreSQL", "Next.js 15", "Railway Cloud"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary font-mono text-xs text-foreground font-medium border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-4 h-full">
              <a
                href="https://nubifurn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-medium text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5 group"
              >
                <span>Inspect Operations Engine</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">Host: nubifurn.vercel.app</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-stone-900 overflow-hidden shadow-inner">
            <div className="h-9 px-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-stone-300">https://nubifurn.vercel.app</span>
              </div>
              <span className="text-emerald-400 font-semibold">Active Sandbox</span>
            </div>
            <iframe
              src="https://nubifurn.vercel.app/"
              className="w-full h-[520px] bg-white border-0"
              loading="lazy"
              title="Nubifurn Operations Dashboard Sandbox"
            />
          </div>
        </article>

        {/* System 03: AuraWorks Platform */}
        <article className="bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-bold uppercase">
                  System 03
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground uppercase">Studio Flagship & Systems</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
                AuraWorks (Pty) Ltd Platform
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                Official commercial platform for my registered software practice. Highlighting systems architecture methodology, commercial software specifications, and client onboarding workflows.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js 15", "TypeScript", "Tailwind CSS", "Railway"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-secondary font-mono text-xs text-foreground font-medium border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-4 h-full">
              <a
                href="https://www.auraworks.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-medium text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5 group"
              >
                <span>Visit auraworks.co.za</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">Host: auraworks.co.za</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-stone-900 overflow-hidden shadow-inner">
            <div className="h-9 px-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-stone-300">https://www.auraworks.co.za</span>
              </div>
              <span className="text-emerald-400 font-semibold">Active Sandbox</span>
            </div>
            <iframe
              src="https://www.auraworks.co.za/"
              className="w-full h-[520px] bg-white border-0"
              loading="lazy"
              title="AuraWorks Platform Sandbox"
            />
          </div>
        </article>

      </div>

      {/* Systems 04 & 05: Dedicated Bento Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* FLP Church */}
        <article className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-bold uppercase">
                System 04
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">Community & Streaming</span>
            </div>
            <h3 className="text-2xl font-serif text-foreground font-normal">FLP Church Platform</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Digital hub engineered for a growing community. Features media archiving, event broadcasting, and responsive high-concurrency mobile access.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-secondary font-mono text-[11px] text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-stone-900 shadow-inner">
            <div className="h-7 px-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span>flp-woad.vercel.app</span>
              <span className="text-emerald-400">Live</span>
            </div>
            <iframe
              src="https://flp-woad.vercel.app/"
              className="w-full h-[380px] bg-white border-0"
              loading="lazy"
              title="FLP Church Platform Sandbox"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="font-mono text-[11px] text-muted-foreground">flp-woad.vercel.app</span>
            <a
              href="https://flp-woad.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-forest dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Launch Live System</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </article>

        {/* Tilulu Portal */}
        <article className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-bold uppercase">
                System 05
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">Digital Impact & Non-Profit</span>
            </div>
            <h3 className="text-2xl font-serif text-foreground font-normal">Tilulu Non-Profit Portal</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Transparent outreach platform connecting social initiatives with supporters. Built with accessible UI components and lightweight architecture.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js 15", "Tailwind CSS", "Vercel", "TypeScript"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-secondary font-mono text-[11px] text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-stone-900 shadow-inner">
            <div className="h-7 px-3 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
              <span>tilulu.vercel.app</span>
              <span className="text-emerald-400">Live</span>
            </div>
            <iframe
              src="https://tilulu.vercel.app/"
              className="w-full h-[380px] bg-white border-0"
              loading="lazy"
              title="Tilulu Portal Sandbox"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="font-mono text-[11px] text-muted-foreground">tilulu.vercel.app</span>
            <a
              href="https://tilulu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-forest dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Launch Live System</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </article>

      </div>

    </section>
  );
}
