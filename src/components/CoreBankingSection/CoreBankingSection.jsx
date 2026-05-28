import { useRef } from 'react'
import './CoreBankingSection.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function CoreBankingSection() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useIntersectionObserver([leftRef, rightRef])

  return (
    <section className="core-section">
      <div className="watermark-7">7</div>
      <div className="core-inner">
        <div className="core-left fade-in-left" ref={leftRef}>
          <h2 className="core-heading">A complete cloud-based core banking.</h2>
          <p className="core-subtitle">
            Faster time to market with our cloud-based core banking services
          </p>
          <Button variant="primary" size="lg" href="#" className="core-btn">REQUEST DEMO</Button>
          <a href="#" className="core-learn-more">LEARN MORE →</a>
        </div>

        <div className="core-right fade-in-right" ref={rightRef}>
          <img src="/Frame 90.svg" alt="Core banking dashboard" />
        </div>
      </div>
    </section>
  )
}
