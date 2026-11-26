"use client";
import { useState } from "react";

/** Contact: oversized CONTACT word with the form card overlapping it. No backend yet, so submit only shows a thank-you state. */
export default function Contact() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-box" data-reveal>
          <h2 id="contact-title" className="contact-word">
            Contact us
          </h2>
          <div className="contact-disc" aria-hidden="true">
            <div className="contact-disc-spin">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <img key={n} src="/img/site/lighthouse-disc.webp" alt="" width={360} height={360} className={n === 6 ? "face front" : n === 0 ? "face back" : "slab"} style={{ transform: n === 0 ? `translateZ(-9px) rotateY(180deg)` : `translateZ(${(n - 3) * 3}px)` }} />
              ))}
            </div>
          </div>

          <form
            className="contact-card"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const email = String(f.get("email") || "");
              if (!String(f.get("first") || "").trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setErr("Please add your first name and a valid email.");
                return;
              }
              setErr("");
              setDone(true);
            }}
          >
            <span className="contact-eyebrow">Reach us</span>
            <div className="contact-cols">
              <div className="contact-fields">
                <label>
                  <span className="sr-only">First name</span>
                  <input name="first" placeholder="First Name" autoComplete="given-name" />
                </label>
                <label>
                  <span className="sr-only">Last name</span>
                  <input name="last" placeholder="Last Name" autoComplete="family-name" />
                </label>
                <label>
                  <span className="sr-only">Email</span>
                  <input name="email" type="email" placeholder="Email" autoComplete="email" />
                </label>
                <label className="contact-check">
                  <input type="checkbox" name="consent" />
                  <span>I give Care Guide permission to contact me at this email address.</span>
                </label>
              </div>
              <div className="contact-msg">
                <label>
                  <span className="sr-only">Message</span>
                  <textarea name="message" placeholder="Type your message here" rows={6} />
                </label>
                <p className="contact-note" role={err ? "alert" : undefined}>
                  {done ? "Thank you, we have your message." : err || "We only use your details to answer this message."}
                </p>
                <button type="submit" className="contact-send" disabled={done}>
                  Send
                  <span className="btn-chip">
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
