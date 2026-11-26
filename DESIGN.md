---
name: Care Guide — The Lighthouse
description: Warm paper canvas, navy night panels and one brand-red beam. Wide display type, pill CTAs with arrow chips, glass 3D lighthouse hero.
colors:
  navy: "#1B2A5C"
  navy-deep: "#111C42"
  navy-ink: "#0A1230"
  amber: "#FF3B00"
  amber-bright: "#FF6A3D"
  amber-text: "#CC2B00"
  amber-soft: "#FFE3DA"
  canvas: "#EEEDE9"
  paper: "#F7F6F2"
  ink: "#101735"
  ink-2: "#4A5273"
  ink-3: "#6B7390"
  on-navy: "#E9ECF7"
  on-navy-2: "#A9B2D3"
typography:
  display:
    fontFamily: "Projekt Blackbird, Arial Black, sans-serif"
    fontSize: "clamp(1.9rem, 3.7vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.72rem"
    letterSpacing: "0.14em"
rounded:
  frame: "36px"
  card: "24px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  section: "clamp(72px, 10vw, 150px)"
components:
  button-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    height: "58px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    height: "58px"
---

# Design System: Care Guide — The Lighthouse

## Overview

A lighthouse guides ships through fog; Care Guide guides a business through operational noise. The page moves from a bright, floating hero card to a navy "night" panel and back to paper, closing on a navy CTA and footer. Amber is the only accent and always means "the beam": action, emphasis, or progress.

## Colors

Navy and amber come straight from the logo. Canvas and paper are warm greys so the glass render and photos sit naturally. Amber on light grounds uses `amber-text` (#CC2B00) to hold contrast; `amber` fills buttons and bars.

## Typography

Projekt Blackbird (supplied by the client, self-hosted from /public/fonts) is the display voice, uppercase in the hero. Hanken Grotesk carries body copy. JetBrains Mono appears only for small metadata (dates, hero meta).

## Components

- **Buttons:** pill, display font, uppercase, with a circular arrow chip that rotates 45° on hover. Variants: amber, navy, ghost, light.
- **Rows, not cards:** services, requirements and posts are ruled list rows with an icon or arrow chip; the service row floods navy from the bottom on hover.
- **Frames:** hero, about, culture and footer are 36px rounded frames inset from the viewport edge.

## Motion

Lenis smooth scroll drives everything. Headline words rise out of masks; the dark "Why" panel opens from a rounded card to full bleed then pins while three reasons light up; the quote lights word by word on scroll; the culture gallery scrolls sideways while pinned. Hero orbs (Three.js) drift and respond to the pointer. All of it is off under `prefers-reduced-motion`.

## Do / Don't

- Do keep amber to one job per viewport.
- Do keep copy and figures identical to careguidebd.com.
- Don't add eyebrow labels above headings, gradient text, or nested cards.
- Don't invent testimonials, client logos or contact details.
