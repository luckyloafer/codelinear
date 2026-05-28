import { useRef } from 'react'
import './Footer.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { footerSolutions, footerN7, footerSocials, addresses } from '../../data/footerData'

const footerNavColumns = [
  { title: 'Solutions', items: footerSolutions },
  { title: 'N7 Banking', items: footerN7 },
  { title: 'Our Socials', items: footerSocials },
]

export default function Footer() {
  const ctaRef = useRef(null)
  const bodyRef = useRef(null)

  useIntersectionObserver([ctaRef, bodyRef])

  return (
    <footer className="footer">
      <div className="footer-cta fade-in" ref={ctaRef}>
        <div className="footer-cta-left">
          <h2 className="footer-cta-heading">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="footer-cta-subtitle">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="footer-cta-right">
          <Button variant="outline" size="lg" href="#" className="footer-btn">CONTACT US</Button>
          <Button variant="primary" size="lg" href="#" className="footer-btn">REQUEST DEMO</Button>
        </div>
      </div>

      <div className="footer-body fade-in" ref={bodyRef}>
        <div className="footer-brand">
          <div className="footer-n7-text">
            <img src="/Mask group.svg" alt="N7 Banking" />
          </div>
        </div>
        <div className="footer-addresses">
          {addresses.map((addr) => (
            <div key={addr.city} className="footer-address">
              <div className="footer-address-city">{addr.city}</div>
              <p className="footer-address-text">{addr.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-nav">
        {footerNavColumns.map((col) => (
          <div key={col.title} className="footer-nav-col">
            <div className="footer-address-city">{col.title}</div>
            <ul className="footer-nav-list">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="footer-nav-link">
                    <span>{item}</span>
                    <span className="nav-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]</span>
      </div>
    </footer>
  )
}
