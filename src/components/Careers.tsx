import Split from "./Split";
import { REQUIREMENTS, SITE } from "@/lib/content";

export default function Careers() {
  return (
    <section className="section" id="careers" aria-labelledby="careers-title">
      <div className="wrap careers-grid">
        <div className="careers-copy">
          <h2 id="careers-title" className="sr-only">
            Careers at Care Guide
          </h2>
          <Split as="p" className="display" text="Join Care Guide: career opportunities and team growth" accent={["Join", "growth"]} />
          <p className="lede" data-reveal>
            Care Guide is always looking for motivated people fluent in English and Hindi to join a growing team. Experienced or fresher, strong communication and client support skills matter most.
          </p>
          <div data-reveal>
            <a href={`${SITE}/career/`} className="btn btn-amber">
              Apply now
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="req-list" role="list">
          {REQUIREMENTS.map((r) => (
            <div className="req" key={r.title} role="listitem" data-reveal>
              <span className="r-icon">
                <i className={`fa-solid ${r.icon}`} aria-hidden="true" />
              </span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
