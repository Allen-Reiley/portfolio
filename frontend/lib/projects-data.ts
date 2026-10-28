export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "E-Commerce" | "Web Application" | "Community & Non-Profit";
  status: "Production Live" | "In Active Development";
  liveUrl: string;
  featured: boolean;
  summary: string;
  stack: string[];
  role: string;
  problem: string;
  architecture: {
    description: string;
    highlights: string[];
  };
  challenges: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "nubifurn-frontend",
    title: "Nubifurn Storefront",
    tagline: "Custom E-Commerce Experience for Handcrafted Designer Furniture",
    category: "E-Commerce",
    status: "Production Live",
    liveUrl: "https://nubifurn-frontend.vercel.app/",
    featured: true,
    summary:
      "A bespoke e-commerce storefront built for Nubifurn South Africa, specializing in luxury handcrafted couches and furniture. Features instant product variant customization, fluid transitions, and responsive mobile browsing.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "FastAPI", "Railway", "Vercel"],
    role: "Full-Stack Developer",
    problem:
      "Bespoke luxury furniture requires high visual fidelity, accurate fabric previewing, and clear dimension specifications. Nubifurn needed a custom digital showroom that delivered a smooth, luxury browsing experience without slowing down on mobile connections.",
    architecture: {
      description:
        "Engineered with Next.js App Router and optimized image delivery with progressive placeholders. Client-side state handles multi-option furniture configurations with instantaneous pricing updates, connected to a high-speed Python/FastAPI backend deployed on Railway.",
      highlights: [
        "Minimalist, editorial luxury layout with generous whitespace and clear typography.",
        "Real-time product customizer updating live pricing and configuration estimates.",
        "Mobile-first responsive design optimized for direct customer purchasing inquiries.",
        "Optimistic UI updates for instant category filtering and search.",
      ],
    },
    challenges: [
      {
        title: "High-Resolution Image Loading on Mobile",
        description:
          "Implemented progressive image placeholders and responsive srcset transforms to maintain sub-second LCP on cellular connections.",
      },
      {
        title: "Dynamic Variant State Coordination",
        description:
          "Engineered an immutable state machine to track interdependent fabric grades, sizes, and finishes without unnecessary re-renders.",
      },
    ],
    outcomes: [
      "Delivered a live, self-service digital showroom that elevated the brand's online presence.",
      "Streamlined customer purchasing decisions by providing upfront clarity on dimensions, finishes, and pricing.",
    ],
  },
  {
    slug: "nubifurn-dashboard",
    title: "Nubifurn Operations Dashboard",
    tagline: "Internal Management Portal for Products, Inventory & Inquiries",
    category: "Web Application",
    status: "Production Live",
    liveUrl: "https://nubifurn.vercel.app/",
    featured: true,
    summary:
      "The administrative command center for Nubifurn. Provides management with real-time control over product catalogs, inventory states, customer inquiries, and sales visibility.",
    stack: ["Next.js 15", "React 19", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Railway"],
    role: "Full-Stack Developer",
    problem:
      "Managing custom furniture orders with manual spreadsheets created operational blind spots and delayed customer updates. The business needed a centralized portal to manage products, track inquiry statuses, and control catalog updates in real time.",
    architecture: {
      description:
        "Built as an independent administrative portal backed by PostgreSQL on Railway and Python/FastAPI services. Decoupled from the public storefront to keep admin dependencies isolated and secure.",
      highlights: [
        "Data-dense catalog editor supporting variant matrix generation and image management.",
        "Inquiry pipeline tracker with structured stages from initial quote to delivery.",
        "High-performance FastAPI service layer executing queries with sub-25ms latency.",
      ],
    },
    challenges: [
      {
        title: "Decoupling Admin State from Customer Browsing",
        description:
          "Separated the admin dashboard into its own deployment, isolating heavy administrative operations from public storefront static caches.",
      },
      {
        title: "Complex Variant SKU Matrix Management",
        description:
          "Structured efficient relational tables on PostgreSQL to manage combinations across sizes, fabrics, and finishes without UI lag.",
      },
    ],
    outcomes: [
      "Provided the operational team with a single source of truth for all furniture inventory and customer orders.",
      "Reduced customer inquiry turnaround times significantly.",
    ],
  },
  {
    slug: "auraworks",
    title: "AuraWorks Platform",
    tagline: "Web Application & Technical Infrastructure for AuraWorks (Pty) Ltd",
    category: "Web Application",
    status: "Production Live",
    liveUrl: "https://www.auraworks.co.za/",
    featured: true,
    summary:
      "The public web platform and technical systems infrastructure for AuraWorks (Pty) Ltd, integrating search auditing workflows and modern service delivery architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Railway", "Vercel"],
    role: "Founder & Full-Stack Developer",
    problem:
      "Establishing a credible digital presence for a newly registered technology company required demonstrating real engineering competence, fast load times, and clean systems architecture.",
    architecture: {
      description:
        "Server-rendered Next.js application built with edge caching, accessible components, and clean data pipelines deployed on Vercel and Railway.",
      highlights: [
        "High performance with sub-second page loads and strong Core Web Vitals.",
        "Integrated SEO and search auditing interfaces.",
        "Clean, modern component architecture.",
      ],
    },
    challenges: [
      {
        title: "Performance & Responsive Polish",
        description:
          "Ensured crisp typography and smooth layout transitions across both mobile and desktop viewports.",
      },
    ],
    outcomes: [
      "Serves as the corporate home and verification base for client engagements.",
      "Provides a clean foundation for ongoing platform and client feature development.",
    ],
  },
  {
    slug: "flp-church",
    title: "FLP Church Platform",
    tagline: "Community Information & Media Hub",
    category: "Community & Non-Profit",
    status: "In Active Development",
    liveUrl: "https://flp-woad.vercel.app/",
    featured: false,
    summary:
      "A clean, accessible community website built for FLP Church. Centralizes service times, event schedules, ministry details, and media archives.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Full-Stack Developer",
    problem:
      "Community members needed a dependable, easy-to-navigate website to check meeting times, locations, and watch archived messages without navigating disjointed social media feeds.",
    architecture: {
      description:
        "High-contrast, accessible community portal designed with simple navigation patterns suitable for all age demographics.",
      highlights: [
        "Clear service schedules and event calendars.",
        "Accessible typography conforming to WCAG standards.",
        "Fast mobile loading on standard cellular connections.",
      ],
    },
    challenges: [
      {
        title: "Accessibility for Diverse Demographics",
        description:
          "Focused on large touch targets, high contrast ratios, and simplified navigation.",
      },
    ],
    outcomes: [
      "Currently in active development and preparing for community rollout.",
    ],
  },
  {
    slug: "tilulu",
    title: "Tilulu Non-Profit",
    tagline: "Transparent Impact Storytelling & Contribution Platform",
    category: "Community & Non-Profit",
    status: "In Active Development",
    liveUrl: "https://tilulu.vercel.app/",
    featured: false,
    summary:
      "A dedicated non-profit web presence designed to communicate social impact transparently and facilitate donor support.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Full-Stack Developer",
    problem:
      "Non-profit initiatives need clear, transparent digital storytelling to communicate where resources are deployed and what impact is being achieved.",
    architecture: {
      description:
        "Editorial-driven web platform centered on verified project milestones, community storytelling, and simple donation flows.",
      highlights: [
        "Transparent project milestone tracking.",
        "Clean, distraction-free contribution experience.",
      ],
    },
    challenges: [
      {
        title: "Clarity & Trust",
        description:
          "Structured the layout to prioritize verifiable project updates and straightforward information.",
      },
    ],
    outcomes: [
      "Currently in active staging and user testing.",
    ],
  },
];
