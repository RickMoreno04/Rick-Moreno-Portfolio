import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowLeft, FileText, FolderOpen, Video, Play, Eye, Shield, Clock,
    ExternalLink, CheckCircle2, Timer, AlertCircle,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PreviewModal from '../components/ui/PreviewModal'

/* ─── DATA ─────────────────────────────────────────────── */

const officialDocuments = [
    {
        title: 'Acceptance Letter',
        description: 'Official acceptance letter for OJT/internship program.',
        link: 'https://drive.google.com/file/d/1UhHQpd4buVrFPVwccljrB7B_W05Jqo4Y/view?usp=drive_link',
        previewUrl: 'https://drive.google.com/file/d/1UhHQpd4buVrFPVwccljrB7B_W05Jqo4Y/preview',
        fileType: 'PDF',
        status: 'Submitted',
    },
    {
        title: 'Good Moral Character',
        description: 'Certificate of good moral character from the institution.',
        link: 'https://drive.google.com/file/d/1Djd-c7WZxaGmZqm5UwOPiuiBdkrVeMNW/view?usp=drive_link',
        previewUrl: 'https://drive.google.com/file/d/1Djd-c7WZxaGmZqm5UwOPiuiBdkrVeMNW/preview',
        fileType: 'PDF',
        status: 'Submitted',
    },
    {
        title: 'Recommendation Letter',
        description: 'Letter of recommendation from academic advisor.',
        link: 'https://drive.google.com/file/d/1aHWr5kBzRbiy2jdZkgEEktQv40bkkWD8/view?usp=drive_link',
        previewUrl: 'https://drive.google.com/file/d/1aHWr5kBzRbiy2jdZkgEEktQv40bkkWD8/preview',
        fileType: 'PDF',
        status: 'Submitted',
    },
    {
        title: 'MOA',
        description: 'Memorandum of Agreement between student, school, and training partner.',
        link: '#',
        previewUrl: null,
        fileType: 'PDF',
        status: 'In Progress',
    },
]

const studentForms = [
    {
        title: 'Student Information Sheet',
        description: 'Enrollment and student information records.',
        link: 'https://docs.google.com/document/d/1Hpca8mgU5y4Is8duC4AwMkUKe-CcwPon/edit?usp=drive_link&ouid=110588477650662260128&rtpof=true&sd=true',
        previewUrl: 'https://docs.google.com/document/d/1Hpca8mgU5y4Is8duC4AwMkUKe-CcwPon/preview',
        fileType: 'DOCX',
        status: 'Submitted',
    },
    {
        title: 'Information Sheet of Training Partner',
        description: 'Details of the training partner organization.',
        link: 'https://drive.google.com/file/d/1_-xKeHYt1puvyOwhHVehw4dPhxpp0P97/view?usp=drive_link',
        previewUrl: 'https://drive.google.com/file/d/1_-xKeHYt1puvyOwhHVehw4dPhxpp0P97/preview',
        fileType: 'PDF',
        status: 'Submitted',
    },
    {
        title: 'CV / Resume',
        description: 'Updated curriculum vitae and professional resume.',
        link: 'https://drive.google.com/file/d/1KSf4GXgbtaGJjpAuSTMDo3RpWUHuqWPP/view?usp=drive_link',
        previewUrl: 'https://drive.google.com/file/d/1KSf4GXgbtaGJjpAuSTMDo3RpWUHuqWPP/preview',
        fileType: 'PDF',
        status: 'Submitted',
    },
    {
        title: 'Consent Form',
        description: 'Signed consent form for internship participation.',
        link: '#',
        previewUrl: null,
        fileType: 'PDF',
        status: 'In Progress',
    },
]

/* ─── STYLE MAPS ───────────────────────────────────────── */

const fileTypeColors = {
    PDF: 'border-red-500/30 bg-red-500/10 text-red-400',
    DOCX: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    Folder: 'border-neon-green/30 bg-neon-green/10 text-neon-green',
    Video: 'border-neon-purple/30 bg-neon-purple/10 text-neon-purple',
}

const statusConfig = {
    Submitted: {
        color: 'border-neon-green/30 bg-neon-green/10 text-neon-green',
        icon: <CheckCircle2 size={10} />,
        label: 'Submitted',
    },
    'In Progress': {
        color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
        icon: <Timer size={10} />,
        label: 'In Progress',
    },
    Placeholder: {
        color: 'border-slate-500/30 bg-slate-500/10 text-slate-400',
        icon: <AlertCircle size={10} />,
        label: 'Placeholder',
    },
    Available: {
        color: 'border-neon-blue/30 bg-neon-blue/10 text-neon-blue',
        icon: <CheckCircle2 size={10} />,
        label: 'Available',
    },
}

