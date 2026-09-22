export function CTA() {
  return (
    <section aria-label="Availability" className="border-b border-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">06 / Availability</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            One project at a time. Next slot is the one we discuss.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
            Send a short note with what you need, the pages or screens involved, and your timeline.
            I reply with whether it fits, what it costs, and when it ships.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <a
            href="#contact"
            className="inline-block border border-ink bg-ink px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent"
          >
            Write to Arnav
          </a>
          <p className="font-mono-x mt-3 text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            Replies within two working days
          </p>
        </div>
      </div>
    </section>
  )
}
