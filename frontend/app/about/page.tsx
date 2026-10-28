import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { ArrowUpRight, Terminal, Sparkles, CheckCircle2, Layers, Cpu, Mail, Calendar, Rocket, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Reitumetse Sethabela",
  description:
    "The engineering background and commercial philosophy of Reitumetse Sethabela (Allen Reiley): from writing an operating manual at 19 to software architecture, sales psychology, and founding AuraWorks (Pty) Ltd in 2025.",
};

const MILESTONES = [
  {
    year: "2021–2022 (Age 19)",
    title: "Writing The Ecommerce Startup That Sells",
    description:
      "Synthesized hundreds of hours of digital commerce research, contractor arbitrage mechanics, and Standard Operating Procedures into a 75-page operating manual.",
  },
  {
    year: "2023–2024 (Ages 20–21)",
    title: "Frontline Commercial Sales & Customer Psychology",
    description:
      "Worked directly in frontline sales roles. Overcame real customer objections, mastered conversion psychology, and developed deep empathy for user hesitation when parting with capital.",
  },
  {
    year: "2023–2025 (Ages 20–22)",
    title: "Full-Stack Software Engineering Mastery",
    description:
      "Committed to rigorous full-stack software development: Next.js 15, React 19, TypeScript, Python, FastAPI, and PostgreSQL database architecture. Bridged business strategy with code execution.",
  },
  {
    year: "2025 (Age 22) – Present",
    title: "Founding AuraWorks (Pty) Ltd",
    description:
      "Founded AuraWorks (Pty) Ltd in South Africa to engineer bespoke production storefronts, operations dashboards, and high-performance digital systems for clients locally and globally.",
  },
];

const PRINCIPLES = [
  {
    title: "Software as a Commercial Instrument",
    desc: "Code is not decorative art. It exists to solve operational bottlenecks, eliminate manual spreadsheet chaos, and generate measurable commercial value.",
  },
  {
    title: "Performance is an Architectural Feature",
    desc: "Every 100ms of latency degrades conversion. I engineer with progressive image streaming, optimistic client state, sub-second FastAPI responses, and edge distribution.",
  },
  {
    title: "Commercial Empathy & User Psychology",
    desc: "Engineering with deep appreciation for unit economics, user hesitation, and sales cycles. A great system must make immediate commercial and operational sense.",
  },
];

const AI_METHODOLOGY_PILLARS = [
  {
    phase: "01",
    title: "Domain Architecture First",
    desc: "Specifying relational PostgreSQL schemas, domain boundaries, and FastAPI contracts manually before generating code. Human architectural control prevents AI hallucinations.",
  },
  {
    phase: "02",
    title: "AI-Assisted Implementation",
    desc: "Using advanced models to accelerate type-safe boilerplate, Next.js Server Components, and Pydantic validation schemas with continuous human diff review.",
  },
  {
    phase: "03",
    title: "Deterministic Debugging",
    desc: "Isolating anomalies using deterministic reproduction scripts and structured logs. Using AI for rapid hypothesis testing and stack trace analysis.",
  },
  {
    phase: "04",
    title: "Automated Verification",
    desc: "Enforcing strict static typing in TypeScript and Python, writing regression tests, and testing edge cases before code touches staging.",
  },
];

