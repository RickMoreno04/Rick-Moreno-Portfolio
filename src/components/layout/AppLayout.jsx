import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function AppLayout() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-[#dcf7e8]">
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#00ff88]/10 blur-[120px]" />
                <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#007544]/20 blur-[150px]" />
                <div className="grid-overlay absolute inset-0 opacity-35" />
            </div>
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
