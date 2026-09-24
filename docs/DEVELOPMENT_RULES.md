# Development Rules

- Use TypeScript for all application source files; do not add JavaScript source.
- Read the relevant living docs before each implementation phase.
- Preserve supplied assets and existing behavior; there is currently no existing app behavior.
- Keep repeated content in typed data structures and reuse rendering logic.
- Keep colors in the theme/token layer; do not scatter handoff hex values through markup or component code.
- Follow the handoff breakpoints and mobile-first ordering.
- Use semantic HTML and native controls before custom interaction patterns.
- Provide `:focus-visible` treatment for every interactive control.
- Do not add shadows, unapproved colors, invented copy, or unnecessary dependencies.
- Avoid unrelated refactors and keep edits scoped to the current phase.
- After each phase, run the narrowest useful validation, then update progress and review records.
- Do not claim a production integration where the handoff does not define one.
