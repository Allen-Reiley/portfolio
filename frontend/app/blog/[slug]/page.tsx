import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Clock, ArrowUpRight, Terminal } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} — Reitumetse Sethabela`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Markdown parsing for headings, blockquotes, code blocks, lists, and paragraphs
  const formattedSections = post.content.split("\n\n").map((block, idx) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={idx} className="text-xl sm:text-2xl font-serif text-foreground mt-8 mb-3 font-normal">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-serif text-foreground mt-12 mb-4 border-b border-border pb-3 font-normal">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={idx} className="text-3xl sm:text-4xl font-serif text-foreground mt-12 mb-4 font-normal">
          {trimmed.replace("# ", "")}
        </h1>
      );
    }
    if (trimmed.startsWith("```")) {
      const codeContent = trimmed.replace(/^```[a-z]*\n/, "").replace(/\n```$/, "");
      return (
        <pre key={idx} className="rounded-2xl border border-stone-800 bg-stone-950 p-5 overflow-x-auto text-xs sm:text-sm font-mono text-stone-200 my-6 shadow-lg">
          <code>{codeContent}</code>
        </pre>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote key={idx} className="border-l-2 border-forest dark:border-emerald-400 pl-5 py-2 italic text-foreground my-6 bg-forest/5 dark:bg-emerald-500/5 rounded-r-xl font-serif text-lg">
          {trimmed.replace(/^>\s*/, "")}
        </blockquote>
      );
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split("\n").map((line) => line.replace(/^[-*]\s*/, ""));
      return (
        <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-base text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={idx} className="text-base sm:text-lg text-muted-foreground leading-relaxed my-4">
        {trimmed}
      </p>
    );
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8 space-y-12 sm:space-y-16 pt-32 sm:pt-40 pb-28">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-forest dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>← Back to all essays</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 border-b border-border pb-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-forest dark:text-emerald-400 bg-forest/10 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-[1.12] font-normal">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-muted-foreground">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Ad-Free</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose-stone max-w-none space-y-4">
          {formattedSections}
        </article>

        {/* Author Bio Card */}
        <footer className="border-t border-border pt-12 space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-2xl overflow-hidden shrink-0 border border-border bg-secondary flex items-end justify-center">
                <Image
                  src="/images/reitumetse-chest.png"
                  alt="Reitumetse Sethabela"
                  fill
                  sizes="56px"
                  className="object-contain object-bottom"
                />
              </div>

              <div>
                <p className="font-serif text-foreground text-lg font-normal">
                  Reitumetse Sethabela
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  Full-Stack Developer & Systems Builder · Founder, AuraWorks
                </p>
              </div>
            </div>

            <a
              href="https://cal.com/reitumetse-sethabela/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-forest hover:bg-forest-dark text-white px-5 py-2.5 text-xs font-semibold transition-all shrink-0 shadow-sm"
            >
              <span>Book 30m Session</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground transition-colors">
              ← Return to all essays
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Explore shipped systems →
            </Link>
          </div>
        </footer>
      </main>

      <SiteFooter />
    </div>
  );
}
