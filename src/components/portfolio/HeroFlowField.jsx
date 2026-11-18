import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useState } from 'react'

const stages = [
  { id: 'source', label: 'SOURCE', tool: 'Git', detail: 'A clear change starts the delivery path.', x: 10, y: 78 },
  { id: 'build', label: 'BUILD', tool: 'Actions', detail: 'Automated checks turn each change into a release candidate.', x: 31, y: 49 },
  { id: 'package', label: 'PACKAGE', tool: 'Docker', detail: 'A repeatable image keeps environments consistent.', x: 53, y: 62 },
  { id: 'deploy', label: 'DEPLOY', tool: 'AWS', detail: 'The release moves into a dependable cloud runtime.', x: 75, y: 45 },
  { id: 'observe', label: 'OBSERVE', tool: 'Grafana', detail: 'Signals from the system guide the next improvement.', x: 91, y: 24 },
]

function HeroFlowField() {
  const [activeId, setActiveId] = useState('build')
  const shouldReduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.7 })
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.7 })
  const active = stages.find((stage) => stage.id === activeId) ?? stages[0]

  const moveWithPointer = (event) => {
    if (shouldReduceMotion || event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      className="hero-flow"
      role="group"
      aria-label="Interactive delivery flow. Select a stage to learn how code moves into production."
      onPointerMove={moveWithPointer}
      onPointerLeave={resetPointer}
    >
      <div className="hero-flow-heading"><span>CODE → CLOUD</span><span><i /> DELIVERY IN MOTION</span></div>
      <motion.div className="hero-flow-art" style={{ x: smoothX, y: smoothY }}>
        <svg className="hero-flow-svg" viewBox="0 0 700 500" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="hero-flow-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#00ff9d" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#a6ffd8" stopOpacity="0.2" />
            </linearGradient>
            <filter id="hero-flow-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <path className="hero-flow-trail hero-flow-trail-back" d="M 25 435 C 130 435 125 290 220 243 C 308 198 315 330 382 310 C 461 287 466 214 522 224 C 598 238 600 129 680 104" />
          <path className="hero-flow-trail hero-flow-trail-front" d="M 38 390 C 120 390 128 243 220 243 C 296 243 300 310 372 310 C 444 310 465 218 522 224 C 586 230 598 125 667 118" />
          <path className="hero-flow-glow" d="M 38 390 C 120 390 128 243 220 243 C 296 243 300 310 372 310 C 444 310 465 218 522 224 C 586 230 598 125 667 118" />
          <path className="hero-flow-pulse" d="M 38 390 C 120 390 128 243 220 243 C 296 243 300 310 372 310 C 444 310 465 218 522 224 C 586 230 598 125 667 118" />
          {!shouldReduceMotion && (
            <>
              <circle className="hero-flow-packet" r="4">
                <animateMotion dur="7s" repeatCount="indefinite" path="M 38 390 C 120 390 128 243 220 243 C 296 243 300 310 372 310 C 444 310 465 218 522 224 C 586 230 598 125 667 118" />
              </circle>
              <circle className="hero-flow-packet hero-flow-packet-secondary" r="2.5">
                <animateMotion dur="7s" begin="-3.5s" repeatCount="indefinite" path="M 38 390 C 120 390 128 243 220 243 C 296 243 300 310 372 310 C 444 310 465 218 522 224 C 586 230 598 125 667 118" />
              </circle>
            </>
          )}
        </svg>

        {stages.map((stage, index) => (
          <motion.button
            key={stage.id}
            type="button"
            className={`hero-flow-node ${activeId === stage.id ? 'is-active' : ''}`}
            style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.14 + index * 0.11, type: 'spring', stiffness: 180, damping: 20 }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            aria-pressed={activeId === stage.id}
            onPointerEnter={() => setActiveId(stage.id)}
            onFocus={() => setActiveId(stage.id)}
            onClick={() => setActiveId(stage.id)}
          >
            <span className="hero-flow-node-mark"><i /></span>
            <span className="hero-flow-node-copy"><small>0{index + 1} / {stage.label}</small><strong>{stage.tool}</strong></span>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="hero-flow-detail"
          aria-live="polite"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.24 }}
        >
          <span>0{stages.indexOf(active) + 1} / {active.label}</span>
          <p>{active.detail}</p>
          <small>SELECT A STAGE TO FOLLOW THE FLOW</small>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroFlowField
