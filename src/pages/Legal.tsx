export function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const isPrivacy = kind === 'privacy'

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
      <a href="#/" className="font-mono-x text-[12px] uppercase tracking-[0.16em] text-ink-soft underline underline-offset-4 hover:text-accent">
        Back to portfolio
      </a>
      <p className="font-mono-x mt-8 text-[12px] uppercase tracking-[0.2em] text-ink-faint">
        {isPrivacy ? 'Privacy / updated 2026' : 'Terms / updated 2026'}
      </p>
      <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-ink md:text-5xl">
        {isPrivacy ? 'What this site collects.' : 'How this site may be used.'}
      </h1>
      <div className="mt-8 space-y-8 border-t border-ink pt-8 text-[15px] leading-7 text-ink-soft">
        {isPrivacy ? (
          <>
            <section>
              <h2 className="font-display text-xl text-ink">Contact form</h2>
              <p className="mt-2">Fields are checked in your browser. Nothing is transmitted until an email service is connected. Do not include passwords or payment details.</p>
            </section>
            <section>
              <h2 className="font-display text-xl text-ink">External links</h2>
              <p className="mt-2">The Process Strength Analyzer demo links to a separately hosted deployment. That host applies its own policy once you leave this page.</p>
            </section>
            <section>
              <h2 className="font-display text-xl text-ink">Analytics</h2>
              <p className="mt-2">This portfolio ships without tracking scripts. If analytics are added later, this page will name the provider and retention period.</p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="font-display text-xl text-ink">Content</h2>
              <p className="mt-2">Project notes and writing are by Arnav Kwatra. You may link to pages and quote short passages with credit. Republishing full case studies needs permission.</p>
            </section>
            <section>
              <h2 className="font-display text-xl text-ink">Concept work</h2>
              <p className="mt-2">Cafe Blues is marked as a fictional concept. Names, menus, and prices there are illustrative, not a real business offer.</p>
            </section>
            <section>
              <h2 className="font-display text-xl text-ink">Contact</h2>
              <p className="mt-2">Project inquiries through the form are requests for a quote, not an agreement. Work starts only after scope, price, and timeline are confirmed in writing.</p>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
