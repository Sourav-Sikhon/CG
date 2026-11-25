"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="Care Guide home" style={dark ? { color: "#fff" } : undefined}>
      <img src="/img/logo-mark.webp" alt="" width={44} height={44} />
      <span>Care Guide</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <Brand />
        <nav className="nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn btn-amber btn-sm">
            Work together
            <span className="btn-chip">
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </span>
          </a>
          <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} className="d-link" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {n.label}
          </a>
        ))}
        <a href="#contact" className="d-link" style={{ color: "var(--amber-bright)" }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Work together
        </a>
      </div>
    </>
  );
}
