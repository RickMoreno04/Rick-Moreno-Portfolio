import { useState } from 'react'
import { motion as Motion, useReducedMotion } from 'motion/react'

// Perspective and pin treatment adapted from Aceternity UI's 3D Pin.
function PinContainer({ children, title }) {
  const [hovered, setHovered] = useState(false)
  const reducedMotion = useReducedMotion()

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse' && !reducedMotion) setHovered(true)
  }

  const clearHover = () => setHovered(false)
  const transition = { type: 'spring', stiffness: 180, damping: 22, mass: 0.7 }

  return (
    <div className="pin-container" onPointerEnter={handlePointerEnter} onPointerLeave={clearHover} onPointerCancel={clearHover}>
      <div className="pin-perspective">
        <Motion.div
          className="pin-card-surface"
          animate={hovered && !reducedMotion ? { rotateX: 2.5, rotateY: -1.5, y: -3, scale: 1.008 } : { rotateX: 0, rotateY: 0, y: 0, scale: 1 }}
          transition={transition}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </Motion.div>
        <div className={`pin-connection ${hovered && !reducedMotion ? 'is-active' : ''}`} aria-hidden="true">
          <span className="pin-line" />
          <span className="pin-tip" />
          {hovered && !reducedMotion && <span className="pin-ripples"><i /><i /><i /></span>}
        </div>
      </div>
      <Motion.span className="pin-title" animate={{ opacity: hovered && !reducedMotion ? 1 : 0, y: hovered && !reducedMotion ? 0 : 5 }} aria-hidden="true">
        {title}
      </Motion.span>
    </div>
  )
}

export default PinContainer
