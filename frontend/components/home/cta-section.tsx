"use client";

import { ArrowUpRight, Mail, Calendar, Building2 } from "lucide-react";

function GithubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section id="contact" className="border-t border-border pt-16 sm:pt-24 space-y-12">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
          Get In Touch
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif text-foreground font-normal">
          Two Distinct Ways to Connect
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Whether you are an engineering team hiring a full-stack builder, or a business looking to deploy a commercial system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Path A: Hiring For an Engineering Role */}
        <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-xs space-y-6 flex flex-col justify-between hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase font-bold text-forest dark:text-emerald-400 tracking-wider">
                Option A · Recruitment
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                Open to Offers
              </span>
            </div>

            <h3 className="text-3xl font-serif text-foreground font-normal">
              Hiring for an Engineering Role?
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Seeking a self-starting Full-Stack Developer with strict TypeScript, Python/FastAPI, and Next.js 15 capabilities? I write clean code, communicate with commercial awareness, and own features from database schema to responsive frontend.
            </p>

            <ul className="font-mono text-xs space-y-2 text-muted-foreground pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>Full-Stack Developer / Systems Engineer</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>Remote (Global) or Hybrid (Johannesburg)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>Inspect code on GitHub or request full CV</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-3">
            <a
              href="mailto:rsethabela@auraworks.co.za"
              className="px-5 py-3 rounded-xl bg-forest hover:bg-forest-dark text-white text-xs font-semibold transition-all shadow-sm flex items-center gap-2"
            >
              <Mail className="size-3.5" />
              <span>Email Directly</span>
            </a>
            <a
              href="https://github.com/Allen-Reiley"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold transition-all flex items-center gap-2"
            >
              <GithubIcon className="size-3.5" />
              <span>Inspect GitHub</span>
              <ArrowUpRight className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Path B: Commercial Systems & Client Projects */}
        <div className="bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-xs space-y-6 flex flex-col justify-between hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase font-bold text-forest dark:text-emerald-400 tracking-wider">
                Option B · Direct Client
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400 font-mono text-[10px] font-bold">
                Consultation
              </span>
            </div>

            <h3 className="text-3xl font-serif text-foreground font-normal">
              Building a Custom System?
            </h3>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Have an operational bottleneck, dynamic catalog requirement, inventory challenge, or custom web platform to build? Let&apos;s analyze your architecture, operational objectives, and technical scope.
            </p>

            <ul className="font-mono text-xs space-y-2 text-muted-foreground pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>Bespoke E-Commerce Storefronts & Showrooms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>Warehouse & Operations Logistics Portals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                <span>High-Performance Internal Business Workflows</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-3">
            <a
              href="https://cal.com/reitumetse-sethabela/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-forest hover:bg-forest-dark text-white text-xs font-semibold transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar className="size-3.5" />
              <span>Schedule 30-Min Call</span>
              <ArrowUpRight className="size-3" />
            </a>
            <a
              href="https://www.auraworks.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold transition-all flex items-center gap-2"
            >
              <Building2 className="size-3.5" />
              <span>AuraWorks Studio</span>
              <ArrowUpRight className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
