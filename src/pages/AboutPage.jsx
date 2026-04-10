import { motion } from 'framer-motion'
import { Package, Cloud, GitBranchPlus, Bug, Database, Blocks } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const stack = [
    { name: 'Docker', icon: Package },
    { name: 'AWS', icon: Cloud },
    { name: 'GitHub Actions', icon: GitBranchPlus },
    { name: 'Selenium', icon: Bug },
    { name: 'Laravel', icon: Database },
    { name: 'REST APIs', icon: Blocks },
]

const timeline = [
    { year: '2023', title: 'Web Development Foundation', detail: 'Built full-stack projects and learned software architecture basics.' },
    { year: '2024', title: 'Laravel Capstone Project', detail: 'Delivered a capstone system with authentication, CRUD modules, and reporting.' },
    { year: '2025', title: 'QA and Automation Focus', detail: 'Created Selenium scripts and integrated testing into CI pipelines.' },
    { year: '2026', title: 'DevOps Workflow Expansion', detail: 'Worked on Dockerized deployment and AWS hosting strategies.' },
]

function AboutPage() {
    return (
        <div className="space-y-20">
            <section>
                <SectionHeading
                    label="About Me"
                    title="Student developer moving toward production-grade engineering"
                    subtitle="I am focused on turning ideas into reliable products with strong QA practices and deployment discipline."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Background</CardTitle>
                            <CardDescription>
                                I am a student developer passionate about web systems, automation, and cloud deployment. My goal is to create software that is fast to build and easy to operate.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Education and Goals</CardTitle>
                            <CardDescription>
                                I continuously improve in DevOps and QA workflows, aiming to become an engineer who can own development from code quality to production reliability.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            <section>
                <SectionHeading
                    label="Tech Stack"
                    title="Tools I Use"
                    subtitle="A practical toolkit for coding, testing, and deployment operations."
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stack.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.3, delay: idx * 0.06 }}
                        >
                            <Card className="h-full hover:border-[#00ff88]/60 hover:shadow-[0_0_24px_rgba(0,255,136,0.16)]">
                                <CardContent className="flex items-center gap-3 p-0">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b5a3f] bg-[#10241a] text-[#00ff88]">
                                        <item.icon size={18} />
                                    </div>
                                    <p className="font-medium text-[#dcfbe8]">{item.name}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <SectionHeading
                    label="Journey"
                    title="Learning Timeline"
                    subtitle="A progression from development fundamentals to DevOps and QA specialization."
                />
                <div className="relative ml-2 space-y-6 border-l border-[#1c4d36] pl-6">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: -14 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.35, delay: idx * 0.08 }}
                            className="relative"
                        >
                            <span className="absolute -left-[2rem] top-2 h-3 w-3 rounded-full bg-[#00ff88] shadow-[0_0_14px_rgba(0,255,136,0.75)]" />
                            <Card>
                                <CardHeader>
                                    <CardDescription className="text-[#00ff88]">{item.year}</CardDescription>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.detail}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AboutPage
