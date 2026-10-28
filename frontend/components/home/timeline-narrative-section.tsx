"use client";

import { Calendar, Briefcase, Code, Building2 } from "lucide-react";

const TIMELINE_PHASES = [
  {
    phase: "Phase 01",
    dates: "2021–2023",
    title: "Commercial & Sales Operations",
    icon: Briefcase,
    description:
      "Direct frontline sales, customer acquisition, and enterprise client engagements. Learned unit economics, conversion psychology, and the absolute necessity of removing friction from customer buying journeys.",
    takeaway: "Core insight: software exists to serve business margin and customer clarity.",
  },
  {
    phase: "Phase 02",
    dates: "2023–2025",
    title: "The Systems Engineering Transition",
    icon: Code,
    description:
      "Transitioned fully into software engineering. Intensive self-directed mastery of Python, FastAPI, TypeScript, React 19, Next.js, and relational PostgreSQL modeling, treating engineering as an exacting craft.",
    takeaway: "Core insight: full-stack capability removes dependencies and enables instant delivery.",
  },
  {
    phase: "Phase 03",
    dates: "2025–Present",
    title: "Founding AuraWorks (Pty) Ltd & Systems",
    icon: Building2,
    description:
      "Founded AuraWorks (Pty) Ltd in 2025 as a registered software engineering practice. Shipping real-world production storefronts, operations dashboards, and bespoke platforms for clients locally and globally.",
    takeaway: "Core insight: engineering software with commercial intent drives measurable outcomes.",
  },
];

export function TimelineNarrativeSection() {
  return (
    <section id="timeline" className="space-y-12 py-12 sm:py-20 scroll-mt-24">
      {/* Header */}
      <div className="border-t border-border pt-10">
        <span className="font-mono text-xs uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold flex items-center gap-2">
          <Calendar className="size-3.5" />
          <span>The Commercial Narrative</span>
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif text-foreground italic mt-1 font-normal">
          From Commercial Execution to Systems Architecture
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
          I didn&apos;t approach development as a detached hobby. My path began in direct business and high-volume commercial operations, where I witnessed firsthand how clunky software bottlenecks sales and frustrates teams. That experience directly shapes how I architect and write code today.
        </p>
      </div>

      {/* 3-Phase Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TIMELINE_PHASES.map((phase) => {
          const Icon = phase.icon;
          return (
            <div
              key={phase.phase}
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5 flex flex-col justify-between hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-forest dark:text-emerald-400 font-bold uppercase">
                    {phase.phase} · {phase.dates}
                  </span>
                  <div className="p-2 rounded-xl bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400">
                    <Icon className="size-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-foreground font-normal">
                  {phase.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="font-mono text-[11px] text-forest dark:text-emerald-400">
                  {phase.takeaway}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
