import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Hero: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].hero

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-neutral-950 to-neutral-950" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/8 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />
      </div>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 section-container w-full">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide">{t.badge}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            {t.title1}<br />
            <span className="gradient-text">{t.title2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12">
            {t.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold text-sm hover:bg-brand-400 hover:text-white transition-all duration-300 group">
              {t.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm text-white border border-white/15 hover:border-white/40 transition-all duration-300">
              {t.cta2}
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero