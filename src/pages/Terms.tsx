import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Terms: React.FC = () => {
    const { lang } = useLang()
    const t = translations[lang].terms

    // terms 항목 아래의 common 개별 객체를 불러옵니다.
    const termsData = (t as any).common

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

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-neutral-900">{t.title}</h1>
                            <p className="text-sm text-neutral-500 mt-1">{t.lastUpdated}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-neutral-100 p-8 md:p-12 shadow-sm">
                        <div className="prose prose-neutral max-w-none">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">{termsData.title}</h2>
                            <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                                {termsData.content}
                            </p>
                            
                            <div className="mt-12 pt-8 border-t border-neutral-100">
                                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                                    {lang === 'ko' ? '이용약관 관련 문의' : 'Contact for Terms Concerns'}
                                </h3>
                                <p className="text-neutral-600">
                                    {lang === 'ko'
                                        ? '본 이용약관에 관한 문의사항은 아래 이메일로 연락해 주시기 바랍니다.'
                                        : 'If you have any questions about these Terms of Service, please contact us at:'}
                                    <br />
                                    <a href="mailto:hello@zenithuslabs.com" className="text-brand-600 font-semibold hover:underline">
                                        hello@zenithuslabs.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Terms
