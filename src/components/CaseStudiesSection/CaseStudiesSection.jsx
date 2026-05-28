import { useState, useRef } from 'react'
import './CaseStudiesSection.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { caseStudies } from '../../data/caseStudiesData'

const LightningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z" fill="#2B6EFD"/>
  </svg>
)

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const ref = useRef(null)
  const total = caseStudies.length

  useIntersectionObserver(ref)

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setActiveSlide(index)
    setTimeout(() => setAnimating(false), 550)
  }

  const prev = () => goTo((activeSlide - 1 + total) % total)
  const next = () => goTo((activeSlide + 1) % total)

  const getCardClass = (index) => {
    if (index === activeSlide) return 'pos-active'
    if (index === (activeSlide - 1 + total) % total) return 'pos-prev'
    return 'pos-hidden'
  }

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="cs-inner fade-in" ref={ref}>
        <h2 className="cs-main-heading">Our Case Studies</h2>

        <div className="cs-carousel-wrapper">
          {caseStudies.map((study, i) => (
            <div key={i} className={`cs-card ${getCardClass(i)}`}>
              <div className="cs-card-image">
                <img src="/Frame 54.svg" alt={study.brand} />
              </div>
              <div className="cs-card-content">
                <span className="cs-category">{study.category}</span>
                <h3 className="cs-title">{study.title}</h3>
                <div className="cs-brand">
                  <LightningIcon />
                  <span>{study.brand}</span>
                </div>
                <Button variant="outline-dark" href="#" className="cs-read-btn">READ MORE</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-navigation">
          <div></div>
          <div className="cs-nav-left">
          <img src='/Frame 107.svg' onClick={prev} />
            <div className="cs-dots">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  className={`cs-dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <img src='/Frame 106.svg' onClick={next}/>
          </div>
          <a href="#" className="cs-view-all">VIEW ALL →</a>
        </div>
      </div>
    </section>
  )
}
