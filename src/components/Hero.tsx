export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(90deg, var(--color-line-soft) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 6) 100%',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-32">
        <div className="fade-up d-1 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-x text-[11px] uppercase tracking-[0.24em] text-ink-faint">
          <span>
            <span className="text-accent">Portfolio</span> 2026
          </span>
          <span aria-hidden="true">/</span>
          <span>Full-Stack Developer</span>
          <span aria-hidden="true">/</span>
          <span>Available for selected work</span>
        </div>

        <h1
          className="font-display mt-10 font-light uppercase text-ink"
          style={{ lineHeight: 0.88, letterSpacing: '-0.015em' }}
        >
          <span className="block overflow-hidden">
            <span className="rise d-2 block text-[clamp(2.75rem,9vw,7.5rem)]">Arnav</span>
          </span>
          <span className="block overflow-hidden md:pl-[6%]">
            <span className="rise d-3 block font-normal italic text-[clamp(2.75rem,9vw,7.5rem)]">
              Kwatra
            </span>
          </span>
        </h1>
        <div aria-hidden="true" className="draw-x d-5 mt-8 h-px w-40 bg-accent md:w-64" />

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="fade-up d-5 md:col-span-7">
            <p className="font-mono-x text-[12px] uppercase tracking-[0.22em] text-accent">
              Full-Stack Developer
            </p>
            <p className="font-display mt-4 max-w-2xl text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug text-ink-soft">
              Building digital experiences that feel different: polished websites, working
              dashboards, and interactive software with honest engineering underneath.
            </p>
          </div>
          <div className="fade-up d-6 flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end">
            <a
              href="#work"
              className="btn-lift btn-primary"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="btn-lift btn-secondary"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        <dl className="fade-up d-7 mt-14 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {[
            ['03', 'Selected projects'],
            ['03', 'Case studies'],
            ['01', 'Live deployment'],
            ['2026', 'Current edition'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-line px-4 py-5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <dt className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                {label}
              </dt>
              <dd className="font-display mt-1.5 text-xl font-light text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="fade-up d-8 mt-10 hidden items-center gap-4 md:flex">
          <span className="font-mono-x text-[10px] uppercase tracking-[0.3em] text-ink-faint">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-line">
            <span className="scroll-run absolute left-0 top-0 block h-3 w-px bg-accent" />
          </span>
        </div>
      </div>
    </section>
  )
}
