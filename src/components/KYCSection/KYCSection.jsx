import { useRef } from 'react'
import './KYCSection.scss'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

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

  useIntersectionObserver([leftRef, rightRef])

  return (
    <section className="kyc-section">
      <div className="kyc-inner">
        <div className="kyc-left fade-in-left" ref={leftRef}>
          <img src="/Frame 99.png" alt="KYC dashboard" />
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
                  <img src="/Frame 15.svg" className="kyc-check-icon" alt="" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="kyc-checklist">
              {rightChecklist.map((item) => (
                <li key={item} className="kyc-check-item">
                  <img src="/Frame 15.svg" className="kyc-check-icon" alt="" />
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
