# Chop Chop Project Overview

## Purpose

Chop Chop is a fictional food-delivery landing page for the Kombos. The page introduces the service, explains the ordering flow, highlights popular dishes, shows delivery areas, and directs visitors to download the app.

## Current baseline

- Repository state: design handoff only; no application source, package manifest, build configuration, tests, or existing behavior were found.
- Source of truth: `design-handoff/style-guide.md`, `design-handoff/comp-desktop.png`, `design-handoff/comp-mobile.png`, and supplied SVG assets.
- Technical direction: TypeScript, as requested by the project owner.

## Scope

The first implementation is a responsive single-page website matching the supplied desktop and mobile compositions. Interactive behavior is limited to semantic navigation links, app/download calls to action, and dish `Add` controls with visible state feedback where appropriate. No backend, authentication, payment, or real app-store integration is specified.

## Content sections

1. Header/navigation
2. Hero and phone preview
3. How it works
4. Popular this week
5. Where we deliver
6. App download call to action
7. Footer

## Constraints

- Use the supplied assets as-is.
- Use only the handoff color palette.
- Preserve the documented spacing, breakpoints, typography, motion, and focus treatment.
- Avoid unnecessary dependencies and invented product requirements.
