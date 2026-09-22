export type Service = {
  title: string
  summary: string
  points: string[]
  caseStudySlug: string
  caseStudyLabel: string
}

export const services: Service[] = [
  {
    title: 'Websites',
    summary: 'Modern business websites and landing pages, designed to look considered and read clearly on every screen.',
    points: ['Business and marketing sites', 'Landing pages', 'Responsive, accessible builds'],
    caseStudySlug: 'cafe-blues',
    caseStudyLabel: 'Cafe Blues',
  },
  {
    title: 'Web Apps',
    summary: 'Functional web applications and dashboards: typed data, clear states, and interfaces that stay readable under real use.',
    points: ['React and TypeScript applications', 'Dashboards and data views', 'REST APIs with Express'],
    caseStudySlug: 'process-strength-analyzer',
    caseStudyLabel: 'Process Strength Analyzer',
  },
  {
    title: 'Digital Experiences',
    summary: 'Interactive frontend work where motion, data, and interface design carry the experience.',
    points: ['Interactive interfaces', 'Data visualization', 'Polished micro-interactions'],
    caseStudySlug: 'car-racing-lap',
    caseStudyLabel: 'Car Racing Lap',
  },
]
