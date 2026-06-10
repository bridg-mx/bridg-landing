# Bridg — Landing + Waitlist

Landing page bilingüe (ES/EN) para validar tracción de Bridg: plataforma de administración de seguros (vida, funerario, gastos médicos) con portal de autoservicio para asegurados.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4
- Supabase (Postgres) para registros del waitlist
- Fallback local: sin credenciales de Supabase, los registros van a SQLite (`.data/waitlist.db`)

## Desarrollo local sin Supabase

`npm run dev` y listo. Si `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` no están definidas, el form guarda en `.data/waitlist.db` (SQLite vía `node:sqlite`, requiere Node 22+; gitignored). Consultar registros:

```bash
sqlite3 .data/waitlist.db "select * from waitlist_signups;"
```

⚠️ Solo para desarrollo: en serverless (Vercel) el filesystem es efímero — en producción configura Supabase.

## Setup

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear proyecto en [supabase.com](https://supabase.com) (plan gratuito alcanza).

3. Crear la tabla: copiar el contenido de `supabase/schema.sql` y correrlo en **Dashboard → SQL Editor**.

4. Configurar credenciales: copiar `.env.example` a `.env.local` y llenar con los valores de **Dashboard → Project Settings → API**:

   ```
   SUPABASE_URL=https://TU-PROYECTO.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=...
   ```

   ⚠️ La service role key es server-only. Nunca prefijarla con `NEXT_PUBLIC_` ni exponerla en el cliente.

5. Correr:

   ```bash
   npm run dev
   ```

   `/` redirige a `/es` o `/en` según el idioma del navegador.

## Ver registros del waitlist

**Dashboard de Supabase → Table Editor → `waitlist_signups`**. Columnas: `name`, `email`, `company`, `role` (agent/agency/insurer/other), `locale`, `created_at`. Exportable a CSV desde el mismo dashboard.

## Deploy (Vercel)

1. Conectar el repo en Vercel.
2. Agregar `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` en **Settings → Environment Variables**.
3. Deploy. No requiere configuración adicional.

## Estructura

- `src/app/[lang]/` — layout y landing (rutas `/es`, `/en`)
- `src/dictionaries/` — textos en ambos idiomas
- `src/app/api/waitlist/route.ts` — POST del form → Supabase (valida, honeypot anti-bots, dedup por email)
- `src/proxy.ts` — redirect de locale por `Accept-Language`
- `supabase/schema.sql` — schema de la tabla
