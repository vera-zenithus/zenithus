import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Research: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].research

  return (
    <section id="research" className="py-32 bg-neutral-50">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-4">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">{t.title}</h2>
          <p className="text-lg text-neutral-500 leading-relaxed">{t.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.areas.map((area, index) => (
            <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-neutral-100 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-neutral-300 tracking-widest">{area.number}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-brand-700 transition-colors">{area.title}</h3>
              <p className="text-sm text-neutral-400 mb-4">{area.subtitle}</p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research