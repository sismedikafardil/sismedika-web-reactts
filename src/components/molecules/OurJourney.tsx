import { motion } from 'framer-motion'
import useReveal from '../../hooks/useReveal'
import type { ComponentPropsWithoutRef, JSX } from 'react'

const milestones = [
  { year: '2009', title: 'Founded', desc: 'Sismedika launched to modernize hospital operations.', icon: 'fa-solid fa-flag' },
  { year: '14+', title: 'Years', desc: 'Over a decade of continuous product and service improvements.', icon: 'fa-solid fa-calendar-days' },
  { year: '18+', title: 'Projects', desc: 'Delivered mission-critical systems across hospitals and clinics.', icon: 'fa-solid fa-diagram-project' },
  { year: '100+', title: 'Products', desc: 'And projects already released with satisfaction!', icon: 'fa-solid fa-box' },
]

export default function OurJourney({ className = '' }: { className?: string }) {
  const reveal = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12 })
  const M = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element
  // resolve public asset path reliably across dev/prod
  const _base = (import.meta.env && (import.meta.env.BASE_URL as string)) || '/'
  const base = _base.endsWith('/') ? _base : `${_base}/`
  const mapSrc = `${base}assets/indonesia-map.png`

  return (
    <section className={`w-full py-12 ${className}`}>
      <div className="container mx-auto px-[5%]">
        <div className="text-center mb-8">
          <div className="text-sm font-semibold text-[#29AB9A] uppercase tracking-wide">Our Story</div>
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
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-xl font-extrabold text-slate-900"><span className="text-[#29AB9A] mr-2">{m.year}</span>{m.title}</div>
                        <div className="text-sm text-slate-600 mt-1">{m.desc}</div>
                      </div>
                    </div>
                  </div>
                </M>
              )
            })}
          </div>

          {/* standalone map section (not part of reveal) */}
          <div className="w-full flex flex-col items-center mt-[7em]">
            <div className="text-center mb-6">
              <div className="text-lg font-extrabold">Nationwide impact</div>
              <div className="text-sm text-slate-600">Sismedika systems run across hospitals nationwide.</div>
            </div>
            <div className="flex items-center justify-center">
              {/* scale map to approximately 4x the original h-24 (24rem = h-96) */}
              <img src={mapSrc} alt="Indonesia map" className="h-96 w-auto opacity-90 rounded-lg origin-center" />
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}