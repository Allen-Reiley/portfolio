"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles, Terminal } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

export function HallOfFameShowcase() {
  const featured = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 sm:py-28 space-y-24 sm:space-y-32">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400">
          <Terminal className="size-3.5" />
          <span>Shipped Work & Systems</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Production systems built for real operations.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Bespoke web applications, high-performance commerce storefronts, and internal management tools shipped to production.
        </p>
      </div>

      {/* Featured Production Showcases (Unboxed & Breathable) */}
      <div className="space-y-32 sm:space-y-40">
        {/* Project 1: Nubifurn Storefront */}
        <article className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">
                #001
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                E-Commerce Storefront
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                Production Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Project Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Nubifurn Storefront
                </h3>
                <p className="text-sm sm:text-base font-mono text-teal-600 dark:text-teal-400">
                  Custom E-Commerce Platform for Handcrafted Designer Furniture
                </p>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                A bespoke digital showroom engineered for Nubifurn South Africa. Delivers a luxury browsing experience with real-time couch customization, fluid transitions, and sub-second page performance across cellular devices.
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js 15", "TypeScript", "Tailwind CSS", "Motion", "Vercel"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://nubifurn-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  <span>Launch Live Storefront</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/projects/nubifurn-frontend"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Visual Artifact Preview (Unboxed with subtle ambient reflection) */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-2xl overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_rgba(0,229,191,0.12)] border border-slate-800/80">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="opacity-60 truncate max-w-[200px]">nubifurn-frontend.vercel.app</span>
                  <a
                    href="https://nubifurn-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 flex items-center justify-center p-4 sm:p-6">
                  <div className="relative w-full h-full max-w-sm rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/feature-preview.jpg"
                      alt="Nubifurn Storefront Production View"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2: Nubifurn Operations Dashboard */}
        <article className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">
                #002
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Internal Operations Portal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                Production Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Nubifurn Orders & Inventory System
                </h3>
                <p className="text-sm sm:text-base font-mono text-teal-600 dark:text-teal-400">
                  Real-Time Catalog Management & Order Operations Pipeline
                </p>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Centralized business portal enabling warehouse managers and customer support to track dynamic furniture orders, manage stock levels across variants, and synchronize customer delivery statuses in real time.
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js 15", "React 19", "Supabase", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://nubifurn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  <span>Launch Operations Portal</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/projects/nubifurn-dashboard"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Architecture Highlights Terminal View */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/90 dark:bg-black/70 border border-slate-800 p-6 sm:p-8 font-mono text-xs space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                  <span className="text-teal-400 font-semibold">// SYSTEM ARCHITECTURE</span>
                  <span>PostgreSQL + Supabase</span>
                </div>

                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">→</span>
                    <div>
                      <strong className="text-white">Atomic State Sync:</strong> Multi-tenant order updates with optimistic mutations to prevent stock collisions.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">→</span>
                    <div>
                      <strong className="text-white">Row-Level Security:</strong> Granular permissions separating warehouse dispatch from management analytics.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">→</span>
                    <div>
                      <strong className="text-white">Automated Fulfillment:</strong> Real-time webhook events notify client logistics partners instantly upon checkout.
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Latency: &lt; 25ms p95</span>
                  <span>Uptime: 99.98%</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project 3: AuraWorks Platform */}
        <article className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium">
                #003
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Digital Studio Flagship
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                Production Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  AuraWorks Platform
                </h3>
                <p className="text-sm sm:text-base font-mono text-teal-600 dark:text-teal-400">
                  Modern High-Performance Technology Studio
                </p>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                The flagship digital presence for AuraWorks (Pty) Ltd. Built with fluid micro-interactions, responsive typographic scales, and sub-second Time To First Byte (TTFB).
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://www.auraworks.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  <span>Visit AuraWorks</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/projects/auraworks-platform"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Additional Shipped Systems Grid */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Additional Shipped Systems
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">FLP Church Platform</h4>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">Media distribution & community archive</p>
                  </div>
                  <a
                    href="https://flp-woad.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-teal-600 dark:text-teal-400 inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Tilulu Nonprofit Portal</h4>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">Public outreach & donor engagement</p>
                  </div>
                  <a
                    href="https://tilulu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-teal-600 dark:text-teal-400 inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
