import { QUOTE } from "@/lib/content";

const [lead] = QUOTE.split(/(?<=solutions\.)\s+/);

export default function Leadership() {
  return (
    <section className="section" id="leadership" aria-labelledby="leader-title">
      <div className="wrap">
        <div className="ldr">
          <div className="ldr-copy">
            <p className="ldr-eyebrow" data-reveal>
              Leadership Perspective
            </p>
            <h2 id="leader-title" className="ldr-title" data-reveal>
              Building <em>Scalable</em>
              <br />
              Business Solutions
            </h2>
            <blockquote className="ldr-quote" data-reveal>
              <p>“{lead}”</p>
            </blockquote>
            <div className="ldr-by" data-reveal>
              <b>Nusrat Shova</b>
              <span>CEO &amp; Founder</span>
            </div>
          </div>

          <div className="ldr-visual" aria-hidden="true">
            <span className="ldr-circle" />
            <span className="ldr-arc" />
            <svg className="ldr-spark" viewBox="0 0 40 40" width="40" height="40">
              <defs>
                <linearGradient id="ldr-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffb48a" />
                  <stop offset="1" stopColor="#ff6a3d" />
                </linearGradient>
              </defs>
              <path fill="url(#ldr-g)" d="M20 0c1.700 10.500 7.500 18.300 20 20-12.500 1.700-18.300 9.500-20 20-1.700-10.500-7.500-18.300-20-20C12.500 18.300 18.300 10.500 20 0Z" />
            </svg>
          </div>
          <img className="ldr-photo" src="/img/site/leader-nusrat.webp" alt="Nusrat Shova, CEO and Founder of Care Guide" width={960} height={960} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
