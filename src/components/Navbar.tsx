import { useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Arnav Kwatra</span>
          <span className="font-mono-x hidden text-[11px] uppercase tracking-[0.18em] text-ink-faint sm:inline">
            Folio / 2026
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-ink-soft underline-offset-8 transition-colors hover:text-ink hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-ink bg-ink px-4 py-2 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="border border-ink px-4 py-2 font-mono-x text-[12px] uppercase tracking-[0.14em] text-ink md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-ink bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline justify-between border-b border-line py-3 font-mono-x text-[13px] uppercase tracking-[0.14em] text-ink"
              >
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-ink px-4 py-3 text-center font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
