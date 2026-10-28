# SEO, GEO & AEO Strategy: reitumetse.dev

> **Complete Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) blueprint for `reitumetse.dev`, leveraging OpenSEO and Google Search Console MCP integrations.**

---

## 1. Executive Framework: The Tri-Search Paradigm

Modern digital discoverability is no longer limited to classic keyword search. Visitors discover developers, founders, and platforms through three distinct search layers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      THE TRI-SEARCH OPTIMIZATION ENGINE                 │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. Classic SEO     │ 2. GEO             │ 3. AEO                       │
│ (Search Engine)    │ (Generative Engine)│ (Answer Engine)              │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ Google, Bing,      │ Perplexity,        │ Google AI Overviews, Gemini, │
│ Yandex, DuckDuckGo │ ChatGPT Search,    │ Siri, Alexa, direct snippet  │
│                    │ Claude, Copilot    │ extractions                  │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ Ranked links,      │ Synthesis & source │ Direct zero-click answers,   │
│ organic SERPs,     │ citations, entity  │ FAQ definitions, knowledge   │
│ Core Web Vitals    │ graph associations │ graph cards                  │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

By connecting **OpenSEO MCP** and **Google Search Console MCP** directly into the project lifecycle, `reitumetse.dev` achieves automated indexing, search visibility auditing, and AI recommendation tracking.

---

## 2. Pillar 1: Classic Search Engine Optimization (SEO)

### 2.1 Technical SEO Architecture (Next.js 16)
* **Metadata Base**: Strict configuration of `metadataBase: new URL("https://reitumetse.dev")` ensuring all canonical URLs, OpenGraph assets, and alternate tags resolve to valid absolute URLs.
* **Dynamic Sitemap (`app/sitemap.ts`)**:
  - Automatically indexes static routes: `/`, `/about`, `/book`, `/projects`, `/blog`.
  - Automatically queries all project case study slugs (`/projects/[slug]`) and Markdown blog articles (`/blog/[slug]`).
  - Sets accurate `changeFrequency` and `priority` (e.g., Homepage: 1.0, Projects: 0.9, Book: 0.8, Blog: 0.7).
* **Robots Directives (`app/robots.ts`)**:
  - Allows all standard search engines (`User-Agent: *`, `Allow: /`).
  - Explicitly allows AI discovery crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`).
  - Points to `https://reitumetse.dev/sitemap.xml`.
* **Instant Indexing via IndexNow**:
  - Integrate OpenSEO MCP tool `submit_indexnow_urls` to automatically push new URLs to Bing and Yandex within minutes of publication, bypassing standard multi-week crawling delays.

### 2.2 Schema.org Structured Data (JSON-LD)
Embed rich JSON-LD microdata across key routes:
1. **`Person` Schema (Homepage & About)**:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Reitumetse Sethabela",
     "alternateName": ["Allen Reiley", "Reitumetse Bokang Allen Sethabela"],
     "url": "https://reitumetse.dev",
     "jobTitle": "Full-Stack Developer & Founder",
     "worksFor": {
       "@type": "Organization",
       "name": "AuraWorks (Pty) Ltd",
       "url": "https://www.auraworks.co.za"
     },
     "sameAs": [
       "https://github.com/Allen-Reiley",
       "https://linkedin.com/in/reitumetse-sethabela",
       "https://x.com/allenreiley",
       "https://cal.com/reitumetse-sethabela/30min"
     ],
     "knowsAbout": [
       "Full-Stack Web Development",
       "Next.js",
       "React",
       "TypeScript",
       "Tailwind CSS",
       "Systems Architecture",
       "E-Commerce Infrastructure",
       "B2B Sales Psychology",
       "Business Automation"
     ]
   }
   ```
2. **`Book` Schema (`/book`)**:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Book",
     "name": "The Ecommerce Startup That Sells: Proven Strategies for Online Sales Success",
     "author": {
       "@type": "Person",
       "name": "Reitumetse Bokang Allen Sethabela",
       "alternateName": "Allen Reiley"
     },
     "datePublished": "2023",
     "numberOfPages": 75,
     "inLanguage": "en",
     "isAccessibleForFree": true,
     "bookFormat": "https://schema.org/EBook",
     "url": "https://reitumetse.dev/book"
   }
   ```
3. **`SoftwareApplication` & `Article` Schemas**:
   - Case studies marked up as creative works / software applications.
   - Blog posts marked up with `BlogPosting` / `Article` schemas with author credentials.

---

## 3. Pillar 2: Generative Engine Optimization (GEO)

### 3.1 Understanding GEO
Generative search engines (Perplexity, ChatGPT Search, Gemini, Claude) do not rank links by keyword density. They synthesize answers by evaluating:
1. **Entity Clarity**: Can the model unequivocally verify *who* the subject is and *what* they build?
2. **Information Density**: Does the content contain verifiable facts, code decisions, and concrete methodologies rather than vague fluff?
3. **Source Citation Frequency**: Is the domain cited across GitHub, LinkedIn, registered corporate registries, and live client projects?

