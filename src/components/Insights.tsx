import Split from "./Split";
import { POSTS, SITE } from "@/lib/content";

export default function Insights() {
  return (
    <section className="section ins" id="insights" aria-labelledby="insights-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="ins-head">
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

        <ul className="ins-grid">
          {POSTS.slice(0, 5).map((p, i) => (
            <li key={p.href} data-reveal>
              <a href={p.href} className="ins-card" data-tone={i % 2 === 0 ? "white" : "orange"}>
                <span className="ins-top">
                  <span className="ins-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ins-go" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </span>
                </span>
                <h3>{p.title}</h3>
                <time className="mono">{p.date}</time>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
