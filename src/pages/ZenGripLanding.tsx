import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ImagePlus, FolderOpen, ScanLine, Sparkles } from 'lucide-react'
import { useLang } from '../context/LangContext'

const content = {
    ko: {
        back: 'ZenithUs로 돌아가기',
        badge: '이미지 수집 · 정리 · OCR 앱',
        title: '젠그립',
        subtitle: 'ZenGrip',
        tagline: 'Capture. Organize. Reach your Zenith.',
        description: '이미지를 수집하고, 폴더로 정리하고, OCR로 텍스트를 뽑아내세요. 당신의 정보 관리, 정점에 도달합니다.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        featuresTitle: 'ZenGrip의 주요 기능',
        features: [
            {
                icon: ImagePlus,
                title: '이미지 수집',
                description: '카메라 촬영, 갤러리 가져오기로 이미지를 손쉽게 수집하고 관리하세요.',
            },
            {
                icon: FolderOpen,
                title: '폴더 관리',
                description: '주제별·프로젝트별 폴더를 만들어 이미지를 깔끔하게 정리하세요.',
            },
            {
                icon: ScanLine,
                title: 'OCR 텍스트 인식',
                description: '이미지 속 텍스트를 자동으로 인식해 편집·복사·공유가 가능한 노트로 변환합니다.',
            },
        ],
        detailLabel: 'Smart Capture',
        detailTitle: '찍고, 정리하고,\n텍스트로 만드세요',
        detailDesc: 'ZenGrip은 단순한 갤러리 앱이 아닙니다. 수집한 이미지에서 바로 텍스트를 추출하고, 폴더로 정리해 나만의 디지털 아카이브를 완성하세요.',
        ctaTitle: 'ZenGrip으로 정보를 정복하세요',
        ctaDesc: '지금 무료로 시작하세요. by ZenithUs Labs.',
        supportLink: '고객 지원',
        privacyLink: '개인정보 처리방침',
    },
    en: {
        back: 'Back to ZenithUs',
        badge: 'Image Capture · Organize · OCR App',
        title: 'ZenGrip',
        subtitle: 'ZenGrip',
        tagline: 'Capture. Organize. Reach your Zenith.',
        description: 'Capture images, organize into folders, and extract text with OCR. Your information management, elevated to the Zenith.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        featuresTitle: 'What ZenGrip Offers',
        features: [
            {
                icon: ImagePlus,
                title: 'Image Capture',
                description: 'Effortlessly collect images from your camera or gallery and keep them in one place.',
            },
            {
                icon: FolderOpen,
                title: 'Folder Organization',
                description: 'Create folders by topic or project to keep your images clean and accessible.',
            },
            {
                icon: ScanLine,
                title: 'OCR Text Recognition',
                description: 'Automatically recognize text in images and convert them into editable, shareable notes.',
            },
        ],
        detailLabel: 'Smart Capture',
        detailTitle: 'Capture, organize,\nand extract text',
        detailDesc: 'ZenGrip is more than a gallery app. Extract text directly from captured images and organize everything into folders — your personal digital archive, reimagined.',
        ctaTitle: 'Master your information with ZenGrip',
        ctaDesc: 'Start free today. by ZenithUs Labs.',
        supportLink: 'Support',
        privacyLink: 'Privacy Policy',
    },
}

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
}

