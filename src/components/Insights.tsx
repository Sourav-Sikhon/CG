import Split from "./Split";
import { POSTS, SITE } from "@/lib/content";

export default function Insights() {
  return (
    <section className="section" id="insights" aria-labelledby="insights-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <h2 id="insights-title" className="sr-only">
              Latest insights
            </h2>
            <Split as="p" className="display" text="Latest insights from Care Guide" accent={["insights"]} />
          </div>
          <div data-reveal>
            <a href={`${SITE}/blog/`} className="btn btn-ghost">
              View all blog
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
        <div className="post-list">
          {POSTS.map((p) => (
            <a key={p.href} href={p.href} className="post" data-reveal>
              <time className="mono">{p.date}</time>
              <h3>{p.title}</h3>
              <span className="p-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
