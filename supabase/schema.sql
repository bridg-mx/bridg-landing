-- Waitlist signups table for the Bridg landing page.
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique,
  company text,
  role text not null default 'other',
  locale text
);

-- Lock the table down: no anon/authenticated access.
-- The landing inserts server-side with the service role key, which bypasses RLS.
alter table public.waitlist_signups enable row level security;
