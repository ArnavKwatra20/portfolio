# Arnav Kwatra — Full-Stack Developer Portfolio

A freelance developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

Positioning: Full-Stack Developer building polished websites, dashboards, and interactive digital experiences.

## Selected work (exactly 3)

1. **FLOWSTATE AI** — AI / SaaS / Workflow Automation
   - `liveUrl`: https://ai-workflow-theta-flax.vercel.app/
   - `sourceUrl`: https://github.com/ArnavKwatra20/flowstate-ai
2. **Process Explorer** — Full-stack systems/dashboard engineering
   - `liveUrl`: `https://client-ruddy-psi.vercel.app` (documented in the PSA README; live Windows data requires the authenticated tunnel to be online)
   - `sourceUrl`: https://github.com/ArnavKwatra20/process-strength-analyzer
3. **Cafe Blues** — Business / marketing website concept
   - `liveUrl`: https://cafe-blues.vercel.app
   - `sourceUrl`: https://github.com/ArnavKwatra20/cafe-blues

Project links live in `src/data/projectFlowstate.ts`, `src/data/projectPsa.ts`, and `src/data/projectCafe.ts`.

## Routes (hash routes, no router dependency)

- `#/projects/flowstate-ai`
- `#/projects/process-strength-analyzer`
- `#/projects/cafe-blues`
- `#/privacy` (Privacy Policy)
- `#/terms` (Terms of Service)

## Project presentation

The homepage uses a restrained editorial project index. Project cards link directly to deployed applications when available; no stock screenshots or fabricated project previews are used.

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
