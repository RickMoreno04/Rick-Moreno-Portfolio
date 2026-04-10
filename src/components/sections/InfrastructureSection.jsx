import { motion } from 'framer-motion'
import { Globe, Server, Database, Activity, Lock, GitBranch, Container, Shield } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const infraNodes = [
    { id: 'lb', label: 'Load Balancer', sub: 'Nginx / ALB', icon: Globe, color: 'border-neon-blue/40 bg-neon-blue/5', textColor: 'text-neon-blue' },
    { id: 'app1', label: 'App Container', sub: 'Docker / ECS', icon: Container, color: 'border-cyan-400/40 bg-cyan-400/5', textColor: 'text-cyan-400' },
    { id: 'app2', label: 'App Container', sub: 'Docker / ECS', icon: Container, color: 'border-cyan-400/40 bg-cyan-400/5', textColor: 'text-cyan-400' },
    { id: 'db', label: 'Database', sub: 'RDS / PostgreSQL', icon: Database, color: 'border-neon-purple/40 bg-neon-purple/5', textColor: 'text-neon-purple' },
    { id: 'monitor', label: 'Monitoring', sub: 'Grafana Stack', icon: Activity, color: 'border-neon-green/40 bg-neon-green/5', textColor: 'text-neon-green' },
    { id: 'cicd', label: 'CI/CD Pipeline', sub: 'GitHub Actions', icon: GitBranch, color: 'border-orange-400/40 bg-orange-400/5', textColor: 'text-orange-400' },
    { id: 'secrets', label: 'Secrets Manager', sub: 'AWS Secrets', icon: Lock, color: 'border-red-400/40 bg-red-400/5', textColor: 'text-red-400' },
    { id: 'security', label: 'Security Scan', sub: 'Pre-commit / Gitleaks', icon: Shield, color: 'border-rose-400/40 bg-rose-400/5', textColor: 'text-rose-400' },
]

function InfrastructureSection() {
    return (
        <section id="infrastructure" className="py-20">
            <SectionHeading
                label="Architecture"
                title="Infrastructure Overview"
                subtitle="Cloud architecture layout showing production deployment topology."
            />

            {/* Desktop infra diagram - grid-based layout */}
            <div className="hidden lg:block">
                <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-800/60 bg-surface-card/30 p-8">
                    {/* Background grid */}
                    <div className="absolute inset-0 grid-overlay rounded-2xl opacity-20" />

                    {/* Connection lines (SVG) */}
                    <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0,212,255,0.3)" />
                                <stop offset="100%" stopColor="rgba(168,85,247,0.3)" />
                            </linearGradient>
                        </defs>
                        {/* LB to App1 */}
                        <line x1="50%" y1="14%" x2="28%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6 4" />
                        {/* LB to App2 */}
                        <line x1="50%" y1="14%" x2="72%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6 4" />
                        {/* App1 to DB */}
                        <line x1="28%" y1="40%" x2="28%" y2="56%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6 4" />
                        {/* App2 to Monitor */}
                        <line x1="72%" y1="40%" x2="72%" y2="56%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="6 4" />
                        {/* CI/CD to App1 */}
                        <line x1="16%" y1="76%" x2="28%" y2="40%" stroke="rgba(249,115,22,0.2)" strokeWidth="1" strokeDasharray="6 4" />
                        {/* Secrets to DB */}
                        <line x1="50%" y1="76%" x2="28%" y2="66%" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="6 4" />
                    </svg>

                    <div className="relative flex flex-col items-center gap-12 py-6">
                        {/* Row 1: Load Balancer */}
                        <div className="flex justify-center w-full">
                            <InfraNode node={infraNodes[0]} idx={0} />
                        </div>

                        {/* Row 2: App Containers */}
                        <div className="flex w-full justify-around px-8">
                            <InfraNode node={infraNodes[1]} idx={1} />
                            <InfraNode node={infraNodes[2]} idx={2} />
                        </div>

                        {/* Row 3: Database & Monitoring */}
                        <div className="flex w-full justify-around px-8">
                            <InfraNode node={infraNodes[3]} idx={3} />
                            <InfraNode node={infraNodes[4]} idx={4} />
                        </div>

                        {/* Row 4: CI/CD, Secrets, Security */}
                        <div className="flex w-full justify-between px-4">
                            <InfraNode node={infraNodes[5]} idx={5} />
                            <InfraNode node={infraNodes[6]} idx={6} />
                            <InfraNode node={infraNodes[7]} idx={7} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/tablet infra list */}
            <div className="lg:hidden">
                <div className="grid gap-3 sm:grid-cols-2">
                    {infraNodes.map((node, idx) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.06 }}
                        >
                            <div className={`flex items-center gap-3 rounded-xl border ${node.color} bg-surface-card/90 px-4 py-3`}>
                                <div className={`rounded-lg border border-slate-700/30 bg-surface p-2 ${node.textColor}`}>
                                    <node.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-200">{node.label}</p>
                                    <p className="font-mono text-[10px] text-slate-500">{node.sub}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function InfraNode({ node, idx }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
            <div className={`flex items-center gap-3 rounded-xl border ${node.color} bg-surface-card/90 backdrop-blur-sm px-4 py-3 shadow-lg transition-all hover:scale-105`}>
                <div className={`rounded-lg border border-slate-700/30 bg-surface p-2 ${node.textColor}`}>
                    <node.icon size={18} />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-200 whitespace-nowrap">{node.label}</p>
                    <p className="font-mono text-[10px] text-slate-500 whitespace-nowrap">{node.sub}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default InfrastructureSection
