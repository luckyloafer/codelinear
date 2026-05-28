import { useState, useEffect } from 'react'
import './Navbar.scss'
import Button from '../ui/Button/Button'
import { solutionsLinks, resourcesLinks } from '../../data/navData'

const ChevronDown = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAll = () => {
    setSolutionsOpen(false)
    setResourcesOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-box">N7</span>
        </a>

        <ul className="navbar-links">
          <li
            className="has-dropdown"
            onMouseEnter={() => { setSolutionsOpen(true); setResourcesOpen(false) }}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              SOLUTIONS <ChevronDown />
            </button>
            {solutionsOpen && (
              <div className="dropdown">
                {solutionsLinks.map((item) => (
                  <a key={item.label} href={item.href} className="dropdown-item" onClick={closeAll}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li
            className="has-dropdown"
            onMouseEnter={() => { setResourcesOpen(true); setSolutionsOpen(false) }}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              RESOURCES <ChevronDown />
            </button>
            {resourcesOpen && (
              <div className="dropdown">
                {resourcesLinks.map((item) => (
                  <a key={item.label} href={item.href} className="dropdown-item" onClick={closeAll}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li>
            <a href="#" className="nav-link">ABOUT US</a>
          </li>
        </ul>

        <Button variant="outline" size="sm" href="#" className="nav-cta">REQUEST DEMO</Button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-item">
            <button className="mobile-nav-link" onClick={() => setSolutionsOpen(!solutionsOpen)}>
              SOLUTIONS <ChevronDown />
            </button>
            {solutionsOpen && (
              <div className="mobile-dropdown">
                {solutionsLinks.map((item) => (
                  <a key={item.label} href={item.href} className="mobile-dropdown-item" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="mobile-nav-item">
            <button className="mobile-nav-link" onClick={() => setResourcesOpen(!resourcesOpen)}>
              RESOURCES <ChevronDown />
            </button>
            {resourcesOpen && (
              <div className="mobile-dropdown">
                {resourcesLinks.map((item) => (
                  <a key={item.label} href={item.href} className="mobile-dropdown-item" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>ABOUT US</a>
          <Button variant="outline" size="sm" href="#" className="mobile-cta" onClick={() => setMenuOpen(false)}>REQUEST DEMO</Button>
        </div>
      )}
    </nav>
  )
}
