import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, Terminal } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, connect to a backend or email service
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-20">
            <SectionHeading
                label="Contact"
                title="Send a Deployment Request"
                subtitle="Got a project or opportunity? Trigger the message pipeline."
            />

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <Card className="relative overflow-hidden">
                        {/* Terminal header */}
                        <div className="-mx-6 -mt-6 mb-6 flex items-center gap-2 border-b border-slate-800 bg-[#111118] px-4 py-2.5">
                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 font-mono text-[10px] text-slate-500">contact-form ~ deployment-request</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1.5 block font-mono text-xs text-slate-400">
                                    <span className="text-neon-green">$</span> NAME
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700/60 bg-surface px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block font-mono text-xs text-slate-400">
                                    <span className="text-neon-green">$</span> EMAIL
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700/60 bg-surface px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block font-mono text-xs text-slate-400">
                                    <span className="text-neon-green">$</span> MESSAGE
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                                    className="w-full resize-none rounded-lg border border-slate-700/60 bg-surface px-4 py-2.5 font-mono text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:border-neon-blue/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                                    placeholder="Describe your project or opportunity..."
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                <Send size={16} />
                                {submitted ? 'Message Pipeline Triggered ✓' : 'Trigger Message Pipeline'}
                            </Button>
                        </form>
                    </Card>
                </motion.div>

                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="space-y-6"
                >
                    <Card>
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal size={18} className="text-neon-blue" />
                            <span className="font-mono text-sm text-slate-300">Connection Details</span>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-slate-500" />
                                <a href="mailto:ricklorinmoreno@gmail.com" className="text-slate-400 transition-colors hover:text-neon-blue">
                                    ricklorinmoreno@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Github size={16} className="text-slate-500" />
                                <a href="https://github.com/RickMoreno04" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-neon-blue">
                                    github.com/RickMoreno04
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Linkedin size={16} className="text-slate-500" />
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-neon-blue">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <p className="font-mono text-xs text-slate-500 mb-3">// availability.config</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Status</span>
                                <span className="flex items-center gap-1.5 text-neon-green">
                                    <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                                    Available
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Response Time</span>
                                <span className="font-mono text-slate-300">{'< 24 hours'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Open To</span>
                                <span className="text-slate-300">Internship, Freelance</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Timezone</span>
                                <span className="font-mono text-slate-300">UTC+8 (PH)</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
