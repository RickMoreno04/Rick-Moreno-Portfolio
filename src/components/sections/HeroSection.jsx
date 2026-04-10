import { motion } from 'framer-motion'
import { ArrowDown, Download, Send } from 'lucide-react'
import { Button } from '../ui/button'
import TerminalTyping from './TerminalTyping'
import ProfileImage from './ProfileImage'

function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center py-20">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-neon-blue/8 blur-[120px]" />
                <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-neon-purple/8 blur-[120px]" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neon-green/5 blur-[100px]" />
            </div>

            <div className="relative w-full">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left: Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="font-mono text-xs text-neon-blue">Available for opportunities</span>
                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Rick Lorin T.
                            <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
                                Moreno
                            </span>
                        </h1>

                        <p className="mt-4 font-mono text-lg text-neon-blue sm:text-xl">
                            {'> '}DevOps Engineer
                        </p>

                        <p className="mt-4 max-w-lg text-base text-slate-400 sm:text-lg">
                            Building scalable systems through automation, cloud infrastructure, and CI/CD pipelines.
                            Focused on reliability, observability, and production-grade delivery.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#projects">
                                <Button size="lg">
                                    View Projects
                                    <ArrowDown size={16} />
                                </Button>
                            </a>
                            <a href="/assets/resume.pdf" download="Moreno_Rick_Lorin_Resume.pdf">
                                <Button variant="outline" size="lg">
                                    <Download size={16} />
                                    Download Resume
                                </Button>
                            </a>
                            <a href="#contact">
                                <Button variant="outline" size="lg">
                                    <Send size={16} />
                                    Contact Me
                                </Button>
                            </a>
                        </div>

                        {/* Profile image - mobile only */}
                        <div className="mt-10 flex justify-center lg:hidden">
                            <ProfileImage variant="professional" />
                        </div>
                    </motion.div>

                    {/* Right: Terminal + Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Profile image - desktop only */}
                        <div className="hidden lg:flex lg:justify-center lg:mb-4">
                            <ProfileImage variant="professional" />
                        </div>
                        <TerminalTyping />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16 flex justify-center"
                >
                    <a href="#skills" className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-neon-blue">
                        <span className="text-xs font-mono">scroll down</span>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            <ArrowDown size={16} />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
