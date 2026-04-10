import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const navItems = [
    { label: 'Home', to: '#home' },
    { label: 'Skills', to: '#skills' },
    { label: 'Projects', to: '#projects' },
    { label: 'Dashboard', to: '#dashboard' },
    { label: 'Experience', to: '#experience' },
    { label: 'Requirements', to: '/requirements', isPage: true },
    { label: 'Contact', to: '#contact' },
]

function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            if (location.pathname !== '/') return
            const sections = navItems.filter(i => !i.isPage).map(item => item.to.slice(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && el.getBoundingClientRect().top <= 100) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    const handleClick = (e, item) => {
        e.preventDefault()
        setOpen(false)
        if (item.isPage) {
            navigate(item.to)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                const el = document.querySelector(item.to)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            const el = document.querySelector(item.to)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const isActive = (item) => {
        if (item.isPage) return location.pathname === item.to
        return location.pathname === '/' && activeSection === item.to.slice(1)
    }

    return (
        <header className={cn(
            'sticky top-0 z-50 border-b transition-all duration-300',
            scrolled
                ? 'border-slate-800/60 bg-surface/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
                : 'border-transparent bg-transparent',
        )}>
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                <a
                    href="#home"
                    onClick={(e) => handleClick(e, { to: '#home' })}
                    className="flex items-center gap-2 font-mono text-sm font-semibold text-white group"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon-blue/30 bg-neon-blue/10 transition-all group-hover:border-neon-blue/60 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                        <Terminal size={14} className="text-neon-blue" />
                    </div>
                    <span>Rick<span className="text-neon-blue">.</span>dev</span>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.to}
                            href={item.isPage ? item.to : item.to}
                            onClick={(e) => handleClick(e, item)}
                            className={cn(
                                'rounded-lg px-3 py-2 font-mono text-xs transition-all',
                                isActive(item)
                                    ? 'bg-neon-blue/10 text-neon-blue'
                                    : 'text-slate-400 hover:text-white hover:bg-surface-elevated/50',
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </Button>
            </nav>

            {open && (
                <div className="border-t border-slate-800/60 bg-surface/95 backdrop-blur-xl px-4 py-3 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.to}
                                href={item.isPage ? item.to : item.to}
                                onClick={(e) => handleClick(e, item)}
                                className={cn(
                                    'rounded-lg px-3 py-2 font-mono text-sm transition-all',
                                    isActive(item)
                                        ? 'bg-neon-blue/10 text-neon-blue'
                                        : 'text-slate-400 hover:bg-surface-elevated/50 hover:text-white',
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
