import { motion } from 'framer-motion'
import { Briefcase, Calendar, Award, BookOpen, ArrowRight } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'

const experiences = [
    {
        period: '2025 – Present',
        role: 'DevOps Intern',
        company: 'SP Madrid and Associates',
        achievements: [
            'Implemented CI/CD pipelines using GitHub Actions for automated deployments',
            'Containerized applications with Docker for consistent environments',
            'Set up monitoring stack with Grafana, Prometheus, Loki, and Tempo',
            'Integrated pre-commit hooks for security scanning and code quality',
        ],
        tools: ['AWS', 'Docker', 'GitHub Actions', 'Grafana', 'Prometheus'],
    },
    {
        period: '2025',
        role: 'QA Intern',
        company: 'iEminence Inc Consulting Service',
        achievements: [
            'Created Selenium automation scripts for regression testing',
            'Integrated testing stages into CI pipelines',
            'Improved release confidence through automated smoke tests',
        ],
        tools: ['Selenium', 'JavaScript', 'GitHub Actions'],
    },
    {
        period: '2024',
        role: 'QA Automation Lead (Capstone Project)',
        company: 'Capstone Project',
        achievements: [
            'Led QA automation efforts for a Laravel capstone system',
            'Built automated test suites for role-based access control',
            'Designed CRUD module testing and regression coverage',
            'Learned software architecture and database design fundamentals',
        ],
        tools: ['Laravel', 'MySQL', 'Selenium', 'PHP'],
    },
]

const learningFocus = [
    { title: 'AWS Cloud Practitioner', status: 'In Progress', progress: 45 },
    { title: 'Docker Certification', status: 'Planned', progress: 60 },
    { title: 'GitHub Actions Advanced', status: 'In Progress', progress: 70 },
    { title: 'Linux Administration', status: 'Ongoing', progress: 55 },
]

function ExperienceSection() {
    return (
        <section id="experience" className="py-20">
            <SectionHeading
                label="Experience"
                title="Professional Journey"
                subtitle="From development fundamentals to DevOps specialization."
            />

            {/* Timeline */}
            <div className="relative ml-4 space-y-8 border-l-2 border-slate-800 pl-8">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={exp.period}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[2.55rem] top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-neon-blue bg-surface">
                            <div className="h-2 w-2 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,212,255,0.6)]" />
                        </div>

                        <Card className="hover:border-neon-blue/20 transition-all">
                            <CardHeader>
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <div className="flex items-center gap-1.5 text-neon-blue">
                                        <Calendar size={14} />
                                        <span className="font-mono text-xs">{exp.period}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">|</span>
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <Briefcase size={14} />
                                        <span className="text-xs">{exp.company}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-lg">{exp.role}</CardTitle>

                                <div className="mt-3 space-y-2">
                                    {exp.achievements.map((achievement) => (
                                        <div key={achievement} className="flex items-start gap-2 text-sm text-slate-400">
                                            <ArrowRight size={14} className="mt-0.5 shrink-0 text-neon-green" />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tools.map((tool) => (
                                        <span key={tool} className="rounded-md border border-slate-700/60 bg-surface/80 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Learning & Current Focus */}
            <div className="mt-20">
                <SectionHeading
                    label="Certifications"
                    title="Learning & Current Focus"
                    subtitle="Active learning roadmap towards industry certifications."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {learningFocus.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.3, delay: idx * 0.06 }}
                        >
                            <Card className="h-full hover:border-neon-purple/30 transition-all">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        {cert.progress >= 60 ? (
                                            <Award size={18} className="text-neon-green" />
                                        ) : (
                                            <BookOpen size={18} className="text-neon-blue" />
                                        )}
                                        <span className={`font-mono text-[10px] uppercase tracking-wider ${cert.progress >= 60 ? 'text-neon-green' : 'text-neon-blue'}`}>
                                            {cert.status}
                                        </span>
                                    </div>
                                    <CardTitle className="text-base">{cert.title}</CardTitle>
                                    <div className="mt-3">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-slate-500">Progress</span>
                                            <span className="font-mono text-slate-400">{cert.progress}%</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${cert.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                                                className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
