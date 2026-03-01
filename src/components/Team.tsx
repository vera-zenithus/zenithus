import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Team: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].team

  const teams = [
    { icon: '🧠', title: 'AI Research' },
    { icon: '💻', title: 'Engineering' },
    { icon: '📊', title: 'Data Science' },
    { icon: '🎨', title: 'Design' },
  ]

  return (
    <section id="team" className="py-32 bg-white">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-4">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">{t.title}</h2>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-10 py-8 rounded-3xl bg-neutral-950 text-white">
            <p className="text-2xl font-bold tracking-tight mb-1">Vera H. Lee</p>
            <p className="text-sm text-brand-400 font-medium tracking-wide">Founder & Director / Ph.D.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teams.map((team, index) => (
            <motion.div key={team.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="text-center py-12 rounded-2xl border border-neutral-100 hover:shadow-lg hover:border-neutral-200 transition-all duration-300">
              <div className="text-4xl mb-4">{team.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900">{team.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-neutral-400 text-sm">
            <span className="font-semibold text-brand-600">{t.equation}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Team