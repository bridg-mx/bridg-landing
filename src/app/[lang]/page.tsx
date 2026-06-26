import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import WaitlistForm from "@/components/WaitlistForm";
import ThemeToggle from "@/components/ThemeToggle";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const es = lang === "es";
  const otherLang = es ? "en" : "es";

  const tickerItems = es
    ? ["Seguros de vida", "Funerarios", "Gastos médicos", "Contratos de plan", "Layouts Metlife · Bupa · Mapfre", "Carga vía Excel", "SLAs y acuses", "Portal del cliente"]
    : ["Life insurance", "Funeral", "Medical expense", "Plan contracts", "Metlife · Bupa · Mapfre layouts", "Excel import", "SLAs & acknowledgments", "Client portal"];

  return (
    <div className="overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href={`/${lang}`} className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-bold tracking-tight">
              Bridg
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint sm:inline">
              {es ? "Plataforma de seguros" : "Insurance platform"}
            </span>
          </Link>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-soft md:flex">
            <a href="#producto" className="transition hover:text-vermillion">
              {dict.nav.product}
            </a>
            <a href="#como-funciona" className="transition hover:text-vermillion">
              {dict.nav.how}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle label={dict.nav.theme} />
            <div className="flex font-mono text-xs uppercase">
              <span className="border border-ink bg-ink px-2 py-1 text-paper">
                {lang}
              </span>
              <Link
                href={`/${otherLang}`}
                className="border border-l-0 border-ink px-2 py-1 text-ink transition hover:bg-ink hover:text-paper"
              >
                {otherLang}
              </Link>
            </div>
            <a
              href="#waitlist"
              className="hidden bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition hover:bg-vermillion sm:block"
            >
              {dict.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="rise flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-vermillion">
              <span className="inline-block size-2 bg-vermillion" />
              {dict.hero.badge}
            </p>
            <h1 className="rise mt-7 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl [animation-delay:0.1s]">
              {dict.hero.titleA}{" "}
              <em className="font-light italic text-vermillion">
                {dict.hero.titleB}
              </em>
            </h1>
            <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft [animation-delay:0.2s]">
              {dict.hero.subtitle}
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-6 [animation-delay:0.3s]">
              <a
                href="#waitlist"
                className="bg-vermillion px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-paper shadow-[4px_4px_0_0_var(--color-ink)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)]"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#como-funciona"
                className="font-mono text-sm uppercase tracking-widest text-ink underline decoration-vermillion decoration-2 underline-offset-8 transition hover:text-vermillion"
              >
                {dict.hero.ctaSecondary} ↓
              </a>
            </div>
          </div>

          {/* Policy document mock */}
          <div className="relative lg:col-span-5">
            {/* Portal ticket behind */}
            <div className="rise absolute -right-2 top-10 hidden w-64 rotate-3 bg-ink p-5 text-paper shadow-xl sm:block [animation-delay:0.5s]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                {es ? "Portal del cliente" : "Client portal"}
              </p>
              <p className="mt-3 font-mono text-xs">
                TKT-0492 · {es ? "Alta de 3 personas" : "Add 3 members"}
              </p>
              <p className="mt-2 inline-block bg-ledger px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                {es ? "En proceso" : "In progress"}
              </p>
            </div>

            {/* Policy card */}
            <div className="rise relative mx-auto max-w-sm -rotate-1 border-2 border-ink bg-surface p-1 shadow-[8px_8px_0_0_var(--color-shadow)] [animation-delay:0.4s]">
              <div className="border border-rule p-6">
                <div className="flex items-start justify-between border-b border-rule pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                      {es ? "Póliza No." : "Policy No."}
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold">
                      GMM-2041
                    </p>
                  </div>
                  <p className="font-display text-xl font-bold">Bridg</p>
                </div>

                <dl className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-wider text-ink-faint">
                      {es ? "Cliente" : "Client"}
                    </dt>
                    <dd>Grupo Atlas S.A.</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-wider text-ink-faint">
                      {es ? "Ramo" : "Line"}
                    </dt>
                    <dd>{es ? "GMM grupal" : "Group medical"}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-wider text-ink-faint">
                      {es ? "Personas aseguradas" : "Insured members"}
                    </dt>
                    <dd>48</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-wider text-ink-faint">
                      {es ? "Aseguradora" : "Carrier"}
                    </dt>
                    <dd>Metlife</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="uppercase tracking-wider text-ink-faint">
                      {es ? "Vigencia" : "Term"}
                    </dt>
                    <dd>2026 — 2027</dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-dashed border-rule pt-4">
                  <div className="flex items-end justify-between">
                    <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-ink-faint">
                      {es ? "Documento generado" : "Generated by"}
                      <br />
                      app.bridg.mx
                    </p>
                    <span className="stamp-in inline-block border-[3px] border-vermillion px-3 py-1.5 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-vermillion">
                      {es ? "Vigente" : "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="overflow-hidden border-y border-rule bg-paper-deep py-3">
          <div className="ticker-track flex w-max gap-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex">
                {tickerItems.map((item) => (
                  <span key={item} className="flex items-center">
                    <span className="px-6">{item}</span>
                    <span className="text-vermillion">✺</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 01 — Two products */}
        <section id="producto" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {dict.products.title}
            </h2>
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-ink-faint">
              № 01
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {dict.products.subtitle}
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Admin — ink panel */}
            <div className="border-2 border-ink bg-ink p-8 text-paper sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-vermillion">
                {dict.products.admin.tag}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                {dict.products.admin.title}
              </h3>
              <p className="mt-4 leading-relaxed text-paper/70">
                {dict.products.admin.description}
              </p>
              <ul className="mt-8 space-y-0 border-t border-paper/20">
                {dict.products.admin.bullets.map((bullet, i) => (
                  <li
                    key={bullet}
                    className="flex gap-4 border-b border-paper/20 py-3.5 text-sm leading-relaxed"
                  >
                    <span className="font-mono text-vermillion">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Portal — paper panel */}
            <div className="border-2 border-ink bg-surface p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ledger">
                {dict.products.portal.tag}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold">
                {dict.products.portal.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {dict.products.portal.description}
              </p>
              <ul className="mt-8 space-y-0 border-t border-rule">
                {dict.products.portal.bullets.map((bullet, i) => (
                  <li
                    key={bullet}
                    className="flex gap-4 border-b border-rule py-3.5 text-sm leading-relaxed"
                  >
                    <span className="font-mono text-ledger">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 — Features ledger grid */}
        <section className="border-y border-rule bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {dict.features.title}
              </h2>
              <span className="font-mono text-sm uppercase tracking-[0.25em] text-ink-faint">
                № 02
              </span>
            </div>
            <div className="mt-12 grid border-l border-t border-ink/25 sm:grid-cols-2 lg:grid-cols-3">
              {dict.features.items.map((feature, i) => (
                <div
                  key={feature.title}
                  className="group border-b border-r border-ink/25 p-7 transition hover:bg-surface"
                >
                  <p className="font-mono text-xs text-ink-faint transition group-hover:text-vermillion">
                    {String(i + 1).padStart(2, "0")} /
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — How it works */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {dict.how.title}
            </h2>
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-ink-faint">
              № 03
            </span>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {dict.how.steps.map((step, i) => (
              <div key={step.title}>
                <p className="font-display text-7xl font-light italic text-vermillion">
                  {i + 1}
                </p>
                <h3 className="mt-4 border-t-2 border-ink pt-4 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist — application form document */}
        <section id="waitlist" className="scroll-mt-20 px-6 pb-28">
          <div className="mx-auto max-w-2xl border-2 border-ink bg-surface p-1 shadow-[10px_10px_0_0_var(--color-shadow)]">
            <div className="border border-rule p-8 sm:p-12">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-vermillion">
                <span className="inline-block size-2 bg-vermillion" />
                {es
                  ? "Forma BR-01 · Solicitud de acceso"
                  : "Form BR-01 · Access request"}
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                {dict.waitlist.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {dict.waitlist.subtitle}
              </p>
              <div className="mt-10">
                <WaitlistForm dict={dict.waitlist} locale={lang} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs uppercase tracking-wider text-ink-faint sm:flex-row">
          <p>
            <span className="font-semibold text-ink">Bridg</span> ·{" "}
            {dict.footer.tagline}
          </p>
          <p>
            © {new Date().getFullYear()} Bridg · {dict.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
