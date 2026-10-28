"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import type { ProjectCaseStudy } from "@/lib/projects-data";

export function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  const isLive = project.status === "Production Live";

  return (
    <article className="group relative bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-xs space-y-6">
      <div className="space-y-4">
        {/* Top metadata line */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-forest dark:text-emerald-400 uppercase tracking-widest text-[11px] font-bold">
            {project.category}
          </span>

          {isLive ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Live</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
              <span className="size-2 rounded-full bg-muted-foreground" />
              <span>Active Staging</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-serif text-foreground font-normal group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-sm font-mono text-muted-foreground">
          {project.tagline}
        </p>

        {/* Summary */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-foreground bg-secondary border border-border/60 px-2.5 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Live Interactive Iframe Display Window */}
      {project.liveUrl && (
        <div className="relative rounded-2xl overflow-hidden border border-border bg-stone-900 shadow-inner transition-all duration-300 group-hover:border-forest/40 dark:group-hover:border-emerald-500/40">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-950 border-b border-stone-800 text-[11px] font-mono text-stone-400">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-rose-500/80" />
              <span className="size-2.5 rounded-full bg-amber-500/80" />
              <span className="size-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-0.5 rounded-full border border-stone-800 text-[10px] text-stone-300">
              <span className="text-emerald-400">https://</span>
              <span>{project.liveUrl.replace("https://", "")}</span>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Open full page"
            >
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Iframe View */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[380px] sm:min-h-[460px] bg-white">
            <iframe
              src={project.liveUrl}
              title={`${project.title} Preview`}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-forest dark:text-emerald-400 hover:underline"
        >
          <span>Read Architecture Case Study</span>
          <ArrowRight className="size-3.5" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Launch Live</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
