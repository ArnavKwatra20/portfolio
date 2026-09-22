export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">02 / About</p>
          <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Plain work, documented properly.
          </h2>
        </div>
        <div className="space-y-6 text-[16px] leading-8 text-ink-soft lg:col-span-7 lg:col-start-6">
          <p>
            I am Arnav Kwatra, a Full-Stack Developer. I take on websites and web software where
            clarity matters: what it does, who it serves, and how it holds up after launch.
          </p>
          <p>
            This portfolio keeps three builds because each one proves something different. Cafe Blues
            covers business presentation. Process Strength Analyzer covers full-stack systems work.
            Car Racing Lap covers interactive frontend engineering.
          </p>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              ['Structure first', 'Hierarchy, spacing, and reading order before decoration.'],
              ['Readable code', 'Small components, typed data, and boring, reliable patterns.'],
              ['Honest scope', 'No invented clients, metrics, or testimonials.'],
            ].map(([title, body]) => (
              <div key={title} className="bg-paper p-5">
                <h3 className="font-display text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
