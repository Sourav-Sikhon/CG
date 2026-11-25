"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { QUOTE } from "@/lib/content";

/** Quote that lights up word by word as you scroll through it. */
export default function Leadership() {
  const root = useRef<HTMLElement>(null);
  const words = QUOTE.split(" ");

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || !document.documentElement.classList.contains("js-anim")) return;
    const ctx = gsap.context(() => {
      gsap.to(".qw", {
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: { trigger: ".leader-quote", start: "top 78%", end: "bottom 45%", scrub: 0.6 },
      });
      gsap.fromTo(
        ".leader-photo img",
        { scale: 0.9, rotate: -4 },
        { scale: 1, rotate: 0, ease: "none", scrollTrigger: { trigger: ".leader-photo", start: "top 90%", end: "top 30%", scrub: true } }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" ref={root} id="leadership" aria-labelledby="leader-title">
      <div className="wrap leader-grid">
        <div className="leader-photo">
          <img src="/img/site/about-about2.webp" alt="Nusrat Shova, CEO and Founder of Care Guide" width={600} height={600} loading="lazy" />
        </div>
        <div>
          <h2 id="leader-title" className="sr-only">
            Leadership perspective
          </h2>
          <blockquote style={{ margin: 0 }}>
            <p className="leader-quote">
              {words.map((w, i) => (
                <span key={i}>
                  <span className="qw">{w}</span>
                  {i < words.length - 1 ? " " : null}
                </span>
              ))}
            </p>
          </blockquote>
          <div className="leader-by" data-reveal>
            <span className="rule" aria-hidden="true" />
            <div>
              <b>Nusrat Shova</b>
              <span>CEO &amp; Founder, Care Guide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
