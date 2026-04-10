import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, CloudCog, FlaskConical, GitBranchPlus, ShieldCheck, TerminalSquare } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import SectionHeading from '../components/SectionHeading'

const skills = [
    { title: 'CI/CD Automation', icon: GitBranchPlus, text: 'GitHub Actions pipelines with test, build, and deployment stages.' },
    { title: 'Cloud Deployment', icon: CloudCog, text: 'AWS-ready containers and infrastructure-focused delivery flow.' },
    { title: 'QA Engineering', icon: FlaskConical, text: 'Selenium test automation with reliable regression coverage.' },
    { title: 'System Monitoring', icon: Activity, text: 'Dashboard-style tracking for performance and release health.' },
]

const streamLogs = [
    '[deploy] build artifact generated',
    '[tests] selenium smoke suite passed',
    '[ops] docker image pushed to registry',
    '[aws] ecs service updated successfully',
]

function HomePage() {
    return (
        <div className="space-y-20">
            <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                    <p className="mb-4 text-xs uppercase tracking-[0.26em] text-[#00ff88]">DevOps x QA x Web</p>
                    <h1 className="text-4xl font-semibold leading-tight text-[#ecfff4] md:text-6xl">
                        Rick Moreno
                        <span className="mt-2 block text-2xl font-medium text-[#9cd7b7] md:text-3xl">
                            DevOps Engineer / QA Engineer / Web Developer
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-[#8fbca5]">
                        Building reliable web systems with Laravel, automation testing, and cloud-native CI/CD workflows.
                        I craft deployments that are observable, secure, and production-ready.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link to="/work">
                            <Button size="lg">View Work</Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="outline" size="lg">Contact Me</Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-2xl border border-[#1f4e37]/70 bg-[#0d1311]/80 p-5 shadow-[0_0_32px_rgba(0,255,136,0.12)] backdrop-blur-xl"
                >
                    <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#75a88e]">
                        <span>Pipeline Status</span>
                        <ShieldCheck size={16} className="text-[#00ff88]" />
                    </div>
                    <div className="space-y-3">
                        {streamLogs.map((log, idx) => (
                            <motion.div
                                key={log}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.14 + 0.3 }}
                                className="flex items-center gap-2 rounded-lg border border-[#1e3d2d] bg-[#0b100f] px-3 py-2 text-sm text-[#b9efd1]"
                            >
                                <TerminalSquare size={14} className="text-[#00ff88]" />
                                {log}
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#13201a]">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '86%' }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="h-full bg-gradient-to-r from-[#00ff88] to-[#00b362]"
                        />
                    </div>
                </motion.div>
            </section>

            <section>
                <SectionHeading
                    label="Intro"
                    title="SaaS-minded developer with an operations-first mindset"
                    subtitle="I blend software delivery with testing and deployment discipline to launch dependable products."
                />
            </section>

            <section>
                <SectionHeading
                    label="Core Skills"
                    title="What I Bring To The Team"
                    subtitle="A practical stack for modern web development, testing, and release automation."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.35, delay: idx * 0.07 }}
                        >
                            <Card className="h-full hover:-translate-y-1 hover:border-[#00ff88]/60 hover:shadow-[0_0_26px_rgba(0,255,136,0.18)]">
                                <CardHeader>
                                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1f5a40] bg-[#102219] text-[#00ff88]">
                                        <skill.icon size={18} />
                                    </div>
                                    <CardTitle>{skill.title}</CardTitle>
                                    <CardDescription>{skill.text}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-xs uppercase tracking-[0.15em] text-[#63a787]">Operationally focused delivery</CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage
