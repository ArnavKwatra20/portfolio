import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Skills</p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">A practical toolkit focused on shipping useful products.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">{group.category}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
