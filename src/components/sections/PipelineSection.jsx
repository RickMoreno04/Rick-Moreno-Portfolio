import { motion } from 'framer-motion'
import { GitCommit, Hammer, FlaskConical, Shield, Package, Rocket, Activity, ChevronRight } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const stages = [
    { label: 'Commit', icon: GitCommit, iconColor: 'text-slate-400', color: 'from-slate-400 to-slate-500', status: 'completed', tooltip: 'Code pushed to repository' },
    { label: 'Build', icon: Hammer, iconColor: 'text-neon-blue', color: 'from-neon-blue to-blue-500', status: 'completed', tooltip: 'Application compiled and bundled' },
    { label: 'Test', icon: FlaskConical, iconColor: 'text-yellow-400', color: 'from-yellow-400 to-orange-400', status: 'completed', tooltip: 'Automated tests executed' },
    { label: 'Security', icon: Shield, iconColor: 'text-red-400', color: 'from-red-400 to-rose-500', status: 'completed', tooltip: 'Security scan & vulnerability check' },
    { label: 'Docker', icon: Package, iconColor: 'text-cyan-400', color: 'from-cyan-400 to-blue-400', status: 'completed', tooltip: 'Docker image built and pushed' },
    { label: 'Deploy', icon: Rocket, iconColor: 'text-neon-green', color: 'from-neon-green to-emerald-500', status: 'completed', tooltip: 'Deployed to production environment' },
    { label: 'Monitor', icon: Activity, iconColor: 'text-neon-purple', color: 'from-neon-purple to-violet-500', status: 'active', tooltip: 'Continuous monitoring active' },
]

function PipelineSection() {
    return (
        <section id="pipeline" className="py-20">
            <SectionHeading
                label="Pipeline"
                title="CI/CD Pipeline Flow"
                subtitle="Automated delivery pipeline from code commit to production monitoring."
            />

            {/* Desktop pipeline - horizontal */}
            <div className="hidden md:block">
                <div className="relative flex items-center justify-between">
                    {/* Connection line */}
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-slate-800">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            className="h-full bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple"
                        />
                    </div>

                    {stages.map((stage, idx) => (
                        <motion.div
                            key={stage.label}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.15 }}
                            className="relative z-10 flex flex-col items-center gap-3 group"
                        >
                            {/* Tooltip */}
                            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-slate-700/60 bg-surface-card px-3 py-1.5 font-mono text-[10px] text-slate-300 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-hover:-top-14">
                                {stage.tooltip}
                                <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-slate-700/60 bg-surface-card" />
                            </div>

                            <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700/50 bg-surface-card shadow-lg transition-all duration-300 hover:scale-110 ${stage.status === 'active' ? 'border-neon-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'hover:border-neon-blue/40 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]'}`}>
                                <stage.icon size={24} className={stage.iconColor} />
                                {stage.status === 'completed' && (
                                    <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon-green text-[10px] font-bold text-black">
                                        ✓
                                    </div>
                                )}
                                {stage.status === 'active' && (
                                    <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-neon-purple bg-surface animate-pulse" />
                                )}
                            </div>
                            <span className="font-mono text-xs text-slate-400">{stage.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile pipeline - vertical */}
            <div className="md:hidden">
                <div className="relative ml-6 space-y-4 border-l-2 border-slate-800 pl-8">
                    {stages.map((stage, idx) => (
                        <motion.div
                            key={stage.label}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="relative flex items-center gap-4"
                        >
                            <div className="absolute -left-[2.35rem] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-surface-card">
                                <stage.icon size={18} className="text-slate-400" />
                                {stage.status === 'completed' && (
                                    <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon-green text-[8px] font-bold text-black">
                                        ✓
                                    </div>
                                )}
                            </div>
                            <div className="rounded-lg border border-slate-800/50 bg-surface-card/50 px-4 py-2 flex-1">
                                <span className="font-mono text-sm text-slate-300">{stage.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pipeline YAML snippet */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-12"
            >
                <div className="overflow-hidden rounded-lg border border-slate-700/50 bg-[#0d0d14]">
                    <div className="flex items-center gap-2 border-b border-slate-700/50 bg-[#111118] px-4 py-2">
                        <span className="font-mono text-[10px] text-slate-500">.github/workflows/deploy.yml</span>
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
                        <code>
                            <span className="text-neon-purple">name</span><span className="text-slate-500">:</span> <span className="text-neon-green">Deploy Pipeline</span>{'\n'}
                            <span className="text-neon-purple">on</span><span className="text-slate-500">:</span>{'\n'}
                            {'  '}<span className="text-neon-blue">push</span><span className="text-slate-500">:</span>{'\n'}
                            {'    '}<span className="text-slate-400">branches</span><span className="text-slate-500">: [</span><span className="text-neon-green">main</span><span className="text-slate-500">]</span>{'\n'}
                            <span className="text-neon-purple">jobs</span><span className="text-slate-500">:</span>{'\n'}
                            {'  '}<span className="text-neon-blue">build-and-deploy</span><span className="text-slate-500">:</span>{'\n'}
                            {'    '}<span className="text-slate-400">runs-on</span><span className="text-slate-500">:</span> <span className="text-neon-green">ubuntu-latest</span>{'\n'}
                            {'    '}<span className="text-slate-400">steps</span><span className="text-slate-500">:</span>{'\n'}
                            {'      - '}<span className="text-slate-400">uses</span><span className="text-slate-500">:</span> <span className="text-neon-green">actions/checkout@v4</span>{'\n'}
                            {'      - '}<span className="text-slate-400">run</span><span className="text-slate-500">:</span> <span className="text-neon-green">docker build -t app .</span>{'\n'}
                            {'      - '}<span className="text-slate-400">run</span><span className="text-slate-500">:</span> <span className="text-neon-green">docker push $ECR_REPO:latest</span>{'\n'}
                            {'      - '}<span className="text-slate-400">run</span><span className="text-slate-500">:</span> <span className="text-neon-green">aws ecs update-service</span>
                        </code>
                    </pre>
                </div>
            </motion.div>
        </section>
    )
}

export default PipelineSection
