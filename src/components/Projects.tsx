import { projects } from '../data/projects'
import { ProjectPreview } from './ProjectPreview'

export function Projects() {
  return (
    <section id="work" className="border-b border-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">01 / Selected work</p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
              Three builds, each with working notes.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-7 text-ink-soft">
            No filler projects. Each entry links to a case study with the problem, implementation,
            limits, and current link status.
          </p>
        </div>

        <div className="mt-12 border-t border-ink">
          {projects.map((project, index) => (
            <article key={project.id} className="grid gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <p className="font-display text-2xl text-ink-faint">{String(index + 1).padStart(2, '0')}</p>
              </div>

              <div className="md:col-span-5">
                <p className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-accent">{project.category}</p>
                <h3 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink md:text-4xl">
                  <a href={`#/projects/${project.slug}`} className="underline-offset-8 hover:underline">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-3 max-w-xl text-[16px] leading-7 text-ink-soft">{project.valueProposition}</p>

                <dl className="mt-5 space-y-2 border-t border-line pt-4">
                  <div className="flex items-baseline justify-between gap-4 font-mono-x text-[11px] uppercase tracking-[0.16em]">
                    <dt className="text-ink-faint">Status</dt>
                    <dd className="text-right text-ink">{project.status}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 font-mono-x text-[11px] uppercase tracking-[0.16em]">
                    <dt className="text-ink-faint">Stack</dt>
                    <dd className="text-right text-ink">{project.tech.slice(0, 3).join(' / ')}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 font-mono-x text-[11px] uppercase tracking-[0.16em]">
                    <dt className="text-ink-faint">Links</dt>
                    <dd className="text-right text-ink">
                      {project.liveUrl ? 'Live' : 'No live link'}
                      {' / '}
                      {project.sourceUrl ? 'Source' : 'Source on request'}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`#/projects/${project.slug}`}
                    className="border border-ink bg-ink px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent"
                  >
                    Case study
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-ink px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
                    >
                      Live demo
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-ink px-5 py-2.5 font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
                    >
                      Source
                    </a>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-6 text-ink-faint">
                  {project.isConcept
                    ? 'Fictional concept, marked as such in the study.'
                    : 'Built from repository code, not a mockup.'}
                </p>
              </div>

              <div className="md:col-span-6">
                <ProjectPreview project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
