import { projects } from '../data/projects'
import type { Project } from '../data/projects'

/* Editorial project index row: name, one-line pitch, type, direct project link. */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <div data-reveal>
      <a
        href={project.liveUrl || project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-3 border-b border-line py-8 transition-colors duration-200 hover:bg-field md:grid-cols-12 md:gap-8 md:py-10"
      >
        <span className="font-mono-x text-[11px] uppercase tracking-[0.2em] text-ink-faint md:col-span-1">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="md:col-span-7">
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.05] tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-ink-soft">{project.valueProposition}</p>
          <p className="mt-3 font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            {project.category}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 self-start font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent md:col-span-4 md:justify-self-end">
          View Project
          <span aria-hidden="true">↗</span>
        </span>
      </a>
    </div>
  )
}

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
            No filler projects. Each entry links straight to the live project when available.
          </p>
        </header>

        <div className="mt-12 border-t border-line md:mt-16">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
