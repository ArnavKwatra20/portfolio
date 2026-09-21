import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from '../pages/ProjectDetails'

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const selectedProject = selectedProjectId
    ? projects.find((project) => project.id === selectedProjectId) ?? null
    : null

  if (selectedProject) {
    return <ProjectDetails project={selectedProject} onBack={() => setSelectedProjectId(null)} />
  }

  return (
    <section id="work" className="bg-slate-950/75 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Featured work</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Selected projects shaped around clarity, craft, and practical business goals.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProjectId} />
          ))}
        </div>
      </div>
    </section>
  )
}
