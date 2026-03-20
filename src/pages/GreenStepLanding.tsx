import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Leaf, BarChart2, Globe, Award, ExternalLink, Brain, Users } from 'lucide-react'
import { useLang } from '../context/LangContext'

const content = {
    ko: {
        back: 'ZenithUs로 돌아가기',
        badge: 'ESG 생활 실천 앱',
        title: '그린스텝',
        subtitle: 'GreenStep',
        tagline: '나의 작은 발걸음이 지구를 바꿉니다',
        description: '일상 속 소소한 ESG 활동을 기록하고, 탄소 절감량을 확인하며, 지구를 위한 포인트를 모아보세요.',
        appStore: 'App Store',
        googlePlay: 'Google Play (준비 중)',
        featuresTitle: '그린스텝의 주요 기능',
        features: [
            {
                icon: Leaf,
                title: 'ESG 활동 기록',
                description: '텀블러 사용, 대중교통 이용, 분리수거 등 일상 속 친환경 활동을 쉽게 기록하세요.',
            },
            {
                icon: BarChart2,
                title: '탄소 절감 시각화',
                description: '내가 절감한 탄소량과 ESG 임팩트를 실시간으로 확인하고 통계로 분석해 보세요.',
            },
            {
                icon: Globe,
                title: '기후 위기 시계',
                description: '1.5°C 마감 시한까지 남은 시간과 GreenStep 유저들이 함께 되돌린 시간을 확인하세요.',
            },
            {
                icon: Award,
                title: '지역 ESG 순위',
                description: '우리 지역의 ESG 활동 순위를 확인하고 함께 지구를 지키는 커뮤니티에 참여하세요.',
            },
            {
                icon: Brain,
                title: 'AI ESG 분석',
                description: 'Claude AI가 내 활동을 E·S·G로 자동 분류하고 탄소 절감량을 정밀하게 계산해 드려요.',
            },
            {
                icon: Users,
                title: '커뮤니티 임팩트',
                description: '전체 유저들이 함께 만든 누적 탄소 절감량과 활동 건수를 실시간으로 확인하세요.',
            },
        ],
        impactTitle: '우리가 만드는 변화',
        impactDesc: 'GreenStep 유저들이 매일 기록하는 활동이 실제 탄소 절감으로 이어집니다.',
        impact: [
            { value: '탄소 절감', unit: '실시간 집계', label: '유저들이 오늘 절감한 탄소' },
            { value: 'ESG 3개', unit: '카테고리', label: '환경 · 사회 · 거버넌스' },
            { value: '기후 시계', unit: '연동', label: '1.5°C 마감 시한 카운트다운' },
        ],
        ctaTitle: '지금 이 순간도, 함께 만들고 있어요',
        ctaDesc: '당신의 한 걸음이 여기 기록됩니다. 무료로 시작하세요.',
        liveTitle: '지금 이 순간, 우리가 만드는 변화',
        liveDesc: 'GreenStep 유저들이 오늘도 지구를 위해 실천하고 있어요.',
        liveCarbonLabel: '오늘 절감한 탄소',
        liveTotalLabel: '누적 탄소 절감',
        liveUsersLabel: '함께하는 지구인',
        liveUnit: 'g',
        liveDashboardLink: '우리가 함께 되돌린 시간 확인하기',
        supportLink: '고객 지원',
        privacyLink: '개인정보 처리방침',
        comingSoon: '준비 중',
    },
    en: {
        back: 'Back to ZenithUs',
        badge: 'ESG Lifestyle App',
        title: 'GreenStep',
        subtitle: 'GreenStep',
        tagline: 'Your small step changes the planet',
        description: 'Track your daily ESG activities, monitor your carbon savings, and earn points for the Earth.',
        appStore: 'App Store',
        googlePlay: 'Google Play (Coming Soon)',
        featuresTitle: 'What GreenStep Offers',
        features: [
            {
                icon: Leaf,
                title: 'Track ESG Activities',
                description: 'Log eco-friendly actions like using a tumbler, taking public transit, or recycling — easily and quickly.',
            },
            {
                icon: BarChart2,
                title: 'Visualize Your Impact',
                description: 'See your real-time carbon savings and ESG impact through beautiful statistics.',
            },
            {
                icon: Globe,
                title: 'Climate Clock',
                description: 'Watch the countdown to the 1.5°C deadline and see how much time GreenStep users have reclaimed together.',
            },
            {
                icon: Award,
                title: 'Regional ESG Rankings',
                description: "Check your region's ESG activity ranking and join a community protecting the planet together.",
            },
            {
                icon: Brain,
                title: 'AI ESG Analysis',
                description: 'Claude AI automatically classifies your activities into E·S·G categories and precisely calculates carbon savings.',
            },
            {
                icon: Users,
                title: 'Community Impact',
                description: 'See the cumulative carbon savings and total activity count created by the entire GreenStep community in real time.',
            },
        ],
        ctaTitle: 'Right now, we are making it together',
        ctaDesc: 'Your step is recorded here. Free to start.',
        liveTitle: 'The change we are making, right now',
        liveDesc: 'GreenStep users are taking action for the planet today.',
        liveCarbonLabel: "Today's Carbon Saved",
        liveTotalLabel: 'Total Carbon Saved',
        liveUsersLabel: 'Earth Citizens',
        liveUnit: 'g',
        liveDashboardLink: 'See how much time we have reclaimed together',
        impactTitle: 'The Change We Make',
        impactDesc: 'Every activity GreenStep users log every day translates into real carbon savings.',
        impact: [
            { value: 'Carbon Saved', unit: 'Real-Time', label: 'Carbon saved by users today' },
            { value: '3 ESG', unit: 'Categories', label: 'Environmental · Social · Governance' },
            { value: 'Climate Clock', unit: 'Linked', label: '1.5°C Deadline Countdown' },
        ],
        supportLink: 'Support',
        privacyLink: 'Privacy Policy',
        comingSoon: 'Coming Soon',
    },
}

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
}

