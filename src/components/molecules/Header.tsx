import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HeaderBtm from './HeaderBtm'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerBg = scrolled ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-900 shadow-sm'

  return (
    <>
      <header className={`${headerBg} sticky top-0 z-50 transition-colors duration-200`}>
        <div className="px-[5%] py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/sismedika-logo.png" alt="Sismedika" className="h-14" />
          </Link>
        </div>

  <nav className="hidden md:flex items-center gap-12">
          <Link to="/products" className={`text-sm font-medium ${scrolled ? 'text-white hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'}`}>
            Our Products
          </Link>
          <Link to="/services" className={`text-sm font-medium ${scrolled ? 'text-white hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'}`}>
            Our Services
          </Link>
          <Link to="/stories" className={`text-sm font-medium ${scrolled ? 'text-white hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'}`}>
            Customer Stories
          </Link>
          <Link to="/resources" className={`text-sm font-medium ${scrolled ? 'text-white hover:text-slate-200' : 'text-slate-700 hover:text-slate-900'}`}>
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`hidden md:inline-block text-sm font-medium px-4 py-2 rounded-md transition-colors duration-150 ${scrolled ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-[#29AB9A] text-white hover:bg-[#1a7a6e]'}`}
          >
            Contact Us
          </Link>

          {/* Locale dropdown: EN / ID with flags */}
          <LocaleDropdown scrolled={scrolled} />

          <button className="md:hidden p-2 rounded-md bg-slate-100">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        </div>
      </header>
      <HeaderBtm />
    </>
  )
}

function LocaleDropdown({ scrolled }: { scrolled: boolean }) {
  const [locale, setLocale] = useState<'en' | 'id'>('en')
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((o) => !o)
  const select = (l: 'en' | 'id') => {
    setLocale(l)
    setOpen(false)
  }

  const btnClass = scrolled
    ? 'hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-transparent text-white hover:bg-white/5 border border-transparent'
    : 'hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 text-sm text-slate-700 hover:bg-slate-100 border'

  const dropdownClass = scrolled ? 'absolute right-0 mt-2 w-40 bg-slate-800 text-white rounded-md shadow-lg z-50' : 'absolute right-0 mt-2 w-40 bg-white text-slate-900 rounded-md shadow-lg z-50'

  const itemHover = scrolled ? 'hover:bg-slate-700' : 'hover:bg-slate-100'

  return (
    <div className="relative">
      <button onClick={toggleOpen} className={btnClass} aria-haspopup="menu" aria-expanded={open}>
        <span className="text-lg">{locale === 'en' ? '🇬🇧' : '🇮🇩'}</span>
        <span className="font-medium">{locale === 'en' ? 'EN' : 'ID'}</span>
        <i className="fa fa-caret-down ml-1" aria-hidden />
      </button>

      {open && (
        <div className={dropdownClass}>
          <button onClick={() => select('en')} className={`w-full text-left px-3 py-2 flex items-center gap-3 ${itemHover}`}>
            <span className="text-lg">🇬🇧</span>
            <span>English</span>
          </button>
          <button onClick={() => select('id')} className={`w-full text-left px-3 py-2 flex items-center gap-3 ${itemHover}`}>
            <span className="text-lg">🇮🇩</span>
            <span>Bahasa</span>
          </button>
        </div>
      )}
    </div>
  )
}
