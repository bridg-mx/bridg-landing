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
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
          ✓
        </div>
        <p className="text-lg font-medium text-emerald-300">{dict.success}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/60 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className="mb-1.5 block text-sm font-medium text-slate-300">
            {dict.name}
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
          <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-slate-300">
            {dict.email}
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
        <label htmlFor="wl-company" className="mb-1.5 block text-sm font-medium text-slate-300">
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
        <label htmlFor="wl-role" className="mb-1.5 block text-sm font-medium text-slate-300">
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
        <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-sm text-rose-300">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? dict.submitting : dict.submit}
      </button>

      <p className="text-center text-xs text-slate-500">{dict.privacy}</p>
    </form>
  );
}
