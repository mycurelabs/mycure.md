# Motion Optimization Plan (2026-09-26)

Purpose: cut the animation code the site ships and make every animation respect reduced-motion settings, while keeping the brand's look. This plan is the working checklist for branch `perf/motion-optimization`. It follows up [performance-audit-2026-01-02.md](performance-audit-2026-01-02.md).

## Baseline (production build, main @ 006e8a28d)

| Metric | Value |
|---|---|
| Shared JS (all routes) | 87.3 kB |
| First Load JS, product/culture/home | 191–195 kB |
| First Load JS, document pages | 154–169 kB |
| framer-motion chunk | 181.7 kB raw / 58.7 kB gz, loaded from the **root layout** |
| `<motion.*>` elements | 223 (193 `whileInView`) |
| `"use client"` files | 61 (29 only because of animation; all 15 `page.tsx`) |
| Reduced-motion coverage of framer animations | 0 of 223 |

## Motion rules (what stays)

- One entrance style: a subtle fade-up (opacity, plus a translate of 24px or less), ease-out `cubic-bezier(0, 0, 0.58, 1)`, about 300ms or less.
- Stagger 50–75ms per item. No long delay chains.
- Hover and press feedback: 150ms or less. Name the properties being animated; never use `transition-all` on components we change.
- Everything above the fold renders visible on first paint. Animate only content lower on the page.
- Every animation respects `prefers-reduced-motion`.
- Brand tokens, colours and layout stay as they are. This is a motion and performance pass, not a redesign.

## Phases

Each phase is its own commit, with the build output recorded.

### Phase 1: Subtract (lowest risk, biggest win)
- Replace `components/magicui/scroll-progress.tsx` with a CSS-only bar (`animation-timeline: scroll()`: Chromium 115+ and Safari 26+; Firefox and older Safari show no bar). The root layout then stops loading framer-motion.
- Add a small client `MotionProvider` (`LazyMotion strict` + `MotionConfig`). It is mounted only by the route layouts (and the home page) that render `m.*`, never the root layout, so document routes load no framer code.
- Reduced motion means no animation at all, not just no movement: under `prefers-reduced-motion: reduce` the provider sets `MotionConfig reducedMotion="always"` with a zero-duration transition and `MotionGlobalConfig.skipAnimations`, so fades jump straight to their end state. The CSS `.reveal` hides only under `no-preference`, and JS smooth scrolling uses `lib/scroll-behavior.ts` (`"auto"` under reduce).
- Without JS or in print, nothing stays hidden: a `<noscript>` style overrides framer's inline `opacity:0`, and `@media print` resets opacity and transforms.
- Delete unused code:
  - The `motion` and `embla-carousel-react` dependencies.
  - `magicui/rainbow-button.tsx` and the 4 barrel `index.ts` files that nothing imports.
  - The `rainbow` and `marquee-vertical` keyframes.
  - The `.theme {--animate-*}` block and the `--color-1` to `--color-5` variables.
  - `styles/globals.css` and `styles/design-system.ts`.
  - The unused exports in `lib/animation-variants.ts`.

### Phase 2: Document pages off framer
- terms-and-conditions, privacy-policy, security-overview, subprocessors, our-story, syncbase-technology: replace the `motion.*` fade-ins with one tiny shared CSS or IntersectionObserver reveal, or with nothing on long legal text. These routes then load no framer at all.
- Pull the duplicated table-of-contents scroll handler into one shared hook: passive listener, `requestAnimationFrame`-throttled, or an IntersectionObserver.

### Phase 3: Marketing pages
- Switch to `LazyMotion` + `m` + `domAnimation` in every remaining framer file (`strict` mode, so a stray full `motion` import can't sneak back in).
- Make hero content visible on load: no `initial={{ opacity: 0 }}` on above-the-fold elements.
- Bring timings in line with the motion rules (duration, stagger, easing). Add `once` to the 5 `whileInView` elements that are missing it.
- `AnimatedBadge` and the magicui text and button components: drop the framer `useReducedMotion` import (the global CSS rule already covers it) and render them as server-safe components.
- Replace `transition-all` with named properties where we touch code.

### Phase 4: Server rendering
- Remove `"use client"` from pages and components that no longer need it (the 7 pages without hooks, plus the animation-only sections), keeping small client wrappers only where motion remains.
- `dot-pattern`: drop `"use client"`.

## Verification (every phase)
- `npm run build` passes. Record First Load JS per route against the baseline.
- `grep` checks: no `from "framer-motion"` import of full `motion` after Phase 3; no framer in the root layout chunk after Phase 1; document routes' HTML references no chunk containing framer markers (`MotionValue`, `animateVisualElement`). Every file using `m.*` renders under a route with `MotionProvider`.
- Pages look the same (apart from the intended timing changes). Hero content is visible without JavaScript.

## Out of scope
- Visual redesign, new effects, copy changes.
- The shadcn accordion height animation (it's the Radix standard).
