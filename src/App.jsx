import './App.scss'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import TrustedBy from './components/TrustedBy/TrustedBy'
import SolutionsSection from './components/SolutionsSection/SolutionsSection'
import CoreBankingSection from './components/CoreBankingSection/CoreBankingSection'
import KYCSection from './components/KYCSection/KYCSection'
import CTASection from './components/CTASection/CTASection'
import MarqueeBanner from './components/MarqueeBanner/MarqueeBanner'
import DigitalBankingSection from './components/DigitalBankingSection/DigitalBankingSection'
import InsightsSection from './components/InsightsSection/InsightsSection'
import CaseStudiesSection from './components/CaseStudiesSection/CaseStudiesSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <SolutionsSection />
      <CoreBankingSection />
      <KYCSection />
      <CTASection variant="dark" />
      <MarqueeBanner />
      <DigitalBankingSection />
      <CTASection variant="light" />
      <InsightsSection />
      <CaseStudiesSection />
      <Footer />
    </div>
  )
}

export default App
