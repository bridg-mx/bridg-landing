import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export type SignupEntry = {
  name: string;
  email: string;
  company: string | null;
  role: string;
  locale: string | null;
};

export type SignupResult = { ok: true } | { error: "duplicate" };

/**
 * Stores a waitlist signup in Supabase Postgres via Prisma.
 * Returns { error: "duplicate" } when the email already exists.
 * Throws on unexpected storage errors.
 */
export async function addSignup(entry: SignupEntry): Promise<SignupResult> {
  try {
    await prisma.waitlistSignup.create({ data: entry });
    return { ok: true };
  } catch (err) {
    // P2002 = unique constraint violation (duplicate email).
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return { error: "duplicate" };
    }
    throw err;
  }
}
