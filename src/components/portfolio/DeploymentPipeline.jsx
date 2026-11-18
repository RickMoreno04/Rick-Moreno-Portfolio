import { createRef, useEffect, useMemo, useRef, useState } from 'react'
import { Activity, Check, Code2, FlaskConical, Hammer, Package, Play, RotateCcw, Rocket } from 'lucide-react'
import Reveal from './Reveal'
import AnimatedBeam from './AnimatedBeam'

const stages = [
  { label: 'Code commit', icon: Code2, detail: 'A change enters version control.', log: 'commit received · main' },
  { label: 'Build', icon: Hammer, detail: 'The application is prepared for release.', log: 'build complete · artifact ready' },
  { label: 'Test', icon: FlaskConical, detail: 'Automated checks run against the change.', log: 'test suite passed · 0 failures' },
  { label: 'Containerize', icon: Package, detail: 'The application is packaged into an image.', log: 'container image packaged' },
  { label: 'Deploy', icon: Rocket, detail: 'The release moves to its target environment.', log: 'deployment step complete' },
  { label: 'Monitor', icon: Activity, detail: 'Metrics, logs, and traces inform operations.', log: 'observability checks connected' },
]

function DeploymentPipeline() {
  const [activeStage, setActiveStage] = useState(-1)
  const [running, setRunning] = useState(false)
  const [complete, setComplete] = useState(false)
  const pipelineRef = useRef(null)
  const stageRefs = useMemo(() => stages.map(() => createRef()), [])

  useEffect(() => {
    if (!running) return undefined
    const interval = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 320 : 620
    const timer = window.setTimeout(() => {
      if (activeStage >= stages.length - 1) {
        setRunning(false)
        setComplete(true)
      } else {
        setActiveStage((stage) => stage + 1)
      }
    }, interval)
    return () => window.clearTimeout(timer)
  }, [activeStage, running])

  const run = () => {
    if (running) return
    setActiveStage(0)
    setComplete(false)
    setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    setActiveStage(-1)
    setComplete(false)
  }

  const progress = complete ? 100 : Math.max(activeStage + 1, 0) / stages.length * 100
  const currentStage = activeStage >= 0 ? stages[activeStage] : null

  return (
    <section id="pipeline" className="section pipeline-section">
      <div className="section-topline"><span>04 / DELIVERY</span><span>SIMULATED · NO SYSTEM CONNECTION</span></div>
      <Reveal className="pipeline-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> INTERACTIVE DEMONSTRATION</p>
          <h2>From commit<br />to <em>production.</em></h2>
        </div>
        <div className="pipeline-action">
          <p>A release path, one stage at a time.</p>
          <div>
            <button className="button button-primary" type="button" onClick={run} disabled={running}>
              <Play size={14} fill="currentColor" /> {complete ? 'Run again' : running ? 'Running…' : 'Run deployment'}
            </button>
            {(complete || activeStage >= 0) && <button className="button button-quiet reset-button" type="button" onClick={reset}><RotateCcw size={14} /> Reset</button>}
          </div>
        </div>
      </Reveal>

      <Reveal className="pipeline-console" delay={0.08}>
        <div className="pipeline-stages" ref={pipelineRef} role="group" aria-label="Deployment stages in a local simulation">
          {stages.slice(0, -1).map((_, index) => (
            <AnimatedBeam
              key={`pipeline-beam-${index}`}
              containerRef={pipelineRef}
              fromRef={stageRefs[index]}
              toRef={stageRefs[index + 1]}
              active={complete || index < activeStage || running && activeStage === index}
              animating={running && activeStage === index}
              duration={0.55}
              className="pipeline-beam"
            />
          ))}
          {stages.map((stage, index) => {
            const Icon = stage.icon
            const isDone = complete || index < activeStage
            const isActive = index === activeStage && running
            return (
              <div className={`pipeline-stage ${isDone ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`} key={stage.label}>
                <div className="pipeline-stage-icon" ref={stageRefs[index]}>{isDone ? <Check size={17} /> : <Icon size={17} />}</div>
                <p>{stage.label}</p>
                <small>{isDone ? 'COMPLETE' : isActive ? 'IN PROGRESS' : `0${index + 1}`}</small>
              </div>
            )
          })}
        </div>
        <div className="pipeline-lower">
          <div className="pipeline-state">
            <span className={`state-indicator ${complete ? 'state-complete' : running ? 'state-running' : ''}`} />
            <div><small>PIPELINE STATE</small><strong>{complete ? 'Deployment successful' : running ? currentStage?.label : 'Ready to simulate'}</strong></div>
          </div>
          <div className="pipeline-progress-copy"><span>PROGRESS</span><strong>{Math.round(progress)}<sup>%</sup></strong></div>
        </div>
        <div className="pipeline-terminal" aria-live="polite" aria-atomic="true">
          <div className="mini-terminal-head"><span><i /><i /><i /></span><span>DEPLOYMENT OUTPUT / DEMO</span><span>LOCAL SIMULATION</span></div>
          <div className="mini-terminal-body">
            {!currentStage && !complete && <p><b>$</b> Waiting for a simulated deployment to start...</p>}
            {stages.slice(0, complete ? stages.length : running ? activeStage + 1 : 0).map((stage, index) => (
              <p key={stage.label} className={index === activeStage && running ? 'terminal-current' : ''}><b>{index === activeStage && running ? '›' : '✓'}</b> {stage.log}</p>
            ))}
            {complete && <p className="terminal-success"><b>✓</b> Demo complete · No production systems were contacted.</p>}
          </div>
        </div>
        <p className="simulation-note">This is an interactive demonstration of a delivery pipeline. It does not run commands, connect to infrastructure, or deploy software.</p>
      </Reveal>
    </section>
  )
}

export default DeploymentPipeline
