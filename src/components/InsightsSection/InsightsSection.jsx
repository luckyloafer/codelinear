import { useRef } from 'react'
import './InsightsSection.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const ArticleCard = ({ featured = false }) => (
  <div className={`article-card ${featured ? 'featured-article' : ''}`}>
    {featured && (
      <div className="article-image">
        <img src="/Frame 54.svg" alt="Article thumbnail" />
      </div>
    )}
    <div className="article-content">
      <span className="article-category">GETTING STARTED</span>
      <h3 className="article-title">
        'How to transition from a traditional to a digital bank'
      </h3>
      <div className="article-meta">David Grohl · 17/08/24</div>
      <Button variant="outline" href="#">READ MORE</Button>
    </div>
  </div>
)

export default function InsightsSection() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useIntersectionObserver([leftRef, rightRef])

  return (
    <section className="insights-section" id="insights">
      <div className="insights-inner">
        <div className="insights-left fade-in-left" ref={leftRef}>
          <h2 className="insights-heading">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <Button variant="outline" size='lg' href="#" className="insights-cta-btn">INSIGHTS</Button>
        </div>

        <div className="insights-right fade-in-right" ref={rightRef}>
          <ArticleCard featured />
          <div className="insights-small-cards">
            <ArticleCard />
            <ArticleCard />
          </div>
          <span className="insights-read-all">READ ALL INSIGHTS <img src="/3.svg" alt="" /></span>
        </div>

        <div className="glow"></div>
      </div>
    </section>
  )
}
