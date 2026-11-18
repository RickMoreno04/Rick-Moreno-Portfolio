import { ArrowDownRight, Braces, CircleDot, GitBranch, Layers3 } from 'lucide-react'
import Reveal from './Reveal'
import InfrastructureFlow from './InfrastructureFlow'
import { biography } from '../../data/portfolio'

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-topline"><span>02 / ABOUT</span><span>THE ENGINEER BEHIND THE SYSTEMS</span></div>
      <div className="about-layout">
        <div className="about-copy">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-line" /> ABOUT THE ENGINEER</p>
            <h2>Engineering reliability.<br /><em>Automating everything.</em></h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy">{biography}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="about-principles" aria-label="Areas of focus">
              <span><GitBranch size={15} /> AUTOMATION</span>
              <span><Layers3 size={15} /> INFRASTRUCTURE</span>
              <span><Braces size={15} /> DELIVERY</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <a className="text-link" href="#experience">Explore my experience <ArrowDownRight size={15} /></a>
          </Reveal>
        </div>
        <Reveal className="about-flow-column" delay={0.08}>
          <InfrastructureFlow />
        </Reveal>
      </div>
      <div className="about-bottomline"><span><CircleDot size={13} /> DEVOPS · CLOUD · DELIVERY</span><span>CODE → CLOUD</span></div>
    </section>
  )
}

export default AboutSection
