import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { LINKS } from '../../data/portfolio'

export default function Contact() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('visible')
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper fade-up" ref={ref}>
        <span className="hero-badge">✦ Let's Talk</span>
        <h3>Get In Touch</h3>
        <p>
          I am always interested in discussing data science, software engineering, 
          and innovative project collaborations. Feel free to connect directly.
        </p>
        
        <div className="contact-links">
          <a href={`mailto:${LINKS.email}`} className="contact-link">
            <FaEnvelope className="icon" />
            {LINKS.email}
          </a>
          <a href={`tel:${LINKS.phone}`} className="contact-link">
            <FaPhone className="icon" />
            {LINKS.phone}
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <FaLinkedin className="icon" />
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="contact-link">
            <FaGithub className="icon" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
