"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap } from "@/lib/gsap";
import { PILLARS } from "@/lib/content";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const anim = document.documentElement.classList.contains("js-anim");
    const ctx = gsap.context(() => {
      if (anim) {
        gsap.fromTo(
          ".about-photo img",
          { yPercent: 6, scale: 1.04 },
          { yPercent: -4, scale: 1, ease: "none", scrollTrigger: { trigger: ".about-photo", start: "top bottom", end: "bottom top", scrub: true } }
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
            <div className="about-photo">
              <img src="/img/site/about-office.webp" alt="Care Guide team at work in the Dhaka office" width={1400} height={1045} loading="lazy" />
            </div>
            <div className="about-badge">
              <img src="/img/site/icon-calendar.webp" alt="" width={64} height={64} aria-hidden="true" />
              <p>
                We Have Been Serving in <br />
                Dhaka, Bangladesh Since <em>2022</em>
              </p>
            </div>
          </div>

          <div className="about-copy">
            <h2 id="about-title" className="sr-only">
              About Care Guide
            </h2>
            <Split as="p" className="display" text="A reliable partner for operations, technology & digital growth" accent={["operations", "technology"]} />
            <p className="lede" style={{ marginTop: 24 }} data-reveal>
              We help businesses streamline operations, boost productivity, and grow through a full range of digital, creative, and support services, all delivered with speed, care, and precision.
            </p>
            <a className="btn btn-amber about-cta" href="#services" data-reveal>
              Learn more
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="pillars">
          {PILLARS.map((p) => (
            <div className="pillar" data-tone={p.tone} key={p.title} data-reveal>
              <img className="pillar-icon" src={p.img} alt="" width={72} height={72} loading="lazy" aria-hidden="true" />
              <div className="pillar-text">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
