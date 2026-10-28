import type { Metadata } from "next";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { ProjectCard } from "@/components/projects/project-card";
import { PROJECTS } from "@/lib/projects-data";
import { Terminal, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Systems & Shipped Projects",
  description:
    "A catalog of production web applications, e-commerce storefronts, and internal operations tools engineered by Reitumetse Sethabela.",
};

export default function ProjectsPage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 sm:px-8 space-y-20 sm:space-y-28 pt-32 sm:pt-40 pb-28">
        {/* Directory Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
            <Terminal className="size-3.5" />
            <span>Systems Directory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-foreground font-normal">
            Production systems & shipped architectures.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every project represents a commercial problem solved: luxury furniture retail, real-time warehouse inventory management, studio platform, or community media infrastructure.
          </p>
        </header>

        {/* Flagship Production Deployments */}
        <section className="space-y-8">
          <div className="border-b border-border pb-4 flex items-baseline justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-forest dark:text-emerald-400 font-bold">
              Flagship Production Systems ({featuredProjects.length})
            </h2>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Additional Shipped Work */}
        <section className="space-y-8">
          <div className="border-b border-border pb-4 flex items-baseline justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-forest dark:text-emerald-400 font-bold">
              Community & Non-Profit Platforms ({otherProjects.length})
            </h2>
          </div>

          <div className="space-y-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Bottom Consultation Action */}
        <section className="py-14 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif text-foreground font-normal">
              Have an architecture or platform to build?
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              Available for full-stack engineering contracts, audits, and leadership.
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
