import { useEffect, useRef } from 'react'
import { SKILLS } from '../../data/portfolio'

export default function Skills() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const sections = ref.current.querySelectorAll('.skills-section')
          sections.forEach((sect, i) => {
            setTimeout(() => sect.classList.add('visible'), i * 150)
          })
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills & Tools</h2>
      <p className="section-subtitle">Technical and professional capabilities</p>
      
      <div className="skills-wrapper" ref={ref}>
        {/* Technical */}
        <div className="skills-section fade-up">
          <h3>🖥️ Technical Skills</h3>
          <div className="skills-list">
            {SKILLS.technical.map((s) => (
              <div key={s.name} className="skill-tag">
                <span className="skill-tag-icon">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-section fade-up delay-1">
          <h3>🧠 Soft Skills</h3>
          <div className="skills-list">
            {SKILLS.soft.map((s) => (
              <div key={s.name} className="skill-tag">
                <span className="skill-tag-icon">{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Languages */}
        <div className="skills-section fade-up delay-2">
          <h3>🛠️ Tools & Languages</h3>
          <div className="skills-list">
            {SKILLS.tools.map((s) => (
              <div key={s.name} className="skill-tag">
                <span className="skill-tag-icon">{s.icon}</span>
                <span>{s.name} (Tool)</span>
              </div>
            ))}
            {SKILLS.languages.map((s) => (
              <div key={s.name} className="skill-tag">
                <span className="skill-tag-icon">{s.icon}</span>
                <span>{s.name} (Language)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
