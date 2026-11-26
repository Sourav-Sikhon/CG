"use client";
import { useLayoutEffect, useRef } from "react";
import Split from "./Split";
import { gsap } from "@/lib/gsap";
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
  const listRef = useRef<HTMLDivElement>(null);
  const winRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    const win = winRef.current;
    const list = listRef.current;
    if (!el || !win || !list || !document.documentElement.classList.contains("js-anim")) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const cards = Array.from(list.querySelectorAll<HTMLElement>(".svc-card"));
      const last = cards.length - 1;
      let shown = -1;
      gsap.set(cards, { autoAlpha: 0, y: 36 });
      gsap.set(cards[0], { autoAlpha: 1, y: 0 });
      // cards are stacked in the same spot: each one leaves, then the next arrives
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: () => "+=" + (160 * last + 240),
          pin: true,
          scrub: 0.8,
          snap: { snapTo: 1 / last, duration: { min: 0.3, max: 0.7 }, ease: "power2.inOut" },
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * last);
            if (idx === shown) return;
            shown = idx;
            if (num.current) num.current.textContent = String(idx + 1).padStart(2, "0");
            if (bar.current) bar.current.style.transform = `scaleX(${(idx + 1) / TOTAL})`;
          },
        },
      });
      for (let i = 1; i <= last; i++) {
        tl.to(cards[i - 1], { autoAlpha: 0, y: -36, duration: 0.38 }, i - 1 + 0.2)
          .fromTo(cards[i], { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.42 }, i - 1 + 0.5);
      }
      tl.to({}, { duration: 0.001 }, last);
      return () => {
        gsap.set(cards, { clearProps: "all" });
      };
    });
    return () => mm.revert();
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

        <div className="svc-window" ref={winRef}>
        <div className="svc-list" role="list" ref={listRef}>
          {SERVICES.map((s, i) => (
            <a key={s.title} href={s.href} className="svc-card" role="listitem">
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
      </div>
    </section>
  );
}
