import { SITE } from "@/lib/content";

const REQS = [
  { img: "/img/site/req-cap.webp", title: "Education Requirement", body: "Minimum Higher Secondary. Bachelor’s/Honors preferred." },
  { img: "/img/site/req-chat.webp", title: "Fluency Requirement", body: "Must be fluent in English. Hindi speaking is a plus." },
  { img: "/img/site/req-case.webp", title: "Experience Needed", body: "Minimum 1 year in BPO/Call Center. Freshers are also welcome." },
  { img: "/img/site/req-star.webp", title: "Key Skills", body: "MS Word/Excel, communication skills, grooming, punctuality, adaptability." },
];

export default function Careers() {
  return (
    <section className="section car" id="careers" aria-labelledby="careers-title">
      <div className="wrap">
       <div className="stats-box car-box" data-reveal>
        <span className="car-bgtext" aria-hidden="true">Careers</span>
        <div className="car-grid">
        <div className="car-cards" role="list">
          {REQS.map((r) => (
            <div className="car-card" key={r.title} role="listitem" data-reveal>
              <img src={r.img} alt="" width={84} height={84} loading="lazy" aria-hidden="true" />
              <div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="car-copy">
          <h2 id="careers-title" className="car-title" style={{ marginTop: 0 }} data-reveal>
            Join Care Guide: Career Opportunities and <em>Team Growth</em>
          </h2>
          <h3 className="car-sub" data-reveal>
            Why Join <em>Care Guide</em>?
          </h3>
          <p className="car-lede" data-reveal>
            Care Guide always seeks motivated individuals fluent in English and Hindi to join our expanding team. Whether you’re experienced or a fresher, we value strong communication and client support skills.
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
        </div>
       </div>
      </div>
    </section>
  );
}
