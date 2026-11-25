"use client";
import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/** Page-wide fade-up for [data-reveal] blocks + bar/counter helpers. */
export default function Animations() {
  useLayoutEffect(() => {
    if (!document.documentElement.classList.contains("js-anim")) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) => {
          els.forEach((e) => e.classList.add("is-in"));
          gsap.fromTo(els, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.09, overwrite: true, clearProps: "transform" });
        },
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);
  return null;
}
