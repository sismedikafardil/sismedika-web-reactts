import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import { Title } from '../atoms/typography/Typography'
import Boxes from '../atoms/Boxes'
import type { JSX } from 'react'
import usePointer from '../../hooks/usePointer'

export default function CaseStudies(): JSX.Element {
  const pointerRef = usePointer({ selector: 'button, [role="button"]' })
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="mx-auto w-full px-6 md:px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* left: text card (will overlap the image on the right) */}
          <div className="relative z-20 lg:pr-6">
            <Boxes style={{ marginTop: '0.5rem', marginRight: '-4rem' }} className="md:w-[95%] lg:w-[85%]">
              <Title className="text-2xl md:text-3xl text-slate-900">Case studies</Title>
              <Paragraph variant="normal" className="mt-4 text-slate-700">
                See how hospitals reduced wait times, increased throughput, and improved patient satisfaction using SISMEDIKA.
              </Paragraph>

              <ul className="mt-4 list-disc list-inside text-slate-700">
                <li>Reduced average wait time by 30%</li>
                <li>Automated billing and claims processing</li>
                <li>Integrated imaging workflow across facilities</li>
              </ul>

              <div className="mt-6" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
                <Button>View all case studies</Button>
              </div>
            </Boxes>
          </div>

          {/* right: image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src="https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/case-study.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/case-study.png";
                }}
                alt="Case study"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
