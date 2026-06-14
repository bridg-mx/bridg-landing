# Bridg — Landing + Waitlist

Landing page bilingüe (ES/EN) para validar tracción de Bridg: plataforma de administración de seguros (vida, funerario, gastos médicos) con portal de autoservicio para asegurados.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4
- Prisma 7 + Supabase (Postgres) para registros del waitlist

## Setup

1. Instalar dependencias (corre `prisma generate` vía `postinstall`):

   ```bash
   npm install
   ```

2. Crear proyecto en [supabase.com](https://supabase.com) (plan gratuito alcanza).

3. Configurar conexión: copiar `.env.example` a `.env` y llenar con los strings de
   **Dashboard → Connect → ORMs → Prisma**:

   ```
   # Transaction pooler (puerto 6543) — runtime
   DATABASE_URL="postgresql://postgres.TU-REF:PASSWORD@aws-1-REGION.pooler.supabase.com:6543/postgres?pgbouncer=true"
   # Session pooler (puerto 5432) — migraciones
   DIRECT_URL="postgresql://postgres.TU-REF:PASSWORD@aws-1-REGION.pooler.supabase.com:5432/postgres"
   ```

   ⚠️ Usar el **pooler** (`...pooler.supabase.com`), no el host directo `db.*.supabase.co`:
   ese host es IPv6-only y no es alcanzable desde redes IPv4. La password va server-only;
   nunca prefijar con `NEXT_PUBLIC_`.

4. Crear la tabla (aplica las migraciones commiteadas):

   ```bash
   npm run db:deploy
   ```

5. Correr:

   ```bash
   npm run dev
   ```

   `/` redirige a `/es` o `/en` según el idioma del navegador.

## Base de datos (Prisma)

- Schema: `prisma/schema.prisma` (modelo `WaitlistSignup` → tabla `waitlist_signups`).
- Migraciones: `prisma/migrations/` (source of truth).
- Scripts:
  - `npm run db:migrate` — crear/aplicar migración en desarrollo
  - `npm run db:deploy` — aplicar migraciones commiteadas (prod / primer setup)
  - `npm run db:generate` — regenerar el client
  - `npm run db:studio` — abrir Prisma Studio

## Ver registros del waitlist

**Dashboard de Supabase → Table Editor → `waitlist_signups`**. Columnas: `name`, `email`, `company`, `role` (agent/agency/insurer/other), `locale`, `created_at`. Exportable a CSV desde el mismo dashboard.

## Deploy (Vercel)

1. Conectar el repo en Vercel.
2. Agregar `DATABASE_URL` y `DIRECT_URL` en **Settings → Environment Variables**.
3. Deploy. El build corre `prisma generate` vía `postinstall`.

## Estructura

- `src/app/[lang]/` — layout y landing (rutas `/es`, `/en`)
- `src/dictionaries/` — textos en ambos idiomas
- `src/app/api/waitlist/route.ts` — POST del form → Prisma (valida, honeypot anti-bots, dedup por email)
- `src/lib/waitlist-store.ts` — inserción vía Prisma (mapea `P2002` → duplicate)
- `src/lib/prisma.ts` — Prisma Client singleton (adapter `@prisma/adapter-pg`)
- `src/proxy.ts` — redirect de locale por `Accept-Language`
- `prisma/schema.prisma` — schema de la tabla
