import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? 'border-line bg-paper/75 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Arnav Kwatra, home">
          <span className="font-display text-xl font-medium tracking-tight text-ink">AK</span>
          <span aria-hidden="true" className="h-4 w-px bg-line-strong" />
          <span className="hidden font-mono-x text-[11px] uppercase tracking-[0.24em] text-ink-faint transition-colors group-hover:text-ink sm:inline">
            Arnav Kwatra
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-draw font-mono-x text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-lift btn-primary"
          >
            Start a Project&nbsp;→
          </a>
        </div>

        <button
          type="button"
          className="btn-secondary btn-compact md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-px bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-paper/95 px-6 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl font-light tracking-tight text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-lift btn-primary mt-10 self-start"
          >
            Start a Project&nbsp;→
          </a>
          <p className="mt-8 font-mono-x text-[10px] uppercase tracking-[0.24em] text-ink-faint">
            Full-Stack Developer / 2026
          </p>
        </div>
      )}
    </header>
  )
}
