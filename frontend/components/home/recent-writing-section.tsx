"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

export function RecentWritingSection({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section id="writing" className="space-y-12 py-12 sm:py-20 scroll-mt-24">
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
            <BookOpen className="size-3.5" />
            <span>Engineering Notes & Writing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-foreground italic font-normal">
            Thoughts on Systems, Commerce & Engineering
          </h2>
        </div>

        <Link
          href="/blog"
          className="text-xs font-mono text-forest dark:text-emerald-400 hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <span>View all essays ({posts.length})</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xs hover:border-forest/40 dark:hover:border-emerald-500/40 transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-serif text-foreground group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readingTime}
                </span>
                <span>•</span>
                <span className="text-forest dark:text-emerald-400 font-medium">{post.tags[0]}</span>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-forest dark:text-emerald-400 hover:underline"
              >
                <span>Read Essay</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
