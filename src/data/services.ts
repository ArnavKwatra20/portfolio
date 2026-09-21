export type Service = {
  title: string
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'Web Development',
    summary: 'Custom websites and product interfaces built with a clear focus on usability, speed, and modern frontend craft.',
    points: ['React + TypeScript builds', 'Responsive frontends', 'Modern UI implementation'],
  },
  {
    title: 'Landing Pages',
    summary: 'Focused marketing pages designed to clearly explain value and help visitors take the next step.',
    points: ['Launch-ready messaging', 'Clear conversion flow', 'Mobile-first experience'],
  },
  {
    title: 'UI/UX Implementation',
    summary: 'Translating design direction into polished interfaces with careful attention to interaction details and accessibility.',
    points: ['Design-to-code handoff', 'Accessible patterns', 'Refined interactions'],
  },
  {
    title: 'Website Redesigns',
    summary: 'Refreshing outdated sites into cleaner, clearer modern experiences that feel more premium and easier to use.',
    points: ['Structure and flow improvement', 'Content clarity', 'Visual modernisation'],
  },
]
