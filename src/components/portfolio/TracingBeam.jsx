import { useEffect, useId, useRef, useState } from 'react'
import { motion as Motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'

// Adapted from Aceternity UI's scroll-linked Tracing Beam.
function TracingBeam({ children, className = '' }) {
  const rootRef = useRef(null)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)
  const generatedId = useId().replaceAll(':', '')
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start 75%', 'end 35%'] })
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, height]), { stiffness: 500, damping: 90 })
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [18, Math.max(height, 18)]), { stiffness: 500, damping: 90 })

  useEffect(() => {
    const content = contentRef.current
    if (!content) return undefined
    const measure = () => setHeight(content.offsetHeight)
    measure()
    if (typeof ResizeObserver !== 'function') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(content)
    return () => observer.disconnect()
  }, [])

  const beamPath = height > 0 ? `M 12 0 V 22 l 3 8 V ${Math.max(30, height * 0.8)} l -3 8 V ${height}` : ''

  return (
    <div ref={rootRef} className={`tracing-beam ${className}`}>
      {height > 0 && (
        <svg className="tracing-beam-svg" width="28" height={height} viewBox={`0 0 28 ${height}`} fill="none" aria-hidden="true">
          <path d={beamPath} className="tracing-beam-track" />
          <Motion.path d={beamPath} stroke={`url(#trace-${generatedId})`} strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <defs>
            {reducedMotion ? (
              <linearGradient id={`trace-${generatedId}`} x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
                <stop stopColor="#00ff9d" stopOpacity=".1" />
                <stop offset="1" stopColor="#00ff9d" stopOpacity=".4" />
              </linearGradient>
            ) : (
              <Motion.linearGradient id={`trace-${generatedId}`} x1="0" x2="0" y1={y1} y2={y2} gradientUnits="userSpaceOnUse">
                <stop stopColor="#00ff9d" stopOpacity="0" />
                <stop offset=".42" stopColor="#00ff9d" />
                <stop offset="1" stopColor="#00ff9d" stopOpacity="0" />
              </Motion.linearGradient>
            )}
          </defs>
        </svg>
      )}
      <div className="tracing-beam-content" ref={contentRef}>{children}</div>
    </div>
  )
}

export default TracingBeam
