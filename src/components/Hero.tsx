"use client";
import { useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "@/lib/gsap";
import Header from "./Header";

const HeroOrbit = dynamic(() => import("./HeroOrbit"), { ssr: false });

export default function Hero() {
  const card = useRef<HTMLDivElement>(null);
  const object = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = card.current;
    if (!el) return;
    const anim = document.documentElement.classList.contains("js-anim");
    let off: (() => void) | undefined;
    const ctx = gsap.context(() => {
      if (anim) {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".hero-object img", { yPercent: 14, opacity: 0, scale: 1.06, duration: 1.8 }, 0)
          .from(".hero-ghost", { opacity: 0, y: 40, duration: 2 }, 0.1)
          .from(".hero-tag", { y: 16, opacity: 0, duration: 1.1 }, 0.2)
          .from(".hero-title .line-in", { yPercent: 115, duration: 1.5, stagger: 0.14 }, 0.3)
          .from(".hero-copy p, .hero-cta", { y: 24, opacity: 0, duration: 1.2, stagger: 0.12 }, 0.8)
          .from(".glass-chip", { y: 30, opacity: 0, duration: 1.2, stagger: 0.14 }, 0.9)
          .from(document.querySelector(".header"), { y: -24, opacity: 0, duration: 1.2 }, 0.5);
      }

      const img = object.current?.querySelector("img");
      if (img && window.matchMedia("(hover: hover)").matches && anim) {
        const xTo = gsap.quickTo(img, "x", { duration: 1.2, ease: "power3.out" });
        const yTo = gsap.quickTo(img, "y", { duration: 1.2, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          xTo(((e.clientX - r.left) / r.width - 0.5) * -22);
          yTo(((e.clientY - r.top) / r.height - 0.5) * -14);
        };
        el.addEventListener("pointermove", move);
        off = () => el.removeEventListener("pointermove", move);
      }
    }, el);
    return () => {
      off?.();
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" id="top">
      <Header />
      <div className="hero-card" ref={card}>

        <div className="hero-deco" aria-hidden="true">
          <span className="hero-ghost">Care Guide</span>
        </div>

        <HeroOrbit />

        <p className="hero-tag mono">
          <i className="fa-solid fa-star-of-life" aria-hidden="true" />
          Your trusted tech partner
        </p>

        <div className="hero-object" ref={object}>
          <img src="/img/lighthouse-3d.webp" alt="Glass lighthouse sculpture on a stone plinth, the Care Guide mark" width={1500} height={2000} fetchPriority="high" />
        </div>

        <h1 className="hero-title">
          <span className="line l1">
            <span className="line-in">Back Office Support &amp;</span>
          </span>
          <span className="line l2">
            <span className="line-in">Digital Technology</span>
          </span>
          <span className="line l3">
            <span className="line-in">Partner in Bangladesh</span>
          </span>
        </h1>
        <div className="hero-lower">

        <div className="hero-copy">
          <p>
            Care Guide is your back office support and digital technology partner in Bangladesh: virtual teams, AI automation, DevOps, web, SEO and creative, all under one roof.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-amber">
              Work together
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
            <a href="#services" className="btn btn-ghost">
              Our services
              <span className="btn-chip">
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="glass-chip c1">
            <div>
              <b>1k+</b>
              <span>Tasks delivered every month</span>
            </div>
            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
          </div>
          <div className="glass-chip c2">
            <div>
              <b>99%</b>
              <span>Client satisfaction rate</span>
            </div>
            <i className="fa-solid fa-user-group" aria-hidden="true" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
