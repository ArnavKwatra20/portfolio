export function Hero() {
  return (
    <section id="top" className="border-b border-[#1b1814]">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-x text-[12px] uppercase tracking-[0.18em] text-[#7c7263]">
          <span>Portfolio No. 01</span>
          <span aria-hidden="true">/</span>
          <span>Full-Stack Developer</span>
          <span aria-hidden="true">/</span>
          <span>Available for selected work</span>
        </div>

        <h1 className="font-display mt-8 max-w-5xl text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[#1b1814]">
          Arnav Kwatra builds websites, dashboards, and interactive software people can actually use.
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-[17px] leading-8 text-[#4d463c] md:col-span-7">
            I design and build practical web work: a business site that explains itself, a systems
            dashboard that stays readable under real data, and an interactive experience with honest
            engineering underneath. Three projects below, each with notes on how it was made.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <a
              href="#work"
              className="border border-[#1b1814] bg-[#1b1814] px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea] transition-colors hover:bg-[#9a3b26] hover:border-[#9a3b26]"
            >
              Read the work
            </a>
            <a
              href="#contact"
              className="border border-[#1b1814] px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#1b1814] transition-colors hover:bg-[#1b1814] hover:text-[#f4f1ea]"
            >
              Start a project
            </a>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-[#1b1814] md:grid-cols-4">
          {[
            ['03', 'Documented projects'],
            ['03', 'Case studies'],
            ['01', 'Live deployment'],
            ['2026', 'Current edition'],
          ].map(([value, label]) => (
            <div key={label} className="border-b border-r border-[#d8d0bf] px-4 py-4 first:border-l md:border-b-0 md:first:border-l-0 md:[&:nth-child(2)]:border-l-0">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">{label}</dt>
              <dd className="font-display mt-1 text-2xl text-[#1b1814]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
