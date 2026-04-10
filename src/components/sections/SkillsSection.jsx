import { motion } from 'framer-motion'
import { SiDocker, SiGithubactions, SiGrafana, SiPrometheus, SiLinux, SiPython, SiNginx, SiGit, SiSelenium, SiLaravel } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscTerminalBash } from 'react-icons/vsc'
import { Shield, Eye, Lock } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Card, CardContent } from '../ui/card'

const categories = [
    {
        name: 'Cloud',
        color: 'from-orange-400 to-yellow-500',
        border: 'border-orange-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
        tools: [
            { name: 'AWS', icon: FaAws },
        ],
    },
    {
        name: 'Containers',
        color: 'from-blue-400 to-cyan-400',
        border: 'border-blue-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
        tools: [
            { name: 'Docker', icon: SiDocker },
        ],
    },
    {
        name: 'CI/CD',
        color: 'from-neon-green to-emerald-400',
        border: 'border-neon-green/20',
        glow: 'hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]',
        tools: [
            { name: 'GitHub Actions', icon: SiGithubactions },
        ],
    },
    {
        name: 'Monitoring & Observability',
        color: 'from-neon-purple to-pink-400',
        border: 'border-neon-purple/20',
        glow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
        tools: [
            { name: 'Grafana', icon: SiGrafana },
            { name: 'Prometheus', icon: SiPrometheus },
            { name: 'Loki', icon: Eye },
            { name: 'Tempo', icon: Eye },
        ],
    },
    {
        name: 'Security',
        color: 'from-red-400 to-rose-500',
        border: 'border-red-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]',
        tools: [
            { name: 'Pre-commit', icon: Shield },
            { name: 'SonarQube', icon: Shield },
            { name: 'OWASP', icon: Lock },
            { name: 'Gitleaks', icon: Lock },
        ],
    },
    {
        name: 'Testing & QA',
        color: 'from-yellow-400 to-amber-500',
        border: 'border-yellow-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]',
        tools: [
            { name: 'Selenium', icon: SiSelenium },
        ],
    },
    {
        name: 'Scripting & Tools',
        color: 'from-neon-cyan to-teal-400',
        border: 'border-cyan-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]',
        tools: [
            { name: 'Bash', icon: VscTerminalBash },
            { name: 'Python', icon: SiPython },
            { name: 'Git', icon: SiGit },
            { name: 'Linux', icon: SiLinux },
            { name: 'Nginx', icon: SiNginx },
        ],
    },
    {
        name: 'Web Development',
        color: 'from-rose-400 to-pink-500',
        border: 'border-rose-500/20',
        glow: 'hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]',
        tools: [
            { name: 'Laravel', icon: SiLaravel },
        ],
    },
]

function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <SectionHeading
                label="Tech Stack"
                title="DevOps Toolchain"
                subtitle="The tools and technologies I use to build, deploy, and monitor production systems."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((cat, catIdx) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                    >
                        <Card className={`h-full ${cat.border} ${cat.glow} hover:border-opacity-50 transition-all duration-300`}>
                            <CardContent className="p-0">
                                <div className="mb-4">
                                    <h3 className={`text-sm font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                                        {cat.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {cat.tools.map((tool) => (
                                        <motion.div
                                            key={tool.name}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="group flex items-center gap-2 rounded-lg border border-slate-700/50 bg-surface/80 px-3 py-2 transition-all hover:border-slate-600"
                                        >
                                            <tool.icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                                            <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">{tool.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection
