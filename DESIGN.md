# Design

## Theme

Dark-only. The scene: an operator at a terminal at night — focused, intense. Crimson on near-black ink. **Committed** color strategy (crimson is the voice, ~30–50% of accent surface), not a restrained one-accent product palette.

## Color

All values OKLCH. Defined as CSS custom properties in `src/styles/global.css`; a matching crimson tuple lives in the Mantine theme.

| Token | OKLCH | Role |
|---|---|---|
| `--ink` | `oklch(0.155 0.012 20)` | Page background — near-black with a whispered red |
| `--ink-raised` | `oklch(0.195 0.014 20)` | Raised surface (panels, the few cards that earn it) |
| `--ink-sunken` | `oklch(0.125 0.012 20)` | Recessed wells (code blocks, diagram bg) |
| `--hair` | `oklch(0.72 0.02 25 / 0.14)` | Hairline borders (1px) |
| `--crimson` | `oklch(0.585 0.205 23)` | Primary brand — accents, large headings, links |
| `--crimson-bright` | `oklch(0.66 0.225 26)` | Hover / emphasis |
| `--blood` | `oklch(0.40 0.16 22)` | Deep blood-red — rails, deep fills |
| `--ember` | `oklch(0.74 0.155 60)` | Amber micro-accent — "live / current / alert" states only (a nod to observability) |
| `--bone` | `oklch(0.95 0.008 60)` | Primary text |
| `--ash` | `oklch(0.80 0.010 40)` | Secondary text (≥4.5:1 on ink) |
| `--ash-dim` | `oklch(0.66 0.012 40)` | Meta / labels, large or non-essential only |

Contrast: `--bone` and `--ash` clear AA for body on `--ink`; `--crimson` is reserved for ≥18px / headings / accents (≈4:1), never small body copy.

## Typography

Self-hosted via `@fontsource` (no external CDN). Inter is **dropped** (AI default).

- **Sans (display + body): Hanken Grotesk.** One family, contrast by weight — 800/700 for display, 600 for subheads, 400/500 for body. Avoids the two-similar-sans trap.
- **Mono: JetBrains Mono.** Carried over from the GitHub README for identity continuity. Used *only* for genuinely technical content — metrics, version tags, the status line, code, IaC snippets. Never decorative.
- Scale: fluid `clamp()`, ≥1.25 ratio. Display ceiling ≤ 6rem. Letter-spacing on big display ≈ -0.03em (floor -0.04em). `text-wrap: balance` on h1–h3, `pretty` on prose. Line length capped 65–75ch. Light-on-dark line-height bumped ~+0.05.

## Radius & shape

Sharp. `defaultRadius` small (4px). The crimson/blade identity wants edges, not pillowy 16px cards.

## Components & layout

- **No glassmorphism, no gradient text, no side-stripe borders** (removed from the old build).
- Panels: flat `--ink-raised` with a 1px `--hair` border; hover lifts border to crimson + subtle translate. Used sparingly — cards are the lazy answer.
- Section rhythm via fluid `clamp()` spacing; vary tight/loose for cadence.
- Featured project case studies are long-form, full-width, with a **custom SVG architecture diagram** (imagery is mandatory on a brand surface; the diagram is the hero image).
- Responsive grids: `repeat(auto-fit, minmax(280px, 1fr))`.

## Motion

Framer Motion (already a dependency). One orchestrated hero entrance; restrained per-section reveals that enhance an already-visible default. `useReducedMotion` collapses everything to instant. Ease-out-expo curves, no bounce. Scroll-linked accents kept minimal.

## Signature elements

- "Mediocrity is a sin." as a recurring signature line.
- The *Brand of Sacrifice* mark (`public/brandofsacrifice.svg`) as a subtle backdrop watermark / favicon, not a loud logo.
- Mono "status line" in the hero (e.g. `● available · Batam, ID · UTC+7`).
