import { MotionConfig } from 'motion/react'
import './App.css'
import AboutSection from './components/portfolio/AboutSection'
import ContactSection from './components/portfolio/ContactSection'
import CredentialsSection from './components/portfolio/CredentialsSection'
import DeploymentPipeline from './components/portfolio/DeploymentPipeline'
import EngineerTerminal from './components/portfolio/EngineerTerminal'
import ExperienceTimeline from './components/portfolio/ExperienceTimeline'
import HeroSection from './components/portfolio/HeroSection'
import PortfolioFooter from './components/portfolio/PortfolioFooter'
import PortfolioHeader from './components/portfolio/PortfolioHeader'
import ProjectShowcase from './components/portfolio/ProjectShowcase'
import TechnologyMap from './components/portfolio/TechnologyMap'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-app">
        <PortfolioHeader />
        <main id="main">
          <HeroSection />
          <AboutSection />
          <TechnologyMap />
          <DeploymentPipeline />
          <ProjectShowcase />
          <ExperienceTimeline />
          <CredentialsSection />
          <EngineerTerminal />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </div>
    </MotionConfig>
  )
}

export default App
