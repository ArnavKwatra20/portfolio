import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Services</p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">A focused service mix for modern web work.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.96))] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_18px_50px_rgba(8,145,178,0.12)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-lg text-cyan-200 ring-1 ring-cyan-400/20">
              ✦
            </div>

            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.summary}</p>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
