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
    <header className="sticky top-0 z-50 border-b border-[#1b1814] bg-[#f4f1ea]/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-[#1b1814]">Arnav Kwatra</span>
          <span className="font-mono-x hidden text-[11px] uppercase tracking-[0.18em] text-[#7c7263] sm:inline">
            Folio / 2026
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-[#4d463c] underline-offset-8 transition-colors hover:text-[#1b1814] hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#1b1814] bg-[#1b1814] px-4 py-2 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea] transition-colors hover:bg-[#9a3b26] hover:border-[#9a3b26]"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="border border-[#1b1814] px-4 py-2 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#1b1814] md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#1b1814] bg-[#f4f1ea] px-5 py-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline justify-between border-b border-[#d8d0bf] py-3 font-mono-x text-[13px] uppercase tracking-[0.14em] text-[#1b1814]"
              >
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#1b1814] px-4 py-3 text-center font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea]"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
