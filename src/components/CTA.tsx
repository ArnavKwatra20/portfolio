export function CTA() {
  return (
    <section aria-label="Availability" className="border-b border-[#1b1814]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">06 / Availability</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-[#1b1814] md:text-4xl">
            One project at a time. Next slot is the one we discuss.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4d463c]">
            Send a short note with what you need, the pages or screens involved, and your timeline.
            I reply with whether it fits, what it costs, and when it ships.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <a
            href="#contact"
            className="inline-block border border-[#1b1814] bg-[#1b1814] px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea] transition-colors hover:bg-[#9a3b26] hover:border-[#9a3b26]"
          >
            Write to Arnav
          </a>
          <p className="font-mono-x mt-3 text-[11px] uppercase tracking-[0.16em] text-[#7c7263]">
            Replies within two working days
          </p>
        </div>
      </div>
    </section>
  )
}
