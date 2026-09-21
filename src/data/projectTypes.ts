export type ProjectAccent = 'amber' | 'cyan' | 'rose'

export type Project = {
  id: string
  slug: string
  title: string
  valueProposition: string
  category: string
  shortDescription: string
  description: string
  tech: string[]
  imageLabel: string
  accent: ProjectAccent
  liveUrl: string
  sourceUrl: string
  status: string
  isConcept: boolean
  problem: string
  approach: string
  technical: string
  challenges: string
  outcome: string
  technologies: string[]
  features: string[]
  result: string
}
