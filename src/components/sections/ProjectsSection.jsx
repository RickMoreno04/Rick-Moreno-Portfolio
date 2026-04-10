import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Globe, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const projects = [
    {
        title: 'CI/CD Pipeline Automation',
        category: 'DevOps',
        description: 'Production-grade GitHub Actions workflow with multi-stage build, test, security scan, and deployment to AWS ECS.',
        stack: ['GitHub Actions', 'Docker', 'AWS ECS', 'YAML'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
    {
        title: 'Dockerized Web App Deployment',
        category: 'DevOps',
        description: 'Multi-container application with Docker Compose, Nginx reverse proxy, health checks, and automated image builds.',
        stack: ['Docker', 'Nginx', 'Docker Compose', 'AWS'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
    {
        title: 'Monitoring Stack Setup',
        category: 'Monitoring',
        description: 'Full observability stack with Grafana dashboards, Prometheus metrics, Loki log aggregation, and Tempo distributed tracing.',
        stack: ['Grafana', 'Prometheus', 'Loki', 'Tempo'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
    {
        title: 'Security Scanning Pipeline',
        category: 'Security',
        description: 'Pre-commit hooks with secret detection, code quality checks, and vulnerability scanning integrated into CI pipeline.',
        stack: ['Pre-commit', 'Gitleaks', 'GitHub Actions'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
    {
        title: 'Selenium QA Automation Suite',
        category: 'QA',
        description: 'Automated regression and smoke testing framework with Selenium, integrated into CI pipelines for reliable release cycles.',
        stack: ['Selenium', 'Python', 'GitHub Actions'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
    {
        title: 'Laravel Capstone System',
        category: 'Web',
        description: 'Full-stack academic platform with role-based access control, CRUD modules, and automated reporting.',
        stack: ['Laravel', 'MySQL', 'Docker', 'GitHub Actions'],
        pipelineStatus: 'passing',
        github: 'https://github.com/RickMoreno04',
        demo: '#',
    },
]

const filters = ['All', 'DevOps', 'Monitoring', 'Security', 'QA', 'Web']

const statusConfig = {
    passing: { icon: CheckCircle2, label: 'Pipeline Passing', color: 'text-neon-green', bg: 'bg-neon-green/10', border: 'border-neon-green/30' },
    building: { icon: Clock, label: 'Building', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
    failed: { icon: AlertCircle, label: 'Failed', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
}

function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects
        return projects.filter((p) => p.category === activeFilter)
    }, [activeFilter])

    return (
        <section id="projects" className="py-20">
            <SectionHeading
                label="Projects"
                title="Production Deployments"
                subtitle="Real-world DevOps projects showcasing automation, monitoring, and cloud infrastructure."
            />

            <div className="mb-8 flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            'rounded-lg border px-4 py-2 font-mono text-xs transition-all cursor-pointer',
                            activeFilter === filter
                                ? 'border-neon-blue bg-neon-blue/10 text-neon-blue shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                                : 'border-slate-700 bg-surface-card text-slate-400 hover:border-neon-blue/50 hover:text-neon-blue',
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {filteredProjects.map((project, idx) => {
                    const status = statusConfig[project.pipelineStatus]
                    const StatusIcon = status.icon

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: idx * 0.08 }}
                            layout
                        >
                            <Card className="group h-full hover:-translate-y-1 hover:border-neon-blue/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-neon-blue">{project.category}</span>
                                        {/* Pipeline status badge */}
                                        <div className={cn('flex items-center gap-1.5 rounded-full border px-2.5 py-1', status.border, status.bg)}>
                                            <StatusIcon size={12} className={status.color} />
                                            <span className={cn('font-mono text-[10px]', status.color)}>{status.label}</span>
                                        </div>
                                    </div>
                                    <CardTitle className="mt-2">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md border border-slate-700/60 bg-surface/80 px-2 py-1 font-mono text-[10px] text-slate-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a href={project.demo} target="_blank" rel="noreferrer">
                                            <Button size="sm">
                                                <Globe size={14} />
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <Button size="sm" variant="outline">
                                                <Github size={14} />
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection
