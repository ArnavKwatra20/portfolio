const items = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GitHub', 'Figma']

export function TechStrip() {
  return (
    <section className="border-y border-white/10 bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
          {items.map((item) => (
            <span key={item} className="transition hover:text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
