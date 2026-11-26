import Split from "./Split";
import Contact from "./Contact";
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

      <Contact />

      <footer className="footer">
        <img className="footer-video" src="/img/site/footer-bg.webp" alt="" aria-hidden="true" />
        <div className="footer-tint" aria-hidden="true" />
        <div className="footer-grid">
          <div className="f-about">
            <h4>About Us</h4>
            <p className="about-line">
              Care Guide delivers comprehensive digital, creative, and operational solutions to help businesses enhance efficiency, elevate their brand, and scale with confidence.
            </p>
            <div className="socials">
              {FOOTER.social.map((s) => (
                <a key={s.label} href={s.href} className={"soc-" + s.icon.replace("fa-", "")} aria-label={s.label} target="_blank" rel="noreferrer">
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
            <h4>Services</h4>
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
            </ul>
          </nav>
          <div className="f-member">
            <h4>Membership</h4>
            <a href="https://basis.org.bd/company-profile/25-12-034" target="_blank" rel="noreferrer" aria-label="BASIS member">
              <img src="/img/site/badge-member.webp" alt="Member" width={132} height={79} />
              <img src="/img/site/badge-basis.webp" alt="BASIS, Bangladesh Association of Software and Information Services" width={132} height={80} />
            </a>
          </div>
        </div>
        <div className="footer-base">
          <Brand dark />
          <span>
            © 2026 <b>Care Guide</b> all rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
