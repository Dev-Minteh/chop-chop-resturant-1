# Mobile Navigation Prototypes

## Why this is needed

The current header keeps the full navigation link row below the logo on small screens. This creates unnecessary vertical height and does not provide the expected hamburger interaction. These prototypes keep the existing Chop Chop visual language while exploring three different mobile menu behaviors.

## Shared constraints

- Mobile-only behavior below the existing `sm` breakpoint.
- Desktop navigation remains unchanged.
- Use the supplied logo and existing `chop`, `cream`, `ink`, `surface`, and `line` tokens.
- Use a native button with an accessible label and `aria-expanded`/`aria-controls`.
- Close the menu after a navigation link is selected.
- Support Escape to close and preserve visible keyboard focus.
- Do not add a dependency for the menu icon or motion.

## Prototype 1: Compact dropdown

### Shape

A single-row mobile header with the logo on the left and a menu icon button on the right. Opening the menu reveals a bordered surface directly below the header containing the three section links and the orange Get the app CTA.

### Interaction

- Menu button toggles the panel between closed and open.
- Panel slides down with a short height/opacity transition.
- Selecting a link closes the panel and scrolls to the section.

### Strengths

- Smallest visual change from the current desktop header.
- Keeps the user anchored to the page and makes the menu context obvious.
- Lowest implementation and layout risk.

### Tradeoffs

- The menu content is still visually close to the page content.
- A long future navigation list could make the dropdown tall.

### Best fit

Recommended when the priority is preserving the calm, compact handoff layout.

## Prototype 2: Full-width cream panel

### Shape

A single-row mobile header with the logo and hamburger. Opening the menu expands a full-width cream navigation panel below the header. Links use large, comfortable tap targets; the CTA is a full-width orange button at the bottom.

### Interaction

- Menu button changes from hamburger to close icon.
- Panel expands in place with a staggered link reveal.
- Selecting a link closes the panel.

### Strengths

- Strongest relationship to the brand's cream hero band.
- Most comfortable for touch and easiest to scan.
- Makes the CTA prominent without feeling like an unrelated modal.

### Tradeoffs

- Temporarily pushes the page content down.
- Uses more vertical space than Prototype 1.

### Best fit

Recommended when mobile usability and clear tap targets matter most.

## Prototype 3: Right-side drawer

### Shape

A single-row mobile header with the logo and hamburger. Opening the menu reveals a fixed right-side surface over the page with a subtle backdrop. The drawer contains the navigation links, CTA, and a small brand mark.

### Interaction

- Menu button changes to close icon.
- Backdrop and Escape close the drawer.
- Drawer enters from the right and traps focus while open.
- Selecting a link closes the drawer after scrolling.

### Strengths

- Feels like a polished app-style navigation pattern.
- Leaves the page composition visible behind the menu.
- Scales well if more navigation items are added later.

### Tradeoffs

- Highest accessibility and focus-management complexity.
- More visually dramatic than the restrained supplied design.
- Requires careful mobile viewport and scroll-lock handling.

### Best fit

Recommended only if the page should feel closer to a product/app shell than a landing page.

## Selection checkpoint

Prototype 1, the compact dropdown, was selected and implemented on 2026-09-24. The production header keeps the logo and toggle on one mobile row, opens a full-width dropdown beneath it, and restores the inline navigation at the `sm` breakpoint. Its open state was visually refined after browser comparison so links align to the panel edge and the CTA spans the available menu width.
