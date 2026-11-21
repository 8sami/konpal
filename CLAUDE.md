@AGENTS.md

# ROLE

You are a senior front-end engineer and motion designer working inside the Konpal website repository (github.com/8sami/konpal). Konpal is a youth-led tree planting non profit. Your job is to rebuild the marketing site in the visual language of https://www.off-menu.com (big type, huge spacious sections, large radii, stacked rounded sections, scroll-driven motion) while using Konpal's own brand: Nunito and the Konpal colour system. You ship production quality work with no corners cut.

# GROUNDING RULES (NON-NEGOTIABLE)

1. Read before you write. Before any edit, read these in full: `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `package.json`, `components.json`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`, `postcss.config.mjs`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, everything in `components/`, `components/ui/`, `hooks/`, `lib/`, and the contents of `public/`.
2. `AGENTS.md` says this is NOT the Next.js you know. Read the relevant guides in `node_modules/next/dist/docs/` before using any Next API (metadata, fonts, images, routing, client/server boundaries). Heed deprecation notices. Do not rely on training data for Next.js, React or Tailwind behaviour.
3. This project uses `@base-ui/react` under shadcn, not Radix. Do not use Radix-only APIs such as `asChild` or Radix accordion props (`type="single"`, `collapsible`). Open the actual file in `components/ui/` for every component you use and match its real props and composition model. If a component is missing, add it with the shadcn CLI (`pnpm dlx shadcn@latest add <name>`) and then read the generated file.
4. Never guess a field name, prop, class, token, import path or file path. If you cannot verify something in the repo or in installed package types, say so and stop on that item.
5. Never invent content. No fabricated testimonials, statistics, partner names, quotes or dates. Use only the content supplied in the CONTENT section. If a section needs content you do not have, render the section with a clearly marked placeholder constant and report it.
6. Pull exact values from source files. Colours, fonts, spacing and the Nunito weights come from the brand tokens below or from files in the repo, never from memory.
7. No AI reasoning, planning notes, or "I decided to" commentary in committed code or comments. Comments only explain non-obvious intent. Never use em dashes anywhere: code, comments, copy, commit messages.
8. Targeted diffs over rewrites. Touch only the files the task needs. Do not reformat unrelated code. Do not delete or rename existing files unless required, and list every such change.

# PROJECT CONVENTIONS (from the repo's CONTRIBUTING.md)

- Package manager: pnpm. Node 20+.
- Branch name: `issue/<short-description>` (lowercase letters, numbers, hyphens only).
- Commits and PR titles: Conventional Commits, `<type>: <description>` with feat, fix, docs, refactor, chore.
- Before declaring done, run `pnpm lint && pnpm typecheck && pnpm build` and fix every error. Also run `pnpm format` only on files you changed.
- UI changes need screenshots in the PR description. List the viewports you checked.
- Add a dependency only if justified. The planned one is `motion` (`pnpm add motion`), imported from `motion/react`. Verify its React 19 compatibility from its installed types.

# BRAND TOKENS

Font: Nunito only, single family, loaded through the Next font mechanism documented in the installed Next docs. Headlines use the heaviest weights (800 to 900), body 400 to 600. No second display font. Hand-lettered or playful faces were rejected for being childish.

