# reitumetse.dev — Project Specification & Architecture Blueprint

> **Official technical specification, visual design system, information architecture, and component requirements for `reitumetse.dev` — Personal Developer Platform & Portfolio for Reitumetse Sethabela (Allen Reiley), Founder & Full-Stack Developer at AuraWorks (Pty) Ltd.**

---

## 1. Executive Summary & Brand Positioning

### 1.1 Core Identity
* **Name**: Reitumetse Sethabela (publishing & branding as **Allen Reiley**)
* **Age**: 22 (turning 23 on November 15)
* **Title**: Full-Stack Developer & Technical Founder
* **Company**: Founder & Full-Stack Developer at **AuraWorks (Pty) Ltd**
* **Primary Domain**: `reitumetse.dev` (Hosted on Vercel)
* **Primary Conversion Goal (CTA)**: Direct meeting scheduling via [`https://cal.com/reitumetse-sethabela/30min`](https://cal.com/reitumetse-sethabela/30min)

### 1.2 Strategic Value Proposition
Unlike conventional junior developer portfolios that merely list syntax or framework logos, `reitumetse.dev` establishes a multi-dimensional authority:
1. **Full-Stack Software Engineering**: Delivering end-to-end production web applications, administration portals, and distributed systems.
2. **Commercial & Sales Grounding**: Leveraging frontline B2B sales and objection-handling experience to engineer software that addresses genuine revenue, operational, and customer needs.
3. **Systems & AI-Assisted Leverage**: Utilizing advanced AI pipelines (Antigravity CLI, OpenSEO, GSC) to accelerate development, architectural testing, debugging, and search optimization.
4. **South African Youth Mission & Open Authority**: Author of *"The Ecommerce Startup That Sells"* at 19; democratizing practical business frameworks and SOPs for the next generation without predatory guru paywalls.

---

## 2. Visual Design System & Aesthetics

### 2.1 Aesthetic Principles: Minimalist & Refined
* **Philosophy**: High clarity, generous whitespace, deliberate typography, subtle micro-interactions, and zero visual clutter. No distracting neon glows or heavy cyberpunk styling.
* **Liquid Glass Treatment**: Translucent glassmorphism applied to navigation and interactive containers (inspired by the liquid-glass aesthetic: `backdrop-blur-md`, subtle border highlights `border-white/10` or `border-black/5`, and ambient light refraction).
* **Theme Support**: Flawless **Dark Mode** and **Light Mode** with a seamless toggle and no flash on load.
  * *Dark Theme*: Deep obsidian and slate surfaces (`#090D12`, `#111620`), crisp white-to-neutral text, subtle translucent borders.
  * *Light Theme*: Crisp clean paper whites and light zinc grays (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`), deep charcoal typography, refined borders.
* **Typography**:
  * **Sans-Serif**: `Geist Sans` / `Inter` for editorial clarity and clean reading.
  * **Monospace**: `Geist Mono` / `JetBrains Mono` for tech tags, code snippets, timestamps, and architectural metadata.

---

## 3. Information Architecture & Sitemap

```
reitumetse.dev
│
├── / (Home)
│   ├── Liquid-Glass Morphic Navbar (Sticky / Floating)
│   ├── Hero Section: Minimalist Positioning + Dual CTAs ("Book a Call" & "Explore Work")
│   ├── Global Capability Feature (Interactive 3D Globe + "Work & Design Worldwide" Copy)
│   ├── Featured Projects Grid (Nubifurn Storefront, Nubifurn Dashboard, AuraWorks)
│   ├── Client Video Testimonial (Nubifurn SVG-Masked Video Review)
│   ├── Currently Building Preview (FLP Church, Tilulu Nonprofit)
│   ├── The Book: "The Ecommerce Startup That Sells" (High-Value Presentation + Free Download)
│   ├── Recent Articles (MDX Blog Engine preview)
│   └── Global Footer (Cal.com Booking, GitHub, LinkedIn, X, AuraWorks Link)
│
├── /projects
│   ├── Overview of all 5 projects with category filters (E-Commerce, B2B Platforms, Community)
│   └── /projects/[slug] (In-depth Architectural Case Studies)
│       ├── /projects/auraworks
│       ├── /projects/nubifurn-storefront
│       ├── /projects/nubifurn-dashboard
│       ├── /projects/flp-church
│       └── /projects/tilulu
│
├── /book
│   └── Dedicated presentation page for "The Ecommerce Startup That Sells"
│       ├── Context (Written at 19, Foundation for AuraWorks)
│       ├── Chapter Breakdown & 5 Essential SOPs
│       ├── Free PDF Download Button (Direct, elevated delivery)
│       └── Reader & Builder FAQ
│
├── /blog
│   ├── Clean editorial writing index
│   └── /blog/[slug] (Local Markdown/MDX post renderer with zero ads)
│
└── /about
    └── The 19-to-23 Founder Arc, Sales Experience, Engineering Philosophy & AuraWorks
```

---

## 4. Key Interactive Components & Specifications

### 4.1 Liquid-Glass Morphic Navbar
* **Component Basis**: Morphic navigation bar with fluid tab indicator.
* **Styling Evolution**: Enhanced with the **Liquid Glass Sidebar/Menu** design tokens:
  * Floating pill or rounded bar pinned to viewport top with comfortable margins.
  * Translucent background blur: `backdrop-blur-xl bg-background/60 border border-border/40`.
  * Subtle hover states with physics-based spring transitions.
  * Controls included: Navigation links (Work, Book, Blog, About), Dark/Light Mode Toggle, and Primary CTA button (`Book Call` $\rightarrow$ Cal.com).
  * Mobile responsive: Fluid drawer/morphic menu on small viewports.

### 4.2 Interactive 3D Globe Component (`CardGlobeWhite` / `Earth`)
* **Component Location**: Homepage hero/capability section.
* **Component Basis**: WebGL/Canvas interactive globe (`@/components/ui/globe` / `Earth`).
* **Design & Copywriting Integration**:
  * Clean card framing with subtle grid/dot background.
  * Copywriting Focus: **"Engineered for the Global Market — Designing & Building from Anywhere in the World."**
  * Demonstrates international readiness, ability to collaborate across timezones (US, Europe, Africa), and global delivery standards.

### 4.3 Nubifurn Video Review Masking (`CreativeVideoMasking`)
* **Component Location**: Social proof / case study section on Homepage.
* **Component Basis**: SVG-masked video element utilizing a custom organic badge silhouette.
* **Functional Role**:
  * Plays video feedback or product walkthrough from the **Nubifurn** bespoke furniture project.
  * Autoplay (muted), loopable, with interactive audio un-mute or modal player.
  * Paired with client testimonial quote, metrics, and direct link to the Nubifurn case study.

### 4.4 Dual Project Presentation Engine
1. **High-Level Visual Cards (Showcase)**:
   * High-definition screenshots/mockups.
   * Project status tags: `Live in Production` vs. `In Active Development`.
   * Tech stack chips: `Next.js`, `TypeScript`, `Tailwind CSS`, `Supabase`, etc.
   * Direct actions: *Live Site Link $\nearrow$* and *Read Full Case Study $\rightarrow$*.
2. **Deep Architectural Case Studies (`/projects/[slug]`)**:
   * Structured rigorously around four engineering pillars:
     1. **The Commercial Problem**: What operational bottleneck or revenue goal required this software?
     2. **System Architecture**: Data flow, state management, API boundaries, and database models.
     3. **Technical Challenges & Trade-offs**: What broke, how it was debugged, and why specific technical decisions were made.
     4. **Business Outcome & Metrics**: Quantitative and qualitative results achieved.

### 4.5 Premium Book Showcase ("The Ecommerce Startup That Sells")
* **Tone & Perception**: Presented as an authoritative, high-value systems operating manual rather than a cheap giveaway.
* **Visual Presentation**:
  * 3D or high-resolution book cover render.
  * Value breakdown: Highlighting the 75-page scope, the 5 Essential SOPs (Marketing, Sales, Onboarding, Fulfillment, Retention), legal contract templates, and logic-gate algorithms.
  * Direct Free PDF Download: A refined, instant download button initiating direct download of [`The Ecommerce Startup That Sells- Proven Strategies for Online Sales Success.pdf`](file:///home/allenreiley7/projects/portfolio/docs/The%20Ecommerce%20Startup%20That%20Sells-%20Proven%20Strategies%20for%20Online%20Sales%20Success.pdf).
  * Anti-guru philosophy banner: Highlighting the commitment to empowering African youth without selling courses or extracting fees from beginners.

### 4.6 File-Based Markdown/MDX Blog Engine
* **Storage**: Local Markdown (`.md` or `.mdx`) files stored directly in `content/blog/` within the repository.
* **Attributes**: Frontmatter metadata (title, summary, date, readingTime, tags, author).
* **Display**:
  * Beautiful typography with Tailwind Typography (`prose prose-zinc dark:prose-invert`).
  * Syntax highlighted code blocks for code snippets.
  * **100% Ad-Free**: Pure editorial layout with zero promotional clutter.

### 4.7 Conversion Funnel & Booking Integration
* **Primary Conversion URL**: `https://cal.com/reitumetse-sethabela/30min`
* **Placement**:
  * Top navigation bar persistent CTA button.
  * Hero secondary action ("Schedule 30-min Call").
  * End of every project case study ("Have a project or opportunity? Let's discuss").
  * Dedicated contact footer block with timezone availability (Johannesburg / GMT+2, adaptable to GMT/EST/PST).

---

## 5. Technical Stack & Tooling

| Layer | Selected Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) + React 19 | Modern Server Components, optimal performance, fast route transitions. |
| **Styling** | Tailwind CSS v4 | High-performance CSS-first architecture, zero build lag. |
| **Animation & Motion** | `motion` (Framer Motion) | Smooth spring physics for liquid glass navbar and scroll reveals. |
| **Theme System** | `next-themes` | Clean light/dark toggle without flash of unstyled content. |
| **Component Primitives** | shadcn/ui + Radix UI + Lucide React | Accessible, headless, fully customizable UI foundations. |
| **Interactive 3D** | Cobe / Three.js Canvas (`@/components/ui/globe`) | Lightweight WebGL 3D globe visualization for global remote work. |
| **Content Engine** | Local `.md` / `.mdx` + `next-mdx-remote` or `gray-matter` | Version-controlled, zero external CMS dependency. |
| **Package Manager** | `pnpm` | Fast, deterministic, disk-efficient package management. |
| **Hosting & CI/CD** | Vercel | Seamless preview deployments, edge routing, automated DNS for `reitumetse.dev`. |

---

## 6. Target Audience Alignment

```
                         ┌─────────────────────────────────────────┐
                         │             reitumetse.dev              │
                         └────────────────────┬────────────────────┘
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    ▼                                                   ▼
       [ Recruiters & Tech Employers ]                         [ B2B Clients & Partners ]
  • Production Next.js & React 19 code                    • Proven commercial e-commerce systems
  • Clear systems architecture decisions                  • Complete business understanding (Sales + SOPs)
  • Rigorous case studies with code & trade-offs          • Turnkey execution through AuraWorks (Pty) Ltd
  • Ability to leverage AI tools responsibly              • Direct booking via Cal.com
```

This specification forms the master architectural blueprint for all design, component construction, and code implementation on `reitumetse.dev`.

---

## 7. SEO, GEO & AEO Architecture (OpenSEO & Search Console MCPs)

To ensure maximum discoverability across classic search, generative AI, and answer engines, `reitumetse.dev` integrates:
1. **Classic SEO**: Next.js 16 metadata, dynamic `sitemap.ts`, `robots.ts`, IndexNow protocol integration via OpenSEO MCP (`submit_indexnow_urls`), and real-time Search Console query analytics (`get_search_analytics`).
2. **Generative Engine Optimization (GEO)**: Entity disambiguation (Reitumetse Sethabela $\leftrightarrow$ Allen Reiley $\leftrightarrow$ AuraWorks), dense technical case studies, and automated AI visibility prompt tracking using OpenSEO (`run_ai_visibility_check`, `get_ai_visibility_results`).
3. **Answer Engine Optimization (AEO)**: JSON-LD schemas (`Person`, `Book`, `FAQPage`, `SoftwareApplication`) with explicit zero-click Q&A answer blocks optimized for Google AI Overviews, Perplexity, and voice assistants.

*See the dedicated [SEO_GEO_AEO_STRATEGY.md](file:///home/allenreiley7/projects/portfolio/docs/SEO_GEO_AEO_STRATEGY.md) for full operational blueprints.*

