import type { Metadata } from "next";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Download, BookOpen, CheckCircle2, ArrowUpRight, FileText, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "The Book — The Ecommerce Startup That Sells",
  description:
    "A 75-page systems monograph by Reitumetse Sethabela (Allen Reiley) detailing Standard Operating Procedures, legal contract templates, consumer psychology, and operational scaling. Free PDF download.",
};

const CHAPTERS = [
  {
    num: "01",
    title: "Ideation, Market Positioning & Legal Contracts",
    summary:
      "Niche discovery via Ikigai, decoy pricing psychology, copywriting frameworks (AIDA, PAS), and complete plug-and-play legal contracts for clients and independent contractors.",
  },
  {
    num: "02",
    title: "Organic Distribution & Recommendation Algorithms",
    summary:
      "Strategic distribution mechanics covering video recommendation systems, keyword competitiveness scoring, audience retention curves, and building sustainable reach without vanity metrics.",
  },
  {
    num: "03",
    title: "Consumer Psychology & The Nike Case Study",
    summary:
      "Deep analysis of the 3 Primal Desires (Wealth, Health, Relationships) and the 6 Human Needs. Features an in-depth deconstruction of Nike's positioning and emotional resonance.",
  },
  {
    num: "04 & 05",
    title: "The Governance Hierarchy & 5 Essential SOPs",
    summary:
      "Operational systematization: Policy → Process → System → SOP with logic-gate execution rules across Marketing, Sales, Onboarding, Fulfillment, and Client Retention.",
  },
  {
    num: "06",
    title: "Operational Execution & Contractor Arbitrage",
    summary:
      "Real-world workflows for drop-servicing and technical service firms: prospecting pipelines, contractor milestone vetting, and the 7-10 day pre-month-end retention review.",
  },
  {
    num: "07",
    title: "Business Automation & AI Toolchains",
    summary:
      "Chaining tools: automated accounting pipelines connecting e-commerce platforms to financial reports, and multi-prompt chains replacing manual administrative overhead.",
  },
  {
    num: "08",
    title: "Founder Mindset: Resilience & Stamina",
    summary:
      "Raw honesty about the psychological endurance required to build early ventures, reframed around sustainable cognitive clarity and disciplined execution habits.",
  },
];

const CORE_FRAMEWORKS = [
  {
    title: "Plug-and-Play Contracts",
    desc: "Complete independent contractor terms and client service agreements drafted to protect intellectual property and manage delivery milestones.",
  },
  {
    title: "McDonald's-Grade SOPs",
    desc: "Step-by-step logic trees for marketing, sales, client onboarding, and fulfillment that can be delegated cleanly.",
  },
  {
    title: "Buyer Psychology Models",
    desc: "How customers make subconscious purchase decisions based on status elevation, risk mitigation, and pricing decoys.",
  },
  {
    title: "Unit Economics Blueprint",
    desc: "Calculators and operational matrices for maintaining healthy margins and managing contractor cashflow cycles.",
  },
];

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <SiteHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-8 space-y-20 sm:space-y-28 pt-32 sm:pt-40 pb-28">
        {/* Monograph Header */}
        <header className="space-y-6 border-b border-border pb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <BookOpen className="size-3.5" />
              <span>Published Monograph · 75 Pages · Free Download</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif text-foreground font-normal">
              The Ecommerce Startup That Sells
            </h1>

            <p className="text-base sm:text-lg font-mono text-muted-foreground">
              Proven Strategies for Online Sales Success · By Allen Reiley (Reitumetse Sethabela)
            </p>
          </div>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Written at age 19, this 75-page operating manual synthesized digital commerce research, contractor arbitrage mechanics, and Standard Operating Procedures. It served as the operational blueprint behind founding AuraWorks (Pty) Ltd.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/book/the-ecommerce-startup-that-sells.pdf"
              download="The_Ecommerce_Startup_That_Sells_Allen_Reiley.pdf"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-forest hover:bg-forest-dark text-white px-7 py-3.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              <Download className="size-4" />
              <span>Download Full Monograph (PDF • 4.1 MB)</span>
            </a>

            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
              <span>Direct Download</span>
              <span>•</span>
              <span>No Email Gate</span>
              <span>•</span>
              <span>75 Pages</span>
            </div>
          </div>
        </header>

        {/* Operating Frameworks */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <Sparkles className="size-3.5" />
              <span>Core Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Four Operational Blueprints Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_FRAMEWORKS.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-forest dark:text-emerald-400" />
                  <h3 className="font-serif text-xl text-foreground font-normal">{f.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Table of Contents */}
        <section className="space-y-8 border-t border-border pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
              <FileText className="size-3.5" />
              <span>Table of Contents</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Chapter Breakdown & Syllabus
            </h2>
          </div>

          <div className="space-y-4">
            {CHAPTERS.map((ch) => (
              <div
                key={ch.num}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-forest dark:text-emerald-400">
                    Chapter {ch.num}
                  </span>
                  <h3 className="font-serif text-xl text-foreground font-normal">
                    {ch.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                  {ch.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Free Access Callout */}
        <section className="bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-foreground font-normal">
              Get the entire 75-page PDF today.
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              Completely free for operators, founders, and developers building digital businesses.
            </p>
          </div>

          <a
            href="/book/the-ecommerce-startup-that-sells.pdf"
            download="The_Ecommerce_Startup_That_Sells_Allen_Reiley.pdf"
            className="group inline-flex items-center gap-2 rounded-xl bg-forest hover:bg-forest-dark text-white px-7 py-3.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
          >
            <Download className="size-4" />
            <span>Download 4.1 MB PDF</span>
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
