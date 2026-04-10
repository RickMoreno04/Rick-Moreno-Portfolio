import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

function Footer() {
    return (
        <footer className="border-t border-slate-800/60 bg-[#08080d]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:px-6">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-neon-blue" />
                    <p className="font-mono text-xs">© {new Date().getFullYear()} Rick Moreno. Deployed with passion.</p>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/RickMoreno04"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-800 p-2 transition-all hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_12px_rgba(0,212,255,0.15)]"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-800 p-2 transition-all hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_12px_rgba(0,212,255,0.15)]"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="mailto:ricklorinmoreno@gmail.com"
                        className="rounded-lg border border-slate-800 p-2 transition-all hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_12px_rgba(0,212,255,0.15)]"
                        aria-label="Email"
                    >
                        <Mail size={16} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