const TECH_STACK = [
  { category: "Languages", items: ["TypeScript (Strict)", "Python (Core / Async)", "SQL (PostgreSQL)", "JavaScript", "HTML5 / CSS3"] },
  { category: "Frontend & UI", items: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS v4", "Framer Motion", "Responsive Design"] },
  { category: "Backend & Data", items: ["FastAPI", "Python Async", "PostgreSQL", "SQLAlchemy", "Pydantic v2"] },
  { category: "Tooling & Infra", items: ["Railway Cloud", "Vercel Edge", "Cloudflare DNS/SSL", "Docker & Linux", "Git / CI/CD"] },
];

const FAQS = [
  {
    q: "Who is Reitumetse Sethabela?",
    a: "Reitumetse Sethabela (also known professionally as Allen Reiley) is a South African full-stack developer and the technical founder of AuraWorks (Pty) Ltd. He specializes in architecting high-converting digital storefronts, custom administrative portals, and internal logistics engines using Next.js 16, React 19, TypeScript, FastAPI (Python), and PostgreSQL. In 2023, he authored the operational guide 'The Ecommerce Startup That Sells'.",
  },
  {
    q: "What is the relationship between Reitumetse Sethabela and Allen Reiley?",
    a: "Reitumetse Sethabela and Allen Reiley are the same person. Reitumetse Bokang Allen Sethabela writes and develops under the professional name Allen Reiley, while operating his corporate entity as AuraWorks (Pty) Ltd in Johannesburg, South Africa.",
  },
  {
    q: "What is AuraWorks (Pty) Ltd?",
    a: "AuraWorks (Pty) Ltd is a South African technology and systems company founded by Reitumetse Sethabela. The company builds custom digital infrastructure, e-commerce storefronts, catalog dashboards, and B2B platforms, combining software engineering with operational systems.",
  },
  {
    q: "What commercial systems has Reitumetse Sethabela shipped?",
    a: "Key commercial systems shipped include the Nubifurn Storefront (https://nubifurn-frontend.vercel.app/), the Nubifurn Operations Engine (https://nubifurn.vercel.app/), the AuraWorks Platform (https://www.auraworks.co.za/), the FLP Church Platform (https://flp-woad.vercel.app/), and the Tilulu Non-Profit Portal (https://tilulu.vercel.app/).",
  },
  {
    q: "How can I hire or consult with Reitumetse Sethabela?",
    a: "You can book an introductory 30-minute architecture consultation directly via his calendar at https://cal.com/reitumetse-sethabela/30min or reach out via email at rsethabela@auraworks.co.za.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-8 space-y-20 sm:space-y-28 pt-32 sm:pt-40 pb-28">
        
        {/* Founder Header with Editorial Layout */}
        <header className="space-y-8 border-b border-border pb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="relative group shrink-0">
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden border border-border shadow-md bg-secondary flex items-end justify-center">
                <Image
                  src="/images/reitumetse-chest.png"
                  alt="Reitumetse Sethabela"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-forest dark:bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                ✓
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
                <Terminal className="size-3.5" />
                <span>Founder & Systems Architect</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif text-foreground font-normal">
                Reitumetse Sethabela
              </h1>

              <p className="text-sm sm:text-base font-mono text-muted-foreground">
                Also known as Allen Reiley · Johannesburg, South Africa (UTC+2) · Founder, AuraWorks (Pty) Ltd
              </p>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-muted-foreground font-serif italic leading-relaxed max-w-3xl pt-2">
            &ldquo;Engineering software with commercial intent — crafting web applications, internal logistics engines, and digital products that solve genuine operational problems.&rdquo;
          </p>
        </header>

        {/* Narrative Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
            <Sparkles className="size-3.5" />
            <span>01 / The Commercial Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
            Engineering through the lens of commercial execution.
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              My journey did not begin with detached theory. It started in direct commercial operations, hardware repairs, and intensive self-directed business research. At 19, I synthesized hundreds of hours of research on digital business models, contractor arbitrage mechanics, and Standard Operating Procedures into a 75-page operating manual: <em>&quot;The Ecommerce Startup That Sells&quot;</em>.
            </p>

            <p>
              While the book mapped out operational blueprints, I realized that relying entirely on third-party agencies or rigid templates creates dangerous dependencies for business builders. To create real enterprise value, I needed to master the code myself.
            </p>

            <p>
              Over the next several years, I committed fully to full-stack software engineering: mastering modern web protocols, Next.js App Router, React 19, TypeScript, Python, FastAPI, and database architecture with PostgreSQL deployed on Railway. Concurrently, working in frontline commercial sales gave me firsthand exposure to user hesitation, checkout friction, and conversion bottlenecks.
            </p>

            <p>
              That convergence of software engineering, frontline sales psychology, and systems design led to founding <strong>AuraWorks (Pty) Ltd in 2025</strong>, where I architect and ship production web applications, storefronts, and internal tools for clients locally and globally.
            </p>
          </div>
        </section>

        {/* AI-Assisted Development Methodology */}
        <section className="space-y-8 border-t border-border pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <Cpu className="size-3.5" />
              <span>02 / Engineering Differentiator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              AI-Assisted Development Methodology
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl">
              How I leverage machine intelligence as a high-velocity pair-programmer while enforcing strict human architectural control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AI_METHODOLOGY_PILLARS.map((pillar) => (
              <div
                key={pillar.phase}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-forest dark:text-emerald-400 uppercase">
                    Phase {pillar.phase}
                  </span>
                  <ShieldCheck className="size-4 text-forest dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-serif text-foreground font-normal">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="space-y-8 border-t border-border pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="size-3.5" />
              <span>03 / Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Guiding Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-3"
              >
                <h3 className="text-lg font-serif text-foreground font-normal">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Matrix (Accurate Stack) */}
        <section className="space-y-8 border-t border-border pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <Layers className="size-3.5" />
              <span>04 / Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Languages, Frameworks & Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {TECH_STACK.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-4"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-forest dark:text-emerald-400">
                  {group.category}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Chronological Milestones (AuraWorks Founded in 2025!) */}
        <section className="space-y-8 border-t border-border pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <Calendar className="size-3.5" />
              <span>05 / Chronology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Milestones & Evolution
            </h2>
          </div>

          <div className="space-y-4">
            {MILESTONES.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-forest dark:text-emerald-400 font-bold">
                    {m.year}
                  </span>
                  <h3 className="text-base font-serif text-foreground font-normal">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04. AEO & Frequently Asked Questions (Structured for Humans & AI Engines) */}
        <section className="space-y-8 border-t border-border pt-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              {"// FAQ & Quick Dossier"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Direct Answers & Background
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Concise canonical facts for clients, recruiters, and knowledge synthesis engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-3"
              >
                <h3 className="text-base font-serif font-medium text-foreground flex items-start gap-2">
                  <span className="text-forest dark:text-emerald-400 font-mono text-xs mt-1">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5 border-l-2 border-forest/30 dark:border-emerald-500/30">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Action */}
        <section className="py-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif text-foreground font-normal">
              Ready to talk systems architecture?
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              Available for select engineering contracts, e-commerce builds, and technical roles.
            </p>
          </div>

          <a
            href="https://cal.com/reitumetse-sethabela/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-forest hover:bg-forest-dark text-white px-6 py-3.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>Book 30-min Architecture Call</span>
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
