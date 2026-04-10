import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { cn } from '../lib/utils'

const projects = [
    {
        title: 'Laravel Capstone System',
        category: 'Web',
        description: 'Academic capstone platform with role-based access, modules, and reporting tools.',
        stack: ['Laravel', 'MySQL', 'Bootstrap'],
        demo: '#',
        github: 'https://github.com/RickMoreno04',
    },
    {
        title: 'Selenium Regression Suite',
        category: 'QA',
        description: 'Automated critical user flows to reduce manual QA effort and improve release confidence.',
        stack: ['Selenium', 'JavaScript', 'Test Reports'],
        demo: '#',
        github: 'https://github.com/RickMoreno04',
    },
    {
        title: 'CI/CD Pipeline Template',
        category: 'DevOps',
        description: 'Reusable GitHub Actions pipeline for testing, image build, and deployment stages.',
        stack: ['GitHub Actions', 'Docker', 'YAML'],
        demo: '#',
        github: 'https://github.com/RickMoreno04',
    },
    {
        title: 'AWS Docker Deployment',
        category: 'DevOps',
        description: 'Containerized web app deployment pattern with service health checks on AWS.',
        stack: ['AWS', 'Docker', 'Nginx'],
        demo: '#',
        github: 'https://github.com/RickMoreno04',
    },
]

const filters = ['All', 'Web', 'DevOps', 'QA']

function WorkPage() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects
        return projects.filter((project) => project.category === activeFilter)
    }, [activeFilter])

    return (
        <div className="space-y-12">
            <SectionHeading
                label="Work"
                title="Project Journey"
                subtitle="Selected builds across web engineering, test automation, and deployment workflows."
            />

            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            'rounded-lg border px-4 py-2 text-sm transition-all',
                            activeFilter === filter
                                ? 'border-[#00ff88] bg-[#123524] text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.22)]'
                                : 'border-[#1f4b35] bg-[#0c1310] text-[#8ebca4] hover:border-[#00ff88]/70 hover:text-[#00ff88]',
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.32, delay: idx * 0.07 }}
                    >
                        <Card className="h-full hover:-translate-y-1 hover:border-[#00ff88]/70 hover:shadow-[0_0_24px_rgba(0,255,136,0.2)]">
                            <CardHeader>
                                <CardDescription className="text-[#00ff88]">{project.category}</CardDescription>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-[#1b4d36] bg-[#0e1914] px-2 py-1 text-xs text-[#96d8b4]"
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
                ))}
            </div>
        </div>
    )
}

export default WorkPage
