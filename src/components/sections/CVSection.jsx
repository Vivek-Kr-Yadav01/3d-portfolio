import { useEffect, useRef } from 'react'
import { FaDownload, FaFilePdf, FaExternalLinkAlt, FaGraduationCap, FaCertificate, FaEnvelope, FaPhone } from 'react-icons/fa'
import { OWNER, EDUCATION, CERTIFICATIONS, LINKS } from '../../data/portfolio'

export default function CVSection() {
  const ref = useRef()
  const cvUrl = `${import.meta.env.BASE_URL}${OWNER.cvFileName}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = ref.current.querySelectorAll('.cv-card, .cv-header-block')
          elements.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cv-section" id="cv" ref={ref}>
      <div className="cv-header-block fade-up">
        <span className="hero-badge">✦ Professional Resume</span>
        <h2 className="section-title">Curriculum Vitae</h2>
        <p className="section-subtitle">
          Summary of academic qualifications, certifications, and verified credentials
        </p>

        {/* Action Buttons */}
        <div className="cv-actions">
          <a
            href={cvUrl}
            download="Vivek_Kumar_Yadav_CV.pdf"
            className="btn-primary cv-btn"
          >
            <FaDownload className="btn-icon" />
            Download CV (PDF)
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline cv-btn"
          >
            <FaExternalLinkAlt className="btn-icon" />
            Open Full PDF
          </a>
        </div>
      </div>

      <div className="cv-grid">
        {/* Education Column */}
        <div className="cv-card fade-up">
          <div className="cv-card-header">
            <span className="cv-card-icon"><FaGraduationCap /></span>
            <h3>Education</h3>
          </div>

          <div className="cv-timeline">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="cv-timeline-item">
                <div className="cv-timeline-badge">{edu.icon}</div>
                <div className="cv-timeline-content">
                  <div className="cv-timeline-header">
                    <h4>{edu.institution}</h4>
                    <span className="cv-timeline-location">{edu.location}</span>
                  </div>
                  <p className="cv-degree">{edu.degree}</p>
                  <div className="cv-timeline-footer">
                    <span className="cv-timeline-date">{edu.timeline}</span>
                    <span className="cv-score-pill">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Profile Column */}
        <div className="cv-column-right">
          {/* Certifications Card */}
          <div className="cv-card fade-up delay-1">
            <div className="cv-card-header">
              <span className="cv-card-icon"><FaCertificate /></span>
              <h3>Certifications</h3>
            </div>

            <div className="certifications-list">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-icon-wrap">{cert.icon}</div>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></p>
                  </div>
                  <span className="cert-verified">Verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Info Card */}
          <div className="cv-card cv-quick-contact fade-up delay-2">
            <div className="cv-card-header">
              <span className="cv-card-icon"><FaFilePdf /></span>
              <h3>Resume Quick Info</h3>
            </div>
            <div className="quick-info-items">
              <div className="quick-info-row">
                <FaEnvelope className="quick-info-icon" />
                <div>
                  <span className="quick-info-label">Email Address</span>
                  <a href={`mailto:${LINKS.email}`} className="quick-info-value">{LINKS.email}</a>
                </div>
              </div>
              <div className="quick-info-row">
                <FaPhone className="quick-info-icon" />
                <div>
                  <span className="quick-info-label">Phone Number</span>
                  <a href={`tel:${LINKS.phone}`} className="quick-info-value">{LINKS.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
