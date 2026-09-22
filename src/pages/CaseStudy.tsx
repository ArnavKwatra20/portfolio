import { useEffect } from 'react'
import type { Project } from '../data/projects'
import { ProjectPreview } from '../components/ProjectPreview'

function StudyBlock({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8">
      <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-accent md:col-span-2">{index}</p>
      <div className="md:col-span-9">
        <h2 className="font-display text-2xl tracking-tight text-ink">{title}</h2>
        <p className="mt-3 max-w-3xl text-[16px] leading-8 text-ink-soft">{body}</p>
      </div>
    </section>
  )
}

export function CaseStudy({ project }: { project: Project }) {
  useEffect(() => {
    document.title = `${project.title} — Case Study | Arnav Kwatra`
    window.scrollTo({ top: 0 })
  }, [project.slug, project.title])

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <a href="#/" className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-ink-soft underline underline-offset-4 hover:text-accent">
        Index / Back
      </a>

      <header className="mt-8 border-t-2 border-ink pt-8">
        <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-accent">{project.category}</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl">
          {project.title}
        </h1>
        <p className="font-display mt-4 max-w-3xl text-xl italic leading-8 text-ink-soft">
          {project.valueProposition}
        </p>
        <p className="mt-5 max-w-3xl text-[16px] leading-8 text-ink-soft">{project.description}</p>

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
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="border border-ink bg-ink px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent">
              Open live demo
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="border border-ink px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper">
              Open source
            </a>
          ) : null}
          {!project.liveUrl && !project.sourceUrl ? (
            <p className="font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink-faint">
              Links withheld until publishable. Ask and I will share access.
            </p>
          ) : null}
        </div>
        {project.isConcept ? (
          <p className="mt-5 max-w-3xl border border-dashed border-ink-faint p-4 text-sm leading-6 text-ink-soft">
            Filed as a fictional concept. Not a client engagement, and not presented as one.
          </p>
        ) : null}
      </header>

      <section className="mt-10 border-t border-ink pt-8">
        <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-ink-faint">Visuals</p>
        <div className="mt-5 max-w-2xl">
          <ProjectPreview project={project} />
        </div>
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink-soft">
          {project.isConcept
            ? 'Representative rendering of the concept interface as designed.'
            : 'Representative view of the working interface, derived from the implementation.'}
        </p>
      </section>

      <div className="mt-6">
        <StudyBlock index="01" title="Problem" body={project.problem} />
        <StudyBlock index="02" title="Approach" body={project.approach} />
        <StudyBlock index="03" title="Technical implementation" body={project.technical} />
        <StudyBlock index="04" title="Constraints and tradeoffs" body={project.challenges} />
        <StudyBlock index="05" title="Outcome" body={project.outcome} />
      </div>

      <div className="grid gap-10 border-t border-ink pt-8 md:grid-cols-2">
        <section>
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">What was built</h2>
          <ol className="mt-4 space-y-0 border-t border-line">
            {project.features.map((feature, i) => (
              <li key={feature} className="flex gap-4 border-b border-line py-3 text-[15px] leading-7 text-ink">
                <span className="font-mono-x text-[12px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">Stack, as used</h2>
          <p className="mt-4 text-[15px] leading-8 text-ink">{project.technologies.join(' · ')}</p>
          <h3 className="font-mono-x mt-8 text-[12px] uppercase tracking-[0.2em] text-ink-faint">Current state</h3>
          <p className="mt-3 border border-ink bg-field p-5 text-[15px] leading-7 text-ink">{project.result}</p>
        </section>
      </div>
    </div>
  )
}
