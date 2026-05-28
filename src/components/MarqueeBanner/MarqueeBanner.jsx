import './MarqueeBanner.scss'

const tickerContent = [
  { text: 'N7', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
  { text: 'Say 👋 to the new way of banking', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
  { text: 'CB7', type: 'blue' },
  { text: ' ✦ ', type: 'star' },
  { text: 'Say 👋 to the new way of banking', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
  { text: 'N7', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
  { text: 'Say 👋 to the new way of banking', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
  { text: 'CB7', type: 'blue' },
  { text: ' ✦ ', type: 'star' },
  { text: 'Say 👋 to the new way of banking', type: 'normal' },
  { text: ' ✦ ', type: 'star' },
]

const typeToClass = { blue: 'marquee-blue', star: 'marquee-star', normal: 'marquee-text' }

export default function MarqueeBanner() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {[...tickerContent, ...tickerContent].map((item, i) => (
            <span key={i} className={`marquee-item ${typeToClass[item.type]}`}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
