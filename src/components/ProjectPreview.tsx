import type { Project } from '../data/projects'

const cafeMenuSample = [
  { name: 'Velvet Flat White', price: '280' },
  { name: 'The Blue Plate', price: '540' },
  { name: 'Truffle Mafaldine', price: '690' },
  { name: 'Burnt Basque Cheesecake', price: '380' },
]

const processSample: Array<[string, string, string, string]> = [
  ['0784', 'node.exe', '4.2', '212'],
  ['1240', 'chrome.exe', '7.9', '640'],
  ['0412', 'explorer.exe', '1.6', '154'],
  ['0908', 'powershell.exe', '0.7', '58'],
  ['0160', 'svchost.exe', '1.1', '92'],
]

const SPEED_W = 320
const SPEED_H = 120
const SPEED_N = 96
const CIRCUIT_LEN = 5.842

function buildSpeedPoints(): string {
  const pace = 0.99
  const lap = 16
  const pts: string[] = []
  for (let i = 0; i < SPEED_N; i += 1) {
    const progress = i / (SPEED_N - 1)
    const corner = Math.max(0, Math.sin(progress * Math.PI * 6 - 0.8))
    let speed =
      236 +
      48 * Math.sin(progress * Math.PI * 2 - 0.4) -
      corner * (75 - pace * 8) +
      pace * 5 -
      (lap - 16) * 0.8
    speed = Math.min(318, Math.max(108, speed))
    const x = progress * SPEED_W
    const y = SPEED_H - ((speed - 100) / 220) * SPEED_H
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return pts.join(' ')
}

const speedPoints = buildSpeedPoints()
const sectorTicks = [1.94 / CIRCUIT_LEN, 3.88 / CIRCUIT_LEN].map((f) => f * SPEED_W)

const captions: Record<string, string> = {
  'cafe-blues': 'Menu view, data-driven categories',
  'process-strength-analyzer': 'Process explorer, read-only table',
  'car-racing-lap': 'Speed trace across three sectors',
}

function CafeFrame() {
  return (
    <div className="flex h-full flex-col border border-ink bg-field p-5">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg tracking-tight text-ink">Cafe Blues</p>
        <p className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint">Menu / p.02</p>
      </div>
      <ul className="my-4 space-y-3">
        {cafeMenuSample.map((item) => (
          <li key={item.name} className="flex items-baseline gap-3">
            <span className="font-display text-[15px] leading-none text-ink">{item.name}</span>
            <span className="mb-1 flex-1 self-end border-b border-dotted border-line-dot" aria-hidden="true" />
            <span className="font-mono-x text-[13px] leading-none text-ink-soft">{item.price}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto font-mono-x text-[10px] uppercase tracking-[0.16em] text-ink-faint">
        Coffee / Breakfast / Mains / Desserts
      </p>
    </div>
  )
}

function PsaFrame() {
  return (
    <div className="flex h-full flex-col border border-ink bg-field p-5">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg tracking-tight text-ink">Process explorer</p>
        <p className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint">Read-only</p>
      </div>
      <table className="mt-3 w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-ink">
            <th className="pb-1.5 font-mono-x text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">PID</th>
            <th className="pb-1.5 font-mono-x text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">Name</th>
            <th className="pb-1.5 text-right font-mono-x text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">CPU %</th>
            <th className="pb-1.5 text-right font-mono-x text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">Mem MB</th>
          </tr>
        </thead>
        <tbody>
          {processSample.map(([pid, name, cpu, mem]) => (
            <tr key={pid} className="border-b border-dotted border-line">
              <td className="py-1.5 font-mono-x text-[12px] text-ink-soft">{pid}</td>
              <td className="py-1.5 font-mono-x text-[12px] text-ink">{name}</td>
              <td className="py-1.5 text-right font-mono-x text-[12px] text-ink-soft">{cpu}</td>
              <td className="py-1.5 text-right font-mono-x text-[12px] text-ink-soft">{mem}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-auto pt-3 font-mono-x text-[10px] uppercase tracking-[0.14em] text-ink-faint">
        Sample rows / interface preview
      </p>
    </div>
  )
}

function RacingFrame() {
  return (
    <div className="flex h-full flex-col border border-ink bg-field p-5">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg tracking-tight text-ink">Speed trace</p>
        <p className="font-mono-x text-[10px] uppercase tracking-[0.18em] text-ink-faint">Lap 16 / RB-07</p>
      </div>
      <div className="my-3 flex-1">
        <svg
          viewBox={`0 0 ${SPEED_W} ${SPEED_H}`}
          className="h-full w-full"
          preserveAspectRatio="none"
          role="img"
          aria-label="Speed trace across three sectors"
        >
          <line x1="0" y1={SPEED_H - 0.5} x2={SPEED_W} y2={SPEED_H - 0.5} stroke="var(--color-ink)" strokeWidth="1" />
          {sectorTicks.map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2={SPEED_H} stroke="var(--color-line-dot)" strokeWidth="1" strokeDasharray="2 3" />
          ))}
          <polyline
            points={speedPoints}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="flex justify-between font-mono-x text-[10px] uppercase tracking-[0.14em] text-ink-faint">
        <span>S1</span>
        <span>S2</span>
        <span>S3</span>
      </div>
    </div>
  )
}

export function ProjectPreview({
  project,
  className = '',
  aspectClass = 'aspect-[16/10]',
}: {
  project: Project
  className?: string
  aspectClass?: string
}) {
  const frame =
    project.slug === 'cafe-blues' ? (
      <CafeFrame />
    ) : project.slug === 'process-strength-analyzer' ? (
      <PsaFrame />
    ) : (
      <RacingFrame />
    )

  return (
    <figure className={`group ${className}`}>
      <div className={`${aspectClass} w-full overflow-hidden`}>
        <div className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          {frame}
        </div>
      </div>
      <figcaption className="mt-3 font-mono-x text-[11px] uppercase tracking-[0.16em] text-ink-faint">
        {captions[project.slug] ?? project.imageLabel}
      </figcaption>
    </figure>
  )
}