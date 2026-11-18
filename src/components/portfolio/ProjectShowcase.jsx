import { ArrowUpRight, GitFork } from 'lucide-react'
import Reveal from './Reveal'
import PinContainer from './PinContainer'
import { profile, projects } from '../../data/portfolio'

function ProjectDiagram({ project }) {
  const nodes = project.diagram
  const xPositions = [10, 164, 318, 472]
  return (
    <div className="project-art" role="img" aria-label={`Conceptual architecture illustration for ${project.title}`}>
      <div className="project-art-label"><span>CONCEPT / {project.number}</span><span>ARCHITECTURE STUDY</span></div>
      <svg viewBox="0 0 610 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id={`grid-${project.number}`} width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M 26 0 L 0 0 0 26" fill="none" stroke="#353a37" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="610" height="250" fill={`url(#grid-${project.number})`} opacity=".5" />
        <path className="diagram-orbit" d="M40 190 C150 24 450 24 570 190" fill="none" stroke="#68716b" strokeWidth=".8" strokeDasharray="3 8" />
        {nodes.slice(0, 3).map((_, index) => (
          <g key={`line-${project.number}-${index}`}>
            <line x1={xPositions[index] + 118} y1="125" x2={xPositions[index + 1]} y2="125" stroke="#626b65" strokeWidth="1" />
            <circle className="diagram-packet" cx={xPositions[index] + 118} cy="125" r="3" style={{ animationDelay: `${index * 0.4}s` }} />
          </g>
        ))}
        {nodes.map((node, index) => (
          <g className={`diagram-node ${index === nodes.length - 1 ? 'diagram-node-accent' : ''}`} key={`${project.number}-${node}`}>
            <rect x={xPositions[index]} y="96" width="118" height="58" rx="1" />
            <circle cx={xPositions[index] + 13} cy="109" r="2.5" />
            <text x={xPositions[index] + 59} y="130" textAnchor="middle">{node}</text>
          </g>
        ))}
        <text className="diagram-index" x="24" y="224">FLOW / 0{project.number.slice(1)}</text>
        <text className="diagram-index" x="588" y="224" textAnchor="end">CONCEPTUAL</text>
      </svg>
      <div className="project-art-bottom"><span>DEPENDENCY FLOW</span><span>ILLUSTRATIVE · NOT A SCREENSHOT</span></div>
    </div>
  )
}

function ProjectShowcase() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-topline"><span>05 / SELECTED WORK</span><span>PROJECT DETAILS FROM THE PORTFOLIO</span></div>
      <Reveal className="projects-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> SELECTED DEPLOYMENTS</p>
          <h2>Systems built<br /><em>to move.</em></h2>
        </div>
        <p className="section-intro">A look at the delivery, testing, and observability work documented in my portfolio. Diagrams are conceptual illustrations; no project screenshots were supplied.</p>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal className={`project-row ${index % 2 ? 'project-row-reverse' : ''}`} key={project.number} delay={Math.min(index % 2, 1) * 0.08}>
            <PinContainer title={project.title}>
              <ProjectDiagram project={project} />
            </PinContainer>
            <div className="project-copy">
              <div className="project-meta"><span>{project.number} / {project.category}</span><span>PROJECT</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack" aria-label="Technology stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-actions">
                <a href={profile.github} target="_blank" rel="noreferrer">Browse GitHub profile <ArrowUpRight size={14} /></a>
                <span><GitFork size={13} /> PROJECT OVERVIEW</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
