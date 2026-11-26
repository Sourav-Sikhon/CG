import { REQUIREMENTS, SITE } from "@/lib/content";

const G = "url(#cg-orange)";
const LIGHT = "#ffe6da";

const ICONS = [
  <g key="cap">
    <path fill={G} d="M16 5 2.5 12 16 19l13.5-7Z" />
    <path fill={G} d="M8 16.4v5.2c0 1.9 3.6 4.1 8 4.1s8-2.2 8-4.1v-5.2L16 21.600Z" />
    <path d="M16 12.200 9 12l7-3.300" fill="none" stroke={LIGHT} strokeWidth="1.600" strokeLinecap="round" opacity="0.9" />
    <path d="M29.500 12.500v7" stroke={G} strokeWidth="2.200" strokeLinecap="round" />
  </g>,
  <g key="chat">
    <path fill={G} d="M16 4.500C9 4.500 3.500 8.900 3.500 14.300c0 2.800 1.500 5.300 4 7L6 27l5.600-2.800c1.400.4 2.900.6 4.400.6 7 0 12.500-4.400 12.500-9.800S23 4.500 16 4.500Z" />
    <circle cx="10.500" cy="14.500" r="1.800" fill={LIGHT} />
    <circle cx="16" cy="14.500" r="1.800" fill={LIGHT} />
    <circle cx="21.500" cy="14.500" r="1.800" fill={LIGHT} />
  </g>,
  <g key="case">
    <path d="M11.500 10V8.500A2.500 2.500 0 0 1 14 6h4a2.500 2.500 0 0 1 2.500 2.500V10" fill="none" stroke={G} strokeWidth="2.400" strokeLinecap="round" />
    <rect fill={G} x="3.500" y="10" width="25" height="16.500" rx="4.200" />
    <path d="M3.800 17.200h24.400" stroke={LIGHT} strokeWidth="1.800" opacity="0.85" />
    <rect fill={LIGHT} x="13.800" y="15.500" width="4.400" height="3.600" rx="1.200" />
  </g>,
  <g key="star">
    <path fill={G} stroke={G} strokeWidth="2.400" strokeLinejoin="round" d="m16 4.500 3.500 7.200 7.900 1.100-5.700 5.600 1.400 7.900L16 22.500l-7.100 3.800 1.400-7.900-5.700-5.600 7.900-1.100Z" />
  </g>,
];

export default function Careers() {
  return (
    <section className="section" id="careers" aria-labelledby="careers-title">
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="cg-orange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff7a3d" />
            <stop offset="1" stopColor="#ff3b00" />
          </linearGradient>
        </defs>
      </svg>
      <div className="wrap careers-grid">
        <div className="careers-cards">
          <span className="careers-deco d1" aria-hidden="true" />
          <span className="careers-deco d2" aria-hidden="true" />
          <span className="careers-deco d3" aria-hidden="true" />
          <div className="req-list" role="list">
            {REQUIREMENTS.map((r, i) => (
              <div className="req" key={r.title} role="listitem" data-reveal>
                <span className="r-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" width="54" height="54">
                    {ICONS[i]}
                  </svg>
                </span>
                <div className="req-text">
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="careers-copy">
          <span className="careers-swoosh" aria-hidden="true" />
          <img className="careers-arrow" src="/img/site/careers-arrow.webp" alt="" width={560} height={584} aria-hidden="true" />
          <h2 id="careers-title" className="careers-title" data-reveal>
            <span className="lead">Join Care Guide:</span>
            <span className="mid">Career Opportunities</span>
            <span className="mid">
              and <em>Team Growth</em>
            </span>
          </h2>
          <h3 className="careers-sub" data-reveal>
            Why Join <em>Care Guide</em>?
          </h3>
          <p className="lede" data-reveal>
            Care Guide always seeks motivated individuals fluent in English and Hindi to join our expanding team. Whether you’re experienced or a fresher, we value strong communication and client support skills. Become part of a growing company making a real difference.
          </p>
          <div data-reveal>
            <a href={`${SITE}/career/`} className="btn btn-amber">
              Apply now
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" style={{ transform: "rotate(-45deg)" }} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
