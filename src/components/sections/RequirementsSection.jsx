import { motion } from 'framer-motion'
import { FileText, FolderOpen, Video, ExternalLink, Play, Eye, CheckCircle2, Timer, AlertCircle } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const documents = [
    { title: 'Acceptance Letter', description: 'Official acceptance letter for OJT/internship program.', status: 'Submitted', fileType: 'PDF' },
    { title: 'Good Moral Character', description: 'Certificate of good moral character from the institution.', status: 'Submitted', fileType: 'PDF' },
    { title: 'Recommendation Letter', description: 'Letter of recommendation from academic advisor.', status: 'Submitted', fileType: 'PDF' },
    { title: 'MOA', description: 'Memorandum of Agreement between student, school, and training partner.', status: 'In Progress', fileType: 'PDF' },
    { title: 'Student Information Sheet', description: 'Enrollment and student information records.', status: 'Submitted', fileType: 'DOCX' },
    { title: 'Information Sheet of Training Partner', description: 'Details of the training partner organization.', status: 'Submitted', fileType: 'PDF' },
    { title: 'CV / Resume', description: 'Updated curriculum vitae and professional resume.', status: 'Submitted', fileType: 'PDF' },
    { title: 'Consent Form', description: 'Signed consent form for internship participation.', status: 'In Progress', fileType: 'PDF' },
]

const fileTypeColors = {
    PDF: 'border-red-500/30 bg-red-500/10 text-red-400',
    DOCX: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
}

const statusConfig = {
    Submitted: { color: 'border-neon-green/30 bg-neon-green/10 text-neon-green', icon: <CheckCircle2 size={10} /> },
    'In Progress': { color: 'border-amber-500/30 bg-amber-500/10 text-amber-400', icon: <Timer size={10} /> },
    Placeholder: { color: 'border-slate-500/30 bg-slate-500/10 text-slate-400', icon: <AlertCircle size={10} /> },
}

function RequirementsSection() {
    return (
        <section id="requirements" className="py-20">
            <SectionHeading
                label="Requirements"
                title="Document Portal"
                subtitle="Organized collection of internship requirements, reports, and documentation."
            />

            {/* Video Resume Status */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <Card className="group relative overflow-hidden border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent" />
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-purple/30 bg-neon-purple/10">
                            <Video size={22} className="text-neon-purple" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-neon-purple">YouTube</p>
                                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${statusConfig.Placeholder.color}`}>
                                    {statusConfig.Placeholder.icon}
                                    Placeholder
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">Video Resume</h3>
                            <p className="mt-1 text-sm text-slate-400">Personal video resume showcasing skills, experience, and career goals.</p>
                            <div className="mt-3 rounded-lg border border-slate-700/50 bg-[#0d0d14] px-3 py-2 font-mono text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="text-amber-400">⏳ Pending Upload</span>
                                    <span className="inline-block h-3.5 w-0.5 bg-neon-green animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Google Drive Documents */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-6">
                    <FileText size={16} className="text-neon-blue" />
                    <h3 className="font-mono text-sm text-slate-300">Google Drive Documents</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {documents.map((doc, idx) => {
                        const status = statusConfig[doc.status]
                        return (
                            <motion.div
                                key={doc.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                                <Card className="group h-full flex flex-col hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/50 bg-surface">
                                                <FileText size={16} className="text-neon-blue" />
                                            </div>
                                            <div className="flex items-center gap-1.5 flex-wrap justify-end">
                                                <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${fileTypeColors[doc.fileType]}`}>
                                                    {doc.fileType}
                                                </span>
                                                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${status.color}`}>
                                                    {status.icon}
                                                    {doc.status}
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className="text-sm font-semibold text-slate-200 mb-1">{doc.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{doc.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Weekly Report Folder + Accomplishment Video */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Weekly Accomplishment Reports Folder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <Card className="group h-full hover:border-neon-green/30 hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-green/30 bg-neon-green/10">
                                <FolderOpen size={22} className="text-neon-green" />
                            </div>
                            <div className="flex-1">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-neon-green mb-1">Google Drive Folder</p>
                                <h3 className="text-lg font-semibold text-white">Weekly Accomplishment Reports</h3>
                                <p className="mt-1 text-sm text-slate-400">Collection of weekly OJT accomplishment reports organized by date.</p>
                                <a href="#" target="_blank" rel="noreferrer" className="mt-4 inline-block">
                                    <Button size="sm" variant="outline">
                                        <FolderOpen size={14} />
                                        Open Folder
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Accomplishment Report Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <Card className="group h-full hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10">
                                <Video size={22} className="text-neon-cyan" />
                            </div>
                            <div className="flex-1">
                                <p className="font-mono text-[10px] uppercase tracking-wider text-neon-cyan mb-1">YouTube</p>
                                <h3 className="text-lg font-semibold text-white">Accomplishment Report Video</h3>
                                <p className="mt-1 text-sm text-slate-400">Video presentation of OJT accomplishments and project highlights.</p>
                                <a href="#" target="_blank" rel="noreferrer" className="mt-4 inline-block">
                                    <Button size="sm" variant="outline">
                                        <Play size={14} />
                                        Watch Video
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default RequirementsSection
