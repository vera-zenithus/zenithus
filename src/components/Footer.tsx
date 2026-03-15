import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Footer: React.FC = () => {
  const { lang } = useLang()
  const t = translations[lang].footer
  const nav = translations[lang].nav
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { name: nav.about, href: '/#about' },
      { name: nav.research, href: '/#research' },
      { name: nav.team, href: '/#team' },
      { name: nav.contact, href: '/#contact' },
    ],
    resources: [
      { name: t.blog, href: '#' },
      { name: t.publications, href: '#' },
      { name: t.faq, href: '/support' },
    ],
    legal: [
      { name: t.privacy, href: '/zentalk/privacy' },
      { name: t.terms, href: '#' },
    ],
  }

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="section-container py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/zenithus-logo.png" alt="ZenithUs Labs" className="w-8 h-8" />
              <span className="font-bold text-lg tracking-tight">ZenithUs Labs</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              {t.tagline1}<br />{t.tagline2}
            </p>
            <a href="mailto:zenithuslabs@gmail.com" className="text-sm text-neutral-400 hover:text-brand-400 transition-colors">
              zenithuslabs@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">{t.company}</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</a>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">{t.resources}</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</Link>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">{t.legal}</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</Link>
                  ) : (
                    <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-4">
          <p className="text-xs text-neutral-600">© {currentYear} {t.copyright}</p>
          <p className="text-xs text-neutral-700 tracking-widest uppercase">{t.slogan}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer