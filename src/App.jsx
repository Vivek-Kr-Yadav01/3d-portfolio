import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './components/canvas/Scene'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LINKS } from './data/portfolio'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 3D Background Canvas */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content */}
      <div className="main-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-links">
            <a href={LINKS.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
          <p>© 2026 Vivek Kumar Yadav. Data Science Student Portfolio</p>
        </footer>
      </div>
    </>
  )
}
