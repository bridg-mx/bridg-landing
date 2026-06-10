import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import WaitlistForm from "@/components/WaitlistForm";

const featureIcons = ["🛡️", "🎫", "📁", "🔄", "📉", "📊"];

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const otherLang = lang === "es" ? "en" : "es";

  return (
    <div className="relative overflow-x-clip">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.45_0.2_277/0.35),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href={`/${lang}`} className="text-lg font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Bridg
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
            <a href="#producto" className="transition hover:text-white">
              {dict.nav.product}
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              {dict.nav.how}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLang}`}
              className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-medium uppercase text-slate-300 transition hover:border-white/25 hover:text-white"
            >
              {otherLang}
            </Link>
            <a
              href="#waitlist"
              className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              {dict.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-indigo-400" />
            </span>
            {dict.hero.badge}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-xl bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          {/* Product mock */}
          <div className="relative mx-auto mt-20 max-w-4xl">
            <div
              aria-hidden
              className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-gradient-to-b from-indigo-500/20 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
                <span className="size-3 rounded-full bg-rose-400/70" />
                <span className="size-3 rounded-full bg-amber-400/70" />
                <span className="size-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500">
                  app.bridg.mx
                </span>
              </div>
              <div className="grid grid-cols-[160px_1fr] text-left max-sm:grid-cols-1">
                <div className="space-y-1 border-r border-white/5 p-4 text-xs text-slate-500 max-sm:hidden">
                  <div className="rounded-lg bg-indigo-500/15 px-3 py-2 font-medium text-indigo-300">
                    {lang === "es" ? "Pólizas" : "Policies"}
                  </div>
                  <div className="px-3 py-2">{lang === "es" ? "Clientes" : "Clients"}</div>
                  <div className="px-3 py-2">Tickets</div>
                  <div className="px-3 py-2">{lang === "es" ? "Documentos" : "Documents"}</div>
                  <div className="px-3 py-2">{lang === "es" ? "Reportes" : "Reports"}</div>
                </div>
                <div className="space-y-4 p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      [lang === "es" ? "Pólizas activas" : "Active policies", "1,248"],
                      [lang === "es" ? "Por renovar" : "Up for renewal", "37"],
                      [lang === "es" ? "Tickets abiertos" : "Open tickets", "12"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl border border-white/5 bg-white/5 p-4">
                        <div className="text-[11px] text-slate-500">{label}</div>
                        <div className="mt-1 text-xl font-semibold text-slate-100">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      ["VID-2041", "María González", lang === "es" ? "Vida" : "Life", "emerald"],
                      ["GMM-0834", "Carlos Pérez", lang === "es" ? "Gastos médicos" : "Medical", "indigo"],
                      ["FUN-1190", "Ana Ramírez", lang === "es" ? "Funerario" : "Funeral", "amber"],
                    ].map(([id, holder, type, color]) => (
                      <div
                        key={id}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-xs"
                      >
                        <span className="font-mono text-slate-500">{id}</span>
                        <span className="text-slate-300">{holder}</span>
                        <span
                          className={
                            color === "emerald"
                              ? "rounded-full bg-emerald-500/15 px-2.5 py-1 text-emerald-300"
                              : color === "indigo"
                                ? "rounded-full bg-indigo-500/15 px-2.5 py-1 text-indigo-300"
                                : "rounded-full bg-amber-500/15 px-2.5 py-1 text-amber-300"
                          }
                        >
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two products */}
        <section id="producto" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.products.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">{dict.products.subtitle}</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[dict.products.admin, dict.products.portal].map((product, i) => (
              <div
                key={product.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-indigo-400/30"
              >
                <div
                  aria-hidden
                  className={`absolute -top-24 size-48 rounded-full blur-3xl transition group-hover:opacity-100 ${
                    i === 0 ? "-left-12 bg-indigo-500/20" : "-right-12 bg-violet-500/20"
                  }`}
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {product.tag}
                </span>
                <h3 className="mt-3 text-2xl font-semibold">{product.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-xs text-indigo-300">
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-center text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.features.title}
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dict.features.items.map((feature, i) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition hover:border-white/15"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-lg">
                    {featureIcons[i]}
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <h2 className="text-center text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.how.title}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {dict.how.steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/25">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="scroll-mt-20 px-6 pb-28 pt-4">
          <div className="relative mx-auto max-w-xl">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.45_0.2_277/0.25),transparent)] blur-xl"
            />
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur sm:p-10">
              <h2 className="text-center text-balance text-3xl font-bold tracking-tight">
                {dict.waitlist.title}
              </h2>
              <p className="mt-3 text-center text-sm leading-relaxed text-slate-400">
                {dict.waitlist.subtitle}
              </p>
              <div className="mt-8">
                <WaitlistForm dict={dict.waitlist} locale={lang} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
          <div>
            <span className="font-semibold text-slate-300">Bridg</span> — {dict.footer.tagline}
          </div>
          <div>
            © {new Date().getFullYear()} Bridg. {dict.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
