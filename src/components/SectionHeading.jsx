import { motion } from 'framer-motion'

function SectionHeading({ label, title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mb-12 max-w-2xl"
        >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-blue">{`// ${label}`}</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
        </motion.div>
    )
}

export default SectionHeading
