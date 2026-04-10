import { cn } from '../../lib/utils'

function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                'rounded-xl border border-slate-800/80 bg-surface-card/80 p-6 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(0,212,255,0.04)] transition-all duration-300',
                className,
            )}
            {...props}
        />
    )
}

function CardHeader({ className, ...props }) {
    return <div className={cn('mb-4 space-y-1', className)} {...props} />
}

function CardTitle({ className, ...props }) {
    return (
        <h3
            className={cn('text-lg font-semibold tracking-tight text-slate-100', className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }) {
    return <p className={cn('text-sm text-slate-400', className)} {...props} />
}

function CardContent({ className, ...props }) {
    return <div className={cn('text-slate-300', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