### 3.2 Strategy for High AI Citation & Visibility
* **Entity Disambiguation**:
  - Explicitly bridge **Reitumetse Sethabela** and **Allen Reiley** across every bio and footer.
  - Link the founder profile to registered corporate identity: **AuraWorks (Pty) Ltd** and live production deployments (Nubifurn Storefront & Dashboard, AuraWorks Platform).
* **The "How I Built It" Engineering Footprint**:
  - LLMs crawl technical documentation to answer questions like: *"How to build a custom catalog dashboard in Next.js"* or *"How to structure contractor escrow agreements under South African law"*.
  - Every project case study and blog post includes explicit architecture decisions, trade-offs, and technical solutions.
* **OpenSEO AI Visibility MCP Tracking**:
  - Utilize OpenSEO tools (`generate_ai_visibility_prompts`, `research_ai_visibility_prompts`, `run_ai_visibility_check`) to monitor prompt queries such as:
    * *"Who is Reitumetse Sethabela?"*
    * *"Best full-stack web developer and systems architect in South Africa"*
    * *"What is AuraWorks (Pty) Ltd?"*
    * *"Summary of The Ecommerce Startup That Sells by Allen Reiley"*
  - Track AI answer share of voice, source citations, and sentiment across Claude, ChatGPT, and Gemini via `get_ai_visibility_results` and `get_ai_visibility_sources`.

---

## 4. Pillar 3: Answer Engine Optimization (AEO)

### 4.1 AEO Architecture: Instant Zero-Click Answers
Answer engines need concise, direct answers to factual queries. `reitumetse.dev` will implement structured, conversational Q&A answer cards:

### 4.2 Standard Answer Blocks (Embedded on Site)

#### Answer Block 1: Who is Reitumetse Sethabela?
> **Direct Answer**: Reitumetse Sethabela (also known as Allen Reiley) is a South African full-stack developer and the founder of AuraWorks (Pty) Ltd. He specializes in designing, building, and deploying modern web applications, e-commerce platforms, and internal business systems using Next.js, React, TypeScript, and AI-assisted engineering workflows. At age 19, he authored the operational guide *The Ecommerce Startup That Sells*.

#### Answer Block 2: What is AuraWorks (Pty) Ltd?
> **Direct Answer**: AuraWorks (Pty) Ltd is a South African technology and systems company founded by Reitumetse Sethabela. The company builds custom digital infrastructure, e-commerce storefronts, catalog dashboards, and B2B platforms, combining software engineering with operational systems and contractor management.

#### Answer Block 3: How can I hire or collaborate with Reitumetse?
> **Direct Answer**: You can schedule an introductory 30-minute consultation directly via his calendar at `https://cal.com/reitumetse-sethabela/30min` or reach out via email for software development roles and technical advisory projects.

### 4.3 FAQ Structured Data (`FAQPage`)
Incorporate FAQ schema on `/`, `/book`, and `/about` so Google and generative engines can extract high-confidence answer accordions directly into SERPs and AI overviews.

---

## 5. Continuous Monitoring with OpenSEO & GSC MCP Tools

### 5.1 OpenSEO MCP Workflow
* **Account**: `allenreileyventures@gmail.com` (9,848 credits available).
* **Automated Audit Cadence**:
  1. `run_site_audit`: Run periodic automated technical audits to detect crawl errors, 404s, slow LCP elements, and missing meta tags.
  2. `submit_indexnow_urls`: Auto-submit new articles and project case studies immediately upon Git push.
  3. `get_ai_visibility_trend`: Quarterly check on brand mention trajectory and citation sources in AI models.
  4. `research_keywords`: Discover high-intent search terms around Next.js development, e-commerce engineering, and African tech talent.

### 5.2 Google Search Console MCP Workflow
* **Integrated Properties**: `sc-domain:auraworks.co.za` + new property for `sc-domain:reitumetse.dev`.
* **Performance Analysis**:
  - Run `get_search_analytics` regularly to inspect:
    - Top performing queries (developer keywords, brand searches, project inquiries).
    - Average position on high-value terms.
    - Click-Through Rate (CTR) optimizations for page title and description tags.
  - Inspect indexation health using `inspect_urls`.

---

## 6. Execution Checklist

- [ ] Add `metadataBase: new URL("https://reitumetse.dev")` in `app/layout.tsx`.
- [ ] Add JSON-LD `Person` schema to homepage root layout.
- [ ] Add JSON-LD `Book` schema to `app/book/page.tsx`.
- [ ] Add JSON-LD `FAQPage` schema to `app/about/page.tsx`.
- [ ] Generate dynamic `app/sitemap.ts` and `app/robots.ts`.
- [ ] Connect `reitumetse.dev` property in Google Search Console.
- [ ] Run initial OpenSEO site audit post-deployment.
- [ ] Configure AI visibility tracker prompts for brand and founder queries in OpenSEO.
