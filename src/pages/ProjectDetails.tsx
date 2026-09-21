import type { Project } from '../data/projects'

type ProjectDetailsProps = {
  project: Project
  onBack: () => void
}

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
        >
          ← Back to work
        </button>

        <header className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_38%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(2,6,23,1))] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">{project.category}</p>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
            </div>
            <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-200">
              {project.status}
            </span>
          </div>

          <div className="mt-8 min-h-[260px] rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <div className="flex h-full min-h-[220px] items-end rounded-[22px] border border-dashed border-slate-700 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_20%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,1))] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Project preview</p>
                <p className="mt-3 max-w-md text-xl font-medium text-white">{project.imageLabel}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-8">
            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Problem</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.problem}</p>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Approach</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.approach}</p>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Solution</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.solution}</p>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <h2 className="text-xl font-semibold text-white">Technologies</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.technologies.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <h2 className="text-xl font-semibold text-white">Key Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-cyan-500/10 p-6">
              <h2 className="text-xl font-semibold text-white">Result / Status</h2>
              <p className="mt-4 text-base leading-7 text-slate-200">{project.result}</p>
            </section>
          </aside>
        </main>
      </div>
    </div>
  )
}
