import { site } from '../data/site'

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#/privacy' },
  { label: 'Terms', href: '#/terms' },
]

export function Footer() {
  return (
    <footer className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-display text-3xl font-light tracking-tight text-ink">Arnav Kwatra</p>
            <p className="mt-2 font-mono-x text-[11px] uppercase tracking-[0.24em] text-accent">
              Full-Stack Developer
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-draw font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="link-draw font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6">
          <p className="text-[13px] leading-6 text-ink-faint">
            &copy; 2026 Arnav Kwatra. Set in Fraunces, Public Sans, and IBM Plex Mono.
          </p>
          <p className="font-mono-x text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            No tracking scripts on this page
          </p>
        </div>
      </div>
    </footer>
  )
}
