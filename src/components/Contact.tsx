import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { site } from '../data/site'

type FormStatus = 'idle' | 'success' | 'error'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = formData.name.trim() && formData.email.includes('@') && formData.message.trim()
    if (!isValid) {
      setStatus('error')
      return
    }
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const focusName = () => {
    document.getElementById('contact-name')?.focus()
  }

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div data-reveal>
          <p className="font-mono-x text-[11px] uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="font-display mt-6 text-[clamp(2.6rem,8.5vw,7rem)] font-light uppercase leading-[0.96] tracking-tight text-ink">
            Have something
            <br />
            worth building<span className="text-accent">?</span>
          </h2>
          <p className="font-display mt-6 text-[clamp(1.1rem,2vw,1.5rem)] italic text-ink-soft">
            Let&apos;s create something exceptional.
          </p>
        </div>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-5">
          <button
            type="button"
            onClick={focusName}
            className="btn-lift btn-primary"
          >
            Start a Project&nbsp;&rarr;
          </button>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-draw font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent"
          >
            GitHub
          </a>
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="link-draw font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent"
            >
              Email
            </a>
          ) : (
            <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              Email shared after first reply
            </span>
          )}
          {site.linkedinUrl ? (
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="link-draw font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          ) : null}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono-x text-[11px] uppercase tracking-[0.24em] text-ink-faint">
              Project notes
            </p>
            <p className="mt-4 text-[15px] leading-7 text-ink-soft">
              Include the kind of site or tool, two or three reference points, and when you need
              it. Specific notes get specific replies.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="border-t border-line pt-8 lg:col-span-7 lg:col-start-6" noValidate>
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-ink-faint">Your name</span>
                <input id="contact-name" type="text" name="name" aria-label="Name" value={formData.name} onChange={handleChange} placeholder="First and last name" className="mt-2 w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-[16px] text-ink placeholder:text-ink-faint transition-colors focus:border-accent" />
              </label>
              <label className="block">
                <span className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-ink-faint">Email</span>
                <input type="email" name="email" aria-label="Email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="mt-2 w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-[16px] text-ink placeholder:text-ink-faint transition-colors focus:border-accent" />
              </label>
            </div>
            <label className="mt-8 block">
              <span className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-ink-faint">Project note</span>
              <textarea name="message" aria-label="Message" value={formData.message} onChange={handleChange} rows={4} placeholder="What it is, pages or screens involved, timeline." className="mt-2 w-full resize-y border-0 border-b border-line-strong bg-transparent px-0 py-3 text-[16px] leading-7 text-ink placeholder:text-ink-faint transition-colors focus:border-accent" />
            </label>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-lift btn-secondary">
                Send note
              </button>
              {status === 'success' && (
                <p className="text-sm text-moss">Noted. This draft stays in your browser until email is connected.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-alert">Add your name, a valid email, and one line about the work.</p>
              )}
            </div>
            <p className="mt-6 text-[13px] leading-6 text-ink-faint">
              This form checks fields locally and does not send mail yet.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
