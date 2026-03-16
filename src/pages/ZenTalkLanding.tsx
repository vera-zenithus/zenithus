import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Sparkles, Heart, Lock } from 'lucide-react'
import { useLang } from '../context/LangContext'

const content = {
    ko: {
        back: 'ZenithUs로 돌아가기',
        badge: 'AI 감정 대화 파트너',
        title: '젠톡',
        subtitle: 'ZenTalk',
        tagline: 'AI 젠(Zen)이 당신의 이야기를 들어드려요',
        description: '마음속 깊은 이야기, 혼자 담아두지 마세요. AI 젠과 언제든지 솔직하게 대화할 수 있어요.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        zenGreeting: '안녕, 나는 젠(Zen)이야. 마음속 깊은 곳에 있는 이야기들, 내가 다 들어줄게. 무슨 일이 있었니?',
        userMsg: '오늘 기분이 좀 우울해.. 젠',
        zenReply: '그래? 오늘 기분이 좀 안 좋구나. 특별한 일 있었어? 아니면 그냥 마음이 허한 날인건지 얘기해 봐.',
        inputPlaceholder: '마음을 들려주세요...',
        chatLabel: '채팅',
        profileLabel: '내 정보',
        todayChat: '오늘의 대화 1/10',
        premium: 'Premium',
        featuresTitle: '젠톡의 주요 기능',
        features: [
            {
                icon: MessageCircle,
                title: 'AI 젠과 대화',
                description: '판단 없이 내 이야기를 들어주는 AI 파트너. 언제든 마음을 털어놓으세요.',
            },
            {
                icon: Lock,
                title: '프라이빗 & 안전',
                description: '나만의 대화 공간. 내 감정과 이야기는 철저히 보호됩니다.',
            },
            {
                icon: Heart,
                title: '감정 공감',
                description: '단순한 답변이 아닌, 진심 어린 공감으로 대화를 이어갑니다.',
            },
        ],
        comingSoonLabel: '곧 출시 예정',
        comingSoon: [
            '감정 기록 & 히스토리',
            '커뮤니티 공감 기능',
            '감정 패턴 분석',
        ],
        ctaTitle: '지금 AI 젠과 대화해보세요',
        ctaDesc: '하루 무료 대화 제공. 더 많은 대화는 Premium으로.',
        supportLink: '고객 지원',
        privacyLink: '개인정보 처리방침',
    },
    en: {
        back: 'Back to ZenithUs',
        badge: 'AI Emotional Chat Partner',
        title: 'ZenTalk',
        subtitle: 'ZenTalk',
        tagline: 'AI Zen Listens to Your Story',
        description: "Don't keep your feelings bottled up. Chat honestly with AI Zen anytime.",
        appStore: 'App Store',
        googlePlay: 'Google Play',
        zenGreeting: "Hi, I'm Zen. I'm here to hear everything that's deep in your heart. What's been going on?",
        userMsg: "I'm feeling a bit down today... Zen",
        zenReply: "Really? Sounds like today's been tough. Did something happen, or just one of those empty-feeling days? Tell me about it.",
        inputPlaceholder: 'Share your feelings...',
        chatLabel: 'Chat',
        profileLabel: 'Profile',
        todayChat: "Today's chat 1/10",
        premium: 'Premium',
        featuresTitle: 'What ZenTalk Offers',
        features: [
            {
                icon: MessageCircle,
                title: 'Chat with AI Zen',
                description: 'An AI partner who listens without judgment. Open up anytime.',
            },
            {
                icon: Lock,
                title: 'Private & Safe',
                description: 'Your personal chat space. Your emotions and stories are fully protected.',
            },
            {
                icon: Heart,
                title: 'Genuine Empathy',
                description: 'Not just answers — conversations with heartfelt understanding.',
            },
        ],
        comingSoonLabel: 'Coming Soon',
        comingSoon: [
            'Emotion log & history',
            'Community empathy features',
            'Emotion pattern analysis',
        ],
        ctaTitle: 'Start Chatting with AI Zen',
        ctaDesc: 'Free daily chats included. Unlimited with Premium.',
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

const ZenTalkLanding: React.FC = () => {
    const { lang } = useLang()
    const t = content[lang]

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ──────────────────────────────────────────── */}
            <section className="relative pt-32 pb-24 bg-[#0d0d0d]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/10 pointer-events-none" />

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
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                                <Sparkles className="w-3.5 h-3.5" />
                                {t.badge}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="/zentalk-icon.jpg"
                                    alt="ZenTalk Icon"
                                    className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                                />
                                <div>
                                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                                        {t.title}
                                    </h1>
                                    <p className="text-blue-400 font-semibold text-base mt-1">{t.subtitle}</p>
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

                        {/* Right — Actual Screenshot */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 -z-10" />
                                <img
                                    src="/zentalk-screenshot2.png"
                                    alt="ZenTalk App Screenshot"
                                    className="w-64 rounded-[40px] shadow-2xl shadow-blue-900/40 ring-1 ring-white/10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Features ──────────────────────────────────────── */}
            <section className="py-24 bg-[#111111]">
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
                                    className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">{f.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Screenshot Detail ─────────────────────────────── */}
            <section className="py-24 bg-[#0d0d0d]">
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
                                <div className="absolute inset-0 bg-purple-500/15 blur-3xl rounded-full scale-75 -z-10" />
                                <img
                                    src="/zentalk-screenshot.png"
                                    alt="ZenTalk Chat"
                                    className="w-56 rounded-[36px] shadow-2xl shadow-purple-900/30 ring-1 ring-white/10"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">AI Zen</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                {lang === 'ko'
                                    ? '언제든, 어디서든\n젠이 곁에 있어요'
                                    : 'Anytime, anywhere\nZen is with you'}
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                {lang === 'ko'
                                    ? 'AI 젠은 당신의 감정을 이해하고 공감하는 대화 파트너예요. 새벽에 잠 못 이루는 밤도, 특별할 것 없는 평범한 오후도 — 마음이 필요할 때 언제든 이야기하세요.'
                                    : 'AI Zen is a conversational partner who understands and empathizes with your emotions. Sleepless nights or ordinary afternoons — talk whenever your heart needs it.'}
                            </p>

                            {/* Coming soon — hidden during app review */}
                            {false && <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">{t.comingSoonLabel}</p>
                                <div className="space-y-2">
                                    {t.comingSoon.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                            <span className="text-neutral-400 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────── */}
            <section className="py-24 bg-gradient-to-br from-blue-900/40 via-[#111] to-purple-900/20 border-t border-neutral-800">
                <div className="section-container text-center">
                    <motion.div {...fadeUp}>
                        <img
                            src="/zentalk-icon.jpg"
                            alt="ZenTalk"
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
            <div className="py-8 border-t border-neutral-800 bg-[#0d0d0d]">
                <div className="section-container flex flex-wrap gap-6 justify-center text-sm font-medium">
                    <Link to="/support" className="text-neutral-500 hover:text-white transition-colors">
                        {t.supportLink}
                    </Link>
                    <Link to="/zentalk/privacy" className="text-neutral-500 hover:text-white transition-colors">
                        {t.privacyLink}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ZenTalkLanding
