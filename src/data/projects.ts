import type { Project } from './projectTypes'
import { cafeBlues } from './projectCafe'
import { processAnalyzer } from './projectPsa'
import { carRacingLap } from './projectRacing'

export type { Project } from './projectTypes'

export const projects: Project[] = [cafeBlues, processAnalyzer, carRacingLap]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
