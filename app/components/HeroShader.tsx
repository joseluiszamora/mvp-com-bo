"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react";

export default function HeroShader() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const update = () =>
      setActive(visible && !motion.matches && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (root.current) observer.observe(root.current);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-hero-fallback"
    >
      {active && !unavailable && (
        <Shader
          className="h-full w-full"
          disableTelemetry
          onUnavailable={() => setUnavailable(true)}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-canvas via-canvas/60 to-transparent" />
    </div>
  );
}
