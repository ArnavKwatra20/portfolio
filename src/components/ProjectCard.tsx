import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  onSelect: (projectId: string) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 shadow-[0_0_0_1px_rgba(148,163,184,0.05)] transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_22px_50px_rgba(8,145,178,0.14)]"
    >
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.88))] p-6">
        <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.26em] text-slate-300">
          <span>{project.category}</span>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-cyan-200">
            {project.status}
          </span>
        </div>

        <div className="relative flex min-h-[220px] items-end overflow-hidden rounded-[22px] border border-white/10 bg-slate-900/80 p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_35%),linear-gradient(145deg,rgba(2,6,23,0.2),rgba(15,23,42,0.78))]" />
          <div className="relative z-10 max-w-[70%]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Featured project</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-7 text-slate-300">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={() => onSelect(project.id)}
            className="rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View case study
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
