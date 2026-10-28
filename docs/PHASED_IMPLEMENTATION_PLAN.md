# Phased Implementation Plan: reitumetse.dev

> **Comprehensive step-by-step technical execution roadmap for building, testing, optimizing, and deploying `reitumetse.dev`.**

---

## Overview of Implementation Phases

```
┌────────────────────────────────────────────────────────────────────────┐
│                        7-PHASE EXECUTION ROADMAP                       │
├─────────┬──────────────────────────────────┬───────────────────────────┤
│ Phase 1 │ Environment & Foundations        │ Next.js 16, Tailwind v4,  │
│         │                                  │ Motion, Theme System      │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 2 │ Design Tokens & Layout Shell     │ Liquid-Glass Navbar,      │
│         │                                  │ Theme Toggle, Footer, CTA │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 3 │ Core Visual & Interactive Feats  │ 3D Globe Card, SVG-Masked │
│         │                                  │ Nubifurn Video Review     │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 4 │ Dual Project Showcase Engine     │ Interactive Project Grid  │
│         │                                  │ + Deep Case Studies       │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 5 │ Premium Book Platform            │ High-value Showcase +     │
│         │                                  │ Direct Free PDF Engine    │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 6 │ Local Markdown Blog Engine       │ Frontmatter parser, MDX/MD│
│         │                                  │ renderer, Ad-free layout  │
├─────────┼──────────────────────────────────┼───────────────────────────┤
│ Phase 7 │ SEO, Verification & Vercel Launch│ Metadata, OG images, GSC, │
│         │                                  │ Cal.com integration, Live │
└─────────┴──────────────────────────────────┴───────────────────────────┘
```

---

## Phase 1: Environment, Dependencies & Base Architecture

### Objectives
Establish a clean, modern Next.js 16 (App Router) foundation with React 19, Tailwind CSS v4, Motion, TypeScript, and a persistent dark/light theme engine.

### Action Steps
1. **Dependency Installation**:
   Ensure all essential packages are installed via `pnpm`:
   ```bash
   pnpm add motion clsx tailwind-merge next-themes lucide-react gray-matter
   pnpm add -D @types/node @types/react @types/react-dom typescript
   ```
2. **Component Utilities Setup**:
   Initialize shadcn UI primitives and Kokonut UI utility handlers:
   ```bash
   pnpm dlx shadcn@latest init
   pnpm dlx shadcn@latest add https://kokonutui.com/r/utils.json
   ```
   Ensure `lib/utils.ts` exists with standard `cn()` helper (`clsx` + `twMerge`).
3. **Theme Provider Integration**:
   - Create `components/theme-provider.tsx` wrapping `next-themes` (`ThemeProvider` with `attribute="class"` and `defaultTheme="system"`).
   - Configure Tailwind v4 CSS variables in `app/globals.css` to handle light and dark color schemes smoothly without flash of unstyled content.
4. **Directory Structure Standardization**:
   ```
   frontend/
   ├── app/
   │   ├── (site)/
   │   │   ├── page.tsx                 # Homepage
   │   │   ├── projects/
   │   │   │   ├── page.tsx             # Projects index
   │   │   │   └── [slug]/page.tsx      # Deep Case Studies
   │   │   ├── book/page.tsx            # Premium Book showcase
   │   │   ├── blog/
   │   │   │   ├── page.tsx             # Blog index
   │   │   │   └── [slug]/page.tsx      # Markdown post reader
   │   │   └── about/page.tsx           # Founder story & mission
   │   ├── layout.tsx                   # Root layout with ThemeProvider
   │   ├── globals.css                  # Tailwind v4 styles & theme vars
   │   └── sitemap.ts                   # Dynamic sitemap generator
   ├── components/
   │   ├── navbar/                      # Liquid-glass morphic navbar
   │   ├── ui/                          # Globe, buttons, cards, badges
   │   ├── home/                        # Hero, globe card, video review
   │   ├── projects/                    # Project cards & case study layout
   │   └── theme-toggle.tsx             # Dark/Light switcher
   ├── content/
   │   ├── blog/                        # Local .md blog articles
   │   └── projects/                    # Detailed project markdown / data
   └── public/
       ├── book/                        # The Ecommerce Startup That Sells.pdf
       └── images/                      # Project screenshots & assets
   ```

---

## Phase 2: Design Tokens & Layout Shell

### Objectives
Build the unified layout shell featuring the **Liquid-Glass Morphic Navbar**, a sleek **Dark/Light Mode Toggle**, and the global conversion trigger to **Cal.com**.

