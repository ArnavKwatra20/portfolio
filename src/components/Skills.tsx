import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" aria-label="Toolkit" className="border-b border-[#d8d0bf]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">04 / Toolkit</p>
          <h2 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight text-[#1b1814] md:text-4xl">
            Tools I reach for weekly.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <table className="w-full border-collapse border-t border-[#1b1814] text-left">
            <caption className="sr-only">Grouped list of working tools</caption>
            <tbody>
              {skills.map((group) => (
                <tr key={group.category} className="border-b border-[#d8d0bf] align-top">
                  <th scope="row" className="w-36 py-5 pr-6 font-mono-x text-[12px] font-medium uppercase tracking-[0.16em] text-[#7c7263]">
                    {group.category}
                  </th>
                  <td className="py-5 text-[15px] leading-7 text-[#1b1814]">{group.items.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm leading-6 text-[#7c7263]">
            Full list is intentionally short. Anything else on a project page earned its place there.
          </p>
        </div>
      </div>
    </section>
  )
}
