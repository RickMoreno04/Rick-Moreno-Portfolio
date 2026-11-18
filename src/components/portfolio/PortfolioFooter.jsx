import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'

function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-mark" href="#home">RM<span> / {new Date().getFullYear()}</span></a>
        <p>Built with care. Designed for the path from code to cloud.</p>
        <div className="footer-links" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email Rick Moreno"><Mail size={16} /></a>
          <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </footer>
  )
}

export default PortfolioFooter
