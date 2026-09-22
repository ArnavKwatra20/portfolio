import { Fragment } from 'react'
import type { ReactNode } from 'react'
import type { Project } from '../data/projects'
import { ProjectPreview } from './ProjectPreview'

export type EntryProps = { project: Project; index: number }

const pad = (n: number) => String(n + 1).padStart(2, '0')

function TechRow({ tech, className = '' }: { tech: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${className}`} aria-label="Technologies">
      {tech.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
          )}
          <span className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint">{item}</span>
        </Fragment>
      ))}
    </div>
  )
}

function Cta({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={
        primary
          ? 'btn-lift bg-ink px-6 py-3 font-mono-x text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent'
          : 'btn-lift border border-line-strong px-6 py-3 font-mono-x text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent'
      }
    >
      {children}
    </a>
  )
}

function ProjectCtas({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Cta href={`#/projects/${project.slug}`} primary>
        View Case Study
      </Cta>
      {project.liveUrl ? <Cta href={project.liveUrl}>Live Demo</Cta> : null}
      {project.sourceUrl ? <Cta href={project.sourceUrl}>Source</Cta> : null}
    </div>
  )
}

function HonestNote({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <p className={`mt-5 font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint ${className}`}>
      {project.isConcept ? 'Fictional concept / portfolio piece' : 'Built from repository code, not a mockup'}
    </p>
  )
}

/* Composition A: text left, preview right, outlined numeral leads. */
export function EntryCafe({ project, index }: EntryProps) {
  return (
    <article data-reveal className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:gap-10 md:pt-14">
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="numeral-ghost font-display select-none text-[clamp(2.75rem,5vw,4.5rem)] leading-none"
          >
            {pad(index)}
          </span>
          <p className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-accent">{project.category}</p>
        </div>
        <h3 className="font-display mt-5 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.02] tracking-tight text-ink">
          <a href={`#/projects/${project.slug}`} className="link-draw">
            {project.title}
          </a>
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-7 text-ink-soft">{project.valueProposition}</p>
        <TechRow tech={project.tech} className="mt-6 border-t border-line pt-4" />
        <ProjectCtas project={project} className="mt-7" />
        <HonestNote project={project} />
      </div>
      <div className="md:col-span-6 md:col-start-7 md:mt-8">
        <a href={`#/projects/${project.slug}`} aria-label={`Open ${project.title} case study`} className="block">
          <ProjectPreview project={project} />
        </a>
      </div>
    </article>
  )
}

/* Composition B: preview left, text right, mirrored numeral row. */
export function EntryPsa({ project, index }: EntryProps) {
  return (
    <article data-reveal className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:gap-10 md:pt-14">
      <div className="md:col-span-6">
        <a href={`#/projects/${project.slug}`} aria-label={`Open ${project.title} case study`} className="block">
          <ProjectPreview project={project} />
        </a>
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <div className="flex items-baseline gap-5 md:justify-end">
          <p className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-accent">{project.category}</p>
          <span
            aria-hidden="true"
            className="numeral-ghost font-display select-none text-[clamp(2.75rem,5vw,4.5rem)] leading-none"
          >
            {pad(index)}
          </span>
        </div>
        <h3 className="font-display mt-5 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.02] tracking-tight text-ink md:text-right">
          <a href={`#/projects/${project.slug}`} className="link-draw">
            {project.title}
          </a>
        </h3>
        <p className="mt-4 text-[16px] leading-7 text-ink-soft md:ml-auto md:max-w-md md:text-right">
          {project.valueProposition}
        </p>
        <TechRow tech={project.tech} className="mt-6 justify-end border-t border-line pt-4" />
        <ProjectCtas project={project} className="mt-7 justify-end" />
        <HonestNote project={project} className="md:text-right" />
      </div>
    </article>
  )
}

/* Composition C: cinematic stack, full-width 21:9 plate. */
export function EntryRacing({ project, index }: EntryProps) {
  return (
    <article data-reveal className="border-t border-line pt-10 md:pt-14">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <div className="flex items-baseline gap-5">
            <span
              aria-hidden="true"
              className="numeral-ghost font-display select-none text-[clamp(2.75rem,5vw,4.5rem)] leading-none"
            >
              {pad(index)}
            </span>
            <p className="font-mono-x text-[11px] uppercase tracking-[0.22em] text-accent">{project.category}</p>
          </div>
          <h3 className="font-display mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-light uppercase leading-[0.95] tracking-tight text-ink">
            <a href={`#/projects/${project.slug}`} className="link-draw">
              {project.title}
            </a>
          </h3>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="text-[15px] leading-7 text-ink-soft">{project.valueProposition}</p>
        </div>
      </div>

      <div className="mt-8 md:mt-10">
        <a href={`#/projects/${project.slug}`} aria-label={`Open ${project.title} case study`} className="block">
          <ProjectPreview project={project} aspectClass="aspect-[16/10] md:aspect-[21/9]" />
        </a>
      </div>

      <div className="mt-6 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
        <TechRow tech={project.tech} />
        <ProjectCtas project={project} />
      </div>
      <HonestNote project={project} />
    </article>
  )
}
