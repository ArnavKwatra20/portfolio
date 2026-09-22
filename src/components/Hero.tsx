export function Hero() {
  return (
    <section id="top" className="border-b border-ink">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-x text-[12px] uppercase tracking-[0.18em] text-ink-faint">
          <span>Portfolio No. 01</span>
          <span aria-hidden="true">/</span>
          <span>Full-Stack Developer</span>
          <span aria-hidden="true">/</span>
          <span>Available for selected work</span>
        </div>

        <h1 className="font-display mt-8 max-w-5xl text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
          Arnav Kwatra builds websites, dashboards, and interactive software people can actually use.
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-[17px] leading-8 text-ink-soft md:col-span-7">
            I design and build practical web work: a business site that explains itself, a systems
            dashboard that stays readable under real data, and an interactive experience with honest
            engineering underneath. Three projects below, each with notes on how it was made.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <a
              href="#work"
              className="border border-ink bg-ink px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent"
            >
              Read the work
            </a>
            <a
              href="#contact"
              className="border border-ink px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Start a project
            </a>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-ink md:grid-cols-4">
          {[
            ['03', 'Documented projects'],
            ['03', 'Case studies'],
            ['01', 'Live deployment'],
            ['2026', 'Current edition'],
          ].map(([value, label]) => (
            <div key={label} className="border-b border-r border-line px-4 py-4 first:border-l md:border-b-0 md:first:border-l-0 md:[&:nth-child(2)]:border-l-0">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">{label}</dt>
              <dd className="font-display mt-1 text-2xl text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
