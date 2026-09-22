import { skills } from '../data/skills'

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p data-reveal className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">About</p>
            <h2
              data-reveal
              className="font-display mt-5 text-[clamp(2.1rem,4.2vw,3.6rem)] font-light leading-[1.05] tracking-tight text-ink"
            >
              I build the thing and document it properly.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p data-reveal className="text-[17px] leading-8 text-ink-soft">
              I am Arnav Kwatra, a Full-Stack Developer. I take on websites and web software where
              clarity matters: what it does, who it serves, and how it holds up after launch.
            </p>
            <p data-reveal className="mt-5 text-[16px] leading-8 text-ink-soft">
              The work I enjoy sits in three places: business sites with real editorial craft,
              dashboards that stay readable under real use, and interactive frontends where motion
              carries meaning instead of decoration.
            </p>

            <div data-reveal className="mt-10 border-t border-line">
              {[
                ['Structure first', 'Hierarchy, spacing, and reading order before decoration.'],
                ['Readable code', 'Small components, typed data, and boring, reliable patterns.'],
                ['Honest scope', 'No invented clients, metrics, or testimonials.'],
              ].map(([title, body], i) => (
                <div key={title} className="flex gap-6 border-b border-line py-5">
                  <span className="font-mono-x text-[11px] leading-7 text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light text-ink">{title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal className="mt-10">
              <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-ink-faint">
                Technologies
              </p>
              <div className="mt-4">
                {skills.map((group) => (
                  <div
                    key={group.category}
                    className="grid gap-1 border-t border-line py-4 sm:grid-cols-12 sm:gap-4"
                  >
                    <p className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-accent sm:col-span-3">
                      {group.category}
                    </p>
                    <p className="text-[15px] leading-7 text-ink-soft sm:col-span-9">
                      {group.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
