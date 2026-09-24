import { useEffect } from 'react'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'

function StudyBlock({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <section data-reveal className="grid gap-3 border-t border-line py-9 md:grid-cols-12 md:gap-8">
      <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-accent md:col-span-2">{index}</p>
      <div className="md:col-span-9">
        <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-light tracking-tight text-ink">{title}</h2>
        <p className="mt-4 max-w-3xl text-[16px] leading-8 text-ink-soft">{body}</p>
      </div>
    </section>
  )
}

export function CaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    document.title = `${project.title} — Case Study | Arnav Kwatra`
    window.scrollTo({ top: 0 })
  }, [project.slug, project.title])

  const position = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(position + 1) % projects.length]
  const num = String(position + 1).padStart(2, '0')
  const nextNum = String(((position + 1) % projects.length) + 1).padStart(2, '0')

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <a href="#/" className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-ink-soft underline underline-offset-4 hover:text-accent">
        Index / Back
      </a>

      <header className="mt-8 border-t-2 border-ink pt-8">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <span className="numeral-ghost font-display text-[clamp(4rem,10vw,8rem)] leading-none">{num}</span>
          <div>
            <p className="font-mono-x text-[12px] uppercase tracking-[0.3em] text-accent">{project.category}</p>
            <h1 className="font-display mt-3 text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[1.02] tracking-tight text-ink">
              {project.title}
            </h1>
          </div>
        </div>
        <p className="font-display mt-6 max-w-3xl text-[clamp(1.15rem,2.2vw,1.6rem)] italic leading-8 text-ink-soft">
          {project.valueProposition}
        </p>

        <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Status', project.status],
            ['Stack', project.tech.slice(0, 4).join(', ')],
            ['Live', project.liveUrl ? 'Published' : 'Not published'],
            ['Source', project.sourceUrl ? 'Published' : 'On request'],
          ].map(([term, detail]) => (
            <div key={term} className="bg-field p-5">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">{term}</dt>
              <dd className="mt-2 text-[15px] leading-6 text-ink">{detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-lift btn-primary">
              Live demo
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-lift btn-secondary">
              Source code
            </a>
          ) : null}
          {!project.liveUrl && !project.sourceUrl ? (
            <p className="font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink-faint">
              Links withheld until publishable. Ask and I will share access.
            </p>
          ) : null}
        </div>
        {project.isConcept ? (
          <p className="mt-5 max-w-3xl border border-dashed border-line-strong p-4 text-sm leading-6 text-ink-soft">
            Filed as a fictional concept. Not a client engagement, and not presented as one.
          </p>
        ) : null}
      </header>

      <div className="mt-10">
        <StudyBlock index="01" title="Overview" body={project.description} />
        <StudyBlock index="02" title="The challenge" body={project.problem} />
        <StudyBlock index="03" title="The concept" body={project.approach} />
        <StudyBlock index="04" title="Design direction" body={project.designDirection} />
        <StudyBlock index="05" title="Technical implementation" body={project.technical} />
        <StudyBlock index="06" title="Interesting engineering decisions" body={project.decisions} />
        <StudyBlock index="07" title="Constraints and tradeoffs" body={project.challenges} />
        <StudyBlock index="08" title="Final experience" body={project.outcome} />
      </div>

      <div data-reveal className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
        <section className="md:col-span-7">
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.24em] text-accent">Key features</h2>
          <ol className="mt-5 border-t border-line">
            {project.features.map((feature, i) => (
              <li key={feature} className="flex gap-5 border-b border-line py-3.5 text-[15px] leading-7 text-ink">
                <span className="font-mono-x text-[12px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="md:col-span-4 md:col-start-9">
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.24em] text-accent">Tech stack</h2>
          <p className="mt-5 text-[15px] leading-8 text-ink">{project.technologies.join(' / ')}</p>
          <h3 className="font-mono-x mt-8 text-[12px] uppercase tracking-[0.24em] text-accent">Current state</h3>
          <p className="mt-4 border border-line bg-field p-5 text-[14px] leading-7 text-ink-soft">{project.result}</p>
        </section>
      </div>

      <section data-reveal className="mt-14 border-t border-line pt-10">
        <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">Live demo</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-lift btn-primary">
              Open live demo&nbsp;&rarr;
            </a>
          ) : (
            <p className="text-[15px] text-ink-faint">
              No public deployment yet. The source code is published above.
            </p>
          )}
        </div>
      </section>

      <a
        href={`#/projects/${next.slug}`}
        data-reveal
        className="group mt-16 block border-t-2 border-ink pt-10"
      >
        <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">
          Next project / {nextNum}
        </p>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-none tracking-tight text-ink transition-colors duration-500 group-hover:text-accent">
            {next.title}
          </h2>
          <span
            aria-hidden="true"
            className="font-mono-x text-[14px] text-ink-faint transition-colors duration-500 group-hover:text-accent"
          >
            &rarr;
          </span>
        </div>
        <p className="mt-4 text-[15px] text-ink-soft">{next.category}</p>
      </a>
    </div>
  )
}
