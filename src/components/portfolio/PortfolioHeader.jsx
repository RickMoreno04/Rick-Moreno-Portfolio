import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Stack', '#stack'],
  ['Work', '#projects'],
  ['Experience', '#experience'],
  ['Terminal', '#terminal'],
]

function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Rick Lorin Moreno, home" onClick={closeMenu}>
          <span className="wordmark-mark">RM</span>
          <span className="wordmark-name">RICK MORENO<span>DEVOPS ENGINEER</span></span>
        </a>
        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
    </>
  )
}

export default PortfolioHeader