const ZenGripLanding: React.FC = () => {
    const { lang } = useLang()
    const t = content[lang]

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-24 bg-[#050A05]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/10 pointer-events-none" />

                <div className="section-container relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-10 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t.back}
                    </Link>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <motion.div {...fadeUp}>
                            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                                <Sparkles className="w-3.5 h-3.5" />
                                {t.badge}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="/zengrip-icon.png"
                                    alt="ZenGrip Icon"
                                    className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                                />
                                <div>
                                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                                        {t.title}
                                    </h1>
                                    <p className="text-green-400 font-semibold text-base mt-1">{t.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-white mb-4 leading-snug">{t.tagline}</p>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-md">
                                {t.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-neutral-900 rounded-2xl font-bold hover:bg-neutral-100 transition-all shadow-lg">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    {t.appStore}
                                </button>
                                <button className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-800 border border-neutral-700 text-white rounded-2xl font-bold hover:bg-neutral-700 transition-all">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.18 23.76c.31.17.68.19 1.04.04l12.35-6.89-2.7-2.7-10.69 9.55zm-.69-20.1c-.09.24-.14.51-.14.8v18.93c0 .28.05.54.14.78l.05.05 10.6-10.6v-.25L2.54 3.61l-.05.05zM20.11 10.1l-2.78-1.55-3.02 3.02 3.02 3.02 2.8-1.56c.8-.45.8-1.48-.02-1.93zM4.22.24C3.86.09 3.49.11 3.18.28L13.93 11.1 16.63 8.4 4.22.24z"/>
                                    </svg>
                                    {t.googlePlay}
                                </button>
                            </div>
                        </motion.div>

                        {/* Right — App Screenshot */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-75 -z-10" />
                                <img
                                    src="/zengrip-screenshot.png"
                                    alt="ZenGrip App Screenshot"
                                    className="w-64 rounded-[40px] shadow-2xl shadow-green-900/40 ring-1 ring-white/10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Features ──────────────────────────────────────── */}
            <section className="py-24 bg-[#0a0f0a]">
                <div className="section-container">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.featuresTitle}</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ duration: 0.55, delay: i * 0.12 }}
                                    className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-green-500/30 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">{f.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Detail Section ────────────────────────────────── */}
            <section className="py-24 bg-[#050A05]">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/15 blur-3xl rounded-full scale-75 -z-10" />
                                <img
                                    src="/zengrip-screenshot2.png"
                                    alt="ZenGrip OCR"
                                    className="w-56 rounded-[36px] shadow-2xl shadow-green-900/30 ring-1 ring-white/10"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-semibold text-green-400 tracking-widest uppercase mb-4">{t.detailLabel}</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight whitespace-pre-line">
                                {t.detailTitle}
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                {t.detailDesc}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────── */}
            <section className="py-24 bg-gradient-to-br from-green-900/40 via-[#111] to-emerald-900/20 border-t border-neutral-800">
                <div className="section-container text-center">
                    <motion.div {...fadeUp}>
                        <img
                            src="/zengrip-icon.png"
                            alt="ZenGrip"
                            className="w-20 h-20 rounded-3xl shadow-2xl object-cover mx-auto mb-8"
                        />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">{t.ctaTitle}</h2>
                        <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">{t.ctaDesc}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-2xl font-bold hover:bg-neutral-100 transition-all shadow-lg">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                {t.appStore}
                            </button>
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-800 border border-neutral-700 text-white rounded-2xl font-bold hover:bg-neutral-700 transition-all">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 23.76c.31.17.68.19 1.04.04l12.35-6.89-2.7-2.7-10.69 9.55zm-.69-20.1c-.09.24-.14.51-.14.8v18.93c0 .28.05.54.14.78l.05.05 10.6-10.6v-.25L2.54 3.61l-.05.05zM20.11 10.1l-2.78-1.55-3.02 3.02 3.02 3.02 2.8-1.56c.8-.45.8-1.48-.02-1.93zM4.22.24C3.86.09 3.49.11 3.18.28L13.93 11.1 16.63 8.4 4.22.24z"/>
                                </svg>
                                {t.googlePlay}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer Links ──────────────────────────────────── */}
            <div className="py-8 border-t border-neutral-800 bg-[#050A05]">
                <div className="section-container flex flex-wrap gap-6 justify-center text-sm font-medium">
                    <Link to="/support" className="text-neutral-500 hover:text-white transition-colors">
                        {t.supportLink}
                    </Link>
                    <Link to="/zengrip/privacy" className="text-neutral-500 hover:text-white transition-colors">
                        {t.privacyLink}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ZenGripLanding
