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

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Projects />
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

  if (route.startsWith('#/projects/')) {
    if (!project) {
      return (
        <div className="min-h-screen bg-[#020817] text-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h1 className="text-3xl font-bold text-white">Case study not found</h1>
            <p className="mt-4 text-slate-300">That project route does not exist.</p>
            <a href="#/" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">Back to portfolio</a>
          </div>
        </div>
      )
    }
    return (
      <div className="min-h-screen bg-[#020817] text-slate-100 selection:bg-cyan-500/30">
        <CaseStudy project={project} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 selection:bg-cyan-500/30">
      <HomePage />
    </div>
  )
}

export default App
