# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

No test runner is configured yet.

## Architecture

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, freshly scaffolded with create-next-app.

- All app code lives in `src/app/` (App Router: `layout.tsx`, `page.tsx`, `globals.css`).
- Import alias: `@/*` → `src/*`.
- Tailwind v4 is configured via PostCSS (`postcss.config.mjs`) and CSS (`globals.css`) — there is no `tailwind.config` file.

## Next.js 16 caveat

Next.js 16 has breaking changes vs. earlier versions (APIs, conventions, file structure). Before writing framework-touching code, consult the bundled docs in `node_modules/next/dist/docs/` rather than relying on prior Next.js knowledge.
