"use client";
import { useState } from "react";

const TABS = [
  {
    id: "mission",
    label: "Mission & Vision",
    img: "/img/site/aboutus-mission.webp",
    alt: "Care Guide team collaborating in the Dhaka office",
    points: [
      "Reliable global outsourcing support",
      "Excellence in service delivery",
      "Innovation for business growth",
      "Trusted long-term partnerships",
      "Bangladesh-based global impact",
    ],
  },
  {
    id: "values",
    label: "Core Values",
    img: "/img/site/aboutus-values.webp",
    alt: "Care Guide support agents at their workstations",
    points: [
      "Integrity in every action",
      "Commitment to client success",
      "Teamwork drives our results",
      "Continuous growth and learning",
      "Accountability at every level",
    ],
  },
  {
    id: "team",
    label: "Expert Team",
    img: "/img/site/aboutus-team.webp",
    alt: "Care Guide professionals working on the office floor",
    points: [
      "Skilled and experienced professionals",
      "Driven by client success",
      "Focused on quality delivery",
      "Collaborative and goal-oriented team",
      "Adaptable to global needs",
    ],
  },
] as const;

export default function AboutUs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") n = (i + TABS.length - 1) % TABS.length;
    else return;
    e.preventDefault();
    setActive(n);
    document.getElementById(`aboutus-tab-${TABS[n].id}`)?.focus();
  };

  return (
    <section className="section aboutus" id="about-us" aria-labelledby="aboutus-title">
      <div className="wrap aboutus-grid">
        <div className="aboutus-copy">
          <p className="aboutus-eyebrow" data-reveal>
            About us
          </p>
          <h2 id="aboutus-title" className="aboutus-title" data-reveal>
            We predict the future <br />
            by creating <em>it!</em>
          </h2>
          <p className="lede" data-reveal>
            Care Guide, founded in 2022, provides affordable, high-quality outsourcing solutions to businesses of all sizes, helping them streamline operations and grow efficiently.
          </p>
          <p className="lede" data-reveal>
            We offer services like customer support, back office tasks, digital marketing, web development, IT support, virtual assistance, and content creation, designed to boost brand loyalty and reduce costs.
          </p>
          <a className="aboutus-link" href="#about" data-reveal>
            Learn more
            <span className="aboutus-link-chip">
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="aboutus-visual" data-reveal>
          <div className="aboutus-tabs" role="tablist" aria-label="About Care Guide">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`aboutus-tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`aboutus-panel-${t.id}`}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="aboutus-stage" role="tabpanel" id={`aboutus-panel-${tab.id}`} aria-labelledby={`aboutus-tab-${tab.id}`}>
            <div className="aboutus-photo">
              {TABS.map((t, i) => (
                <img key={t.id} className={i === active ? "is-on" : ""} src={t.img} alt={i === active ? t.alt : ""} aria-hidden={i === active ? undefined : true} width={1000} height={800} />
              ))}
            </div>
            <ul className="aboutus-card" key={`${tab.id}-list`}>
              {tab.points.map((p) => (
                <li key={p}>
                  <span className="aboutus-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
