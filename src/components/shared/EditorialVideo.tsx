"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";

import {cn} from "@/lib/cn";

type EditorialVideoProps = {
  src: string;
  poster: string;
  className?: string;
  posterClassName?: string;
  sizes?: string;
  priority?: boolean;
  playLabel?: string;
};

export function EditorialVideo({
  src,
  poster,
  className,
  posterClassName,
  sizes = "100vw",
  priority = false,
  playLabel = "Play video",
}: EditorialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [requestedPlayback, setRequestedPlayback] = useState(false);
  const showPoster = reducedMotion && !requestedPlayback;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);

    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || showPoster) return;

    video.defaultMuted = true;
    video.muted = true;

    const startPlayback = () => {
      void video.play().catch(() => {
        // Autoplay can still be blocked by a browser policy; the video remains available to the user.
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlayback();
    } else {
      video.addEventListener("canplay", startPlayback, {once: true});
    }

    return () => video.removeEventListener("canplay", startPlayback);
  }, [showPoster]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={!showPoster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        data-editorial-video
        className={cn(className, showPoster && "opacity-0")}
      />
      <Image
        src={poster}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        aria-hidden="true"
        className={cn("object-cover", !showPoster && "opacity-0", posterClassName)}
      />
      {showPoster ? (
        <button
          type="button"
          onClick={() => setRequestedPlayback(true)}
          className="absolute left-4 bottom-4 z-20 inline-flex min-h-11 items-center rounded-[0.25rem] bg-ethiorail-green px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,107,7,0.24)] transition-colors hover:bg-ethiorail-bright-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rail-cyan"
          aria-label={playLabel}
        >
          {playLabel}
        </button>
      ) : null}
    </>
  );
}