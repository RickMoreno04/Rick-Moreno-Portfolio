import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader, ExternalLink } from 'lucide-react'
import { Button } from './button'

function PreviewModal({ isOpen, onClose, title, previewUrl, openUrl }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isOpen) {
            setLoading(true)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, previewUrl])

    useEffect(() => {
        function handleEsc(e) {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="preview-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    onClick={onClose}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl border border-slate-700/50 bg-surface-card shadow-[0_0_60px_rgba(0,212,255,0.1)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header bar */}
                        <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-3 sm:px-6">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="flex gap-1.5 shrink-0">
                                    <button
                                        className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                                        onClick={onClose}
                                        aria-label="Close"
                                    />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="font-mono text-xs text-slate-400 truncate">
                                    {title}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                {openUrl && openUrl !== '#' && (
                                    <a href={openUrl} target="_blank" rel="noreferrer">
                                        <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                                            <ExternalLink size={12} />
                                            Open
                                        </Button>
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Preview iframe */}
                        <div className="relative aspect-[16/10] w-full bg-[#0d0d14]">
                            {loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                    <Loader size={28} className="text-neon-blue animate-spin" />
                                    <span className="font-mono text-xs text-slate-500">
                                        Loading preview...
                                    </span>
                                </div>
                            )}
                            <iframe
                                src={previewUrl}
                                className="h-full w-full border-0"
                                style={{
                                    opacity: loading ? 0 : 1,
                                    transition: 'opacity 0.3s ease',
                                }}
                                onLoad={() => setLoading(false)}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title={title}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default PreviewModal
