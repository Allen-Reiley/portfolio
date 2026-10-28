import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Reitumetse Sethabela — Full-Stack Developer & Technical Founder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    const imagePath = path.join(process.cwd(), "public/images/og-preview.png");
    const imageBuffer = fs.readFileSync(imagePath);
    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#F5F4EE",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px",
            fontFamily: "serif",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                color: "#1E4A38",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack Developer · Technical Founder
            </span>
            <h1 style={{ fontSize: "64px", margin: 0, color: "#151614" }}>
              Reitumetse Sethabela
            </h1>
            <p style={{ fontSize: "36px", fontStyle: "italic", color: "#1E4A38", margin: 0 }}>
              Engineering software with commercial intent.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "18px",
              fontFamily: "monospace",
              color: "#5A5B55",
            }}
          >
            <span>Next.js 15 · FastAPI · PostgreSQL · Railway</span>
            <span>reitumetse.dev</span>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
