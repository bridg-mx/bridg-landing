# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Waitlist landing page to validate commercial traction for **Bridg**, an insurance management platform originally built for a client who never paid (we kept the IP). The landing is the first step; the real product may be built here later.

### Product domain (drives all copy and future features)

Bridg manages **group insurance** (life, funeral, medical expense / GMM) for agents, agencies and insurers in Mexico/LATAM. Two sides:

- **Admin platform** (for the operating team): manages *Clientes* (client entities, e.g. companies), each with *Personas* (insured members) and *Pólizas*. Personas link to pólizas through **contratos de plan** (per-person start/end dates). Generates operation layouts for carriers (Metlife, Bupa, Mapfre…). Data loads via web UI or Excel templates. Every request (from portal, phone, email) becomes a tracked ticket with SLAs and acuses. Admin controls who gets portal access.
- **Client portal** (for the client entity): login with admin-granted credentials; view entity info, insured personas, pólizas and per-person contratos (active/inactive); self-service individual/bulk document downloads; capture altas/bajas/modifications — execution stays with the admin team.

The landing copy must reflect this two-sided, group-insurance framing (client = company, not individual policyholder).

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint

No test runner is configured yet.

## Architecture

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

- **i18n**: route-based, ES (default) + EN. Pages live under `src/app/[lang]/`; `src/proxy.ts` (Next 16's replacement for middleware.ts) redirects `/` to `/es` or `/en` via Accept-Language. All copy lives in `src/dictionaries/index.ts` (`es` is source of truth; `en` is typed as `typeof es` so both stay in sync). Locale helpers in `src/lib/i18n.ts`.
- **Waitlist flow**: `WaitlistForm` (client component) → POST `/api/waitlist` (validation, honeypot field `website`, email dedup) → `src/lib/waitlist-store.ts`, which picks storage at insert time: Supabase when `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` are set, otherwise local SQLite at `.data/waitlist.db` via `node:sqlite` (Node 22+, dev-only — serverless filesystems are ephemeral). Supabase table schema: `supabase/schema.sql`; signups are viewed in the Supabase Table Editor (no admin UI).
- **Design system**: "editorial ledger" aesthetic — paper/ink/vermillion palette and motion keyframes defined as Tailwind `@theme` tokens in `src/app/globals.css`; fonts (Fraunces display, Archivo body, IBM Plex Mono) wired in `src/app/[lang]/layout.tsx` via next/font. Keep new UI consistent with these tokens (hairline `border-rule`, mono uppercase labels, hard offset shadows) instead of introducing new colors.

## Gotchas

- `params` is a `Promise` in pages/layouts/route handlers — always `await` it (Next 16).
- The Tailwind `@theme` block only rebuilds reliably on a fresh dev server; if custom utilities (e.g. `bg-vermillion`) stop applying after editing `globals.css`, restart `next dev` (optionally `rm -rf .next`).
- Tailwind v4: no `tailwind.config` file; theme lives in CSS.
