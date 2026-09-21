export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Thoughtful builds for people who want clarity and craft.</h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I’m a freelance developer focused on building modern, usable digital experiences that feel refined without being overcomplicated.
          </p>
          <p>
            My work sits at the intersection of frontend craft, product thinking, and practical execution — helping businesses turn an idea into a website, landing page, or interface that is easier to understand and easier to trust.
          </p>
          <p>
            I care about structure, readability, accessibility, and the small details that make a site feel considered from the first scroll to the final click.
          </p>
        </div>
      </div>
    </section>
  )
}