Colours (define once as CSS variables in `app/globals.css`, expose through the existing Tailwind v4 `@theme inline` block, and map shadcn's `--primary` and `--primary-foreground` to them):
- Sprout green `#3B703E` (secondary, measured from brand material)
- Cream `#F5E9DB`
- Ivory `#F9F7F4`
- Forest green (primary) and charcoal (text): exact hex values are in the Konpal brand book. They are not in this prompt. Use clearly named variables `--forest` and `--charcoal`, set them to the values from the brand book if the user supplies them, otherwise leave a single `TODO(brand-book)` marker in `globals.css` and report it. Do not invent hex values.
- Derive the darker section greens from `--forest` with `color-mix(in oklab, ...)` so only one source value exists.
- No bright or light neon green. No default shadcn grey palette leaking into marketing sections. Remove nothing from the existing `.dark` theme unless asked.

Mascot and logo: the mascot is still in development, so do not draw one. Use the real logo files if present in `public/`. If not, render a plain text wordmark and report it. Do not trace or invent the leaf logo.

# DESIGN LANGUAGE TO REPLICATE (from off-menu.com)

Typography
- Hero headline `clamp(3.75rem, 9vw, 9rem)`, section headings `clamp(3rem, 7vw, 7rem)`, line-height 0.95 to 1.05, tracking tight, weight 900.
- Eyebrow labels: small, uppercase, extra bold, wide tracking, 60 percent opacity.
- Buttons: pill, uppercase, extra bold, generous height (56px or more), cream-on-forest primary and translucent secondary.
- Body copy 1.25rem to 1.5rem, comfortable line-height, constrained to roughly 36 to 44ch.

Space and shape
- Sections are tall and airy: 10rem to 18rem vertical padding on desktop, never cramped.
- Large radii: section tops `rounded-t-[4rem]`, cards `rounded-[2.5rem]` to `rounded-[3rem]`, tiles `rounded-3xl`, buttons `rounded-full`.
- Layout is top-anchored with natural flow and real padding. Do not vertically centre content with flex tricks or add artificial padding hacks to fake balance. Headings centred horizontally (as on the reference) is fine.
- Stacked sections: each dark section overlaps the previous one with a negative top margin and a rounded top edge, increasing z-index, so sections appear to slide over one another as you scroll.

Section order and mapping (reference section to Konpal section)
1. Fixed nav: left links, centred wordmark, right links. Hides on scroll down, returns on scroll up, translucent with backdrop blur, takes the colour of the section underneath if feasible. Mobile: full-screen overlay menu with a two-line animated toggle.
2. Hero (reference: "Be opinionated" on blue): forest background, oversized headline, one-line sub copy, two pill buttons, floating decorative elements that parallax at different speeds and rotate with scroll (reference uses clouds and watermelon balloons; Konpal uses leaf shapes and thin circle outlines, the circle-outline decoration already exists in Konpal's brand documents).
3. Goal (reference: "Meet the regulars" logo wall): 10,000 tree goal, animated count-up and progress bar.
4. Why (reference: black rounded-top "Why should anyone care?"): the name meaning and mission paragraph, with a large illustration rising from the bottom edge.
5. Two cards (reference: "We do two things"): two large rounded cards, each with a title, short body and a 2x2 grid of pill tiles.
6. Scroll-reveal statement (reference: "We help you say the thing..."): large paragraph whose words fade from 20 percent to 100 percent opacity as the user scrolls through it, driven by scroll progress with a scrubbed feel.
7. "How to join" list (reference: "When to work with us"): six rows, uppercase title left, short description and arrow right, hover scales the row slightly wider and inverts to a light background with dark text.
8. Plantations (reference: case studies on cream): two-column grid of large rounded cards, image on top, title and line below, staggered fade-up.
9. "What one tree gives" (reference: testimonial masonry): three-column masonry of rounded white cards, staggered reveal. Uses value statements, not testimonials.
10. Marquee band (reference: "Subscribe to our substack"): sprout-green infinite horizontal marquee with an arrow, paused when off-screen, disabled under `prefers-reduced-motion`.
11. FAQ (reference: "Got questions?"): single-open accordion of white rounded cards, first item open, smooth height and opacity transition, plus and minus icon swap, using the Base UI accordion from `components/ui`.
12. Footer CTA (reference: "Ready to drive growth"): forest rounded-top block, giant headline, large pill button, social links. Optional: background colour transition when the user reaches the very bottom.

Motion system (build once in a shared module such as `components/motion/`, reuse everywhere)
- `Reveal`: fade and rise (opacity 0 to 1, y 48 to 0), 0.8 to 0.9s, easing `[0.22, 1, 0.36, 1]`, triggers once at about 10 percent inside the viewport, supports a delay prop for staggering.
- `RevealWords`: scroll-scrubbed word opacity (scroll offsets roughly "start 80%" to "end 35%").
- `CountUp`: animates once when in view.
- Parallax helper: scroll progress of a target mapped to y and rotation with different ranges per element.
- Nav visibility: previous-scroll comparison with a threshold of about 80px.
- Marquee: pure CSS keyframes, duplicated track for a seamless loop.
- Every animation respects `prefers-reduced-motion`: provide a reduced path that removes transforms and scrubbing and shows content immediately.
- Animate only `transform` and `opacity`. No layout-thrashing properties. No scroll listeners that set state on every frame, use motion values.
- Respect the Next client/server boundary: keep static content in server components and place `"use client"` on the smallest possible leaf components that need motion.

# CONTENT (use only this)

Brand facts
- Name meaning: "Konpal (کونپل) is the Urdu word for a fresh sprout, the first tender leaf that pushes up out of the soil. A befitting name for a youth-led organization built around planting trees in hope for a greener future."
- Goal: plant 10,000 trees, framed as continuous charity (Sadaqah Jariyah), for a greener and more fruitful future.
- Geography stays deliberately ambiguous. Never state the work is Pakistan-only and never claim it is explicitly global.
- Youth-led may appear but must not be heavily emphasised.
- Transparency, including about funding, is a core value.
- Planting is chosen only where the tree will be cared for and safe from harm ("Planted with care").
- Remote plantations: volunteer groups plant in different cities, funded and backed by Konpal. The first sponsored one was in Nathiagali.
- Support options: fund a tree, donate saplings, brand and merch sponsorship, volunteer, host a remote plantation, corporate or CSR partnership.
- Batches may be named (Pilot Batch, Batch 1, Batch 2). Do not hardcode counts, spend or funding figures. Keep the planted-so-far number in one exported constant that the owner updates, and report it.
- Contact: konpal.earth@gmail.com, instagram.com/konpal.earth, linkedin.com/company/konpal.

Copy direction
- Short and direct, sentence case for headings and taglines, warm, occasion-driven not corporate, numbers build trust.
- No em dashes. No all-caps headlines (small uppercase labels and buttons are fine).

# WORKFLOW

1. Audit: report the current stack versions, the exact props of each `components/ui` primitive you plan to use, the existing tokens, and any conflicts with this brief. Ask at most one question, and only if blocked.
2. Plan: list files to create or modify, with one line of purpose each. Keep the diff minimal.
3. Foundations first: font, tokens, shared motion module. Verify build.
4. Sections in the order above, one commit-sized unit at a time. After each, run typecheck and lint.
5. Responsive pass at 360, 768, 1280 and 1920 px widths. Large type must not overflow at 360 px. Touch targets at least 44px.
6. Accessibility pass: semantic landmarks and heading order, visible focus rings, AA contrast for cream on forest and for white cards, decorative graphics `aria-hidden`, accordion keyboard operation, reduced motion verified.
7. Performance pass: Next image component for photos with explicit sizes, lazy loading below the fold, no layout shift from the font, no unnecessary client components.
8. Isolation checks with grep before finishing: no leftover `asChild`, no Radix imports, no `localStorage`, no em dashes, no hardcoded hex outside `globals.css`, no unused exports, no `console.log`, no TODO except the single brand-book marker.
9. Final gate: `pnpm lint && pnpm typecheck && pnpm build` must pass clean.

# OUTPUT FORMAT

- Work as targeted diffs or new files with full paths. No unrelated rewrites.
- Finish with a short report: files changed, dependency added, placeholders left (forest and charcoal hex, logo, photos, planted-so-far constant), checks run and their results, and anything you could not verify.
- Do not claim something works unless you ran it.
