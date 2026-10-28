import { SiteHeader } from "@/components/navbar/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { NubifurnVideoReview } from "@/components/home/nubifurn-video-review";
import { ShippedSystemsShowcase } from "@/components/home/shipped-systems-showcase";
import { AiMethodologySection } from "@/components/home/ai-methodology-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { TimelineNarrativeSection } from "@/components/home/timeline-narrative-section";
import { GlobalCapabilityCard } from "@/components/home/global-capability-card";
import { BookShowcaseSection } from "@/components/home/book-showcase-section";
import { RecentWritingSection } from "@/components/home/recent-writing-section";
import { CtaSection } from "@/components/home/cta-section";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-forest selection:text-white">
      {/* Swiss Editorial × Bento Liquid Navigation */}
      <SiteHeader />

      {/* Main Expansive Canvas */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 sm:px-8 space-y-24 sm:space-y-36">
        {/* 01. Hero with Right-Aligned Chest Cutout Portrait */}
        <HeroSection />

        {/* 02. Client Review Masked Video (Directly Below Hero, Zero Overlay Text) */}
        <NubifurnVideoReview />

        {/* 03. Shipped Systems (Bento Card Architecture with Live Interactive Iframes) */}
        <ShippedSystemsShowcase />

        {/* 04. AI-Assisted Development Methodology (Core Engineering Differentiator) */}
        <AiMethodologySection />

        {/* 05. Languages, Frameworks & Infrastructure (Forest Green Bento Tiles) */}
        <TechStackSection />

        {/* 06. The Commercial Narrative & Engineering Transition (AuraWorks Founded in 2025) */}
        <TimelineNarrativeSection />

        {/* 07. Centered Rotating Earth Globe (Worldwide Distributed Capability) */}
        <GlobalCapabilityCard />

        {/* 08. The Monograph Handbook (The Ecommerce Startup That Sells) */}
        <BookShowcaseSection />

        {/* 09. Engineering Notes & Retrospectives */}
        <RecentWritingSection posts={recentPosts} />

        {/* 10. Dual Inquiry Paths (Recruitment Offers & Commercial Systems) */}
        <CtaSection />
      </main>

      {/* Editorial Footer */}
      <SiteFooter />
    </div>
  );
}
