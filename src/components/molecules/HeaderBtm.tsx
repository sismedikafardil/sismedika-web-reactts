import { useEffect, useState } from 'react'

export default function HeaderBtm({ className = '' }: { className?: string }) {
  const [topOffset, setTopOffset] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function updateOffset() {
      const hdr = document.querySelector('header') as HTMLElement | null
      const h = hdr ? Math.round(hdr.getBoundingClientRect().height) : 0
      setTopOffset(h)
    }

    function onScroll() {
      setScrolled(window.scrollY > 20)
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', updateOffset)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const baseBg = scrolled ? 'bg-slate-900' : 'bg-[#241043]'

  return (
    <div className={`${baseBg} text-white sticky z-40 ${className}`} style={{ top: `${topOffset}px` }}>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-15 py-1 px-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white">
              <i className="fa-solid fa-thumbs-up" aria-hidden="true" />
            </span>
            <span className="leading-none">Trusted by <strong className="font-semibold">1,000+</strong> Hospitals and Clinics</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-yellow-900">
              <i className="fa-solid fa-star" aria-hidden="true" />
            </span>
            <div className="flex items-center gap-2">
              <span className="ml-1 text-yellow-300 flex items-center gap-1" aria-hidden>
                <i className="fa-solid fa-star text-yellow-300 text-[12px]" />
                <i className="fa-solid fa-star text-yellow-300 text-[12px]" />
                <i className="fa-solid fa-star text-yellow-300 text-[12px]" />
                <i className="fa-solid fa-star text-yellow-300 text-[12px]" />
                <i className="fa-solid fa-star text-yellow-300 text-[12px]" />
              </span>
              <span className="font-semibold">excellent Services!</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white">
              <i className="fa-solid fa-lock" aria-hidden="true" />
            </span>
            <span className="leading-none">Advanced data security</span>
          </div>
        </div>
      </div>
    </div>
  )
}
