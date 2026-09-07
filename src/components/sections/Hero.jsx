import { useEffect, useRef } from 'react'
import { FaDownload } from 'react-icons/fa'
import { OWNER } from '../../data/portfolio'

export default function Hero() {
  const ref = useRef()
  const cvUrl = `${import.meta.env.BASE_URL}${OWNER.cvFileName}`

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => el.classList.add('visible'), 200)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={ref} className="fade-up">
        <span className="hero-badge">✦ Data Science & CS Student</span>
        <h1>
          Hi, I'm <span className="gradient-text">{OWNER.name}</span>
        </h1>
        <p>
          I am a {OWNER.role} focused on machine learning, database systems, 
          and technology-driven problem solving.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href={cvUrl} download="Vivek_Kumar_Yadav_CV.pdf" className="btn-primary btn-cv-highlight">
            <FaDownload style={{ marginRight: '8px', verticalAlign: 'middle', fontSize: '0.9rem' }} />
            Download CV
          </a>
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
