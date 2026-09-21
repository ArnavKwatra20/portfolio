export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Accessibility', 'Responsive UI'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'API integrations', 'Database basics'],
  },
  {
    category: 'Tools / Other',
    items: ['GitHub', 'Figma', 'SEO basics', 'Performance optimisation', 'Problem solving', 'UI polish'],
  },
]