/* ─── STATS ────────────────────────────────────────────── */

const allItems = [...officialDocuments, ...studentForms]
const submittedCount = allItems.filter((d) => d.status === 'Submitted').length
const inProgressCount = allItems.filter((d) => d.status === 'In Progress').length

/* ─── DOCUMENT CARD ────────────────────────────────────── */

function DocumentCard({ doc, idx, onPreview }) {
    const hasPreview = doc.previewUrl !== null
    const hasLink = doc.link !== '#'
    const status = statusConfig[doc.status]

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
        >
            <Card className="group h-full flex flex-col hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/50 bg-surface">
                            <FileText size={16} className="text-neon-blue" />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                            <span
                                className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${fileTypeColors[doc.fileType]}`}
                            >
                                {doc.fileType}
                            </span>
                            <span
                                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${status.color}`}
                                title={status.label}
                            >
                                {status.icon}
                                {status.label}
                            </span>
                        </div>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-1">{doc.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{doc.description}</p>
                </div>
                <div className="mt-4 flex gap-2">
                    {hasPreview ? (
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs"
                            onClick={() => onPreview(doc)}
                        >
                            <Eye size={12} />
                            Preview
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs opacity-40 cursor-not-allowed"
                            disabled
                        >
                            <Eye size={12} />
                            Preview
                        </Button>
                    )}
                    {hasLink ? (
                        <a href={doc.link} target="_blank" rel="noreferrer" className="flex-1">
                            <Button size="sm" variant="outline" className="w-full text-xs group-hover:border-neon-blue/50">
                                <ExternalLink size={12} />
                                Open
                            </Button>
                        </a>
                    ) : (
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs opacity-40 cursor-not-allowed"
                            disabled
                        >
                            <ExternalLink size={12} />
                            Open
                        </Button>
                    )}
                </div>
            </Card>
        </motion.div>
    )
}

/* ─── PAGE ─────────────────────────────────────────────── */

