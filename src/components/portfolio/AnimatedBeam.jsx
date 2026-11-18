import { useEffect, useId, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'motion/react'

// Adapted from Magic UI's Animated Beam: ref-measured SVG paths with an animated gradient.
function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  active = false,
  animating = active,
  duration = 2.8,
  curvature = 0,
  className = '',
}) {
  const generatedId = useId().replaceAll(':', '')
  const reducedMotion = useReducedMotion()
  const [inView, setInView] = useState(() => typeof window === 'undefined' || !('IntersectionObserver' in window))
  const [path, setPath] = useState('')
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [vertical, setVertical] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '60px', threshold: 0.01 })
    observer.observe(container)
    return () => observer.disconnect()
  }, [containerRef])

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current
      const from = fromRef.current
      const to = toRef.current
      if (!container || !from || !to) return

      const containerRect = container.getBoundingClientRect()
      const fromRect = from.getBoundingClientRect()
      const toRect = to.getBoundingClientRect()
      const width = containerRect.width
      const height = containerRect.height
      const startX = fromRect.left - containerRect.left + fromRect.width / 2
      const startY = fromRect.top - containerRect.top + fromRect.height / 2
      const endX = toRect.left - containerRect.left + toRect.width / 2
      const endY = toRect.top - containerRect.top + toRect.height / 2

      setSize((current) => current.width === width && current.height === height ? current : { width, height })
      setVertical(Math.abs(endY - startY) > Math.abs(endX - startX))
      setPath(`M ${startX},${startY} Q ${(startX + endX) / 2},${startY - curvature} ${endX},${endY}`)
    }

    const elements = [containerRef.current, fromRef.current, toRef.current].filter(Boolean)
    if (!elements.length) return undefined

    updatePath()
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(updatePath) : null
    elements.forEach((element) => observer?.observe(element))
    window.addEventListener('resize', updatePath)
    const frame = window.requestAnimationFrame(updatePath)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updatePath)
      window.cancelAnimationFrame(frame)
    }
  }, [containerRef, fromRef, toRef, curvature])

  if (!path || !size.width || !size.height) return null
  const shouldAnimate = animating && inView && !reducedMotion

  return (
    <svg
      className={`animated-beam ${className}`}
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      fill="none"
      aria-hidden="true"
    >
      <path d={path} className="animated-beam-track" />
      {active && <path d={path} className={`animated-beam-active ${shouldAnimate ? '' : 'is-static'}`} stroke={`url(#beam-${generatedId})`} />}
      {active && (
        <defs>
          {shouldAnimate ? (
            <Motion.linearGradient
              id={`beam-${generatedId}`}
              gradientUnits="userSpaceOnUse"
              initial={{ x1: '10%', x2: '0%', y1: '0%', y2: '0%' }}
              animate={vertical
                ? { x1: ['0%', '0%'], x2: ['0%', '0%'], y1: ['10%', '110%'], y2: ['0%', '100%'] }
                : { x1: ['10%', '110%'], x2: ['0%', '100%'], y1: ['0%', '0%'], y2: ['0%', '0%'] }}
              transition={{ duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatDelay: 0.4 }}
            >
              <stop stopColor="#00ff9d" stopOpacity="0" />
              <stop offset="48%" stopColor="#00ff9d" />
              <stop offset="100%" stopColor="#00ff9d" stopOpacity="0" />
            </Motion.linearGradient>
          ) : (
            <linearGradient id={`beam-${generatedId}`} x1="0%" x2="100%" y1="0%" y2="0%">
              <stop stopColor="#00ff9d" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#00ff9d" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.12" />
            </linearGradient>
          )}
        </defs>
      )}
    </svg>
  )
}

export default AnimatedBeam
