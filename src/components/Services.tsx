import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="border-b border-[#d8d0bf]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">03 / Services</p>
            <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1b1814] md:text-4xl">
              What I will take on.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#4d463c]">
              Four kinds of work, each tied to something in the portfolio. If a request does not fit
              these, I will say so.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-[#1b1814]">
              {services.map((service, index) => (
                <div key={service.title} className="grid gap-3 border-b border-[#d8d0bf] py-6 md:grid-cols-12 md:gap-6">
                  <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-[#7c7263] md:col-span-2">
                    S.0{index + 1}
                  </p>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl tracking-tight text-[#1b1814]">{service.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#4d463c]">{service.summary}</p>
                  </div>
                  <ul className="space-y-2 md:col-span-5">
                    {service.points.map((point) => (
                      <li key={point} className="border-b border-dotted border-[#d8d0bf] pb-2 text-sm leading-6 text-[#4d463c] last:border-b-0 last:pb-0">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
