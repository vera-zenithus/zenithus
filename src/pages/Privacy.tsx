import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, MessageSquare, Leaf, Camera } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const appMeta: Record<string, { icon: React.ReactNode; color: string; emoji: string }> = {
    zentalk: {
        icon: <MessageSquare className="w-6 h-6" />,
        color: 'bg-indigo-50 text-indigo-600',
        emoji: '💬',
    },
    greenstep: {
        icon: <Leaf className="w-6 h-6" />,
        color: 'bg-green-50 text-green-600',
        emoji: '🌿',
    },
    zengrip: {
        icon: <Camera className="w-6 h-6" />,
        color: 'bg-green-50 text-green-600',
        emoji: '📸',
    },
}

const Privacy: React.FC = () => {
    const { appName } = useParams<{ appName: string }>()
    const { lang } = useLang()
    const t = translations[lang].privacy

    const appPrivacy = appName && (t as any)[appName] ? (t as any)[appName] : null
    const meta = appName ? appMeta[appName] : null

    return (
        <div className="pt-32 pb-20">
            <div className="section-container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {appPrivacy ? (
                        <>
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${meta?.color ?? 'bg-brand-50 text-brand-600'}`}>
                                    {meta?.icon ?? <Shield className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h1 className="text-3xl font-extrabold text-neutral-900">{appPrivacy.title}</h1>
                                    <p className="text-sm text-neutral-500 mt-1">{t.lastUpdated}</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl border border-neutral-100 p-8 md:p-12 shadow-sm">
                                <div className="prose prose-neutral max-w-none">
                                    <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                                        {appPrivacy.content}
                                    </p>
                                    <div className="mt-12 pt-8 border-t border-neutral-100">
                                        <h3 className="text-lg font-bold text-neutral-900 mb-4">
                                            {lang === 'ko' ? '개인정보 관련 문의' : 'Contact for Privacy Concerns'}
                                        </h3>
                                        <p className="text-neutral-600">
                                            {lang === 'ko'
                                                ? '본 개인정보처리방침에 관한 문의사항은 아래 이메일로 연락해 주세요.'
                                                : 'If you have any questions about this Privacy Policy, please contact us at:'}
                                            <br />
                                            <a href="mailto:zenithuslabs@gmail.com" className="text-brand-600 font-semibold hover:underline">
                                                zenithuslabs@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-brand-600" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-extrabold text-neutral-900">{t.title}</h1>
                                    <p className="text-sm text-neutral-500 mt-1">{t.lastUpdated}</p>
                                </div>
                            </div>

                            <p className="text-neutral-500 mb-8 text-base">
                                {lang === 'ko'
                                    ? '확인하실 앱의 개인정보처리방침을 선택해 주세요.'
                                    : 'Please select an app to view its privacy policy.'}
                            </p>

                            <div className="grid sm:grid-cols-3 gap-5">
                                {Object.entries(appMeta).map(([key, m]) => {
                                    const appData = (t as any)[key]
                                    if (!appData) return null
                                    return (
                                        <Link
                                            key={key}
                                            to={`/${key}/privacy`}
                                            className="group bg-white border border-neutral-100 rounded-2xl p-6 hover:border-brand-200 hover:shadow-md transition-all duration-200"
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${m.color}`}>
                                                {m.icon}
                                            </div>
                                            <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-brand-600 transition-colors">
                                                {appData.title}
                                            </h3>
                                            <p className="text-xs text-neutral-400">{t.lastUpdated}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Privacy
