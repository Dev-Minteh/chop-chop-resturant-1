# Requirements

## Functional requirements

- Render a complete Chop Chop landing page.
- Provide navigation to How it works, Popular, Areas, and the app CTA.
- Present the hero copy and supplied phone artwork.
- Present the three ordering steps in order.
- Present six popular dish cards in the supplied order with name, kitchen, area, price, badge, image, and Add control.
- Present six delivery areas with delivery times.
- Present iPhone and Android download CTAs.
- Preserve semantic headings, links, buttons, image alternatives, keyboard focus, and responsive reading order.

## Visual requirements

- Match the supplied desktop and mobile comps.
- Use the fifteen named handoff colors only.
- Use the supplied logo, phone, step, and dish assets without redrawing them.
- Follow the documented Tailwind-scale spacing, sizes, radii, transitions, breakpoints, and no-shadow rule.
- Match the mobile-first behavior: stacked header, hero, steps, cards, areas, and footer.

## Technical requirements

- Implement in TypeScript rather than JavaScript.
- Use a maintainable component/data structure without duplicating repeated cards or area rows.
- Keep dependencies minimal.
- Provide a reproducible development command and production build.

## Non-requirements

- No real checkout, delivery tracking, account system, API, CMS, or app-store links are defined.
- No extra marketing copy or features should be invented.

## Ambiguities and decisions

- The handoff describes a Tailwind/Vite block, while the owner explicitly requests TypeScript. The project will use a TypeScript Vite application and Tailwind only if its setup remains small and faithful to the handoff.
- CTA destinations are unspecified. Until real destinations exist, they will use accessible placeholder links or controlled button behavior documented in the implementation review rather than pretending to provide production integrations.
