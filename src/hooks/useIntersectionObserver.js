import { useEffect } from 'react'

export function useIntersectionObserver(refs) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const elements = Array.isArray(refs) ? refs : [refs]
    elements.forEach(ref => { if (ref?.current) observer.observe(ref.current) })
    return () => observer.disconnect()
  }, [])
}
