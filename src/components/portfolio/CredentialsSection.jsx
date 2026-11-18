import { Award, BookOpen } from 'lucide-react'
import Reveal from './Reveal'
import { learningFocus } from '../../data/portfolio'

function CredentialsSection() {
  return (
    <section id="certifications" className="section credentials-section">
      <div className="section-topline"><span>07 / CREDENTIALS</span><span>LEARNING & DEVELOPMENT</span></div>
      <Reveal className="credentials-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> CERTIFICATIONS & LEARNING</p>
          <h2>Building toward<br /><em>the next milestone.</em></h2>
        </div>
        <p className="section-intro">The existing portfolio lists these learning paths. It contains no completed certificate images or verification links yet.</p>
      </Reveal>
      <Reveal className="credentials-panel" delay={0.06}>
        <div className="credentials-panel-head"><span><Award size={15} /> CURRENT LEARNING</span><span>SELF-REPORTED STATUS FROM EXISTING SITE</span></div>
        <div className="credentials-list">
          {learningFocus.map((item) => (
            <div className="credential-row" key={item.title}>
              <span className="credential-icon"><BookOpen size={15} /></span>
              <span className="credential-name">{item.title}</span>
              <span className="credential-status">{item.status}</span>
            </div>
          ))}
        </div>
        <p className="credentials-note">Completed certifications will need their original assets or verification URLs before they can be shown here.</p>
      </Reveal>
    </section>
  )
}

export default CredentialsSection
