import { useRef } from 'react'
import './HeroSection.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function HeroSection() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useIntersectionObserver([leftRef, rightRef])

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-left fade-in-left" ref={leftRef}>
          <h1 className="hero-heading">
            The new foundation of modern banking
          </h1>
          <p className="hero-subtitle">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg" href="#">REQUEST DEMO</Button>
            <Button variant="outline" size="lg" href="#">CONTACT US</Button>
          </div>
        </div>

        <div className="hero-right fade-in-right" ref={rightRef}>
          <div className="hero-card-wrapper">
            <div className="hero-glow">
              <img src='/Ellipse 1.svg' />
            </div>
            <div className="hero-bg-card">
              <div className="hero-bg-pattern">
                <img src="/bg_image.jpg" alt="Background" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            </div>
            <div className="bank-card">
              <img src="/Home.png" alt="Banking dashboard" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="activity-card">
              <img src="/Home (1).png" alt="Activity dashboard" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
