import Typography from '../atoms/typography/Typography'
import usePointer from '../../hooks/usePointer'

type BannerV1Props = {
  heading?: string
  paragraph?: string
  buttonLabel?: string
  onButtonClick?: () => void
  imageSrc?: string
  imageAlt?: string
  className?: string
}

const MAX_HEADING = 90
const MAX_PARAGRAPH = 120

function truncate(text: string, max: number) {
  if (text.length <= max) return text
  console.warn(`BannerV1: truncated text from ${text.length} to ${max} characters.`)
  return text.slice(0, max - 1) + '…'
}

export default function BannerV1({
  heading = `The trusted path to hospital digitalization.`,
  paragraph = `We are your trusted partner for hospitals across Indonesia, delivering seamless digital transformation for better care.`,
  buttonLabel = 'Book a meeting',
  onButtonClick,
  imageSrc = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/img-banner-01.png',
  imageAlt = 'illustration',
  className = '-mt-8',
}: BannerV1Props) {
  const safeHeading = truncate(heading, MAX_HEADING)
  const safeParagraph = truncate(paragraph, MAX_PARAGRAPH)
  const pointerRef = usePointer({ selector: 'button, [role="button"]' })

  return (
  <section className={"w-full bg-gradient-to-r from-slate-50 to-sky-50 py-8 " + className}>
  <div className="mx-auto w-full px-[2.5em] md:px-[5%] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <Typography.H1 weight="extrabold" className="text-slate-900">
            {safeHeading}
          </Typography.H1>

          {safeParagraph && (
            <div className="mt-4">
              <Typography.Paragraph weight="normal" className="text-slate-600">
                {safeParagraph}
              </Typography.Paragraph>
            </div>
          )}

          <div className="mt-6">
            {/* attach pointer to the CTA */}
            <div ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
              <button
                type="button"
                onClick={onButtonClick}
                className="inline-flex items-center gap-3 px-5 py-3 bg-[#29AB9A] hover:bg-[#238d85] text-white rounded-md font-medium shadow-sm transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b57e6]"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="p-[10%]">
            {imageSrc ? (
              <img src={imageSrc} alt={imageAlt} className="w-[100%] max-w-md rounded-lg" />
            ) : (
              <div className="w-[80%] max-w-md h-44 md:h-64 bg-gradient-to-r from-emerald-100 to-sky-100 rounded-lg" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
