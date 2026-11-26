"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const valid = /^[^s@]+@[^s@]+.[^s@]+$/.test(email);

  return (
    <section className="news" aria-labelledby="news-title">
      <div className="news-card" data-reveal>
        <img className="news-icon" src="/img/site/newsletter-envelope.webp" alt="" width={190} height={156} />
        <span className="news-rule" aria-hidden="true" />
        <div className="news-copy">
          <h2 id="news-title">
            Subscribe to our
            <br />
            Newsletter
          </h2>
          <p>Get the latest updates and insights.</p>
        </div>
        <form
          className="news-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (valid) setDone(true);
          }}
          noValidate
        >
          <i className="fa-regular fa-envelope" aria-hidden="true" />
          <label htmlFor="news-email" className="sr-only">
            Email address
          </label>
          <input
            id="news-email"
            type="email"
            autoComplete="email"
            placeholder={done ? "Thanks, you are on the list" : "Enter your email"}
            value={done ? "" : email}
            disabled={done}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" aria-label="Subscribe" disabled={done}>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
