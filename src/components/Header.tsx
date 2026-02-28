import React, { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../context/LangContext'
import translations from '../i18n/translations'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang, toggleLang } = useLang()
  const t = translations[lang].nav

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.about, href: '#about' },
    { name: t.products, href: '#products' },
    { name: t.research, href: '#research' },
    { name: t.team, href: '#team' },
    { name: t.contact, href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-100'
          : 'bg-transparent'
        }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img src="/zenithus-logo.png" alt="ZenithUs Labs" className="w-9 h-9" />
            <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
              ZenithUs Labs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled
                    ? 'text-neutral-500 hover:text-neutral-900'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 ${isScrolled
                  ? 'border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400'
                  : 'border-white/20 text-white/60 hover:text-white hover:border-white/50'
                }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'ko' ? 'EN' : '한국어'}
            </button>

            <a
              href="#contact"
              className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${isScrolled
                  ? 'bg-neutral-900 text-white hover:bg-neutral-700'
                  : 'bg-white text-neutral-900 hover:bg-white/90'
                }`}
            >
              {t.getInTouch}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors ${isScrolled
                  ? 'border-neutral-200 text-neutral-500'
                  : 'border-white/20 text-white/60'
                }`}
            >
              {lang === 'ko' ? 'EN' : '한국어'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-neutral-700' : 'text-white'
                }`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl mt-2 shadow-xl border border-neutral-100 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-neutral-600 hover:text-neutral-900 font-medium border-b border-neutral-50 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center py-3 mt-2 bg-neutral-900 text-white rounded-xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.getInTouch}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header