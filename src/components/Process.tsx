const steps = [
  {
    label: '01',
    title: 'Discover',
    description: 'I start by understanding the problem, the audience, and what the site needs to make easier or clearer.',
  },
  {
    label: '02',
    title: 'Design',
    description: 'I shape the visual direction and interaction patterns so the experience feels intentional, premium, and usable.',
  },
  {
    label: '03',
    title: 'Build',
    description: 'I turn the direction into a responsive interface with a clean component structure and thoughtful implementation.',
  },
  {
    label: '04',
    title: 'Launch',
    description: 'I help make sure the result is polished, production-ready, and easier to maintain after launch.',
  },
]

export function Process() {
  return (
    <section className="bg-slate-900/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Process</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">A simple, structured way to turn an idea into a polished website.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.label} className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{step.label}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
