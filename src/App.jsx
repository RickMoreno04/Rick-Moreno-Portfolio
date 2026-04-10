import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import DashboardSection from './components/sections/DashboardSection'
import PipelineSection from './components/sections/PipelineSection'
import InfrastructureSection from './components/sections/InfrastructureSection'
import ContactSection from './components/sections/ContactSection'
import RequirementsPage from './pages/RequirementsPage'

function MainPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <HeroSection />
        <SkillsSection />
        <PipelineSection />
        <ProjectsSection />
        <DashboardSection />
        <ExperienceSection />
        <InfrastructureSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-surface text-slate-200">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-neon-blue/6 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-neon-purple/6 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-neon-green/4 blur-[100px]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/requirements" element={<RequirementsPage />} />
      </Routes>
    </div>
  )
}

export default App
