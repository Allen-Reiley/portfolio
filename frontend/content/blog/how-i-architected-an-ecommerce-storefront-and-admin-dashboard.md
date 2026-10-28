---
title: "How I Architected an E-commerce Storefront and Admin Dashboard for Nubifurn"
date: "2026-10-20"
summary: "A technical breakdown of decoupling customer browsing performance from administrative inventory operations, managing multi-option variant matrices, and delivering sub-second experiences."
tags: ["Architecture", "Next.js", "E-Commerce", "TypeScript"]
author: "Reitumetse Sethabela"
---

When building e-commerce infrastructure for high-ticket handcrafted furniture, the engineering requirements diverge sharply into two opposing demands:

1. **The Customer Storefront** must be lightning fast, visually rich, and frictionless. Every additional 100ms of latency directly impacts the customer's perception of luxury and degrades conversion rates.
2. **The Administrative Dashboard** is data-dense, transaction-heavy, and stateful. It needs real-time catalog editing, inventory state tracking, and order inquiry workflows.

Attempting to bundle both workloads into a monolithic application often leads to bloated client bundles, complex auth leaks, and compromised SEO. Here is how I architected the complete dual-application ecosystem for **Nubifurn South Africa**.

---

## 1. Architectural Decoupling: Storefront vs. Dashboard

Rather than building a single shared Next.js app with complex role-based route guards, I decoupled the platform into two independent deployments:

* **Storefront (`nubifurn-frontend`)**: Built with Next.js App Router, React Server Components, and optimized image transformations (AVIF/WebP). Emphasizes SEO metadata, schema markup for Google Shopping, and instantaneous category switching.
* **Dashboard (`nubifurn-dashboard`)**: A private management portal with high-density data tables, SKU variant generation engines, and order pipelines.

### Why Decoupling Won:
- **Zero Bundle Leakage**: Heavy administrative libraries (data grids, charting engines, rich text editors) are completely absent from the customer's mobile browser.
- **Independent Scaling & Deployment**: We can ship new order management features and inventory scripts five times a day without re-triggering storefront static caches or risking customer-facing downtime.

---

## 2. Managing Complex Multi-Variant SKU Matrices

In luxury couches, each model is not a simple static item. A single design like the *Nubifurn Curve* has:
- 3 Dimensions (2-Seater, 3-Seater, L-Shape Sectional)
- 4 Fabric Grades (Bouclé, Velvet, Linen, Full-Grain Leather)
- 12 Colorways
- 3 Leg Finishes (Matte Black, Brushed Brass, Natural Oak)

That represents **432 possible SKU variations** for a single couch model.

### The Solution: Immutable Variant Reducer
Rather than storing 432 individual pre-generated database rows for every design, the catalog stores the base model and option sets. The frontend uses a lightweight immutable state reducer:

```typescript
interface VariantState {
  modelId: string;
  size: '2-seater' | '3-seater' | 'l-shape';
  fabricGrade: 'boucle' | 'velvet' | 'linen' | 'leather';
  colorCode: string;
  legFinish: 'black' | 'brass' | 'oak';
}

function resolveVariantPrice(basePrice: number, selection: VariantState): number {
  const fabricMultiplier = FABRIC_MULTIPLIERS[selection.fabricGrade];
  const sizeAdjustment = SIZE_ADJUSTMENTS[selection.size];
  return (basePrice + sizeAdjustment) * fabricMultiplier;
}
```

This guarantees instantaneous real-time pricing updates (`<16ms`) as customers toggle options, with zero network round-trips.

---

## 3. High-Resolution Visuals on Variable Mobile Networks

South African buyers browse extensively on mobile networks (LTE/5G) where bandwidth can fluctuate. Serving uncompressed 4MB camera RAWs destroys the user experience.

We implemented:
1. **Responsive Next/Image AVIF Pipelines**: Serving responsive `srcset` tailored to device DPR.
2. **Progressive Blur-Up Placeholders**: Immediate perception of layout stability (CLS = 0).
3. **Eager Hero Fetch Priority**: Adding `priority` and `fetchPriority="high"` specifically to above-the-fold hero renders.

---

## Conclusion: Engineering for Real Businesses

The purpose of code is not to showcase framework complexity—it is to eliminate friction between customer intent and commercial revenue. By separating concerns between client browsing and administrative operations, Nubifurn achieved an enterprise-grade digital foundation that scales effortlessly.
