import Paragraph from '../../atoms/Paragraph'

type ImageViewProps = {
  src: string
  alt: string
  className?: string
  heightClass?: string
  ratio?: string
  caption?: string
  hoverText?: string
}

export default function ImageView({
  src,
  alt,
  className = '',
  heightClass = '',
  ratio = '2/3',
  caption = 'Meet the SisMedika team behind your hospital digitalization journey',
  hoverText = 'Our passionate team, dedicated to transforming healthcare with technology.',
}: ImageViewProps) {
  return (
    <div
      className={`group relative w-full max-w-md md:max-w-lg ${heightClass} rounded-2xl overflow-hidden shadow-xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 ring-1 ring-white/30 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      {/* bottom gradient caption */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-3 py-2">
          <Paragraph variant="normal" className="text-[11px] md:text-xs text-white/90">{caption}</Paragraph>
        </div>
      </div>
      {/* hover overlay text */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-lg bg-black/55 text-white p-3 shadow-sm">
            <Paragraph variant="normal" className="text-xs md:text-sm">{hoverText}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}
