import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

const systems = [
  { id: 'source', label: 'SOURCE', tool: 'Git', detail: 'Version control gives each change a clear history and a reliable starting point.', x: 14, y: 70 },
  { id: 'delivery', label: 'DELIVERY', tool: 'GitHub Actions', detail: 'Automated checks and release workflows carry validated changes forward.', x: 32, y: 42 },
  { id: 'containers', label: 'CONTAINERS', tool: 'Docker', detail: 'Container images package applications for consistent deployment.', x: 52, y: 62 },
  { id: 'cloud', label: 'CLOUD', tool: 'AWS', detail: 'Cloud infrastructure hosts applications and supports dependable releases.', x: 72, y: 38 },
  { id: 'signals', label: 'OBSERVABILITY', tool: 'Grafana', detail: 'Metrics, logs, and traces make system behavior visible after deployment.', x: 86, y: 68 },
]

function InfrastructureFlow() {
  const [activeId, setActiveId] = useState('delivery')
  const shouldReduceMotion = useReducedMotion()
  const active = systems.find((system) => system.id === activeId) ?? systems[0]

  return (
    <div className="infra-flow" role="group" aria-label="Interactive infrastructure flow. Select a stage to see how systems connect from source to observability.">
      <div className="infra-flow-label"><span>01 / DISTRIBUTED SYSTEMS</span><span>PROCESS MODEL</span></div>
      <div className="infra-flow-art">
        <svg className="infra-flow-svg" viewBox="0 0 600 430" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="infra-flow-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.12" />
              <stop offset="55%" stopColor="#00ff9d" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.18" />
            </linearGradient>
            <filter id="infra-flow-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <path className="infra-flow-trail infra-flow-trail-back" d="M 18 347 C 112 352 115 186 190 162 C 254 140 261 308 318 280 C 390 245 395 146 438 151 C 500 159 509 348 585 311" />
          <path className="infra-flow-trail infra-flow-trail-front" d="M 18 320 C 100 320 120 130 180 180 C 240 230 263 302 315 267 C 374 227 401 113 438 163 C 478 218 511 329 580 300" />
          <path className="infra-flow-glow" d="M 18 320 C 100 320 120 130 180 180 C 240 230 263 302 315 267 C 374 227 401 113 438 163 C 478 218 511 329 580 300" />
          <path className="infra-flow-pulse" d="M 18 320 C 100 320 120 130 180 180 C 240 230 263 302 315 267 C 374 227 401 113 438 163 C 478 218 511 329 580 300" />
          {!shouldReduceMotion && (
            <>
              <circle className="infra-flow-packet" r="3.5">
                <animateMotion dur="8s" repeatCount="indefinite" path="M 18 320 C 100 320 120 130 180 180 C 240 230 263 302 315 267 C 374 227 401 113 438 163 C 478 218 511 329 580 300" />
              </circle>
              <circle className="infra-flow-packet infra-flow-packet-secondary" r="2">
                <animateMotion dur="8s" begin="-4s" repeatCount="indefinite" path="M 18 320 C 100 320 120 130 180 180 C 240 230 263 302 315 267 C 374 227 401 113 438 163 C 478 218 511 329 580 300" />
              </circle>
            </>
          )}
        </svg>
        {systems.map((system, index) => (
          <motion.button
            key={system.id}
            type="button"
            className={`infra-flow-node ${activeId === system.id ? 'is-active' : ''}`}
            style={{ left: `${system.x}%`, top: `${system.y}%` }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: activeId === system.id ? 1.04 : 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32, delay: shouldReduceMotion ? 0 : index * 0.06 }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.07 }}
            aria-pressed={activeId === system.id}
            onPointerEnter={() => setActiveId(system.id)}
            onFocus={() => setActiveId(system.id)}
            onClick={() => setActiveId(system.id)}
          >
            <span className="infra-flow-node-dot"><i /></span>
            <span className="infra-flow-node-text"><small>0{index + 1} / {system.label}</small><strong>{system.tool}</strong></span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="infra-flow-detail"
          aria-live="polite"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 7 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -5 }}
          transition={{ duration: 0.22 }}
        >
          <span>0{systems.indexOf(active) + 1} / {active.label}</span>
          <p>{active.detail}</p>
        </motion.div>
      </AnimatePresence>
      <p className="infra-flow-note"><i /> Cloud infrastructure · delivery · observability</p>
    </div>
  )
}

export default InfrastructureFlow
