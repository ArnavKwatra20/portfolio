import { useEffect, useState } from 'react'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { TechStrip } from './components/TechStrip'
import { getSlugFromHash } from './data/caseStudyRoutes'
import { getProjectBySlug } from './data/projects'
import { CaseStudy } from './pages/CaseStudy'
import { Legal } from './pages/Legal'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <p className="font-mono-x text-[12px] uppercase tracking-[0.2em] text-[#7c7263]">Missing page</p>
      <h1 className="font-display mt-4 text-4xl tracking-tight text-[#1b1814]">That page is not in this edition.</h1>
      <a href="#/" className="mt-8 inline-block border border-[#1b1814] bg-[#1b1814] px-6 py-3 font-mono-x text-[12px] uppercase tracking-[0.14em] text-[#f4f1ea]">
        Back to portfolio
      </a>
    </div>
  )
}

function App() {
  const [route, setRoute] = useState(() => (typeof window === 'undefined' ? '' : window.location.hash))

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash)
      document.title = 'Arnav Kwatra — Full-Stack Developer | Portfolio'
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const slug = getSlugFromHash()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (route === '#/privacy' || route === '#/terms') {
    return (
      <div className="min-h-screen bg-[#f4f1ea] text-[#1b1814]">
        <Legal kind={route === '#/privacy' ? 'privacy' : 'terms'} />
        <Footer />
      </div>
    )
  }

  if (route.startsWith('#/projects/')) {
    if (!project) {
      return (
        <div className="min-h-screen bg-[#f4f1ea] text-[#1b1814]">
          <NotFound />
          <Footer />
        </div>
      )
    }
    return (
      <div className="min-h-screen bg-[#f4f1ea] text-[#1b1814]">
        <CaseStudy project={project} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1b1814]">
      <HomePage />
    </div>
  )
}

export default App
