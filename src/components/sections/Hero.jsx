import { useEffect, useRef } from 'react'
import { OWNER } from '../../data/portfolio'

export default function Hero() {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => el.classList.add('visible'), 200)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={ref} className="fade-up">
        <span className="hero-badge">✦ Data Science Portfolio</span>
        <h1>
          Hi, I'm <span className="gradient-text">{OWNER.name}</span>
        </h1>
        <p>
          I am a {OWNER.role} focused on machine learning, data analysis, 
          and technology-driven problem solving.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="line"></div>
      </div>
    </section>
  )
}
