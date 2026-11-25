"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SERVICES, SITE } from "@/lib/content";

const TOTAL = SERVICES.length;

/**
 * Services. The intro stays pinned on the left while the cards scroll past on the right.
 * A counter follows the active card and each glass icon drifts against its card.
 */
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || !document.documentElement.classList.contains("js-anim")) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>(".svc-card").forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (!self.isActive) return;
            if (num.current) num.current.textContent = String(i + 1).padStart(2, "0");
            if (bar.current) bar.current.style.transform = `scaleX(${(i + 1) / TOTAL})`;
          },
        });
        const art = card.querySelector(".svc-art img");
        if (art && window.matchMedia("(min-width: 901px)").matches) {
          gsap.fromTo(
            art,
            { yPercent: 14, rotate: -8 },
            { yPercent: -14, rotate: 8, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } },
          );
        }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc" ref={root} id="services" aria-labelledby="services-title">
      <div className="wrap svc-grid">
        <div className="svc-side">
          <div className="svc-count" aria-hidden="true">
            <div className="num">
              <span ref={num}>01</span>
              <small>/ {String(TOTAL).padStart(2, "0")}</small>
            </div>
            <div className="svc-bar">
              <i ref={bar} />
            </div>
          </div>
          <h2 id="services-title" className="sr-only">
            Our services
          </h2>
          <Split as="p" className="display" text="Back office support and digital technology, one team." accent={["one", "team"]} />
          <p className="lede" data-reveal>
            From billing and reporting to AI automation, DevOps and creative production, Care Guide brings the capabilities a growing business needs under one roof.
          </p>
          <div data-reveal>
            <a href={`${SITE}/service/`} className="btn btn-navy">
              All services
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="svc-list" role="list">
          {SERVICES.map((s, i) => (
            <a key={s.title} href={s.href} className="svc-card" role="listitem" data-reveal>
              <span className="svc-text">
                <span className="svc-no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="svc-more">
                  View more details
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </span>
              <span className="svc-art" aria-hidden="true">
                <img src={s.img} alt="" width={420} height={420} loading="lazy" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
