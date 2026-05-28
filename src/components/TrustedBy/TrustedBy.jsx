import './TrustedBy.scss'

const brands = [
  { name: 'SHELLS', icon: '/logo (2).svg' },
  { name: 'SmartFinder', icon: '/logo (3).svg' },
  { name: 'Zoomerr', icon: '/logo (4).svg' },
  { name: 'ArtVenue', icon: '/logo (5).svg' },
  { name: 'kontrastr', icon: '/logo (6).svg' },
  { name: 'WAVESMARATHON', icon: '/logo (7).svg' },
]

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="trusted-inner fade-in visible">
        <span className="trusted-label">Trusted By:</span>
        <div className="trusted-logos">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-item">
              <img src={brand.icon} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
