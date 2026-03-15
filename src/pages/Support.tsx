import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight, ChevronDown, ChevronUp, Search } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Support: React.FC = () => {
    const { lang } = useLang()
    const t = translations[lang].support
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [selectedApp, setSelectedApp] = useState('')
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const appName = selectedApp ? (t.apps as any)[selectedApp] : 'General'
        const emailBody = `From: ${formData.name}\nEmail: ${formData.email}\nApp: ${appName}\n\n${formData.message}`.trim()
        const mailtoLink = `mailto:zenithuslabs@gmail.com?subject=${encodeURIComponent(`[Support] ${appName} Inquiry`)}&body=${encodeURIComponent(emailBody)}`
        window.open(mailtoLink, '_blank')
        setFormData({ name: '', email: '', message: '' })
        setSelectedApp('')
    }

    return (
        <div className="pt-32 pb-20">
            <div className="section-container">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">{t.title}</h1>
                    <p className="text-xl text-neutral-500">{t.subtitle}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* FAQ Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-neutral-900 mb-8">{t.faqTitle}</h2>
                        <div className="space-y-4">
                            {t.faqs.map((faq, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                                    >
                                        <span className="font-semibold text-neutral-900">
                                            <span className="text-brand-600 mr-2">[{ (t.apps as any)[faq.app] }]</span>
                                            {faq.question}
                                        </span>
                                        {openFaq === index ? <ChevronUp className="w-5 h-5 text-neutral-400" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-4"
                                            >
                                                <p className="text-neutral-500 leading-relaxed pt-2 border-t border-neutral-50">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-2">{t.contactTitle}</h2>
                            <p className="text-neutral-400 mb-8">zenithuslabs@gmail.com</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">{t.selectApp}</label>
                                    <select
                                        name="app"
                                        required
                                        value={selectedApp}
                                        onChange={(e) => setSelectedApp(e.target.value)}
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-xl border-0 text-white placeholder-neutral-500 focus:ring-2 focus:ring-brand-500 transition-all text-sm appearance-none"
                                    >
                                        <option value="" disabled>{t.selectAppPlaceholder}</option>
                                        {Object.entries(t.apps).map(([key, name]) => (
                                            <option key={key} value={key}>{name as string}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            required 
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-800 rounded-xl border-0 text-white placeholder-neutral-500 focus:ring-2 focus:ring-brand-500 transition-all text-sm" 
                                            placeholder="Your name" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required 
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-800 rounded-xl border-0 text-white placeholder-neutral-500 focus:ring-2 focus:ring-brand-500 transition-all text-sm" 
                                            placeholder="Your email" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Message</label>
                                    <textarea 
                                        name="message" 
                                        required 
                                        rows={5} 
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-xl border-0 text-white placeholder-neutral-500 focus:ring-2 focus:ring-brand-500 transition-all resize-none text-sm" 
                                        placeholder="How can we help?" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all group"
                                >
                                    Send Message
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Support
