import { ArrowDown, ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { motion } from 'motion/react'
import HeroFlowField from './HeroFlowField'
import MagneticLink from './MagneticLink'
import { profile } from '../../data/portfolio'

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.2, 0.7, 0.25, 1] }}
      >
        <p className="eyebrow"><span className="eyebrow-line" /> DevOps engineer / Cloud / Automation</p>
        <h1>From code<br />to <span>confidence.</span></h1>
        <p className="hero-name">{profile.name} <span>— DEVOPS ENGINEER</span></p>
        <p className="hero-statement">{profile.statement}</p>
        <div className="hero-actions">
          <MagneticLink className="button-primary" href="#projects">Explore my work <ArrowRight size={16} /></MagneticLink>
          <a className="button button-quiet" href={profile.resume} download="Moreno_Rick_Lorin_Resume.pdf">
            <Download size={15} /> View résumé
          </a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <span>↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <span>↗</span></a>
        </div>
      </motion.div>
      <HeroFlowField />
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      <span className="hero-index">01 — 09</span>
    </section>
  )
}

export default HeroSection
