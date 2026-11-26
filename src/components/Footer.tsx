import Split from "./Split";
import { Brand } from "./Header";
import { FOOTER, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <>
      <section className="cta" id="contact" aria-labelledby="cta-title">
        <div className="beam" aria-hidden="true" />
        <h2 id="cta-title" className="sr-only">
          Work with Care Guide
        </h2>
        <Split as="p" className="display" text="Let's guide your business forward." accent={["guide"]} />
        <p data-reveal>
          Tell us where operations, technology or growth feel heavy. We will help you lighten the load with a team that delivers with speed, care and precision.
        </p>
        <p data-reveal>
          We offer services like customer support, back office tasks, digital marketing, web development, IT support, virtual assistance, and content creation, designed to boost brand loyalty and reduce costs.
        </p>
        <div className="cta-row" data-reveal>
          <a href={`${SITE}/contact/`} className="btn btn-amber">
            Work together
            <span className="btn-chip">
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </span>
          </a>
          <a href={`${SITE}/service/`} className="btn btn-ghost">
            Explore services
            <span className="btn-chip">
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <Brand dark />
            <p className="about-line">
              Care Guide delivers comprehensive digital, creative, and operational solutions to help businesses enhance efficiency, elevate their brand, and scale with confidence.
            </p>
            <div className="socials">
              {FOOTER.social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Company">
            <h4>Company</h4>
            <ul>
              {FOOTER.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Services">
            <h4>Service</h4>
            <ul>
              {FOOTER.service.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Policies">
            <h4>Policies</h4>
            <ul>
              {FOOTER.policies.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="https://basis.org.bd/company-profile/25-12-034" target="_blank" rel="noreferrer">
                  BASIS Membership
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-base">
          <span>© 2026 Care Guide. All rights reserved.</span>
          <span>Dhaka, Bangladesh · Since 2022</span>
        </div>
      </footer>
    </>
  );
}
