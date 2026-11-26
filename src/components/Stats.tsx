"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STATS } from "@/lib/content";

export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const anim = document.documentElement.classList.contains("js-anim");
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((n) => {
        const to = Number(n.dataset.count);
        if (!anim) {
          n.textContent = String(to);
          return;
        }
        const o = { v: 0 };
        n.textContent = "0";
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
                n.textContent = String(Math.round(o.v));
              },
            }),
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="stats" ref={root} aria-labelledby="stats-title">
      <div className="wrap">
        <div className="stats-box" data-reveal>
          <div className="stats-head">
            <p className="stats-eyebrow mono">Proven operational scale</p>
            <h2 id="stats-title" className="stats-title">
              Care Guide Achievements in 3+ Years
            </h2>
          </div>
          <div className="stats-grid" role="list">
            {STATS.map((s) => (
              <div className="stat" key={s.label} role="listitem">
                <span className="stat-icon" aria-hidden="true">
                  <i className={s.icon} />
                </span>
                <div className="stat-body">
                  <b className="stat-num">
                    <span data-count={s.to}>{s.to}</span>
                    <i>{s.suffix}</i>
                    {s.unit}
                  </b>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
