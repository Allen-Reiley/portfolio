"use client";

import Earth from "@/components/ui/globe";
import { Globe, MapPin, Clock } from "lucide-react";

export function GlobalCapabilityCard() {
  return (
    <section className="py-16 sm:py-28 space-y-12 text-center">
      {/* Centered Editorial Header Above Globe */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 dark:border-emerald-500/20 bg-forest/10 dark:bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-forest dark:text-emerald-400">
          <Globe className="size-3.5" />
          <span>WORLDWIDE CAPABILITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-foreground italic leading-[1.08] font-normal">
          Based in Johannesburg, Operating Worldwide
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Headquartered in Johannesburg, South Africa (UTC+2 / CET-aligned). Seamlessly collaborating with engineering teams and commercial clients across London, New York, and Sub-Saharan Africa through disciplined asynchronous execution and automated CI/CD.
        </p>

        <div className="inline-flex items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-foreground">Johannesburg (UTC+2)</span>
          </span>
          <span>•</span>
          <span>Available for Remote Roles & International Builds</span>
        </div>
      </div>

      {/* Centered Rotating Globe Taking Up Its Own Standalone Space */}
      <div className="relative w-full max-w-[520px] sm:max-w-[680px] aspect-square mx-auto flex items-center justify-center">
        {/* Soft Ambient Radial Halo */}
        <div 
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,74,56,0.16),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_70%)] blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <Earth
          mapBrightness={6}
          dark={0.8}
          scale={1.05}
          baseColor={[0.7, 0.7, 0.7]}
          glowColor={[0.1, 0.8, 0.6]}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
