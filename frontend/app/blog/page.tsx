import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { getAllPosts } from "@/lib/blog";
import { Terminal, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing & Engineering Notes",
  description:
    "Reflections on software architecture, headless e-commerce, and commercial execution by Reitumetse Sethabela. 100% ad-free.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <SiteHeader />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-8 space-y-16 sm:space-y-24 pt-32 sm:pt-40 pb-28">
        {/* Header */}
        <header className="space-y-4 max-w-3xl border-b border-border pb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
            <Terminal className="size-3.5" />
            <span>Engineering Notes & Devlog</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-foreground font-normal">
            Thoughts on software, commerce & systems.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Notes on full-stack web architecture, e-commerce engineering, and operating technology businesses. 100% ad-free, written directly from production experience.
          </p>
        </header>

        {/* Article Stream */}
        <section className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-xs hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors space-y-4"
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readingTime}
                </span>
                <span>•</span>
                <span className="text-forest dark:text-emerald-400 font-semibold">
                  {post.tags[0] || "Architecture"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-serif text-foreground group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors font-normal">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Summary */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                {post.summary}
              </p>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-forest dark:text-emerald-400 font-semibold hover:underline"
                >
                  <span>Read complete article</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom Discussion Trigger */}
        <section className="py-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
          <div>
            <p className="font-semibold text-foreground">
              Want to discuss technical architecture or collaborate?
            </p>
            <p className="text-muted-foreground text-[11px] mt-0.5">
              Available for technical consultations and full-stack builds.
            </p>
          </div>

          <a
            href="https://cal.com/reitumetse-sethabela/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-forest hover:bg-forest-dark text-white px-5 py-2.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0"
          >
            <span>Book 30-min Call</span>
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
