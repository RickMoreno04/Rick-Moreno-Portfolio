import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
    {
        variants: {
            variant: {
                default:
                    'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:scale-[1.02]',
                outline:
                    'border border-neon-blue/30 bg-surface-card/70 text-neon-blue hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:bg-neon-blue/5',
                ghost: 'text-slate-400 hover:bg-surface-elevated hover:text-neon-blue',
                green:
                    'bg-gradient-to-r from-neon-green to-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:scale-[1.02]',
            },
            size: {
                default: 'h-11 px-5 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-12 rounded-lg px-7 text-base',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