### Action Steps
1. **Liquid-Glass Morphic Navbar**:
   - Import the Kokonut UI morphic-navbar base component:
     ```bash
     npx shadcn@latest add https://kokonutui.com/r/morphic-navbar.json
     ```
   - Restyle the component using the **liquid-glass aesthetic** (from `https://ui-layouts.com/r/liquid-glass-sidebar-menu`):
     - Fluid frosted glass styling (`backdrop-blur-xl bg-background/70 border border-white/10 dark:border-white/5 shadow-lg`).
     - Animated active indicator pill using `motion/react`.
     - Integrated route links: `Work`, `About`, `Book`, `Writing`.
2. **Dark/Light Theme Toggle**:
   - Implement an elegant sun/moon icon toggle using `next-themes` and `motion` for rotating transitions.
   - Embed seamlessly into the right side of the navbar.
3. **Cal.com Global Quick-Action Button**:
   - High-contrast button on navbar: `"Book 30-Min Call"`.
   - Links directly to `https://cal.com/reitumetse-sethabela/30min` with optional modal embed.
4. **Minimalist Site Footer**:
   - Clear copyright for Reitumetse Sethabela / AuraWorks (Pty) Ltd.
   - Direct links to GitHub, LinkedIn, X, and Cal.com.
   - Clean status indicator: `"Available for select engineering & advisory projects"`.

---

## Phase 3: Interactive Visual Components & Social Proof

### Objectives
Implement the standout visual features: the **Interactive 3D Globe Card** and the **SVG-Masked Nubifurn Video Review**.

### Action Steps
1. **Interactive 3D Globe Component (`CardGlobeWhite` / `Earth`)**:
   - Setup WebGL Earth canvas (`@/components/ui/globe`).
   - Wrap in a minimalist, card-based layout with a subtle dot grid pattern.
   - Integrate refined global copywriting:
     - Header: *"DESIGN & SCALE GLOBALLY"*
     - Subhead: *"Based in South Africa. Architecting high-converting web applications, CRM engines, and operational platforms for clients worldwide."*
     - Highlights: Cross-timezone collaboration (GMT+2 / UTC / EST / PST).
2. **Nubifurn Video Review Component (`CreativeVideoMasking`)**:
   - Incorporate the custom SVG mask definition from `docs/additions.md`.
   - Embed a crisp video player container playing a real product walkthrough / client review from the **Nubifurn** e-commerce deployment.
   - Include client attribution:
     - Client: Nubifurn South Africa (Luxury Handcrafted Furniture).
     - Result: Complete digital storefront + custom admin catalog management system.
     - Interactive controls: Click-to-play audio or expand to full modal.

---

## Phase 4: Dual Project Showcase Engine

### Objectives
Create both a high-impact visual project grid for quick scanning and comprehensive architectural case study pages for deep evaluation by recruiters and enterprise clients.

### Action Steps
1. **High-Level Project Showcase Cards**:
   - Build cards for each of the 5 projects:
     1. **Nubifurn Storefront**: Customer e-commerce experience, custom couch visualizer & checkout.
     2. **Nubifurn Dashboard**: Internal administration, product catalog, inventory tracking, order management.
     3. **AuraWorks Platform**: Flagship B2B enterprise intelligence platform, SEO/GEO auditing architecture.
     4. **FLP Church**: Community engagement platform and live broadcast schedule (In Development).
     5. **Tilulu**: Nonprofit donation experience and community outreach portal (In Development).
   - Display project badges (`Production Live` vs `Active Development`), stack tags (`Next.js`, `Supabase`, etc.), and live external links.
2. **Deep Architectural Case Studies (`/projects/[slug]`)**:
   - Develop a dynamic case study page template in `app/projects/[slug]/page.tsx`.
   - Structure each case study with 4 standardized engineering sections:
     - **The Commercial Problem**: What operational pain or business opportunity required this software?
     - **System Architecture**: Highlighting frontend, backend, database models, and integrations.
     - **Technical Challenges & Solutions**: Trade-offs, bug fixes, edge cases, and performance optimizations.
     - **Business Impact & Metrics**: Real business outcomes.
   - Link each case study directly to its live production URL.

---

## Phase 5: Premium Book Showcase & Free Distribution Engine

### Objectives
Elevate *"The Ecommerce Startup That Sells"* into an authoritative, high-perceived-value asset that builds immense trust with visitors and empowers young South Africans.

