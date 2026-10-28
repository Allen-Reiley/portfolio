import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reitumetse.dev"),
  title: {
    default: "Reitumetse Sethabela | Full-Stack Developer & Technical Founder",
    template: "%s | Reitumetse Sethabela",
  },
  description:
    "Full-Stack Developer and Founder of AuraWorks (Pty) Ltd. Engineering full-stack web applications, internal logistics engines, and commercial systems with AI-assisted development methodologies.",
  keywords: [
    "Reitumetse Sethabela",
    "Allen Reiley",
    "Full-Stack Developer",
    "Technical Founder",
    "AuraWorks",
    "Next.js Developer",
    "FastAPI Developer",
    "Python Developer",
    "PostgreSQL",
    "Railway",
    "AI-Assisted Development",
    "South Africa Developer",
    "The Ecommerce Startup That Sells",
  ],
  authors: [{ name: "Reitumetse Sethabela", url: "https://reitumetse.dev" }],
  creator: "Reitumetse Sethabela",
  publisher: "AuraWorks (Pty) Ltd",

  // Open Graph
  openGraph: {
    title: "Reitumetse Sethabela | Full-Stack Developer & Technical Founder",
    description:
      "Engineering software with commercial intent. Full-stack developer, founder of AuraWorks (Pty) Ltd, and author of The Ecommerce Startup That Sells.",
    url: "https://reitumetse.dev",
    siteName: "reitumetse.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Reitumetse Sethabela — Full-Stack Developer & Technical Founder",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Reitumetse Sethabela | Full-Stack Developer & Technical Founder",
    description:
      "Engineering software with commercial intent. Full-stack developer and founder of AuraWorks (Pty) Ltd.",
    creator: "@Allen_Reiley",
    images: ["/images/og-preview.png"],
  },

  // Favicons & App Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://reitumetse.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://reitumetse.dev/#person",
      name: "Reitumetse Sethabela",
      alternateName: [
        "Allen Reiley",
        "Reitumetse Bokang Allen Sethabela",
        "Bokang Sethabela",
      ],
      url: "https://reitumetse.dev",
      image: "https://reitumetse.dev/images/reitumetse-chest.png",
      jobTitle: "Full-Stack Developer & Founder",
      description:
        "Full-Stack Developer, Founder of AuraWorks (Pty) Ltd, and Author of The Ecommerce Startup That Sells. Architecting Next.js 16, React 19, FastAPI, and PostgreSQL systems.",
      worksFor: {
        "@type": "Organization",
        "@id": "https://www.auraworks.co.za/#organization",
        name: "AuraWorks (Pty) Ltd",
        url: "https://www.auraworks.co.za",
      },
      sameAs: [
        "https://github.com/Allen-Reiley",
        "https://linkedin.com/in/reitumetse-sethabela",
        "https://x.com/allenreiley",
        "https://cal.com/reitumetse-sethabela/30min",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "AI-Assisted Software Engineering",
        "Next.js 16",
        "React 19",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Railway Cloud",
        "TypeScript",
        "Tailwind CSS v4",
        "Systems Architecture",
        "E-Commerce Systems",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full-Stack Software Engineer",
        skills: "Next.js, React, FastAPI, Python, PostgreSQL, TypeScript, Tailwind CSS, AI-Assisted Engineering",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://reitumetse.dev/#website",
      url: "https://reitumetse.dev",
      name: "Reitumetse Sethabela Portfolio",
      description: "Engineering software with commercial intent. Full-stack developer, founder of AuraWorks (Pty) Ltd, and author of The Ecommerce Startup That Sells.",
      publisher: {
        "@id": "https://reitumetse.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased selection:bg-[#1E4A38] selection:text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
