import { motion } from 'framer-motion'
import { BriefcaseBusiness, CheckCircle2, GitBranch, SearchCheck, ServerCog, Workflow } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const services = [
    {
        title: 'Web Development',
        description: 'Build responsive full-stack websites and dashboards with maintainable architecture.',
        icon: BriefcaseBusiness,
    },
    {
        title: 'Automation Testing',
        description: 'Develop Selenium-based testing suites for reliable regression and smoke checks.',
        icon: SearchCheck,
    },
    {
        title: 'DevOps Setup',
        description: 'Containerization, CI/CD workflows, and cloud deployment support for stable releases.',
        icon: ServerCog,
    },
]

const requirements = [
    'Project scope and target users',
    'Preferred stack and hosting platform',
    'Timeline with expected milestones',
    'Quality goals and test coverage needs',
]

const workflow = [
    { label: 'Plan', icon: Workflow, detail: 'Requirements alignment and architecture mapping' },
    { label: 'Build', icon: GitBranch, detail: 'Feature development with branch-based workflow' },
    { label: 'Validate', icon: CheckCircle2, detail: 'Automation checks and QA verification' },
    { label: 'Deploy', icon: ServerCog, detail: 'Pipeline release and cloud runtime setup' },
]

function ServicesPage() {
    return (
        <div className="space-y-20">
            <section>
                <SectionHeading
                    label="Services"
                    title="What I Can Offer"
                    subtitle="Support for development, testing, and deployment with a practical engineering workflow."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.32, delay: idx * 0.06 }}
                        >
                            <Card className="h-full hover:border-[#00ff88]/70 hover:shadow-[0_0_24px_rgba(0,255,136,0.2)]">
                                <CardHeader>
                                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1e593f] bg-[#10251b] text-[#00ff88]">
                                        <service.icon size={18} />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Project Requirements</CardTitle>
                        <CardDescription>To deliver efficiently, these inputs help me define a clear implementation strategy.</CardDescription>
                        <div className="mt-4 space-y-3">
                            {requirements.map((item) => (
                                <div key={item} className="flex items-start gap-2 text-sm text-[#addfc2]">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00ff88]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Availability</CardTitle>
                        <CardDescription>
                            Open for internship projects, student collaborations, and freelance starter engagements.
                        </CardDescription>
                        <p className="mt-4 text-sm text-[#9ccfb4]">Estimated response time: 24 to 48 hours</p>
                        <p className="text-sm text-[#9ccfb4]">Preferred collaboration: GitHub, Slack, or email coordination</p>
                    </CardHeader>
                </Card>
            </section>

            <section>
                <SectionHeading
                    label="Workflow"
                    title="Pipeline-Inspired Delivery Process"
                    subtitle="A transparent build path from scope to production release."
                />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {workflow.map((step, idx) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.3, delay: idx * 0.08 }}
                            className="relative"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1d573d] bg-[#12241b] text-[#00ff88]">
                                        <step.icon size={16} />
                                    </div>
                                    <CardDescription>Step {idx + 1}</CardDescription>
                                    <CardTitle>{step.label}</CardTitle>
                                    <CardDescription>{step.detail}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ServicesPage
