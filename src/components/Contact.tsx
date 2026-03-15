import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Contact: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].contact
  const supportT = translations[lang].support
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [selectedApp, setSelectedApp] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const appName = selectedApp ? (supportT.apps as any)[selectedApp] : 'General'
    const emailBody = `From: ${formData.name}\nEmail: ${formData.email}\nApp: ${appName}\nSubject: ${formData.subject}\n\n${formData.message}`.trim()
    const mailtoLink = `mailto:zenithuslabs@gmail.com?subject=${encodeURIComponent(`[${appName}] ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`
    window.open(mailtoLink, '_blank')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSelectedApp('')
  }

  return (
    <section id="contact" className="py-32 bg-neutral-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-4">{t.label}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">{t.title}</h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-10">{t.description}</p>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-neutral-100">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <a href="mailto:zenithuslabs@gmail.com" className="text-neutral-900 font-semibold hover:text-brand-600 transition-colors">zenithuslabs@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
              <div className="mb-5">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{supportT.selectApp}</label>
                <select 
                  name="app" 
                  value={selectedApp} 
                  onChange={(e) => setSelectedApp(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-0 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm appearance-none"
                >
                  <option value="">{supportT.selectAppPlaceholder}</option>
                  {Object.entries(supportT.apps).map(([key, name]) => (
                    <option key={key} value={key}>{name as string}</option>
                  ))}
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{t.nameLabel}</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-0 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm" placeholder={t.namePlaceholder} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{t.emailLabel}</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-0 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm" placeholder={t.emailPlaceholder} />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{t.subjectLabel}</label>
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-0 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm" placeholder={t.subjectPlaceholder} />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">{t.messageLabel}</label>
                <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-0 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none text-sm" placeholder={t.messagePlaceholder} />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white rounded-xl font-semibold text-sm hover:bg-neutral-800 transition-all group">
                {t.send}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact