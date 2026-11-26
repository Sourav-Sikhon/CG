"use client";
import { useEffect, useRef } from "react";
import Split from "./Split";

// Summaries of the client feedback published at careguidebd.com/testimonial/
const ITEMS = [
  { name: "Cottage Home Care Services", role: "Home Care", body: "Administrative and scheduling support that improved day-to-day efficiency, backed by timely communication and close attention to detail." },
  { name: "Brooklyn Institute of Voc-Training", role: "HHA Institute", body: "Training coordination and follow-up support that helped HHA graduates reach employers and raised student success." },
  { name: "New Millennium Construction", role: "Real Estate", body: "Data entry and operational support that kept residential client records organized, with precise and proactive service." },
  { name: "Exclusive Home Rental", role: "Rental Home", body: "Client communication and booking details handled for high-end rentals, with fast, professional replies that supported the guest experience." },
  { name: "Cottage Social Adult Day Care", role: "Day Care", body: "Administrative and caregiver coordination that filled shifts promptly and accurately, and a service the team found dependable." },
  { name: "Care Guide Training Institute", role: "HHA Institute", body: "Scheduling, trainee placement and ongoing administrative help that improved how training is delivered." },
];

const initials = (n: string) =>
  n
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const sync = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (prev.current) prev.current.disabled = el.scrollLeft <= 2;
      if (next.current) next.current.disabled = el.scrollLeft >= max - 2;
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".testi-card");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 360) + 24), behavior: "smooth" });
  };

  return (
    <section className="section testi" id="testimonials" aria-labelledby="testi-title">
      <svg className="testi-swoosh" viewBox="0 0 1440 520" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="tsw" x1="0" x2="1">
            <stop offset="0" stopColor="#ff7a3d" stopOpacity="0.28" />
            <stop offset="1" stopColor="#ff3b00" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <path d="M-20 400 C 160 330 260 300 420 380 C 640 490 860 120 1100 150 C 1260 170 1340 250 1470 120 L 1470 200 C 1340 330 1250 260 1100 240 C 880 215 700 560 420 450 C 270 390 160 430 -20 480 Z" fill="url(#tsw)" />
      </svg>
      <div className="wrap">
        <div className="testi-head">
          <div>
            <h2 id="testi-title" className="sr-only">
              Client testimonials
            </h2>
            <Split as="p" className="display" text="Trusted by the teams we support" accent={["Trusted"]} />
            <p className="lede" data-reveal>
              Discover what our clients have to say about working with us and the impact we’ve made together.
            </p>
          </div>
          <div className="nws-controls" data-reveal>
            <button type="button" ref={prev} className="nws-nav" aria-label="Previous testimonials" onClick={() => step(-1)}>
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            </button>
            <button type="button" ref={next} className="nws-nav" aria-label="Next testimonials" onClick={() => step(1)}>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="testi-grid" ref={track} role="list">
          {ITEMS.map((t) => (
            <article className="testi-card" key={t.name} role="listitem">
              <span className="testi-mark" aria-hidden="true">
                <i className="fa-solid fa-quote-left" />
              </span>
              <p>{t.body}</p>
              <footer>
                <span className="testi-avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