function RequirementsPage() {
    const [preview, setPreview] = useState({ open: false, title: '', previewUrl: '', openUrl: '' })

    function openPreview(doc) {
        setPreview({ open: true, title: doc.title, previewUrl: doc.previewUrl, openUrl: doc.link })
    }

    function closePreview() {
        setPreview((prev) => ({ ...prev, open: false }))
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
                {/* ── Page Header ─────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-700/50 bg-surface-card/80 px-4 py-2 font-mono text-xs text-slate-400 transition-all hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                    >
                        <ArrowLeft size={14} />
                        Back to Portfolio
                    </Link>

                    <div className="mt-6 flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon-blue/30 bg-neon-blue/10">
                            <Shield size={28} className="text-neon-blue" />
                        </div>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-blue mb-2">
                                // Requirements
                            </p>
                            <h1 className="text-3xl font-bold text-white md:text-4xl">
                                Requirements Portal
                            </h1>
                            <p className="mt-2 text-slate-400">
                                Internship document tracking, reports, and submission portal.
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                                <Clock size={12} />
                                <span className="font-mono">Last updated: 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Terminal-style status bar */}
                    <div className="mt-8 overflow-hidden rounded-lg border border-slate-700/50 bg-[#0d0d14]">
                        <div className="flex items-center gap-2 border-b border-slate-700/50 bg-[#111118] px-4 py-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                            <span className="ml-2 font-mono text-[10px] text-slate-500">
                                requirements-portal ~ status
                            </span>
                        </div>
                        <div className="px-4 py-3 font-mono text-xs space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-neon-green">$</span>
                                <span className="text-slate-400">requirements --audit</span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-slate-500">
                                    total: <span className="text-slate-300">{allItems.length + 3}</span>
                                </span>
                                <span className="text-neon-green">
                                    submitted: {submittedCount}
                                </span>
                                <span className="text-amber-400">
                                    in-progress: {inProgressCount}
                                </span>
                                <span className="text-slate-400">
                                    placeholder: 1
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-neon-green">$</span>
                                <span className="text-slate-400">status:</span>
                                <span className="text-neon-green">all documents submitted with placeholder</span>
                                <span className="ml-auto h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Video Resume Status Card ────────────── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="mb-12"
                >
                    <Card className="group relative overflow-hidden border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-500">
                        {/* Animated glow line */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent" />

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon-purple/30 bg-neon-purple/10">
                                <Video size={24} className="text-neon-purple" />
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <p className="font-mono text-[10px] uppercase tracking-wider text-neon-purple">
                                        YouTube
                                    </p>
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${fileTypeColors.Video}`}
                                    >
                                        Video
                                    </span>
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${statusConfig.Placeholder.color}`}
                                    >
                                        {statusConfig.Placeholder.icon}
                                        Placeholder
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Video Resume</h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Personal video resume showcasing skills, experience, and career goals.
                                </p>

                                {/* Terminal-like mini status */}
                                <div className="mt-4 rounded-lg border border-slate-700/50 bg-[#0d0d14] p-3 font-mono text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neon-green">$</span>
                                        <span className="text-slate-400">video-resume --status</span>
                                    </div>
                                    <div className="mt-1.5 flex items-center gap-2">
                                        <span className="text-amber-400">⏳ Pending Upload</span>
                                        <span className="inline-block h-4 w-0.5 bg-neon-green animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.section>

                {/* ── Category A: Official Documents ──────── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon-purple/30 bg-neon-purple/10">
                            <FileText size={16} className="text-neon-purple" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Official Documents</h2>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                                Category A — Institutional Requirements
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {officialDocuments.map((doc, idx) => (
                            <DocumentCard key={doc.title} doc={doc} idx={idx} onPreview={openPreview} />
                        ))}
                    </div>
                </motion.section>

                {/* ── Category B: Student Forms ───────────── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/10">
                            <FileText size={16} className="text-neon-cyan" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Student Forms</h2>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                                Category B — Personal &amp; Training Records
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {studentForms.map((doc, idx) => (
                            <DocumentCard key={doc.title} doc={doc} idx={idx} onPreview={openPreview} />
                        ))}
                    </div>
                </motion.section>

                {/* ── Category C: Weekly Reports ──────────── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon-green/30 bg-neon-green/10">
                            <FolderOpen size={16} className="text-neon-green" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Weekly Reports</h2>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                                Category C — Accomplishment Reports
                            </p>
                        </div>
                    </div>
                    <Card className="group hover:border-neon-green/30 hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-green/30 bg-neon-green/10">
                                <FolderOpen size={22} className="text-neon-green" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <p className="font-mono text-[10px] uppercase tracking-wider text-neon-green">
                                        Google Drive Folder
                                    </p>
                                    <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${fileTypeColors.Folder}`}>
                                        Folder
                                    </span>
                                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${statusConfig.Available.color}`}>
                                        {statusConfig.Available.icon}
                                        Available
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    Weekly Accomplishment Reports
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Collection of weekly OJT accomplishment reports organized by date.
                                </p>
                                <a
                                    href="https://drive.google.com/drive/folders/1aKU4QhYfnDBTycMi_BZCsCSw2MKzid-y?usp=drive_link"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-block"
                                >
                                    <Button size="sm" variant="outline">
                                        <FolderOpen size={14} />
                                        Open Folder
                                        <ExternalLink size={10} />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </motion.section>

                {/* ── Category D: Video Submissions ────────── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon-purple/30 bg-neon-purple/10">
                            <Video size={16} className="text-neon-purple" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Video Submissions</h2>
                            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                                Category D — Video Reports &amp; Presentations
                            </p>
                        </div>
                    </div>
                    <Card className="group hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] transition-all duration-300">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10">
                                    <Video size={22} className="text-neon-cyan" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <p className="font-mono text-[10px] uppercase tracking-wider text-neon-cyan">
                                            YouTube
                                        </p>
                                        <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${fileTypeColors.Video}`}>
                                            Video
                                        </span>
                                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase ${statusConfig.Submitted.color}`}>
                                            {statusConfig.Submitted.icon}
                                            Submitted
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        Accomplishment Report Video
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Video presentation of OJT accomplishments and project highlights.
                                    </p>
                                </div>
                            </div>

                            {/* Embedded YouTube Player */}
                            <div className="relative w-full overflow-hidden rounded-lg border border-slate-700/50 bg-[#0d0d14]">
                                <div className="aspect-video w-full">
                                    <iframe
                                        src="https://www.youtube.com/embed/GRVIYr05iU8"
                                        className="h-full w-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        title="Accomplishment Report Video"
                                    />
                                </div>
                            </div>

                            <a
                                href="https://youtu.be/GRVIYr05iU8"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block"
                            >
                                <Button size="sm" variant="outline">
                                    <Play size={14} />
                                    Open in YouTube
                                    <ExternalLink size={10} />
                                </Button>
                            </a>
                        </div>
                    </Card>
                </motion.section>
            </main>
            <Footer />

            {/* Preview Modal */}
            <PreviewModal
                isOpen={preview.open}
                onClose={closePreview}
                title={preview.title}
                previewUrl={preview.previewUrl}
                openUrl={preview.openUrl}
            />
        </>
    )
}

export default RequirementsPage
