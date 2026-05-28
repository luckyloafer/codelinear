import { useRef, useEffect } from 'react'
import './CTASection.scss'
import Button from '../ui/Button/Button'

export default function CTASection({ variant }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref?.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`cta-wrapper ${variant}`}>
      <div className="cta-card fade-in" ref={ref}>
        <div className="cta-inner">
          <div className="cta-left">
            <h2 className="cta-heading">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="cta-subtitle">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="cta-right">
            <Button variant="outline" size="lg" href="#" className="cta-btn">CONTACT US</Button>
            <Button variant="primary" size="lg" href="#" className="cta-btn">REQUEST DEMO</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
