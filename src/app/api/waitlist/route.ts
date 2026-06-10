import type { NextRequest } from "next/server";
import { addSignup } from "@/lib/waitlist-store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLES = ["agent", "agency", "insurer", "other"] as const;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: bots fill every field; humans never see this one.
  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const company =
    typeof body.company === "string" ? body.company.trim() : null;
  const role =
    typeof body.role === "string" &&
    (ROLES as readonly string[]).includes(body.role)
      ? body.role
      : "other";
  const locale = typeof body.locale === "string" ? body.locale.slice(0, 5) : null;

  if (name.length < 2 || name.length > 120 || !EMAIL_RE.test(email)) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  try {
    const result = await addSignup({
      name,
      email,
      company: company || null,
      role,
      locale,
    });
    if ("error" in result) {
      return Response.json({ error: "duplicate" }, { status: 409 });
    }
  } catch (err) {
    console.error("Waitlist insert failed:", err);
    return Response.json({ error: "server_error" }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 201 });
}
