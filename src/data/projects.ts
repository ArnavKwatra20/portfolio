export type Project = {
  id: string
  title: string
  category: string
  shortDescription: string
  description: string
  tech: string[]
  imageLabel: string
  liveUrl: string
  githubUrl: string
  status: string
  problem: string
  approach: string
  solution: string
  technologies: string[]
  features: string[]
  result: string
}

export const projects: Project[] = [
  {
    id: 'cafe-blues',
    title: 'Cafe Blues',
    category: 'Restaurant / hospitality',
    shortDescription: 'A premium hospitality website concept focused on atmosphere, menu clarity, and reservations.',
    description:
      'A concept project for a refined cafe experience with strong visual storytelling, menu browsing, and a polished booking flow.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    imageLabel: 'Cafe Blues editorial landing page concept',
    liveUrl: 'https://example.com/cafe-blues',
    githubUrl: 'https://github.com/your-username/cafe-blues',
    status: 'Concept project',
    problem:
      'The concept needed a stronger digital presence that matched a premium cafe brand and made the menu and reservation journey easier to understand.',
    approach:
      'I focused on storytelling-led design, premium typography, and a clean browsing flow that balances brand atmosphere with conversion-friendly structure.',
    solution:
      'The final concept pairs a rich visual identity with a streamlined layout for menu discovery, experience highlights, and reservations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive design'],
    features: [
      'Editorial-style hero section',
      'Reservations and contact CTA',
      'Menu highlights and brand narrative',
      'Mobile-first layout for quick browsing',
    ],
    result: 'Concept project — in design and implementation exploration.',
  },
  {
    id: 'nexgen-studio',
    title: 'NexGen Studio',
    category: 'Agency / digital brand',
    shortDescription: 'A boutique agency website concept built to communicate creativity, trust, and service clarity.',
    description:
      'A concept project for a premium digital agency looking for a sharper online presence and more polished service positioning.',
    tech: ['React', 'Tailwind CSS', 'Design systems', 'Accessibility'],
    imageLabel: 'NexGen Studio premium studio landing page concept',
    liveUrl: 'https://example.com/nexgen-studio',
    githubUrl: 'https://github.com/your-username/nexgen-studio',
    status: 'Concept project',
    problem:
      'The brand needed a more premium and structured web presence to communicate service quality without overwhelming visitors.',
    approach:
      'I prioritized a strong information hierarchy, service storytelling, and a polished modular layout that guides clients toward inquiry.',
    solution:
      'The site concept introduces a premium visual system with a clean service narrative and easy calls-to-action for potential projects.',
    technologies: ['React', 'Tailwind CSS', 'Accessible interaction patterns', 'Modular UI'],
    features: [
      'Service-led homepage structure',
      'High-contrast premium visual styling',
      'Clear inquiry pathways',
      'Scalable section-based template design',
    ],
    result: 'Concept project — shaped as a polished agency showcase and inquiry funnel.',
  },
  {
    id: 'mini-soc-platform',
    title: 'Mini SOC Platform',
    category: 'Cybersecurity / monitoring',
    shortDescription: 'A dashboard concept for managing alerts, status overview, and operational visibility in a security workflow.',
    description:
      'A concept project focused on a streamlined security operations interface with strong information hierarchy and operational clarity.',
    tech: ['React', 'TypeScript', 'Node.js', 'Dashboard UI'],
    imageLabel: 'Mini SOC dashboard concept interface',
    liveUrl: 'https://example.com/mini-soc',
    githubUrl: 'https://github.com/your-username/mini-soc',
    status: 'In development',
    problem:
      'Security monitoring tools often become crowded and difficult to scan quickly. The concept needed better prioritization and clearer operational flow.',
    approach:
      'I structured the interface around status awareness, severity tracking, and compact but readable dashboards to support quick decision-making.',
    solution:
      'The dashboard concept emphasizes high-signal metrics, readable status cards, and a clear event flow without visual noise.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Dashboard design patterns'],
    features: [
      'Alert severity grouping',
      'Operational status overview',
      'Structured monitoring panels',
      'Cleaner analysis workflow for security teams',
    ],
    result: 'In development — designed as a focused monitoring dashboard concept.',
  },
  {
    id: 'process-strength-analyzer',
    title: 'Process Strength Analyzer',
    category: 'Cybersecurity / analysis tooling',
    shortDescription: 'An analysis-focused concept for mapping operational resilience and process health across security workflows.',
    description:
      'A concept project exploring how a team could review process strength, exposure points, and workflow health in a clear, actionable interface.',
    tech: ['React', 'Data visualisation', 'TypeScript', 'UX research'],
    imageLabel: 'Process Strength Analyzer concept dashboard',
    liveUrl: 'https://example.com/process-strength-analyzer',
    githubUrl: 'https://github.com/your-username/process-strength-analyzer',
    status: 'Concept project',
    problem:
      'Process analysis work often relies on scattered findings and unclear summaries, which makes it harder to assess operational strength quickly.',
    approach:
      'I shaped the concept around structured analysis, summary cards, and a clearer breakdown of process health so important signals are easier to understand.',
    solution:
      'The experience focuses on presenting assessment areas, standout issues, and decision-friendly summaries in a clean dashboard layout.',
    technologies: ['React', 'TypeScript', 'Analysis workflow design', 'Dashboard UI'],
    features: [
      'Operational health overview',
      'Issue tracking sections',
      'Compact summary cards',
      'Decision support for process review',
    ],
    result: 'Concept project — focused on process clarity and analysis workflow support.',
  },
]
