"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
  markers?: Array<{ location: [number, number]; size: number }>;
}

export default function Earth({
  className,
  theta = 0.25,
  dark = 0,
  scale = 1,
  diffuse = 1.2,
  mapSamples = 16000,
  mapBrightness = 6,
  baseColor = [1, 1, 1],
  markerColor = [0.1, 0.8, 1],
  glowColor = [1, 1, 1],
  markers = [
    // South Africa (Johannesburg: -26.2041, 28.0473)
    { location: [-26.2041, 28.0473], size: 0.08 },
    // London: 51.5074, -0.1278
    { location: [51.5074, -0.1278], size: 0.05 },
    // New York: 40.7128, -74.0060
    { location: [40.7128, -74.006], size: 0.05 },
    // San Francisco: 37.7749, -122.4194
    { location: [37.7749, -122.4194], size: 0.05 },
  ],
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width = 0;
    let phi = 0;
    let animId: number;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: (width || 400) * 2,
      height: (width || 400) * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      scale: scale,
      offset: [0, 0],
      markers: markers,
    });

    const animate = () => {
      phi += 0.003;
      globe.update({
        phi,
        width: (canvasRef.current?.offsetWidth || width || 400) * 2,
        height: (canvasRef.current?.offsetWidth || width || 400) * 2,
      });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
    markers,
  ]);

  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-[700px] items-center justify-center aspect-square",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-90 transition-opacity duration-500 [contain:layout_paint_size]"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
}
