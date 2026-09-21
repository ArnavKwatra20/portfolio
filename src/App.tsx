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

function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
