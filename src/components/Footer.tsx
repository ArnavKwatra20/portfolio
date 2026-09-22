export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <p className="font-display text-2xl tracking-tight">Arnav Kwatra</p>
          <p className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-line-mid">
            Full-Stack Developer / 2026 edition
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-deep pt-6 font-mono-x text-[12px] uppercase tracking-[0.14em]">
          <a href="#work" className="text-line-soft underline-offset-4 hover:underline">Work</a>
          <a href="#services" className="text-line-soft underline-offset-4 hover:underline">Services</a>
          <a href="#about" className="text-line-soft underline-offset-4 hover:underline">About</a>
          <a href="#contact" className="text-line-soft underline-offset-4 hover:underline">Contact</a>
          <a href="#/privacy" className="text-line-soft underline-offset-4 hover:underline">Privacy</a>
          <a href="#/terms" className="text-line-soft underline-offset-4 hover:underline">Terms</a>
        </div>
        <p className="mt-8 text-[13px] leading-6 text-line-mid">
          Set in Fraunces, Public Sans, and IBM Plex Mono. No tracking scripts on this page.
        </p>
      </div>
    </footer>
  )
}
