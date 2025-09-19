import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import useReveal from '../../hooks/useReveal'
import type { ComponentPropsWithoutRef, JSX } from 'react'
import Paragraph from '../atoms/Paragraph'
import Boxes from '../atoms/Boxes'
import MapIndonesia from '../molecules/maps/MapIndonesia'
import { getSpotsForMap } from '../molecules/maps/MapSpot'

const milestones = [
  { year: '2009', title: 'Founded', desc: 'Sismedika launched to modernize hospital operations.', icon: 'fa-solid fa-flag' },
  { year: '14+', title: 'Years', desc: 'Over a decade of continuous product and service improvements.', icon: 'fa-solid fa-calendar-days' },
  { year: '18+', title: 'Projects', desc: 'Delivered mission-critical systems across hospitals and clinics.', icon: 'fa-solid fa-diagram-project' },
  { year: '100+', title: 'Products', desc: 'And projects already released with satisfaction!', icon: 'fa-solid fa-box' },
]

export default function OurJourney({ className = '' }: { className?: string }) {
  const reveal = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12 })
  const M = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element
  // MapIndonesia component handles public asset resolution
  const sectionRef = useRef<HTMLElement | null>(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    // rAF-throttled scroll handler for smooth, performant parallax
    let ticking = false
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
  // compute a stronger parallax offset based on section position
  const intensity = 0.28 // between 0.25–0.3 for a sturdy feel
  const raw = -rect.top * intensity
  const offset = Math.max(-120, Math.min(120, raw)) // widened clamp to ±120px

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setParallaxY(offset)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const _base = (import.meta.env && (import.meta.env.BASE_URL as string)) || '/'
  const base = _base.endsWith('/') ? _base : `${_base}/`
  const decoSrc = `${base}assets/karyawan-sismed.png`

  return (
  <section ref={sectionRef} className={`w-full pt-0 pb-0 mb-0 relative overflow-hidden ${className}`}>
      {/* decorative parallax background image (fills section, low opacity) */}
      <img
        src={decoSrc}
        alt="decorative staff"
        aria-hidden
        // pointer-events-none + absolute full-cover; we use translate3d for GPU accel
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
  style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.08)`, transformOrigin: 'center', opacity: 0.2, willChange: 'transform' }}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          if (img.src.endsWith('/assets/karyawan-sismed.png')) return
          img.src = '/assets/karyawan-sismed.png'
        }}
      />
  <div className="container mx-auto px-[5%] relative z-10 mt-[6em]">
        <div className="text-center mb-8">
          <div className="text-sm font-semibold text-[#29AB9A] uppercase tracking-wide" style={{ marginBottom: '1em' }}>Our Story</div>
          <h3 className="text-2xl md:text-3xl font-extrabold">Over 14 years of innovation in hospital information systems.</h3>
        </div>

        <div>
          <div ref={reveal.ref} className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-9 md:gap-6">
            {/* center gradient line: limited to the reveal/timeline area */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-1 -translate-x-1/2 rounded-full" style={{ background: 'linear-gradient(180deg,#14b8a6,#f97316)' }} aria-hidden />
            {milestones.map((m, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              const colStart = i % 2 === 0 ? 'md:col-start-1 md:col-end-5' : 'md:col-start-6 md:col-end-10'
              return (
                <M key={m.year} variants={reveal.variants.item} initial="hidden" animate={reveal.inView ? 'show' : 'hidden'} className={`md:col-span-4 ${colStart} flex md:justify-${side === 'left' ? 'end' : 'start'}`}>
                  <div className="max-w-sm md:max-w-xs">
                    <div className="flex items-center gap-4 md:items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg,#14b8a6,#f97316)' }}>
                          <i className={`${m.icon} text-lg`} aria-hidden />
                        </div>
                      </div>
                      <Boxes variant="elevated" className="p-4 rounded-xl">
                        <div className="text-xl font-extrabold text-slate-900"><span className="text-[#29AB9A] mr-2">{m.year}</span>{m.title}</div>
                        <div className="text-sm text-slate-600 mt-1">{m.desc}</div>
                      </Boxes>
                    </div>
                  </div>
                </M>
              )
            })}
          </div>

          {/* standalone map section (not part of reveal) */}
          <div className="w-full flex flex-col items-center mt-12 md:mt-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-extrabold">Nationwide impact</h3>
            <Paragraph variant="normal" className="text-sm text-slate-600 mt-[2em] px-[2em] max-w-4xl mx-auto">
              Sismedika solutions run across hospitals nationwide, providing integrated hospital information systems that streamline clinical workflows, enable real-time analytics, ensure data security and compliance, and support staff training and operational efficiency. We are proud to be present in more than <strong>30 major cities</strong> across Indonesia.
            </Paragraph>
            </div>
            <div className="flex items-center justify-center">
              {/* reusable map component with default Jakarta spot (percent coords) */}
              <MapIndonesia
                height="h-96"
                spots={getSpotsForMap('indonesia').map((s) => ({ id: s.id, x: s.x, y: s.y, title: s.name, items: s.items, total: s.total }))}
              />
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}