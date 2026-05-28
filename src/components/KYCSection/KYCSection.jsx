import { useRef, useEffect } from 'react'
import './KYCSection.scss'

const leftChecklist = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const rightChecklist = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

export default function KYCSection() {
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
    <section className="kyc-section">
      <div className="kyc-inner">
        <div className="kyc-left fade-in-left" ref={leftRef}>
          <img src="/Frame 99.svg" alt="KYC dashboard" loading="lazy" />
        </div>

        <div className="kyc-right fade-in-right" ref={rightRef}>
          <h2 className="kyc-heading">
            Run a more efficient, flexible, and digitally connected core banking system
          </h2>
          <p className="kyc-what-you-get">What you will get:</p>
          <div className="kyc-checklist-cols">
            <ul className="kyc-checklist">
              {leftChecklist.map((item) => (
                <li key={item} className="kyc-check-item">
                  <img src="/Frame 15.svg" className="kyc-check-icon" alt="" loading="lazy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="kyc-checklist">
              {rightChecklist.map((item) => (
                <li key={item} className="kyc-check-item">
                  <img src="/Frame 15.svg" className="kyc-check-icon" alt="" loading="lazy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
