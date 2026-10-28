import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicit allowance for Generative Search, AI Assistants & Retrieval Crawlers
      {
        userAgent: [
          // OpenAI (SearchGPT & ChatGPT Browsing)
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          // Anthropic (Claude Web & Discovery)
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Perplexity AI
          "PerplexityBot",
          // Google Gemini & Search AI Overviews
          "Google-Extended",
          "Googlebot",
          // Apple Intelligence
          "Applebot-Extended",
          // Cohere & Meta AI
          "cohere-ai",
          "meta-externalagent",
          "FacebookBot",
          // Common Crawl & Open Web
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://reitumetse.dev/sitemap.xml",
  };
}
