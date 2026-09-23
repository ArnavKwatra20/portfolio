# Arnav Kwatra — Full-Stack Developer Portfolio

A freelance developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

Positioning: Full-Stack Developer building polished websites, dashboards, and interactive digital experiences.

## Selected work (exactly 3)

1. **Cafe Blues** — Business / marketing website concept
   - `liveUrl`: not yet available
   - `sourceUrl`: not yet available
2. **Process Strength Analyzer** — Full-stack systems/dashboard engineering
   - `liveUrl`: `https://client-ruddy-psi.vercel.app` (documented in the PSA README; live Windows data requires the authenticated tunnel to be online)
   - `sourceUrl`: not yet available
3. **Race Metric** — Interactive frontend experience
   - `liveUrl`: not yet available
   - `sourceUrl`: not yet available

Project links live in `src/data/projectCafe.ts`, `src/data/projectPsa.ts`, and `src/data/projectRacing.ts`.

## Routes (hash routes, no router dependency)

- `#/projects/cafe-blues`
- `#/projects/process-strength-analyzer`
- `#/projects/car-racing-lap`
- `#/privacy` (Privacy Policy)
- `#/terms` (Terms of Service)

## Project previews

The homepage and each case study render generated preview panels (menu excerpt, read-only process table, telemetry speed trace) built from each project's real data model. No stock screenshots are used.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Static Vite build:

- Build command: `npm run build`
- Publish directory: `dist`

