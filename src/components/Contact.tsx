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
    <section id="contact" className="border-b border-[#1b1814]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">07 / Contact</p>
          <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1b1814] md:text-4xl">
            Tell me what needs building.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#4d463c]">
            Include the kind of site or tool, two or three reference points, and when you need it.
          </p>
          <dl className="mt-8 space-y-4 border-t border-[#1b1814] pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">GitHub</dt>
              <dd className="text-sm text-[#1b1814]">
                <a href={site.githubUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#9a3b26]">
                  {site.githubUrl.replace('https://', '')}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">Email</dt>
              <dd className="text-sm text-[#1b1814]">
                {site.email ? (
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-[#9a3b26]">
                    {site.email}
                  </a>
                ) : (
                  <span className="text-[#7c7263]">Shared after first reply</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
        <form onSubmit={handleSubmit} className="border border-[#1b1814] bg-[#faf8f2] p-6 md:p-8 lg:col-span-7" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">Your name</span>
              <input type="text" name="name" aria-label="Name" value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-2 w-full border border-[#1b1814] bg-white px-4 py-3 text-[15px] text-[#1b1814] placeholder:text-[#7c7263]" />
            </label>
            <label className="block">
              <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">Email</span>
              <input type="email" name="email" aria-label="Email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="mt-2 w-full border border-[#1b1814] bg-white px-4 py-3 text-[15px] text-[#1b1814] placeholder:text-[#7c7263]" />
            </label>
          </div>
          <label className="mt-6 block">
            <span className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-[#7c7263]">Project note</span>
            <textarea name="message" aria-label="Message" value={formData.message} onChange={handleChange} rows={6} placeholder="What it is, pages or screens involved, timeline." className="mt-2 w-full border border-[#1b1814] bg-white px-4 py-3 text-[15px] leading-7 text-[#1b1814] placeholder:text-[#7c7263]" />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="border border-[#1b1814] bg-[#1b1814] px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea] transition-colors hover:bg-[#9a3b26] hover:border-[#9a3b26]">Send note</button>
            {status === 'success' && <p className="text-sm text-[#4d5a43]">Noted. This draft stays in your browser until email is connected.</p>}
            {status === 'error' && <p className="text-sm text-[#9a3b26]">Add your name, a valid email, and one line about the work.</p>}
          </div>
          <p className="mt-5 border-t border-[#d8d0bf] pt-4 text-[13px] leading-6 text-[#7c7263]">This form checks fields locally and does not send mail yet.</p>
        </form>
      </div>
    </section>
  )
}
