import { ArrowUpRight, Award, BadgeCheck, BookOpen } from 'lucide-react'
import Reveal from './Reveal'
import { certifications, learningFocus } from '../../data/portfolio'

function CredentialsSection() {
  return (
    <section id="certifications" className="section credentials-section">
      <div className="section-topline"><span>07 / CREDENTIALS</span><span>CERTIFICATION & DEVELOPMENT</span></div>
      <Reveal className="credentials-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> CERTIFICATIONS & LEARNING</p>
          <h2>Credentials earned.<br /><em>Always learning.</em></h2>
        </div>
        <p className="section-intro">AWS Certified Cloud Practitioner, alongside the next skills and certifications I’m pursuing.</p>
      </Reveal>
      <Reveal className="earned-credentials" delay={0.04}>
        <div className="credentials-panel-head"><span><BadgeCheck size={15} /> EARNED CERTIFICATION</span><span>AMAZON WEB SERVICES</span></div>
        {certifications.map((certification) => (
          <article className="earned-credential" key={certification.title}>
            <span className="earned-credential-icon"><Award size={21} /></span>
            <div className="earned-credential-copy">
              <p>{certification.issuer}</p>
              <h3>{certification.title}</h3>
              <span className="earned-credential-label"><i /> CERTIFIED</span>
            </div>
            {certification.credlyUrl && (
              <a className="credly-link" href={certification.credlyUrl} target="_blank" rel="noreferrer">
                View Credly badge <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </Reveal>
      <Reveal className="credentials-panel" delay={0.06}>
        <div className="credentials-panel-head"><span><BookOpen size={15} /> CURRENT LEARNING</span><span>IN PROGRESS & PLANNED</span></div>
        <div className="credentials-list">
          {learningFocus.map((item) => (
            <div className="credential-row" key={item.title}>
              <span className="credential-icon"><BookOpen size={15} /></span>
              <span className="credential-name">{item.title}</span>
              <span className="credential-status">{item.status}</span>
            </div>
          ))}
        </div>
        <p className="credentials-note">Learning plans reflect my current professional development focus.</p>
      </Reveal>
    </section>
  )
}

export default CredentialsSection
