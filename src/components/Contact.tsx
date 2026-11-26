"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";

const WAYS = [
  { icon: "fa-regular fa-comments", title: "Chat", body: "Message our team directly", href: `${SITE}/contact/` },
  { icon: "fa-solid fa-phone-volume", title: "Call us", body: "Request a call back from our team", href: `${SITE}/contact/` },
];

/** Contact: intro, two quick-contact cards and a message form. No backend yet, so submit only shows a thank-you state. */
export default function Contact() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<{ name?: string; email?: string }>({});

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="cx-head" data-reveal>
          <span className="cx-label">Contact</span>
          <h2 id="contact-title" className="cx-title">
            Let’s build your <br />
            support plan together!
          </h2>
          <p className="cx-lede">Have a question about our services, hiring or which support fits your team best? Reach out and we’ll help you find your next step forward.</p>
        </div>

        <div className="cx-grid" data-reveal>
          <div className="cx-ways">
            {WAYS.map((w) => (
              <a key={w.title} href={w.href} className="cx-way">
                <i className={w.icon} aria-hidden="true" />
                <span className="cx-way-text">
                  <b>{w.title}</b>
                  <span>{w.body}</span>
                </span>
                <span className="cx-go" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </a>
            ))}
          </div>

          <form
            className="cx-form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const next: { name?: string; email?: string } = {};
              if (!String(f.get("name") || "").trim()) next.name = "Please enter your full name.";
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(f.get("email") || ""))) next.email = "Please enter a valid email.";
              setErr(next);
              if (!next.name && !next.email) setDone(true);
            }}
          >
            <h3 className="cx-form-title">Send a Message</h3>

            <label className="cx-field">
              <span>Full name</span>
              <input name="name" placeholder="Enter your full name" autoComplete="name" aria-invalid={!!err.name} />
              {err.name && <em role="alert">{err.name}</em>}
            </label>
            <label className="cx-field">
              <span>Email</span>
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" aria-invalid={!!err.email} />
              {err.email && <em role="alert">{err.email}</em>}
            </label>
            <label className="cx-field">
              <span>Message</span>
              <textarea name="message" placeholder="Tell us what you’d like help with…" rows={4} />
            </label>

            <button type="submit" className="cx-send" disabled={done}>
              {done ? "Thank you, we have your message" : "Send Message"}
              <span className="cx-send-chip" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
