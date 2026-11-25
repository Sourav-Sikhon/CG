"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { BARS, WHY } from "@/lib/content";

const WHY_ICONS = ["fa-comments", "fa-life-ring", "fa-lightbulb"];

/** Dark panel that opens from a card to full-bleed, then walks through three reasons while pinned. */
export default function Why() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || !document.documentElement.classList.contains("js-anim")) return;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // 1. panel expands as the section enters
      gsap.fromTo(
        ".why-panel",
        { clipPath: "inset(10% 4% round 44px)" },
        {
          clipPath: "inset(0% 0% round 0px)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 8%", scrub: true },
        }
      );
      // fog lifts
      gsap.to(".fog.f3", { yPercent: -60, opacity: 0, ease: "none", scrollTrigger: { trigger: el, start: "top 60%", end: "top top", scrub: true } });
      gsap.fromTo(".why .display", { filter: "blur(10px)", opacity: 0.4 }, { filter: "blur(0px)", opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 70%", end: "top 20%", scrub: true } });

      // 2. bars fill when visible
      ScrollTrigger.create({
        trigger: ".bars",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.utils.toArray<HTMLElement>(".bar-fill", el).forEach((b) => b.classList.add("is-in"));
          gsap.fromTo(".bar-fill", { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: "expo.out", stagger: 0.15 });
        },
      });

      // 3. steps light up in sequence (pinned on desktop, scroll-linked on mobile)
      const steps = gsap.utils.toArray<HTMLElement>(".why-step", el);
      const setOn = (i: number) => steps.forEach((s, j) => s.classList.toggle("is-on", j <= i));
      mm.add("(min-width: 901px)", () => {
        setOn(0);
        ScrollTrigger.create({
          trigger: ".why-stage",
          start: "top top",
          end: "+=110%",
          pin: true,
          onUpdate: (self) => setOn(Math.min(steps.length - 1, Math.floor(self.progress * steps.length * 0.999))),
        });
      });
      mm.add("(max-width: 900px)", () => {
        steps.forEach((s) => ScrollTrigger.create({ trigger: s, start: "top 75%", onEnter: () => s.classList.add("is-on") }));
      });
    }, el);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="why" ref={root} id="why" aria-labelledby="why-title">
      <div className="why-stage">
        <div className="why-panel" aria-hidden="true">
          <div className="fog f1" />
          <div className="fog f2" />
          <div className="fog f3" />
        </div>
        <div className="wrap why-inner">
          <div>
            <Split as="h2" className="display" text="Why businesses choose Care Guide" accent={["choose"]} start="top 80%" />
            <div className="why-steps">
              {WHY.map((w, i) => (
                <div className="why-step" key={w.title}>
                  <i className={`fa-solid ${WHY_ICONS[i]}`} aria-hidden="true" />
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bars">
            <p>
              We prioritize client satisfaction and professional growth. A team that values people, purpose, and progress, measured where it counts.
            </p>
            {BARS.map((b) => (
              <div className="bar-row" key={b.label}>
                <header>
                  <span>{b.label}</span>
                  <b>{b.value}%</b>
                </header>
                <div className="bar-track" role="img" aria-label={`${b.label}: ${b.value}%`}>
                  <div className="bar-fill" style={{ ["--v" as string]: `${b.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
