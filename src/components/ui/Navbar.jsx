import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        VKY
      </div>
      
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}
