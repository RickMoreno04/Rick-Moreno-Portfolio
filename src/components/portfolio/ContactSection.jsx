import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../../data/portfolio'

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-topline"><span>09 / CONTACT</span><span>OPEN CHANNEL</span></div>
      <Reveal className="contact-main">
        <p className="eyebrow"><span className="eyebrow-line" /> NEXT DEPLOYMENT</p>
        <h2>Let’s build<br />something <em>reliable.</em></h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} /></a>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={15} /> Start a conversation</a>
          <a className="button button-quiet" href={profile.resume} download="Moreno_Rick_Lorin_Resume.pdf"><Download size={15} /> Download résumé</a>
        </div>
      </Reveal>
      <div className="contact-network" aria-hidden="true">
        <svg viewBox="0 0 1200 180" preserveAspectRatio="none">
          <path d="M0 90 H240 L300 30 H530 L590 90 H810 L870 145 H1200" />
          <path d="M0 90 H240 L300 150 H530 L590 90 H810 L870 35 H1200" />
          {[240, 300, 530, 590, 810, 870].map((x, index) => <circle key={x} cx={x} cy={[90, 30, 150, 90, 90, 145][index]} r="4" />)}
        </svg>
      </div>
      <div className="contact-socials">
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
        <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={13} /></a>
        <a className="contact-scroll" href="#home">Back to top <ArrowUpRight size={14} /></a>
      </div>
    </section>
  )
}

export default ContactSection
