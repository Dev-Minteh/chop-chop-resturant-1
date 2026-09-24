# Implementation Plan

## Phase 0: Foundation

- Create the TypeScript Vite scaffold.
- Add the supplied assets to the app's asset path.
- Establish theme tokens, global reset, and responsive container utilities.
- Checkpoint: typecheck/build succeeds and the app loads.

## Phase 1: Shell and hero

- Implement header navigation, hero copy, CTAs, phone artwork, and delivery stat.
- Match mobile-first stacking and large-screen split layout.
- Checkpoint: compare first viewport at mobile and desktop sizes.

## Phase 2: Informational sections

- Implement How it works using typed step data.
- Implement delivery areas using typed area data.
- Add semantic anchors for navigation.
- Checkpoint: heading order, keyboard navigation, and responsive layout.

## Phase 3: Popular dishes

- Implement six data-driven dish cards in handoff order.
- Add badge variants and Add button interaction feedback.
- Checkpoint: card grid, assets, content, hover/focus, and mobile stacking.

## Phase 4: App CTA and footer

- Implement dark download band, footer brand, link columns, and copyright.
- Checkpoint: dark-band contrast, CTA focus outline, and footer responsive layout.

## Phase 5: Verification and polish

- Run typecheck, lint if configured, tests, and production build.
- Inspect desktop/mobile screenshots against the comps.
- Check overflow, asset loading, accessibility, motion, and empty/error states applicable to a static page.
- Update `PROGRESS.md`, `TESTING.md`, and `REVIEW.md` after each checkpoint.

## Mobile navigation phase

- Selected Prototype 1, compact dropdown.
- Added a mobile-only menu toggle and same-flow dropdown.
- Preserved desktop inline navigation at `sm` and above.
- Validated open, Escape close, link close, and responsive overflow.

## Dependency order

Foundation must precede all UI work. The shell and theme must precede section implementation. Shared typed data should be established before repeated cards/rows are rendered. Final visual comparison follows all sections.
