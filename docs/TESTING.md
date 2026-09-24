# Testing

## Planned checks

- TypeScript typecheck.
- Production build.
- Unit or DOM checks for repeated content counts and required labels where a test runner is added.
- Responsive browser checks at the supplied mobile and desktop reference dimensions.
- Screenshot comparison against `comp-mobile.png` and `comp-desktop.png`.
- Keyboard-only traversal and visible focus checks.
- Basic semantic/accessibility inspection: landmarks, heading order, alt text, button/link roles, contrast, and no horizontal overflow.

## Phase gates

- Foundation: app starts and production build succeeds.
- Shell: hero/header works at mobile and desktop widths.
- Content: all steps, dishes, and areas render in exact order with supplied assets.
- Footer: dark-band contrast and responsive stacking work.
- Final: no console errors, broken asset requests, layout overflow, or newly introduced type/build errors.

## Static-page state coverage

There is no specified network loading or error state. Interactive Add controls should have a clear local state if implemented; unsupported external download destinations must remain visibly honest and accessible.

## Results

Foundation and landing page build: passed with `npm run build`.

Mobile browser probe at 390px: passed image loading, content counts, and no horizontal overflow.

Desktop browser probe at 1440px: passed responsive column checks and no horizontal overflow.

Interaction probe: passed Add to Added state and `aria-pressed` update.

Accessibility snapshot: passed expected landmarks, heading hierarchy, links, buttons, and image alternatives.

Remaining manual check: compare future screenshot captures against supplied comps for pixel-level spacing refinements.

## Mobile navigation results - 2026-09-24

- Mobile toggle visibility: passed at 390px.
- Mobile open state: passed; dropdown receives `.is-open`, button exposes `aria-expanded="true"`, and accessible label changes to `Close menu`.
- Escape close: passed.
- Navigation-link close: passed.
- Desktop restoration at 1024px: passed; hamburger hidden and inline navigation visible.
- Overflow check: passed at desktop breakpoint.

## Full reference audit results - 2026-09-24

- Production build after content/style corrections: passed.
- Mobile 390px: six dishes, six delivery areas, finalized hero and section headings, all supplied images loaded on a clean Vite process, and no horizontal overflow.
- Desktop 1440px: two-column hero, three-column dish grid, three footer link columns, left-aligned sections, centered download band, and no horizontal overflow.
- Source diagnostics for `main.ts`, `data.ts`, and `style.css`: no errors.
