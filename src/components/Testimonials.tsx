import Split from "./Split";
import { SITE } from "@/lib/content";

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
  return (
    <section className="section testi" id="testimonials" aria-labelledby="testi-title">
      <div className="wrap">
        <div className="testi-head">
          <div>
            <h2 id="testi-title" className="sr-only">
              Client testimonials
            </h2>
            <Split as="p" className="display" text="Trusted by the teams we support" accent={["Trusted"]} />
            <p className="lede" data-reveal>
              Care Guide trusted companies across home care, training, real estate and rentals.
            </p>
          </div>
          <div data-reveal>
            <a href={`${SITE}/testimonial/`} className="btn btn-amber">
              Clients review
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="testi-grid" role="list">
          {ITEMS.map((t) => (
            <article className="testi-card" key={t.name} role="listitem" data-reveal>
              <span className="testi-mark" aria-hidden="true">
                <i className="fa-solid fa-comment-dots" />
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
