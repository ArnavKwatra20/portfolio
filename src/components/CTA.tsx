export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,rgba(12,18,33,1),rgba(15,23,42,0.96))] p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Let’s build</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Need a website that feels premium and works hard for your business?</h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}
