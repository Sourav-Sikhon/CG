"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { MARQUEE } from "@/lib/content";

/** Capability ticker. Drifts on its own and speeds up with scroll velocity. */
export default function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = 0;
    let lastY = window.scrollY;
    let boost = 0;
    const tick = () => {
      const y = window.scrollY;
      const dv = y - lastY;
      lastY = y;
      boost += (Math.min(Math.abs(dv), 60) - boost) * 0.08;
      const half = el.scrollWidth / 2;
      x -= 0.7 + boost * 0.55;
      if (-x >= half) x += half;
      el.style.transform = `translate3d(${x}px,0,0)`;
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  const row = (k: string) => (
    <div key={k} style={{ display: "flex" }} aria-hidden={k === "b" ? true : undefined}>
      {MARQUEE.map((m) => (
        <span className="marquee-item" key={k + m}>
          {m}
          <img src="/img/logo-mark.webp" alt="" width={64} height={64} />
        </span>
      ))}
    </div>
  );

  return (
    <section className="marquee" aria-label="What we do">
      <div className="marquee-track" ref={track}>
        {row("a")}
        {row("b")}
      </div>
    </section>
  );
}
