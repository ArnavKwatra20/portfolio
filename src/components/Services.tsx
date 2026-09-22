import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">Services</p>
            <h2 className="font-display mt-5 text-[clamp(2.3rem,5vw,4rem)] font-light leading-[1.03] tracking-tight text-ink">
              What I can take on.
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-7 text-ink-soft">
            Three kinds of work, each tied to a project in this portfolio. If a request does not
            fit these, I will say so.
          </p>
        </div>

        <div>
          {services.map((service, index) => (
            <div
              key={service.title}
              data-reveal
              className="group grid gap-4 border-b border-line py-9 md:grid-cols-12 md:gap-8"
            >
              <p className="font-mono-x text-[11px] uppercase tracking-[0.24em] text-ink-faint md:col-span-2">
                S.0{index + 1}
              </p>
              <div className="md:col-span-5">
                <h3 className="font-display text-[clamp(1.8rem,3.2vw,2.7rem)] font-light leading-tight tracking-tight text-ink transition-colors duration-500 group-hover:text-accent">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-[15px] leading-7 text-ink-soft">{service.summary}</p>
                <p className="mt-3 font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  {service.points.join(' / ')}
                </p>
                <a
                  href={`#/projects/${service.caseStudySlug}`}
                  className="link-draw mt-4 inline-block font-mono-x text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
                >
                  Case in point: {service.caseStudyLabel} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
