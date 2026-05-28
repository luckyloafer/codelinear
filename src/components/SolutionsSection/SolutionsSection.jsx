import { useRef, useEffect } from 'react'
import './SolutionsSection.scss'
import Button from '../ui/Button/Button'
import { solutions } from '../../data/solutionsData'

export default function SolutionsSection() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ;[leftRef, rightRef].forEach(ref => { if (ref?.current) observer.observe(ref.current) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-inner">
        <div className="solutions-left fade-in-left" ref={leftRef}>
          <h2 className="solutions-heading">
            All of our solutions are tailor-made to your needs
          </h2>
          <Button variant="outline" size="lg" href="#" className="solutions-btn">REQUEST DEMO</Button>
        </div>

        <div className="solutions-grid fade-in-right" ref={rightRef}>
          {solutions.map((sol, i) => (
            <div key={i} className="solution-card">
              <div className="solution-icon"><img src={sol.icon} alt={sol.title} loading="lazy" /> {sol.tag && <span className="solution-tag">{sol.tag}</span>}</div>
              <h3 className="solution-title">{sol.title}</h3>
              <p className="solution-desc">{sol.description}</p>
              <a href="#" className="solution-link">LEARN MORE <img src='/3.svg' loading="lazy" /></a>
            </div>
          ))}
        </div>
      </div>
      <div className="glow"></div>
    </section>
  )
}
