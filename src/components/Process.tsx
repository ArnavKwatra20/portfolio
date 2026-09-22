const steps = [
  {
    label: '01',
    title: 'Read the brief properly',
    description: 'Goal, audience, pages, data, and what done looks like. Written down before anything visual.',
  },
  {
    label: '02',
    title: 'Structure before style',
    description: 'Page order, sections, and content hierarchy. Then typography and spacing carry the design.',
  },
  {
    label: '03',
    title: 'Build in small slices',
    description: 'Typed data first, then components. Each slice reviewed on mobile and desktop as it lands.',
  },
  {
    label: '04',
    title: 'Check and hand over',
    description: 'Build, links, routes, and accessibility pass. Notes on what to update and where it lives.',
  },
]

export function Process() {
  return (
    <section aria-label="Working method" className="border-b border-ink bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">05 / Method</p>
            <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              Four steps, no theatre.
            </h2>
          </div>
          <ol className="lg:col-span-8">
            {steps.map((step) => (
              <li key={step.label} className="grid gap-2 border-t border-ink py-6 first:border-t-2 sm:grid-cols-12 sm:gap-6">
                <span className="font-mono-x text-[13px] tracking-[0.16em] text-accent sm:col-span-2">{step.label}</span>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-1 max-w-2xl text-[15px] leading-7 text-ink-soft">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
