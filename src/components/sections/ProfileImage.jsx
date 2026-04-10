import { useState } from 'react'

function ProfileImage({ variant = 'professional', className = '' }) {
    const [imgError, setImgError] = useState(false)

    if (variant === 'tech') {
        return (
            <div className={`relative h-48 w-48 sm:h-56 sm:w-56 ${className}`}>
                {/* Square futuristic frame */}
                <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-neon-blue/40 bg-surface-card shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                    {!imgError ? (
                        <img
                            src="/assets/profile.jpg"
                            alt="Rick Moreno - DevOps Engineer"
                            className="h-full w-full object-cover"
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-card to-surface-elevated">
                            <span className="font-mono text-4xl text-neon-blue">RM</span>
                        </div>
                    )}
                    {/* Scanline effect */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent" />
                        <div className="absolute left-0 right-0 h-[2px] animate-scanline bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-neon-blue/60" />
                    <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-neon-blue/60" />
                    <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-neon-blue/60" />
                    <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-neon-blue/60" />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-neon-green/30 bg-surface-card px-3 py-1">
                    <span className="font-mono text-[10px] text-neon-green">ONLINE</span>
                </div>
            </div>
        )
    }

    // Professional variant (circular glow)
    return (
        <div className={`relative h-48 w-48 sm:h-56 sm:w-56 ${className}`}>
            {/* Outer glow ring */}
            <div className="absolute inset-0 animate-pulseGlow rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-30 blur-xl" />
            {/* Border ring */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green p-[2px]">
                <div className="h-full w-full rounded-full bg-surface" />
            </div>
            {/* Image */}
            <div className="absolute inset-3 overflow-hidden rounded-full">
                {!imgError ? (
                    <img
                        src="/assets/profile.jpg"
                        alt="Rick Moreno - DevOps Engineer"
                        className="h-full w-full object-cover"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-card to-surface-elevated">
                        <span className="font-mono text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">RM</span>
                    </div>
                )}
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full border border-slate-700 bg-surface-card px-2 py-0.5">
                <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-[10px] text-neon-green">LIVE</span>
            </div>
        </div>
    )
}

export default ProfileImage
