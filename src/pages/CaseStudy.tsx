import { useEffect } from 'react'
import type { Project } from '../data/projects'

type Props = { project: Project }

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 md:p-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{body}</p>
    </section>
  )
}

export function CaseStudy({ project }: Props) {
  useEffect(() => {
    document.title = `${project.title} — Case Study | Arnav Kwatra`
    window.scrollTo({ top: 0 })
  }, [project.slug, project.title])

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <a href="#/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10">← Back to portfolio</a>
        <header className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_38%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(2,6,23,1))] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">{project.category}</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{tag}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Live demo</a> : null}
            {project.sourceUrl ? <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5">Source code</a> : null}
            <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">{project.status}</span>
          </div>
          {project.isConcept ? <p className="mt-6 text-sm text-slate-400">Fictional concept project created for portfolio demonstration.</p> : null}
        </header>
        <main className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-8">
            <CaseSection title="The problem / goal" body={project.problem} />
            <CaseSection title="The approach" body={project.approach} />
            <CaseSection title="Technical implementation" body={project.technical} />
            <CaseSection title="Challenges" body={project.challenges} />
            <CaseSection title="Outcome" body={project.outcome} />
          </div>
          <aside className="space-y-8">
            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <h2 className="text-xl font-semibold text-white">Key features</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />{feature}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <h2 className="text-xl font-semibold text-white">Tech stack</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.technologies.map((item) => (
                  <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-400" />{item}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-[28px] border border-white/10 bg-cyan-500/10 p-6">
              <h2 className="text-xl font-semibold text-white">Result / status</h2>
              <p className="mt-4 text-base leading-7 text-slate-200">{project.result}</p>
            </section>
          </aside>
        </main>
      </div>
    </div>
  )
}
