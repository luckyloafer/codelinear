import { useState, useRef, useEffect } from 'react'
import './CaseStudiesSection.scss'
import Button from '../ui/Button/Button'
import { caseStudies } from '../../data/caseStudiesData'

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [leavingSlide, setLeavingSlide] = useState(null)
  const [animating, setAnimating] = useState(false)
  const ref = useRef(null)
  const total = caseStudies.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref?.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const goTo = (index) => {
    if (animating || index === activeSlide) return
    setAnimating(true)
    setLeavingSlide(activeSlide)
    setActiveSlide(index)
    setTimeout(() => {
      setLeavingSlide(null)
      setAnimating(false)
    }, 600)
  }

  const prev = () => goTo((activeSlide - 1 + total) % total)
  const next = () => goTo((activeSlide + 1) % total)

  const getCardClass = (index) => {
    if (index === leavingSlide) return 'pos-leaving'
    if (index === activeSlide) return 'pos-active'
    const behindIndex = (index - activeSlide + total) % total
    if (behindIndex === 1) return 'pos-behind-1'
    if (behindIndex === 2) return 'pos-behind-2'
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
                <img src="/Frame 54.svg" alt={study.brand} loading="lazy" />
              </div>
              <div className="cs-card-content">
                <span className="cs-category">{study.category}</span>
                <h3 className="cs-title">{study.title}</h3>
                <div className="cs-brand">
                  <img src='logo (4).svg' loading="lazy" />
                </div>
                <Button variant="outline" href="#" className="cs-read-btn">READ MORE</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-navigation">
          <div></div>
          <div className="cs-nav-left">
          <img src='/Frame 107.svg' onClick={prev} loading="lazy" />
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
            <img src='/Frame 106.svg' onClick={next} loading="lazy" />
          </div>
          <a href="#" className="cs-view-alll">VIEW ALL <img src="/3.svg" alt="" loading="lazy" /></a>
        </div>
      </div>
    </section>
  )
}
