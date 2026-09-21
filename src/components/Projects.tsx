import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="work" className="bg-slate-950/75 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Selected work</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Three projects, three different strengths.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">Business websites, full-stack dashboards, and interactive frontend experiences — each with a focused case study.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
