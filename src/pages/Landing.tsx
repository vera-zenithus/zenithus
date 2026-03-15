import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Box, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Landing: React.FC = () => {
    const { appName } = useParams<{ appName: string }>()
    const { lang } = useLang()
    const appData = appName && (translations[lang] as any)[appName] ? (translations[lang] as any)[appName] : null

    if (!appData) {
        return (
            <div className="pt-32 pb-20 text-center">
                <p>App not found.</p>
                <Link to="/" className="text-brand-600 hover:underline mt-4 inline-block">Go back home</Link>
            </div>
        )
    }

    return (
        <div className="pt-32 pb-20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to ZenithUs
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200">
                                <Box className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
                                {appData.title}
                            </h1>
                            <p className="text-xl text-neutral-500 leading-relaxed mb-8">
                                {appData.description}
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-all">
                                    App Store
                                </button>
                                <button className="px-8 py-3 border border-neutral-200 text-neutral-900 rounded-xl font-bold hover:bg-neutral-50 transition-all">
                                    Google Play
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl">
                                {/* Placeholder for App Screenshot */}
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-bold uppercase tracking-widest text-xs">
                                    App Preview Screenshot
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[appData.feature1, appData.feature2, appData.feature3].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
                                <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">{feature}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">
                                    {lang === 'ko' ? '서비스의 핵심 가치를 경험해 보세요.' : 'Experience the core value of our service.'}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-wrap gap-6 justify-center text-sm font-medium">
                        <Link to="/support" className="text-neutral-500 hover:text-brand-600 transition-colors">
                            {lang === 'ko' ? '고객 지원' : 'Support'}
                        </Link>
                        <Link to={`/${appName}`} className="text-neutral-500 hover:text-brand-600 transition-colors">
                            {lang === 'ko' ? '마케팅 페이지' : 'Marketing'}
                        </Link>
                        <Link to={`/${appName}/privacy`} className="text-neutral-500 hover:text-brand-600 transition-colors">
                            {lang === 'ko' ? '개인정보 처리방침' : 'Privacy Policy'}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Landing