const DEADLINE = new Date('2029-07-21T12:00:00').getTime()

function calcTimeLeft() {
    const diff = DEADLINE - Date.now()
    if (diff <= 0) return null
    return {
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
        months: Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
}

const GreenStepLanding: React.FC = () => {
    const { lang } = useLang()
    const t = content[lang]
    const [timeLeft, setTimeLeft] = useState(calcTimeLeft())
    const [liveCarbon] = useState(0)
    const [totalCarbon] = useState(0)
    const [userCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-24 bg-[#0a0f1e]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-emerald-900/10 pointer-events-none" />

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
                                <Leaf className="w-3.5 h-3.5" />
                                {t.badge}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="/greenstep-icon.png"
                                    alt="GreenStep Icon"
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
                                <a
                                    href="https://apps.apple.com/app/id6760717586"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-neutral-900 rounded-2xl font-bold hover:bg-neutral-100 transition-all shadow-lg"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    {t.appStore}
                                </a>
                                <button disabled className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-800 border border-neutral-700 text-neutral-500 rounded-2xl font-bold cursor-not-allowed">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.18 23.76c.31.17.68.19 1.04.04l12.35-6.89-2.7-2.7-10.69 9.55zm-.69-20.1c-.09.24-.14.51-.14.8v18.93c0 .28.05.54.14.78l.05.05 10.6-10.6v-.25L2.54 3.61l-.05.05zM20.11 10.1l-2.78-1.55-3.02 3.02 3.02 3.02 2.8-1.56c.8-.45.8-1.48-.02-1.93zM4.22.24C3.86.09 3.49.11 3.18.28L13.93 11.1 16.63 8.4 4.22.24z"/>
                                    </svg>
                                    {t.googlePlay}
                                </button>
                            </div>
                        </motion.div>

                        {/* Right — App Screenshots */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex justify-center items-end gap-3"
                        >
                            <div className="relative -mb-6">
                                <img
                                    src="/greenstep-screenshot.png"
                                    alt="GreenStep 홈 화면"
                                    className="w-40 rounded-3xl shadow-2xl shadow-green-900/40 border border-white/10"
                                />
                            </div>
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-green-500/15 blur-3xl rounded-full -z-10" />
                                <img
                                    src="/greenstep-screenshot2.png"
                                    alt="GreenStep 기록 화면"
                                    className="w-40 rounded-3xl shadow-2xl shadow-green-900/40 border border-white/10"
                                />
                            </div>
                            <div className="relative -mb-6">
                                <img
                                    src="/greenstep-screenshot3.png"
                                    alt="GreenStep 리포트 화면"
                                    className="w-40 rounded-3xl shadow-2xl shadow-green-900/40 border border-white/10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Climate Clock ─────────────────────────────────── */}
            <section className="py-20 bg-gradient-to-b from-[#0a2010] to-[#0d1a0d] border-y border-green-800/40">
                <div className="section-container text-center">
                    <motion.div {...fadeUp}>
                        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
                            <span className="animate-pulse">●</span>
                            {lang === 'ko' ? '1.5°C 마감 카운트다운' : '1.5°C Deadline Countdown'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                            {lang === 'ko'
                                ? '우리에게 남은 시간'
                                : 'Time We Have Left'}
                        </h2>
                        <p className="text-green-400 font-bold mb-10 text-sm">
                            {lang === 'ko'
                                ? 'GreenStep 유저들이 함께 이 시계를 늦추고 있어요'
                                : "GreenStep users are slowing this clock together"}
                        </p>

                        {timeLeft && (
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    { v: timeLeft.years, l: lang === 'ko' ? '년' : 'YRS' },
                                    { v: timeLeft.months, l: lang === 'ko' ? '월' : 'MON' },
                                    { v: timeLeft.days, l: lang === 'ko' ? '일' : 'DAYS' },
                                    { v: timeLeft.hours, l: lang === 'ko' ? '시' : 'HRS' },
                                    { v: timeLeft.minutes, l: lang === 'ko' ? '분' : 'MIN' },
                                    { v: timeLeft.seconds, l: lang === 'ko' ? '초' : 'SEC' },
                                ].map((u, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0a1a0a] border-2 border-green-800/50 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/20">
                                            <span className="text-2xl md:text-3xl font-black text-white tabular-nums">
                                                {u.v.toString().padStart(2, '0')}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{u.l}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <p className="text-neutral-500 text-sm max-w-md mx-auto">
                            {lang === 'ko'
                                ? '지구 평균 온도 1.5°C 상승 마감 시한 (2029년 7월 기준)'
                                : '1.5°C global temperature rise deadline (based on July 2029)'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Live Impact ───────────────────────────────────── */}
            <section className="py-24 bg-[#0d0d0d]">
                <div className="section-container">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
                            <span className="animate-pulse">●</span>
                            {lang === 'ko' ? 'LIVE' : 'LIVE'}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{t.liveTitle}</h2>
                        <p className="text-neutral-400 text-lg max-w-xl mx-auto">{t.liveDesc}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { value: liveCarbon.toLocaleString(), unit: 'g', label: t.liveCarbonLabel, color: 'text-green-400' },
                            { value: totalCarbon.toLocaleString(), unit: 'g', label: t.liveTotalLabel, color: 'text-emerald-400' },
                            { value: userCount.toLocaleString(), unit: lang === 'ko' ? '명' : '', label: t.liveUsersLabel, color: 'text-teal-400' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.55, delay: i * 0.12 }}
                                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center hover:border-green-800/50 transition-colors"
                            >
                                <div className="flex items-end justify-center gap-1 mb-2">
                                    <span className={`text-4xl font-black tabular-nums ${item.color}`}>{item.value}</span>
                                    <span className={`text-lg font-black mb-1 ${item.color} opacity-70`}>{item.unit}</span>
                                </div>
                                <p className="text-neutral-400 text-sm font-medium">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="text-center">
                        <a
                            href="https://greenstep4all.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-bold transition-colors border border-green-800/40 hover:border-green-600/60 px-6 py-3 rounded-2xl bg-green-900/10 hover:bg-green-900/20"
                        >
                            {t.liveDashboardLink}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Features ──────────────────────────────────────── */}
            <section className="py-24 bg-[#0d0d0d]">
                <div className="section-container">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.featuresTitle}</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {t.features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ duration: 0.55, delay: i * 0.1 }}
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

            {/* ── Impact Stats ──────────────────────────────────── */}
            <section className="py-24 bg-[#0a0f1e]">
                <div className="section-container">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.impactTitle}</h2>
                        <p className="text-neutral-400 mt-4 text-lg max-w-xl mx-auto">{t.impactDesc}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.impact.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.55, delay: i * 0.12 }}
                                className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-900/30 rounded-3xl p-8 text-center"
                            >
                                <p className="text-3xl font-black text-green-400 mb-1">{item.value}</p>
                                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">{item.unit}</p>
                                <p className="text-neutral-400 text-sm">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────── */}
            <section className="py-24 bg-gradient-to-br from-green-900/40 via-[#0d0d0d] to-emerald-900/20 border-t border-neutral-800">
                <div className="section-container text-center">
                    <motion.div {...fadeUp}>
                        <img
                            src="/greenstep-icon.png"
                            alt="GreenStep"
                            className="w-20 h-20 rounded-3xl shadow-2xl object-cover mx-auto mb-8"
                        />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">{t.ctaTitle}</h2>
                        <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">{t.ctaDesc}</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://apps.apple.com/app/id6760717586"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-400 transition-all shadow-lg shadow-green-900/40"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                {t.appStore}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Footer Links ──────────────────────────────────── */}
            <div className="py-8 border-t border-neutral-800 bg-[#0d0d0d]">
                <div className="section-container flex flex-wrap gap-6 justify-center text-sm font-medium">
                    <Link to="/support" className="text-neutral-500 hover:text-white transition-colors">
                        {t.supportLink}
                    </Link>
                    <Link to="/greenstep/privacy" className="text-neutral-500 hover:text-white transition-colors">
                        {t.privacyLink}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GreenStepLanding
