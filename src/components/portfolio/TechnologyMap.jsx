import { createRef, useMemo, useRef, useState } from 'react'
import { Activity, ArrowUpRight, Box, Cloud, GitBranch, GitFork, Layers3, Network, ShieldCheck, Terminal } from 'lucide-react'
import Reveal from './Reveal'
import AnimatedBeam from './AnimatedBeam'
import { skills } from '../../data/portfolio'

const skillIcons = {
  cloud: Cloud,
  containers: Box,
  cicd: GitBranch,
  iac: Layers3,
  observability: Activity,
  scripting: Terminal,
  'version-control': GitFork,
  security: ShieldCheck,
}

function TechnologyMap() {
  const [activeId, setActiveId] = useState('cloud')
  const activeSkill = skills.find((skill) => skill.id === activeId) ?? skills[0]
  const mapSkills = skills
  const mapRef = useRef(null)
  const coreRef = useRef(null)
  const nodeRefs = useMemo(() => Object.fromEntries(mapSkills.map((skill) => [skill.id, createRef()])), [mapSkills])

  return (
    <section id="stack" className="section stack-section">
      <div className="section-topline"><span>03 / TOOLCHAIN</span><span>VERIFIED IN THE CURRENT PORTFOLIO</span></div>
      <Reveal className="section-heading-row">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> INFRASTRUCTURE MAP</p>
          <h2>A connected<br /><em>toolchain.</em></h2>
        </div>
        <p className="section-intro">Select a system to see where it fits and how it appears in my work. Every technology here comes from the existing portfolio.</p>
      </Reveal>

      <Reveal className="skill-explorer" delay={0.06}>
        <div className="skill-map-panel">
          <div className="map-caption"><Network size={13} /> INFRASTRUCTURE / RELATIONSHIP MAP</div>
          <div className="skill-map" ref={mapRef} role="group" aria-label="Interactive infrastructure technology map">
            {mapSkills.map((skill) => (
              <AnimatedBeam key={skill.id} containerRef={mapRef} fromRef={coreRef} toRef={nodeRefs[skill.id]} active={activeId === skill.id} animating={activeId === skill.id} duration={3.8} />
            ))}
            <div className="map-core" ref={coreRef} aria-hidden="true"><span className="map-core-orbit" /><span>DEVOPS<br />CORE</span></div>
            {mapSkills.map((skill) => {
              const Icon = skillIcons[skill.id]
              return (
                <button
                  key={skill.id}
                  ref={nodeRefs[skill.id]}
                  type="button"
                  className={`skill-map-node ${activeId === skill.id ? 'is-active' : ''}`}
                  style={{ left: `${skill.position[0]}%`, top: `${skill.position[1]}%` }}
                  aria-pressed={activeId === skill.id}
                  onMouseEnter={() => setActiveId(skill.id)}
                  onFocus={() => setActiveId(skill.id)}
                  onClick={() => setActiveId(skill.id)}
                >
                  <Icon className="skill-node-icon" size={13} aria-hidden="true" />
                  <span>{skill.label}</span>
                  <small>{skill.name}</small>
                </button>
              )
            })}
          </div>
          <div className="map-legend"><span><i /> DOCUMENTED TOOL</span><span>SELECT A NODE TO INSPECT</span></div>
        </div>
        <aside className="skill-detail" aria-live="polite">
          <div className="detail-number">SYSTEM 0{skills.indexOf(activeSkill) + 1}</div>
          <p className="detail-category">{activeSkill.name}</p>
          <h3>{activeSkill.label}</h3>
          <p>{activeSkill.detail}</p>
          <div className="tool-list" aria-label={`${activeSkill.name} technologies`}>
            {activeSkill.tools.length ? activeSkill.tools.map((tool) => <span key={tool}>{tool}</span>) : <span className="tool-empty">No tools documented</span>}
          </div>
          <a className="text-link" href="#projects">See related work <ArrowUpRight size={15} /></a>
        </aside>
      </Reveal>

      <div className="skill-list-mobile" aria-label="Technology categories">
        {skills.map((skill) => (
          <details key={skill.id} className="skill-list-item">
            <summary><span className="skill-node-mark" />{skill.name}<span className="skill-list-count">{skill.tools.length ? skill.tools.length.toString().padStart(2, '0') : '—'}</span></summary>
            <div className="skill-list-body">
              <p>{skill.detail}</p>
              <div className="tool-list">{skill.tools.length ? skill.tools.map((tool) => <span key={tool}>{tool}</span>) : <span className="tool-empty">No tools documented</span>}</div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default TechnologyMap
