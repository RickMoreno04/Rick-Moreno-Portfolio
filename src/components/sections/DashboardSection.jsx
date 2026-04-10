import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Activity, Rocket, Timer, Server, Shield, GitBranch, CheckCircle2, TrendingUp } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Card } from '../ui/card'

const metrics = [
    { label: 'Deployments', value: 247, suffix: '+', icon: Rocket, color: 'text-neon-green', glow: 'shadow-[0_0_20px_rgba(0,255,136,0.1)]' },
    { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1, icon: Activity, color: 'text-neon-blue', glow: 'shadow-[0_0_20px_rgba(0,212,255,0.1)]' },
    { label: 'Pipeline Success', value: 96.8, suffix: '%', decimals: 1, icon: CheckCircle2, color: 'text-neon-green', glow: 'shadow-[0_0_20px_rgba(0,255,136,0.1)]' },
    { label: 'Avg Build Time', value: 2.4, suffix: 'min', decimals: 1, icon: Timer, color: 'text-neon-cyan', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.1)]' },
    { label: 'Docker Containers', value: 8, suffix: '', icon: Server, color: 'text-neon-purple', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.1)]' },
    { label: 'Security Score', value: 94, suffix: '/100', icon: Shield, color: 'text-neon-green', glow: 'shadow-[0_0_20px_rgba(0,255,136,0.1)]' },
]

const activityLog = [
    { time: '2 min ago', event: 'Deployment to production completed', status: 'success' },
    { time: '15 min ago', event: 'Docker image built and pushed to registry', status: 'success' },
    { time: '32 min ago', event: 'Security scan passed - 0 vulnerabilities', status: 'success' },
    { time: '1 hr ago', event: 'CI pipeline triggered by push to main', status: 'success' },
    { time: '2 hr ago', event: 'Grafana alert resolved - CPU normalized', status: 'info' },
    { time: '3 hr ago', event: 'New container replica scaled up', status: 'info' },
]

function DashboardSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section id="dashboard" className="py-20">
            <SectionHeading
                label="Dashboard"
                title="Live DevOps Dashboard"
                subtitle="Simulated Metrics (Demo UI) — Realistic mock data showcasing dashboard design and monitoring capabilities."
            />

            {/* Metrics Grid */}
            <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                    >
                        <Card className={`relative overflow-hidden hover:border-slate-600 transition-all ${metric.glow}`}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{metric.label}</p>
                                    <p className={`mt-2 font-mono text-3xl font-bold ${metric.color}`}>
                                        {inView ? (
                                            <CountUp
                                                end={metric.value}
                                                decimals={metric.decimals || 0}
                                                duration={2}
                                                suffix={metric.suffix}
                                            />
                                        ) : (
                                            `0${metric.suffix}`
                                        )}
                                    </p>
                                </div>
                                <div className={`rounded-lg border border-slate-700/50 bg-surface p-2 ${metric.color}`}>
                                    <metric.icon size={20} />
                                </div>
                            </div>
                            {/* Subtle bar indicator */}
                            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                                <TrendingUp size={12} className="text-neon-green" />
                                <span>Stable</span>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Activity Log */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-8"
            >
                <Card className="overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                        <Activity size={14} className="text-neon-blue" />
                        <span className="font-mono text-xs text-slate-400">ACTIVITY LOG</span>
                        <span className="ml-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 font-mono text-[9px] text-yellow-400">SIMULATED</span>
                        <span className="ml-auto h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                        <span className="font-mono text-[10px] text-neon-green">DEMO</span>
                    </div>
                    <div className="divide-y divide-slate-800/50">
                        {activityLog.map((log, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.06 }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated/30 transition-colors"
                            >
                                <div className={`h-2 w-2 rounded-full ${log.status === 'success' ? 'bg-neon-green' : 'bg-neon-blue'}`} />
                                <span className="flex-1 text-sm text-slate-300">{log.event}</span>
                                <span className="font-mono text-[10px] text-slate-500">{log.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </section>
    )
}

export default DashboardSection
