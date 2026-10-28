"use client";

import { Cpu, Terminal, Layers, Database, Cloud } from "lucide-react";

const STACK_CATEGORIES = [
  {
    step: "01",
    name: "Core Syntax & Languages",
    icon: Terminal,
    desc: "Typed, expressive, and high-performance programming languages.",
    items: [
      { name: "TypeScript", desc: "Strict full-stack type safety across client & server" },
      { name: "Python", desc: "Core async backend services & business automation" },
      { name: "SQL", desc: "Relational schema design, indexes, and ACID operations" },
      { name: "JavaScript", desc: "Modern ECMAScript standards & web APIs" },
      { name: "HTML5 / CSS3", desc: "Semantic structure & responsive design tokens" },
    ],
  },
  {
    step: "02",
    name: "Frontend & Client SSR",
    icon: Layers,
    desc: "Component-driven, accessible, and fluid user interfaces.",
    items: [
      { name: "Next.js 15", desc: "App Router, Server Components & Server Actions" },
      { name: "React 19", desc: "Concurrent rendering, modern hooks & optimistic UI" },
      { name: "Tailwind CSS v4", desc: "Modern design token engine & custom styling" },
      { name: "Framer Motion", desc: "Physics-based fluid micro-interactions" },
      { name: "Responsive UI", desc: "Mobile-first layouts tested across screen sizes" },
    ],
  },
  {
    step: "03",
    name: "Backend & Database",
    icon: Database,
    desc: "High-throughput APIs and transactional relational database architecture.",
    items: [
      { name: "FastAPI", desc: "High-speed Python async REST API framework" },
      { name: "PostgreSQL", desc: "Relational data modeling, foreign keys & queries" },
      { name: "SQLAlchemy", desc: "Type-safe database ORM and migration tracking" },
      { name: "Pydantic v2", desc: "Runtime schema validation and data serialization" },
      { name: "Webhooks", desc: "Real-time event handling & async task coordination" },
    ],
  },
  {
    step: "04",
    name: "DevOps & Infrastructure",
    icon: Cloud,
    desc: "Container orchestration, edge distribution & continuous integration.",
    items: [
      { name: "Railway", desc: "Production container orchestration for FastAPI services" },
      { name: "Vercel", desc: "Serverless edge network for Next.js web applications" },
      { name: "Cloudflare", desc: "DNS management, SSL certificates & edge caching" },
      { name: "Docker & Linux", desc: "Isolated runtime environments & shell automation" },
      { name: "Git / GitHub", desc: "Version control, branching strategy & CI/CD" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="stack" className="space-y-12 py-12 sm:py-20 scroll-mt-24">
      {/* Header */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold flex items-center gap-2">
            <Cpu className="size-3.5" />
            <span>Technical Foundation</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground italic mt-1 font-normal">
            Languages, Frameworks & Infrastructure
          </h2>
        </div>
        <p className="text-xs font-mono text-muted-foreground max-w-sm sm:text-right">
          Disciplined, production-tested choices. No bloated dependency trees, no toy prototypes.
        </p>
      </div>

      {/* 4 Bento Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STACK_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className="bg-card rounded-3xl p-6 sm:p-7 border border-border shadow-xs space-y-5 hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-forest dark:text-emerald-400 uppercase tracking-wider">
                    {cat.step} · {cat.name.split(" ")[0]}
                  </span>
                  <div className="p-1.5 rounded-lg bg-forest/10 dark:bg-emerald-500/10 text-forest dark:text-emerald-400">
                    <Icon className="size-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-foreground font-normal">
                  {cat.name}
                </h3>

                <p className="font-mono text-[11px] text-muted-foreground leading-normal">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <ul className="font-mono text-xs space-y-2.5 text-muted-foreground">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="text-foreground font-semibold text-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400" />
                        {item.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground/80 pl-3">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