### Action Steps
1. **Asset Staging**:
   - Copy `The Ecommerce Startup That Sells- Proven Strategies for Online Sales Success.pdf` to `public/book/the-ecommerce-startup-that-sells.pdf`.
2. **Showcase Layout (`/book` & Homepage Feature)**:
   - High-definition book presentation with dimensional styling (subtle drop shadows and spine highlight).
   - Summary of origin: Synthesized at age 19 from deep digital commerce research; served as the operational seed for AuraWorks (Pty) Ltd.
   - Structural Breakdown:
     - The 5 Essential SOPs (Marketing, Sales, Onboarding, Fulfillment, Retention).
     - McDonald's-grade Policy $\rightarrow$ Process $\rightarrow$ System $\rightarrow$ SOP logic trees.
     - Independent Contractor & Client Legal Contract templates.
     - Consumer Psychology (Primal Desires + Tony Robbins' 6 Human Needs).
3. **Elevated Free Download Trigger**:
   - Prominent, elegant download button initiating instant direct download of the PDF.
   - Moral Authority Callout:
     > *"I don't believe in gatekeeping knowledge or selling high-ticket courses to broke students. This 75-page operating blueprint is completely free. Take the systems, learn the skills, and build your own vehicle."*

---

## Phase 6: Local Markdown Blog Engine (100% Ad-Free)

### Objectives
Deploy a clean, fast editorial platform reading version-controlled Markdown files stored directly in the repository, with zero advertising clutter.

### Action Steps
1. **Content Repository Setup**:
   - Create `content/blog/` directory.
   - Add initial high-signal articles (e.g., *How I Architected an E-commerce Storefront and Admin Dashboard*, *Why I Wrote a Business Book at 19 and Then Learned to Code*, *The Developer-Operator Advantage*).
2. **Markdown Parser & Renderer**:
   - Implement lightweight frontmatter parser using `gray-matter`.
   - Render clean editorial pages with Tailwind Typography (`prose prose-zinc dark:prose-invert max-w-3xl`).
   - Include estimated reading time, publication date, and tag pills.
3. **Pure Editorial Experience**:
   - Keep layout strictly ad-free, focusing on typography, syntax-highlighted code blocks, and diagrams.
   - Include author sign-off box with direct link to book a 30-min call.

---

## Phase 7: SEO, GEO, AEO, Verification & Vercel Launch

### Objectives
Finalize production readiness, achieve near-perfect Lighthouse scores, set up Open Graph previews, connect `reitumetse.dev` on Vercel, and automate discovery across search, generative AI, and answer engines using OpenSEO and Google Search Console MCPs.

### Action Steps
1. **Metadata, Open Graph & Structured Data (JSON-LD)**:
   - Update `app/layout.tsx` metadata with `metadataBase: new URL("https://reitumetse.dev")`.
   - Embed JSON-LD schemas (`Person`, `Book`, `FAQPage`, `SoftwareApplication`).
   - Configure dynamic OpenGraph cards (`app/opengraph-image.tsx`) displaying:
     - Name: Reitumetse Sethabela (Allen Reiley)
     - Tagline: Full-Stack Developer & Technical Founder
2. **Search Console & Crawl Directives**:
   - Create valid `app/robots.ts` and dynamic `app/sitemap.ts` listing all routes (`/`, `/projects`, `/projects/*`, `/book`, `/blog`, `/about`).
   - Add Google Search Console verification meta tag.
   - Use `search-console` MCP tool `get_search_analytics` to inspect baseline queries, impressions, CTR, and indexing status.
3. **OpenSEO MCP Automated Indexing & Site Auditing**:
   - Use `submit_indexnow_urls` to automatically submit all live URLs to Bing/Yandex upon deployment.
   - Run `run_site_audit` to scan for broken links, missing headings, slow LCP elements, and image optimization issues.
4. **GEO & AEO Visibility Tracking (OpenSEO)**:
   - Setup AI visibility tracking prompts (`generate_ai_visibility_prompts`, `run_ai_visibility_check`) to monitor brand citations, sentiment, and answer extraction across Perplexity, ChatGPT Search, Claude, and Gemini.
5. **Performance & Accessibility Auditing**:
   - Verify 95+ Core Web Vitals across Desktop and Mobile.
   - Test full keyboard navigation, ARIA landmarks, tap targets, and contrast ratios in both light and dark themes.
6. **Vercel Deployment & Custom Domain**:
   - Push repository to GitHub.
   - Link project to Vercel and map custom domain `reitumetse.dev`.
   - Verify SSL/HTTPS certificate and test Cal.com booking flow end-to-end.
