import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type Props = { project: Project }

const accentVisual: Record<Project['accent'], string> = {
  amber: 'bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.28),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(194,65,12,0.35),transparent_35%),linear-gradient(135deg,rgba(69,26,3,0.96),rgba(12,10,9,0.94))]',
  cyan: 'bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.28),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(14,116,144,0.35),transparent_35%),linear-gradient(135deg,rgba(8,47,73,0.96),rgba(2,6,23,0.94))]',
  rose: 'bg-[radial-gradient(circle_at_20%_20%,rgba(251,113,133,0.28),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(136,19,55,0.35),transparent_35%),linear-gradient(135deg,rgba(76,5,25,0.96),rgba(2,6,23,0.94))]',
}

const accentChip: Record<Project['accent'], string> = {
  amber: 'border-amber-300/30 bg-amber-400/10 text-amber-200',
  cyan: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
  rose: 'border-rose-300/30 bg-rose-500/10 text-rose-200',
}

const accentGlyph: Record<Project['accent'], string> = {
  amber: '☕',
  cyan: '◈',
  rose: '◉',
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 transition duration-300 hover:border-white/25 hover:shadow-[0_22px_50px_rgba(2,6,23,0.45)]"
    >
      <div className={`relative overflow-hidden border-b border-white/10 p-6 ${accentVisual[project.accent]}`}>
        <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.26em] text-white/70">
          <span>{project.category}</span>
          <span className={`rounded-full border px-2 py-1 ${accentChip[project.accent]}`}>{project.status}</span>
        </div>
        <div className="relative flex min-h-[220px] items-end overflow-hidden rounded-[22px] border border-white/15 bg-black/35 p-5">
          <span aria-hidden="true" className="absolute right-5 top-4 text-5xl opacity-70">{accentGlyph[project.accent]}</span>
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">{project.imageLabel}</p>
            <h3 className="mt-3 max-w-[16ch] text-3xl font-bold leading-tight text-white">{project.title}</h3>
            <p className="mt-3 max-w-[38ch] text-sm leading-6 text-white/75">{project.valueProposition}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">{tag}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <a href={`#/projects/${project.slug}`} className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">View case study</a>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">Live demo</a> : null}
          {project.sourceUrl ? <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">Source code</a> : null}
        </div>
        {project.isConcept ? <p className="text-xs leading-5 text-slate-500">Fictional concept project created for portfolio demonstration.</p> : null}
      </div>
    </motion.article>
  )
}
