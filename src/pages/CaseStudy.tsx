import { useEffect } from 'react'
import type { Project } from '../data/projects'
import { ProjectPreview } from '../components/ProjectPreview'

function StudyBlock({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <section className="grid gap-3 border-t border-[#d8d0bf] py-8 md:grid-cols-12 md:gap-8">
      <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-[#9a3b26] md:col-span-2">{index}</p>
      <div className="md:col-span-9">
        <h2 className="font-display text-2xl tracking-tight text-[#1b1814]">{title}</h2>
        <p className="mt-3 max-w-3xl text-[16px] leading-8 text-[#4d463c]">{body}</p>
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
      <a href="#/" className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-[#4d463c] underline underline-offset-4 hover:text-[#9a3b26]">
        Index / Back
      </a>

      <header className="mt-8 border-t-2 border-[#1b1814] pt-8">
        <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#9a3b26]">{project.category}</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-[#1b1814] md:text-6xl">
          {project.title}
        </h1>
        <p className="font-display mt-4 max-w-3xl text-xl italic leading-8 text-[#4d463c]">
          {project.valueProposition}
        </p>
        <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#4d463c]">{project.description}</p>

        <dl className="mt-8 grid gap-px border border-[#d8d0bf] bg-[#d8d0bf] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Status', project.status],
            ['Stack', project.tech.slice(0, 4).join(', ')],
            ['Live', project.liveUrl ? 'Published' : 'Not published'],
            ['Source', project.sourceUrl ? 'Published' : 'On request'],
          ].map(([term, detail]) => (
            <div key={term} className="bg-[#faf8f2] p-5">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">{term}</dt>
              <dd className="mt-2 text-[15px] leading-6 text-[#1b1814]">{detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="border border-[#1b1814] bg-[#1b1814] px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea] transition-colors hover:bg-[#9a3b26] hover:border-[#9a3b26]">
              Open live demo
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="border border-[#1b1814] px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#1b1814] transition-colors hover:bg-[#1b1814] hover:text-[#f4f1ea]">
              Open source
            </a>
          ) : null}
          {!project.liveUrl && !project.sourceUrl ? (
            <p className="font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#7c7263]">
              Links withheld until publishable. Ask and I will share access.
            </p>
          ) : null}
        </div>
        {project.isConcept ? (
          <p className="mt-5 max-w-3xl border border-dashed border-[#7c7263] p-4 text-sm leading-6 text-[#4d463c]">
            Filed as a fictional concept. Not a client engagement, and not presented as one.
          </p>
        ) : null}
      </header>

      <section className="mt-10 border-t border-[#1b1814] pt-8">
        <p className="font-mono-x text-[12px] uppercase tracking-[0.18em] text-[#7c7263]">Visuals</p>
        <div className="mt-5 max-w-2xl">
          <ProjectPreview project={project} />
        </div>
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#4d463c]">
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

      <div className="grid gap-10 border-t border-[#1b1814] pt-8 md:grid-cols-2">
        <section>
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">What was built</h2>
          <ol className="mt-4 space-y-0 border-t border-[#d8d0bf]">
            {project.features.map((feature, i) => (
              <li key={feature} className="flex gap-4 border-b border-[#d8d0bf] py-3 text-[15px] leading-7 text-[#1b1814]">
                <span className="font-mono-x text-[12px] text-[#7c7263]">{String(i + 1).padStart(2, '0')}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">Stack, as used</h2>
          <p className="mt-4 text-[15px] leading-8 text-[#1b1814]">{project.technologies.join(' · ')}</p>
          <h3 className="font-mono-x mt-8 text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">Current state</h3>
          <p className="mt-3 border border-[#1b1814] bg-[#faf8f2] p-5 text-[15px] leading-7 text-[#1b1814]">{project.result}</p>
        </section>
      </div>
    </div>
  )
}
