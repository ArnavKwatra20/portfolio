export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Arnav Kwatra. Built for thoughtful digital work.</p>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
