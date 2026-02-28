import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Heart, Sparkles } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const icons = [Leaf, Heart, Sparkles]
const gradients = ['from-brand-500 to-emerald-400', 'from-rose-500 to-orange-400', 'from-violet-500 to-indigo-400']

const Products: React.FC = () => {
    const { lang } = useLang()
    const t = translations[lang].products

    return (
        <section id="products" className="py-32 bg-white">
            <div className="section-container">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-4">{t.label}</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">{t.title}</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {t.items.map((item, index) => {
                        const Icon = icons[index]
                        return (
                            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group text-center py-16 px-8 rounded-3xl border border-neutral-100 hover:shadow-xl hover:border-neutral-200 transition-all duration-500">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900">{item.title}</h3>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-neutral-400 text-sm">
                    {t.teaser}
                </motion.p>
            </div>
        </section>
    )
}

export default Products
