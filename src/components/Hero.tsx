import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section id="top" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_25%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
            Arnav Kwatra • Full-Stack Developer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
            Arnav Kwatra
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Full-Stack Developer building polished websites, dashboards, and interactive digital experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">View selected work</a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10">Start a project</a>
          </motion.div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">Business websites → Cafe Blues. Systems dashboards → Process Strength Analyzer. Interactive frontend → Car Racing Lap.</p>
        </div>
        <motion.div initial={{ opacity: 0, x: 20, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/20 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.72))] p-5 shadow-[0_28px_70px_rgba(2,6,23,0.64)] backdrop-blur-md">
            <div className="rounded-[22px] border border-white/10 bg-slate-900/80 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Selected work</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">Three focused builds</h2>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">Available</span>
              </div>
              <div className="space-y-3">
                {[['Cafe Blues', 'Business website'], ['Process Strength Analyzer', 'Systems dashboard'], ['Car Racing Lap', 'Interactive experience']].map(([title, kind]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{kind}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
