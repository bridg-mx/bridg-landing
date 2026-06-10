"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({
  dict,
  locale,
}: {
  dict: Dictionary["waitlist"];
  locale: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          role: data.get("role"),
          website: data.get("website"),
          locale,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const payload = await res.json().catch(() => ({}));
      setStatus("error");
      if (payload.error === "duplicate") setMessage(dict.duplicate);
      else if (payload.error === "invalid_fields") setMessage(dict.invalid);
      else setMessage(dict.error);
    } catch {
      setStatus("error");
      setMessage(dict.error);
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-ledger p-8 text-center">
        <span className="inline-block -rotate-3 border-[3px] border-ledger px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.2em] text-ledger">
          {locale === "es" ? "Registrado" : "Registered"}
        </span>
        <p className="mt-5 leading-relaxed text-ink">{dict.success}</p>
      </div>
    );
  }

  const labelClasses =
    "mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft";
  const inputClasses =
    "w-full border-0 border-b-2 border-rule bg-transparent px-0 py-2.5 text-base text-ink placeholder:text-ink-faint outline-none transition focus:border-vermillion";

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className={labelClasses}>
            {dict.name} *
          </label>
          <input
            id="wl-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={120}
            placeholder={dict.namePlaceholder}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="wl-email" className={labelClasses}>
            {dict.email} *
          </label>
          <input
            id="wl-email"
            name="email"
            type="email"
            required
            placeholder={dict.emailPlaceholder}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="wl-company" className={labelClasses}>
          {dict.company}
        </label>
        <input
          id="wl-company"
          name="company"
          type="text"
          maxLength={160}
          placeholder={dict.companyPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="wl-role" className={labelClasses}>
          {dict.role}
        </label>
        <select id="wl-role" name="role" defaultValue="agent" className={inputClasses}>
          <option value="agent">{dict.roles.agent}</option>
          <option value="agency">{dict.roles.agency}</option>
          <option value="insurer">{dict.roles.insurer}</option>
          <option value="other">{dict.roles.other}</option>
        </select>
      </div>

      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && message && (
        <p className="border-l-4 border-vermillion bg-vermillion/10 px-4 py-3 text-sm text-vermillion-deep">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-vermillion px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-paper shadow-[4px_4px_0_0_var(--color-ink)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? dict.submitting : dict.submit}
      </button>

      <p className="text-center font-mono text-[11px] uppercase tracking-wider text-ink-faint">
        {dict.privacy}
      </p>
    </form>
  );
}
