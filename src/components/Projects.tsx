import { projects } from '../data/projects'
import type { EntryProps } from './ProjectEntry'
import { EntryCafe, EntryPsa, EntryRacing } from './ProjectEntry'

export function Projects() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <header data-reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">Selected work</p>
            <h2 className="font-display mt-5 text-[clamp(2.3rem,5vw,4rem)] font-light leading-[1.03] tracking-tight text-ink">
              Three builds, each with working notes.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-7 text-ink-soft md:col-span-4 md:col-start-9">
            No filler projects. Each entry opens a case study with the problem, implementation,
            limits, and current link status.
          </p>
        </header>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {projects.map((project, index) => {
            const props: EntryProps = { project, index }
            if (project.slug === 'cafe-blues') return <EntryCafe key={project.id} {...props} />
            if (project.slug === 'process-strength-analyzer') return <EntryPsa key={project.id} {...props} />
            return <EntryRacing key={project.id} {...props} />
          })}
        </div>
      </div>
    </section>
  )
}