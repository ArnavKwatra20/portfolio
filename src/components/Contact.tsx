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

  return (
    <section id="contact" className="border-b border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-ink-faint">07 / Contact</p>
          <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Tell me what needs building.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-ink-soft">
            Include the kind of site or tool, two or three reference points, and when you need it.
          </p>
          <dl className="mt-8 space-y-4 border-t border-ink pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">GitHub</dt>
              <dd className="text-sm text-ink">
                <a href={site.githubUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">
                  {site.githubUrl.replace('https://', '')}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">Email</dt>
              <dd className="text-sm text-ink">
                {site.email ? (
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-accent">
                    {site.email}
                  </a>
                ) : (
                  <span className="text-ink-faint">Shared after first reply</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
        <form onSubmit={handleSubmit} className="border border-ink bg-field p-6 md:p-8 lg:col-span-7" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">Your name</span>
              <input type="text" name="name" aria-label="Name" value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-2 w-full border border-ink bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint" />
            </label>
            <label className="block">
              <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">Email</span>
              <input type="email" name="email" aria-label="Email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="mt-2 w-full border border-ink bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint" />
            </label>
          </div>
          <label className="mt-6 block">
            <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-ink-faint">Project note</span>
            <textarea name="message" aria-label="Message" value={formData.message} onChange={handleChange} rows={6} placeholder="What it is, pages or screens involved, timeline." className="mt-2 w-full border border-ink bg-white px-4 py-3 text-[15px] leading-7 text-ink placeholder:text-ink-faint" />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="border border-ink bg-ink px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:border-accent">Send note</button>
            {status === 'success' && <p className="text-sm text-moss">Noted. This draft stays in your browser until email is connected.</p>}
            {status === 'error' && <p className="text-sm text-accent">Add your name, a valid email, and one line about the work.</p>}
          </div>
          <p className="mt-5 border-t border-line pt-4 text-[13px] leading-6 text-ink-faint">This form checks fields locally and does not send mail yet.</p>
        </form>
      </div>
    </section>
  )
}
