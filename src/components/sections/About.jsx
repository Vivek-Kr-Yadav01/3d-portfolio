import { useEffect, useRef } from 'react'
import { ABOUT_TEXT } from '../../data/portfolio'

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('visible')
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-grid" ref={ref}>
        <div className="about-text fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Data Science & Machine Learning Student</p>
          {ABOUT_TEXT.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">DS & ML</div>
              <div className="stat-label">Core Focus</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">SQL</div>
              <div className="stat-label">Relational Databases</div>
            </div>
          </div>
        </div>

        <div className="about-visual-area fade-up delay-1">
          <div className="about-visual-content">
            <h3 className="about-visual-title">My Strengths</h3>
            
            <div className="about-bullet">
              <span className="about-bullet-icon">🧠</span>
              <div className="about-bullet-text">
                <h4>Critical Thinking</h4>
                <p>Analyzing problems logically and extracting actionable value from raw data.</p>
              </div>
            </div>

            <div className="about-bullet">
              <span className="about-bullet-icon">🔧</span>
              <div className="about-bullet-text">
                <h4>Problem Solving</h4>
                <p>Designing structured workflows to approach and solve complex computational tasks.</p>
              </div>
            </div>

            <div className="about-bullet">
              <span className="about-bullet-icon">🎯</span>
              <div className="about-bullet-text">
                <h4>Under Pressure Adaptability</h4>
                <p>Remaining focused, structured, and delivery-oriented in challenging situations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
