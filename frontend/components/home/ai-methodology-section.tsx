"use client";

import { Sparkles, Cpu, Layers, Bug, CheckCircle2, Rocket, ArrowRight } from "lucide-react";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Domain Architecture & Schema First",
    subtitle: "Human Control · Zero Hallucinations",
    icon: Layers,
    description:
      "Before writing a single line of code or prompting an AI agent, I map domain entities, relational PostgreSQL schemas, and FastAPI contract boundaries manually. Strict architectural specs eliminate structural drift.",
    tags: ["PostgreSQL ERD", "API Contracts", "Pydantic Schemas", "Domain Modeling"],
  },
  {
    step: "02",
    title: "AI-Assisted Implementation",
    subtitle: "High-Throughput Code Scaffolding",
    icon: Sparkles,
    description:
      "Leveraging advanced models and agentic workflows as high-speed pair programmers. Accelerating boilerplate creation, type-safe API generation, and Next.js 15 Server Components while reviewing every diff with human scrutiny.",
    tags: ["Next.js 15 RSC", "FastAPI Endpoints", "Type Safety", "Refactoring"],
  },
  {
    step: "03",
    title: "Systematic Telemetry & Debugging",
    subtitle: "Deterministic Root-Cause Tracing",
    icon: Bug,
    description:
      "When unexpected behaviors arise, I isolate problems using deterministic reproduction scripts and structured logs. AI models analyze stack traces and hypothesis matrices to diagnose edge cases in minutes rather than hours.",
    tags: ["Log Tracing", "Reproduction Scripts", "Diff Auditing", "Profiling"],
  },
  {
    step: "04",
    title: "Automated Verification & Testing",
    subtitle: "Type-Level & Integration Guarantees",
    icon: CheckCircle2,
    description:
      "Synthesizing unit tests and end-to-end integration passes. Validating data contracts via strict TypeScript and Pydantic runtime enforcement to ensure that zero unverified code reaches production.",
    tags: ["Unit Testing", "Integration Tests", "Runtime Validation", "Lint Enforcers"],
  },
  {
    step: "05",
    title: "Containerized Deployment & Edge Rollouts",
    subtitle: "Continuous CI/CD Execution",
    icon: Rocket,
    description:
      "Packaging FastAPI services into lightweight Docker containers for Railway, deploying frontend interfaces to Vercel's global edge network, and routing traffic through Cloudflare with automated health verification.",
    tags: ["Railway Containers", "Vercel Edge", "Cloudflare WAF", "Zero-Downtime"],
  },
];

export function AiMethodologySection() {
  return (
    <section id="methodology" className="space-y-12 py-12 sm:py-20 scroll-mt-24">
      {/* Header */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
            <Cpu className="size-3.5" />
            <span>Engineering Differentiator · Systematic Discipline</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground italic font-normal">
            AI-Assisted Development Methodology
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pt-1">
            AI does not replace foundational computer science; it multiplies human engineering throughput. Here is how I architect, scaffold, debug, verify, and ship systems with speed and rigorous quality control.
          </p>
        </div>

        <div className="font-mono text-xs text-muted-foreground sm:text-right shrink-0">
          <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground font-semibold inline-block">
            Architectural Precision × AI Velocity
          </span>
          <p className="mt-1.5">5-Phase Production Pipeline</p>
        </div>
      </div>

      {/* 5-Step Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {METHODOLOGY_STEPS.map((item, idx) => {
          const Icon = item.icon;
          const isSpan = idx === 0 || idx === 4;

          return (
            <div
              key={item.step}
              className={`bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5 flex flex-col justify-between hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors ${
                isSpan ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-forest dark:text-emerald-400 uppercase tracking-wider">
                    Phase {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400">
                    <Icon className="size-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-foreground font-normal">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-secondary font-mono text-[10px] text-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
