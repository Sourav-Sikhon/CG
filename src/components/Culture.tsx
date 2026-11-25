"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EVENTS } from "@/lib/content";

/** Team gallery. Scrolls sideways while the section is pinned on desktop; native swipe on touch. */
export default function Culture() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr || !document.documentElement.classList.contains("js-anim")) return;
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 901px) and (hover: hover)", () => {
        el.classList.add("pinned");
        const dist = () => Math.max(0, tr.scrollWidth - window.innerWidth + 40);
        gsap.to(tr, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => "+=" + dist(),
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        return () => el.classList.remove("pinned");
      });
    }, el);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="culture" ref={root} id="culture" aria-labelledby="culture-title">
      <div className="wrap culture-head">
        <div style={{ maxWidth: 760 }}>
          <h2 id="culture-title" className="sr-only">
            Care Guide culture, team events and company journey
          </h2>
          <Split as="p" className="display" text="Culture, team events and the Care Guide journey" accent={["Culture", "journey"]} />
        </div>
        <p className="lede" style={{ maxWidth: "36ch" }} data-reveal>
          The people behind every task, on the days they are not working through one.
        </p>
      </div>
      <div className="culture-track" ref={track}>
        {EVENTS.map((e, i) => (
          <figure className="shot" key={e.src} style={{ margin: 0 }}>
            <div className="shot-img">
              <img src={e.src} alt={`Care Guide team event: ${e.caption}`} loading="lazy" width={900} height={1100} />
            </div>
            <figcaption>{e.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
