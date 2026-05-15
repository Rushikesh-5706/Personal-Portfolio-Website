import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollProgress from './components/ui/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <ParallaxProvider>
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
