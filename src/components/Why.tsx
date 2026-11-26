import { BARS, WHY } from "@/lib/content";

const G = "url(#why-grad)";

const ICONS = [
  // chat
  <g key="chat">
    <path fill={G} opacity="0.55" d="M19.5 7.5A3.5 3.5 0 0 1 22 11v2.5a3.5 3.5 0 0 1-2 3.2V20l-3.4-2.4h-2.2A4.5 4.5 0 0 0 17 13.5V8.2c.9.1 1.8-.2 2.5-.7Z" />
    <path fill={G} d="M3 8.5A4.5 4.5 0 0 1 7.5 4h6A4.5 4.5 0 0 1 18 8.5v3a4.5 4.5 0 0 1-4.5 4.5H9.6L5 19.5V15.7A4.5 4.5 0 0 1 3 11.9Z" />
  </g>,
  // shield + check
  <g key="shield">
    <path fill={G} d="M12 2.2 19.8 5v6.2c0 4.8-3.2 8.9-7.8 10.6-4.6-1.7-7.8-5.8-7.8-10.6V5Z" />
    <path d="m8.4 12.2 2.5 2.5 4.7-5" fill="none" stroke="#071647" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  </g>,
  // bulb
  <g key="bulb">
    <path fill={G} d="M12 2a6.6 6.6 0 0 0-3.8 12c.6.5.9 1 .9 1.7v.3h5.8v-.3c0-.7.3-1.2.9-1.7A6.6 6.6 0 0 0 12 2Z" />
    <rect fill={G} x="9.2" y="17.4" width="5.6" height="2.1" rx="1" />
    <rect fill={G} x="10.2" y="20.3" width="3.6" height="1.7" rx=".85" />
  </g>,
];

/** Dark glass panel: three reasons on the left, proof bars on the right. Static, no scroll effects. */
export default function Why() {
  return (
    <section className="why" id="why" aria-labelledby="why-title">
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="why-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a9ddff" />
            <stop offset="1" stopColor="#2f7bff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="why-stage">
        <div className="why-panel" aria-hidden="true">
          <div className="fog f1" />
          <div className="fog f2" />
        </div>
        <div className="wrap why-inner">
          <div>
            <h2 id="why-title" className="display">
              Why businesses <span className="accent">choose</span> Care Guide
            </h2>
            <span className="why-rule" aria-hidden="true" />
            <div className="why-steps">
              {WHY.map((w, i) => (
                <div className="why-step is-on" key={w.title}>
                  <span className="why-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="40" height="40">
                      {ICONS[i]}
                    </svg>
                  </span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bars">
            <div className="bars-head">
              <span className="why-icon why-icon-round" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="30" height="30">
                  <rect fill={G} x="4" y="13" width="4" height="7" rx="1.2" />
                  <rect fill={G} x="10" y="9" width="4" height="11" rx="1.2" />
                  <rect fill={G} x="16" y="4" width="4" height="16" rx="1.2" />
                </svg>
              </span>
              <p>
                We prioritize client satisfaction and professional growth. A team that values people, purpose, and progress, measured where it counts.
              </p>
            </div>
            {BARS.map((b) => (
              <div className="bar-row" key={b.label}>
                <header>
                  <span>{b.label}</span>
                  <b>{b.value}%</b>
                </header>
                <div className="bar-track" role="img" aria-label={`${b.label}: ${b.value}%`}>
                  <div className="bar-fill is-in" style={{ ["--v" as string]: `${b.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
