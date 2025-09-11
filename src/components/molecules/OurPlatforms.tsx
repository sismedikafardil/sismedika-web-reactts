import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, JSX } from 'react'
import useReveal from '../../hooks/useReveal'
import Accounting from './solution/Accounting'
import His from './solution/His'
import HealthcareMobile from './solution/HealthcareMobile'
import SimServices from './solution/SimServices'

type Platform = {
  id: string
  label: string
  icon: string // font-awesome class
  content: string
}

const PLATFORMS: Platform[] = [
  {
    id: 'his',
    label: 'Hospital Information',
    icon: 'fa-solid fa-laptop-medical',
    content: 'Core HIS: EMR, registration, billing, pharmacy, lab, and radiology in one integrated platform.',
  },
  {
    id: 'accounting',
    label: 'Accounting',
    icon: 'fa-solid fa-file-invoice-dollar',
    content: 'Financials for healthcare: GL, AR/AP, invoicing, fixed assets, and management reporting.',
  },
  {
    id: 'mobile',
    label: 'Healthcare Mobile',
    icon: 'fa-solid fa-mobile-screen',
    content: 'Mobile apps for clinicians: rounds, e-prescription, tasking, approvals, and dashboards.',
  },
  {
    id: 'sim-services',
    label: 'SIM Services',
    icon: 'fa-solid fa-network-wired',
    content: 'Integrations (HL7/FHIR), interoperability, support, training, and rollout services.',
  },
]

export default function OurPlatforms({ className = '' }: { className?: string }) {
  // Default to Hospital Information (HIS)
  const [active, setActive] = useState<string>('his')
  const reveal = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12 })
  const MDiv = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element

  return (
    <section className={` w-full bg-gradient-to-r from-slate-50 to-sky-50 pt-0 pb-0 ${className}`}>
      <div className="mx-auto w-full px-[5%] pt-0">
      <div className="text-[#29AB9A] text-sm text-center font-semibold uppercase tracking-wide mb-6">OUR SOLUTION</div>
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">SISMEDIKA platforms for your end-to-end healthcare solution</h3>
        </div>
        <MDiv ref={reveal.ref} variants={reveal.variants.container} initial="hidden" animate={reveal.inView ? 'show' : 'hidden'} className="flex gap-4 items-center justify-center">
          {PLATFORMS.map((p) => (
            <MDiv key={p.id} variants={reveal.variants.item}>
              <button
                type="button"
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-sm transition-colors duration-150 border ${
                  active === p.id
                    ? 'bg-teal-100 border-teal-200'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
                aria-pressed={active === p.id}
              >
                <span className={`inline-flex items-center justify-center h-8 w-8 rounded-md bg-white ${
                  active === p.id ? 'border border-teal-300' : 'border border-transparent'
                }`}>
                  <i className={`${p.icon} text-base`} aria-hidden />
                </span>
                <span className="font-semibold">{p.label}</span>
              </button>
            </MDiv>
          ))}
        </MDiv>

        <div className="mt-6">
          {active === 'his' && (
            <MDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <His />
            </MDiv>
          )}
          {active === 'accounting' && (
            <MDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <Accounting />
            </MDiv>
          )}
          {active === 'mobile' && (
            <MDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <HealthcareMobile />
            </MDiv>
          )}
          {active === 'sim-services' && (
            <MDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <SimServices />
            </MDiv>
          )}
        </div>
      </div>
    </section>
  )
}
