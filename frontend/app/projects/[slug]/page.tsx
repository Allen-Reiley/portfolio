import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { PROJECTS } from "@/lib/projects-data";
import { ArrowLeft, ArrowUpRight, Terminal, CheckCircle2, Layers, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "System Not Found" };
  }

  return {
    title: `${project.title} — Architecture Case Study`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isLive = project.status === "Production Live";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <SiteHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-8 space-y-16 sm:space-y-24 pt-32 sm:pt-40 pb-24">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-forest dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>← Back to all systems</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 border-b border-border pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-forest dark:text-emerald-400 uppercase tracking-widest font-bold">
                {project.category}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.role}</span>
            </div>

            {isLive ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Live</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <span className="size-2 rounded-full bg-muted-foreground" />
                <span>Active Staging</span>
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-serif text-foreground font-normal">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg font-mono text-muted-foreground">
              {project.tagline}
            </p>
          </div>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-forest hover:bg-forest-dark text-white px-6 py-3 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md"
              >
                <span>Launch Live System</span>
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-secondary border border-border/60 px-2.5 py-1 text-xs font-mono text-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Interactive Live Preview Viewport */}
        {project.liveUrl && (
          <section className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Interactive Live Preview</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Full Tab</span>
                <ExternalLink className="size-3" />
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-stone-900 overflow-hidden shadow-inner">
              <div className="h-9 px-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-rose-500/80" />
                  <span className="size-2.5 rounded-full bg-amber-500/80" />
                  <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-stone-300">{project.liveUrl}</span>
                </div>
                <span className="text-emerald-400">Sandbox Active</span>
              </div>
              <iframe
                src={project.liveUrl}
                title={`${project.title} Preview`}
                className="w-full h-[520px] bg-white border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </section>
        )}

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-normal">
            The Operational Challenge
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.problem}
          </p>
        </section>

        {/* Architecture & Highlights */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-normal">
            System Architecture
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.architecture.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.architecture.highlights.map((highlight, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-border bg-card shadow-xs flex items-start gap-3"
              >
                <span className="text-forest dark:text-emerald-400 font-bold font-mono text-sm mt-0.5">
                  0{i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-normal">
            Engineering Obstacles Overcome
          </h2>

          <div className="space-y-4">
            {project.challenges.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-2"
              >
                <h3 className="text-lg font-serif text-foreground font-normal">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-normal">
            Commercial & Operational Outcomes
          </h2>

          <div className="space-y-3">
            {project.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="size-4 text-forest dark:text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Booking Trigger */}
        <section className="py-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-foreground font-normal">
              Need a similar system architected?
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              Schedule a 30-minute architecture review to discuss technical specifications.
            </p>
          </div>

          <a
            href="https://cal.com/reitumetse-sethabela/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-forest hover:bg-forest-dark text-white px-6 py-3.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>Schedule 30-min Call</span>
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
