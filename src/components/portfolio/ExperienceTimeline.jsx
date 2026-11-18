import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import Reveal from './Reveal'
import TracingBeam from './TracingBeam'
import { experience } from '../../data/portfolio'

function ExperienceTimeline() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-topline"><span>06 / EXPERIENCE</span><span>CAREER TIMELINE</span></div>
      <Reveal className="experience-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> PROFESSIONAL JOURNEY</p>
          <h2>Experience that<br /><em>keeps evolving.</em></h2>
        </div>
        <p className="section-intro">My work focuses on CI/CD, containerization, cloud infrastructure, and observability.</p>
      </Reveal>

      <TracingBeam className="experience-timeline">
        {experience.map((item, index) => (
          <Reveal className="experience-entry" key={`${item.period}-${item.role}`} delay={index * 0.06}>
            <div className="experience-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="experience-date"><CalendarDays size={13} /> {item.period}</div>
            <div className="experience-detail">
              <div className="experience-company"><BriefcaseBusiness size={15} /> {item.company}</div>
              <h3>{item.role}</h3>
              <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </TracingBeam>

    </section>
  )
}

export default ExperienceTimeline
