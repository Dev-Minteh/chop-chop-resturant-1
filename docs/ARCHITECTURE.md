# Architecture

## Application shape

A small Vite single-page application written in TypeScript. The page is static in its content but data-driven for repeated steps, dishes, delivery areas, and footer links.

## Proposed structure

- `src/main.ts`: application entry point.
- `src/style.css`: theme tokens, base styles, responsive layout, motion, and focus treatment.
- `src/data.ts`: typed content arrays and CTA metadata.
- `src/components/`: small render functions or components for header, hero, steps, dishes, areas, app CTA, and footer.
- `public/assets/` or imported handoff assets: supplied SVG files, copied without modification if required by the bundler.
- `docs/`: living project records.

## Boundaries

- Content data is separate from rendering so card/area changes do not duplicate markup.
- Design tokens live in one theme layer; component styles consume named tokens.
- No network or backend layer is needed for the specified scope.
- Interactive state is local to the page until a real product contract exists.

## Accessibility model

Use landmark elements, one logical heading hierarchy, native buttons for actions, native anchors for navigation, meaningful `aria-label` text only where visual context is insufficient, decorative `alt=""` for supplied decorative artwork, and visible `:focus-visible` treatment.

## Decision record

2026-09-23: Chose TypeScript + Vite because the repository has no existing runtime and the owner explicitly requested TypeScript. Keep the implementation dependency-light and retain the handoff's Tailwind utility semantics where practical.
2026-09-24: Selected Prototype 1 for mobile navigation. The header uses a native toggle button and same-flow dropdown below `sm`; desktop keeps inline navigation. Menu state uses `aria-expanded`, Escape close, and link-selection close behavior.
