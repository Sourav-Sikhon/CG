"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PILLARS, STATS } from "@/lib/content";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const anim = document.documentElement.classList.contains("js-anim");
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((n) => {
        const to = Number(n.dataset.count);
        const suffix = n.dataset.suffix ?? "";
        if (!anim) {
          n.textContent = to + suffix;
          return;
        }
        const o = { v: 0 };
        n.textContent = "0" + suffix;
        ScrollTrigger.create({
          trigger: n,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(o, {
              v: to,
              duration: 2.2,
              ease: "expo.out",
              onUpdate: () => {
                n.textContent = Math.round(o.v) + suffix;
              },
            }),
        });
      });

      if (anim) {
        gsap.fromTo(
          ".about-visual img",
          { yPercent: 6, scale: 1.04 },
          { yPercent: -4, scale: 1, ease: "none", scrollTrigger: { trigger: ".about-visual", start: "top bottom", end: "bottom top", scrub: true } }
        );
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section about" ref={root} id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-visual" data-reveal>
            <img src="/img/site/about-about.webp" alt="Care Guide team at work in the Dhaka office" width={640} height={500} loading="lazy" />
            <div className="about-badge">
              <b>Serving Dhaka since 2022</b>
              <span>Speed, care and precision on every task.</span>
            </div>
          </div>

          <div>
            <h2 id="about-title" className="sr-only">
              About Care Guide
            </h2>
            <Split as="p" className="display" text="A reliable partner for operations, technology & digital growth" accent={["operations", "technology"]} />
            <p className="lede" style={{ marginTop: 24 }} data-reveal>
              We help businesses streamline operations, boost productivity, and grow through a full range of digital, creative, and support services, all delivered with speed, care, and precision.
            </p>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.title} data-reveal>
                  <i className={`fa-solid ${p.icon}`} aria-hidden="true" />
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ledger" role="list" aria-label="Care Guide in numbers">
          {STATS.map((s) => (
            <div className="ledger-item" key={s.label} role="listitem" data-reveal>
              <b data-count={s.to} data-suffix={s.suffix}>
                {s.to}
                {s.suffix}
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
