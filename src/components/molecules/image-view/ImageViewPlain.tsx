type ImageViewPlainProps = {
  src: string
  alt: string
  className?: string
  ratio?: string
}

export default function ImageViewPlain({
  src,
  alt,
  className = '',
  ratio = '2/3',
}: ImageViewPlainProps) {
  return (
    <div
      className={`relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-lg ${className}`}
      style={{ aspectRatio: ratio }}
    >
  <img src={src} alt={alt} className="w-full h-full object-cover" loading="eager" />
    </div>
  )
}
