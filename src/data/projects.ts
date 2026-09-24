import type { Project } from './projectTypes'
import { cafeBlues } from './projectCafe'
import { processAnalyzer } from './projectPsa'
import { flowstateAI } from './projectFlowstate'

export type { Project } from './projectTypes'

export const projects: Project[] = [flowstateAI, processAnalyzer, cafeBlues]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
