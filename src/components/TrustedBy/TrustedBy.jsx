import './TrustedBy.scss'

const brands = [
  { name: 'SHELLS', icon: '/logo.png' },
  { name: 'SmartFinder', icon: '/logo (1).png' },
  { name: 'Zoomerr', icon: '/logo (2).png' },
  { name: 'ArtVenue', icon: '/logo (3).png' },
  { name: 'kontrastr', icon: '/logo (4).png' },
  { name: 'WAVESMARATHON', icon: '/logo (5).png' },
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
