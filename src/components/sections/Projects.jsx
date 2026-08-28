import { useEffect, useRef } from 'react'
import { PROJECTS } from '../../data/portfolio'

export default function Projects() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = ref.current.querySelectorAll('.project-card')
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 150)
          })
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleProjectClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A showcase of some recent implementations</p>
      
      <div className="projects-grid" ref={ref}>
        {PROJECTS.map((proj) => (
          <div
            key={proj.title}
            className="project-card fade-up"
            onClick={() => handleProjectClick(proj.link)}
          >
            <div className="project-image">{proj.emoji}</div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-tags">
                {proj.technologies.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
