import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
}

const About: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].about

  return (
    <section id="about" className="py-32 bg-white">
      <div className="section-container">
        <motion.div {...fadeInUp} className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-4">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
            {t.title1}<br />{t.title2}
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">{t.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {t.values.map((value, index) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group p-8 rounded-2xl border border-neutral-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-5">{value.emoji}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...fadeInUp} className="bg-neutral-950 rounded-3xl p-10 text-white">
            <p className="text-xs font-semibold text-brand-400 tracking-widest uppercase mb-4">{t.visionLabel}</p>
            <h3 className="text-2xl font-bold mb-4 leading-snug">{t.visionTitle}</h3>
            <p className="text-neutral-400 leading-relaxed">{t.visionDesc}</p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-brand-50 rounded-3xl p-10">
            <p className="text-xs font-semibold text-brand-600 tracking-widest uppercase mb-4">{t.missionLabel}</p>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-snug">{t.missionTitle}</h3>
            <p className="text-neutral-600 leading-relaxed">{t.missionDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About