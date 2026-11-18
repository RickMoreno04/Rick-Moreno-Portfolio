# Rick Lorin Moreno — DevOps Portfolio

A responsive portfolio focused on cloud infrastructure, CI/CD automation, containerization, and observability. Built with React and Vite using a custom black, charcoal, and emerald visual system.

## Stack

- React 19 and Vite
- Motion for scroll tracing and connected SVG beams
- Custom interactive SVG globe and hero architecture diagram
- Lucide React for interface icons
- Custom CSS; no UI kit or CSS framework is required

## Local development

```sh
npm install
npm run dev
```

## Quality checks and production build

```sh
npm run lint
npm run build
npm run preview
```

Vite writes the production site to `dist/`, which is compatible with static Vercel deployment. The portfolio content is centralized in `src/data/portfolio.js`. The terminal is a portfolio-only command simulator and does not execute shell commands or connect to infrastructure.

## Accessibility and performance

- Includes a skip link, keyboard focus styles, semantic sections, and labeled interactive controls.
- Honors `prefers-reduced-motion`; animated beam and route effects become static.
- The globe uses SVG and native buttons, so it works without WebGL.
- Responsive layouts are defined for desktop, tablet, and narrow mobile screens.

Animated Beam is adapted from Magic UI. The scroll-linked Tracing Beam and project Pin treatment adapt Aceternity UI components. React Bits' current MIT + Commons Clause does not permit redistributing Hyperspeed or DecryptedText as bundled site components, so those two are not included. License details and source links are in [`public/THIRD_PARTY_NOTICES.txt`](public/THIRD_PARTY_NOTICES.txt), which is copied to the production output.
