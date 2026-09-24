# Design Analysis

## Visual direction

The design is warm, practical, and food-oriented: white content bands alternate with a pale cream hero/popular band, while the app CTA and footer use near-black. Orange is the action accent. Cards are restrained, bordered, and shadowless.

## Layout

- Content is centered in a `max-w-6xl` container with `px-5`.
- Header is stacked below `sm`, then becomes a row.
- Hero is stacked below `lg`, then places copy left and phone right.
- Steps are stacked below `sm`, then use three columns.
- Popular dishes and delivery areas use one column on mobile, two at `sm`, and three at `lg`.
- Footer changes from stacked to a row at `sm`.

## Typography

The handoff specifies the system sans stack. Headings use tight tracking and semibold weight; no bold weight is used. Body copy is readable and constrained to prose width. The hero heading is `text-4xl` on mobile and `lg:text-5xl`.

## Color contract

Use only the named palette from the style guide: `chop`, `chop-dark`, `chop-light`, `chop-soft`, `ink`, `ink-2`, `ink-3`, `surface`, `cream`, `line`, `leaf`, `leaf-soft`, `on-dark`, `on-dark-soft`, and `dark-line`. The three oranges have separate contrast roles and must not be swapped.

## Interaction and motion

All documented hover states move: links lift, primary buttons lift, the hero arrow slides, cards lift, and Add buttons invert colors without lifting. Use `duration-200`. Keyboard-only focus uses a 2px accent outline with 2px offset.

## Asset findings

- `logo.svg`: decorative bowl/steam mark for header/footer/favicon.
- `phone.svg`: complete phone mockup with embedded food photography and meaningful alternative text.
- `step-1.svg` through `step-3.svg`: decorative step illustrations.
- `dish-1.svg` through `dish-6.svg`: complete card artwork in comp order.
- `CREDITS.md`: credits the five embedded photographs; retain it as provenance documentation.

## Responsive observations

The mobile comp preserves generous vertical rhythm, places the hero phone below the CTA, and gives each card a full-width readable body. The footer CTA buttons stack. No horizontal scrolling should be required at narrow widths.

## Reference reconciliation - 2026-09-24

The supplied desktop and mobile comps contain a finalized content pass that supersedes the earlier first-pass copy: the hero uses the delivery-area eyebrow and “Dinner is one tap away.”, the steps describe kitchens, orders, and riders, dish cards use the supplied kitchen names, badges, and prices, delivery areas use fixed minute values, and the download/footer bands use finalized copy. The implementation now follows those references.

Visual alignment was also corrected: hero and section content are left-aligned, steps read as left-aligned editorial columns, the download band is centered, and the footer uses three link columns.

## Mobile navigation gap

The current implementation stacks the full desktop navigation below the logo below `sm`, which creates unnecessary vertical height. Three hamburger prototypes are documented in `MOBILE_NAV_PROTOTYPES.md`; the selected option will become the mobile-only navigation behavior while desktop navigation remains unchanged.
