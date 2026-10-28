"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function NubifurnVideoReview() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const maskSvg =
    "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")";

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-6 sm:py-12 space-y-4">
      {/* Header Label: Strictly 'Client Review' */}
      <div className="w-full max-w-[620px] sm:max-w-[760px] flex items-center justify-between px-2 font-mono text-xs text-muted-foreground">
        <span className="uppercase tracking-widest text-forest dark:text-emerald-400 font-semibold">
          Client Review
        </span>
        <span>CreativeVideoMasking · UHD Stream</span>
      </div>

      {/* Ambient Lighting Glow Behind Video */}
      <div 
        className="absolute inset-0 max-w-xl mx-auto rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,74,56,0.18),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.18),transparent_70%)] blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Independent Masked Video Component (No Artificial Wrapping Box / Card) */}
      <div className="relative w-full max-w-[620px] sm:max-w-[760px] aspect-[221/122] drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_50px_rgba(0,221,179,0.16)]">
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            aspectRatio: "1213/667",
            backgroundColor: "#0C0E14",
            maskImage: maskSvg,
            WebkitMaskImage: maskSvg,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Standalone Video Controls Pill */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-border bg-card/95 px-4 py-1.5 text-xs font-mono text-foreground backdrop-blur-md shadow-md z-20">
          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-1.5 hover:text-forest dark:hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>

          <span className="text-muted-foreground/30">|</span>

          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-1.5 hover:text-forest dark:hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
            <span>{isMuted ? "Unmute" : "Muted"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
