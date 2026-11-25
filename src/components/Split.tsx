"use client";
import { createElement, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  accent?: string[];
  start?: string;
};

/** Headline whose words rise out of a mask when it scrolls into view. */
export default function Split({ text, as = "h2", className, accent = [], start = "top 85%" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("js-anim")) return;
    const targets = el.querySelectorAll(".split-word > span");
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          // hand the hidden state from CSS over to GSAP's inline transform
          el.querySelectorAll(".split-word").forEach((w) => w.classList.add("is-in"));
          gsap.fromTo(targets, { yPercent: 110 }, { yPercent: 0, duration: 1.25, ease: "expo.out", stagger: 0.055, overwrite: true });
        },
      });
    }, el);
    return () => ctx.revert();
  }, [text, start]);

  return createElement(
    as,
    { ref, className },
    words.map((w, i) => {
      const clean = w.replace(/[.,]/g, "");
      const isAccent = accent.includes(clean);
      return (
        <span key={i}>
          <span className="split-word">
            <span className={isAccent ? "accent" : undefined}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      );
    })
  );
}
