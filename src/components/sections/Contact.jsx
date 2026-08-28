import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
        <h3>Let's Connect</h3>
        <p>
          I am always interested in discussing data science, machine learning, 
          and innovative computational tools. Feel free to connect.
        </p>
        
        <div className="contact-links">
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
