export type CaseStudyRoute = {
  path: string
  slug: string
  label: string
}

export const caseStudyRoutes: CaseStudyRoute[] = [
  { path: '#/projects/cafe-blues', slug: 'cafe-blues', label: 'Cafe Blues' },
  { path: '#/projects/process-strength-analyzer', slug: 'process-strength-analyzer', label: 'Process Strength Analyzer' },
  { path: '#/projects/car-racing-lap', slug: 'car-racing-lap', label: 'Car Racing Lap' },
]

export function getSlugFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash.replace(/^#/, '')
  const match = hash.match(/^\/projects\/([a-z0-9-]+)\/?$/)
  return match ? match[1] : null
}
