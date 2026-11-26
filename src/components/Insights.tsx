"use client";
import { useEffect, useRef } from "react";
import Split from "./Split";
import { POSTS, SITE } from "@/lib/content";

export default function Insights() {
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const sync = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      const frac = Math.max(el.clientWidth / el.scrollWidth, 0.12);
      if (bar.current) {
        bar.current.style.width = `${frac * 100}%`;
        bar.current.style.transform = `translateX(${p * (1 / frac - 1) * 100}%)`;
      }
      if (prev.current) prev.current.disabled = el.scrollLeft <= 2;
      if (next.current) next.current.disabled = el.scrollLeft >= max - 2;
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    // drag to scroll with the mouse
    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) {
        moved = true;
        el.classList.add("is-drag");
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      el.classList.remove("is-drag");
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".nws-card");
    const w = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="section ins" id="insights" aria-labelledby="insights-title">
      <div className="wrap">
        <div className="ins-head">
          <div>
            <h2 id="insights-title" className="sr-only">
              Latest insights
            </h2>
            <Split as="p" className="display" text="Latest insights from Care Guide" accent={["insights"]} />
          </div>
          <div className="nws-controls" data-reveal>
            <button type="button" ref={prev} className="nws-nav" aria-label="Previous posts" onClick={() => step(-1)}>
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            </button>
            <button type="button" ref={next} className="nws-nav" aria-label="Next posts" onClick={() => step(1)}>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
            <a href={`${SITE}/blog/`} className="btn btn-ghost">
              View all blog
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="nws-track" ref={track} role="list" aria-label="Latest blog posts">
        {POSTS.map((p) => (
          <a key={p.href} href={p.href} className="nws-card" role="listitem" draggable={false}>
            <h3>{p.title}</h3>
            <time className="mono">{p.date}</time>
            <span className="nws-go" aria-hidden="true">
              <i className="fa-solid fa-arrow-right" />
            </span>
          </a>
        ))}
        <a href={`${SITE}/blog/`} className="nws-card nws-all" role="listitem" draggable={false}>
          <h3>View all blog</h3>
          <time className="mono">Browse every article</time>
          <span className="nws-go" aria-hidden="true">
            <i className="fa-solid fa-arrow-right" />
          </span>
        </a>
      </div>

      <div className="wrap">
        <div className="nws-progress" aria-hidden="true">
          <span ref={bar} />
        </div>
      </div>
    </section>
  );
}
