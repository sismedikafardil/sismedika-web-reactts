import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import { Title } from '../atoms/typography/Typography'
import type { JSX } from 'react'

export default function ContactUs(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="relative rounded-2xl bg-white shadow-md border border-slate-100 p-8 md:p-12 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center gap-6">
          <div>
            <Title className="text-3xl md:text-4xl">Talk to our team</Title>
            <Paragraph variant="normal" className="mt-4 text-slate-700">
              Ready to improve patient experience and operational efficiency? Our team
              will listen to your priorities and propose a clear, practical roadmap.
            </Paragraph>
            <Paragraph variant="normal" className="mt-4 text-slate-700">
              We’ve helped hospitals reduce wait times, automate billing, and integrate
              imaging workflows — book a short call to discuss your use case.
            </Paragraph>

            <div className="mt-6">
              <Button>Talk to our team</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-44 md:w-96 md:h-60">
              {/* Decorative stacked image effect */}
              <div className="absolute -left-6 -top-6 w-64 h-44 md:w-96 md:h-60 rounded-lg bg-emerald-100 transform rotate-[-12deg]" />
              <img
                src={`${import.meta.env.BASE_URL}assets/img-rad.png`}
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = '/assets/img-rad.png'
                }}
                alt="Decorative radiology"
                className="relative w-full h-full object-cover rounded-lg drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
