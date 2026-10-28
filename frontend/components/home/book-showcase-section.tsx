"use client";

import Link from "next/link";
import { Download, ArrowRight, BookOpen } from "lucide-react";

export function BookShowcaseSection() {
  return (
    <section id="book" className="space-y-10 py-12 sm:py-20 scroll-mt-24">
      {/* Bento Monograph Capsule */}
      <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-forest dark:text-emerald-400 font-bold">
              <BookOpen className="size-3.5" />
              <span>Published Monograph · 75 Pages</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-foreground font-normal">
              The Ecommerce Startup That Sells
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
              Written at age 19 by Allen Reiley (Reitumetse Sethabela). A concentrated treatise detailing standard operating procedures, customer acquisition mechanics, client service contracts, and operational psychology for new commerce ventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
              <span>Format: Digital PDF</span>
              <span>·</span>
              <span>File Size: 4.1 MB</span>
              <span>·</span>
              <span>Distribution: Free Public Access</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/book/the-ecommerce-startup-that-sells.pdf"
                download="The_Ecommerce_Startup_That_Sells_Allen_Reiley.pdf"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-forest hover:bg-forest-dark text-white font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95"
              >
                <Download className="size-4" />
                <span>Download Monograph (PDF)</span>
              </a>

              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Read Chapter Breakdown</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Chapter Outline Preview */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Operating Table of Contents
            </p>

            <div className="space-y-2.5">
              {[
                { num: "01", title: "Market Positioning & Psychology" },
                { num: "02", title: "High-Conversion Storefront Specs" },
                { num: "03", title: "Operational SOPs & Execution" },
                { num: "04", title: "Unit Economics & Cashflow" },
              ].map((ch) => (
                <div
                  key={ch.num}
                  className="p-3.5 rounded-xl border border-border bg-secondary/50 flex items-center gap-3"
                >
                  <span className="font-bold text-forest dark:text-emerald-400">{ch.num}</span>
                  <span className="text-foreground font-medium">{ch.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
