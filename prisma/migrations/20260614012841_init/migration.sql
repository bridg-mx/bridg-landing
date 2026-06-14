-- CreateTable
CREATE TABLE "waitlist_signups" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "role" TEXT NOT NULL DEFAULT 'other',
    "locale" TEXT,

    CONSTRAINT "waitlist_signups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_signups_email_key" ON "waitlist_signups"("email");

-- Lock the table down: no anon/authenticated access. Inserts happen
-- server-side via the postgres role (Prisma), which bypasses RLS.
ALTER TABLE "waitlist_signups" ENABLE ROW LEVEL SECURITY;
