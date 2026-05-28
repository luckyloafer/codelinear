import { useRef } from 'react'
import './DigitalBankingSection.scss'
import Button from '../ui/Button/Button'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0}}>
    <circle cx="12" cy="12" r="10" fill="#2B6EFD"/>
    <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function DigitalBankingSection() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  useIntersectionObserver([ref1, ref2, ref3])

  return (
    <section className="digital-section" id="digital-banking">
      <div className="digital-sub digital-sub-1 fade-in" ref={ref1}>
        <div className="digital-sub-inner">
          <div className="digital-left">
            <h2 className="digital-heading">Digital banking out-of-the-box</h2>
            <p className="digital-desc">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <Button variant="primary" size="lg" className="demo-btn" href="#">REQUEST DEMO</Button>
            <a href="#" className="learn-more-link">LEARN MORE →</a>
          </div>

          <div className="digital-center">
            <img src="/iPhone 13 Pro.svg" alt="Digital banking app" />
          </div>

          <div className="digital-right">
            <h3 className="digital-right-heading">
              Fully compliant with regulatory requirement
            </h3>
            <p className="digital-right-desc">
              The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
            </p>
            <ul className="digital-checklist">
              {[
                'Pre-integrated Security System',
                'Fully Compliant With Regulatory Requirement',
                'Digitally Connected Core',
              ].map((item) => (
                <li key={item} className="digital-check-item">
                  <img src="/Frame 15.svg" alt="" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="digital-sub digital-sub-2 fade-in" ref={ref2}>
        <div className="digital-sub-inner digital-sub-two-col">
          <div className="digital-text-half">
            <h3 className="digital-sub-heading">No legacy IT systems</h3>
            <p className="digital-sub-desc">
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <ul className="digital-checklist">
              {[
                'Adaptive & Intelligent API monetization',
                'Ambient User Experience',
                'Cloud-native With lower TCO',
              ].map((item) => (
                <li key={item} className="digital-check-item">
                  <img src="/Frame 15.svg" alt="" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="digital-phone-half">
            <img src="/iPhone 13 Pro (1).svg" alt="Digital banking app" />
          </div>
        </div>
      </div>

      <div className="digital-sub digital-sub-3 fade-in" ref={ref3}>
        <div className="digital-sub-inner digital-sub-two-col">
          <div className="digital-phone-half">
            <img src="/iPhone 13 Pro (2).svg" alt="Digital banking app" />
          </div>
          <div className="digital-text-half">
            <h3 className="digital-sub-heading">No traditional branches</h3>
            <p className="digital-sub-desc">
              Enable your customers to access all banking services digitally — onboard, transact, borrow, and invest without ever visiting a branch.
            </p>
            <ul className="digital-checklist">
              {[
                'Branchless & Paperless Banking',
                'Digital Transformation Capability',
                'Optimized, Adoptable and Scalable',
              ].map((item) => (
                <li key={item} className="digital-check-item">
                  <CheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <img src="/Vector.svg" alt="" className="v1" />
      <img src="/N7.svg" alt="" className="v2" />
      <img src="/7.svg" alt="" className="v3" />
    </section>
  )
}
