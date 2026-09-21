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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Have a website, dashboard, or interactive idea?</h2>
          <div className="mt-8 space-y-3 text-slate-300">
            {site.email ? <p>Email: <a className="text-white underline" href={`mailto:${site.email}`}>{site.email}</a></p> : <p className="text-slate-500">Email: contact details coming soon.</p>}
            <p>GitHub: <a className="text-white underline" href={site.githubUrl} target="_blank" rel="noreferrer">{site.githubUrl}</a></p>
            {site.linkedinUrl ? <p>LinkedIn: <a className="text-white underline" href={site.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn profile</a></p> : null}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Name
              <input type="text" name="name" aria-label="Name" value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input type="email" name="email" aria-label="Email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
            </label>
          </div>
          <label className="mt-5 block text-sm text-slate-300">
            Message
            <textarea name="message" aria-label="Message" value={formData.message} onChange={handleChange} rows={6} placeholder="Tell me about your idea, project goals, or the kind of work you need." className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none" />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Send inquiry</button>
            {status === 'success' && <p className="text-sm text-emerald-300">Thanks — your message is ready to be sent.</p>}
            {status === 'error' && <p className="text-sm text-rose-300">Please complete your name, email, and message.</p>}
          </div>
          <p className="mt-4 text-xs text-slate-500">This form validates locally in the browser; connect an email service when ready.</p>
        </form>
      </div>
    </section>
  )
}
