import type { FC } from 'react'
import MapSpot, { type Spot } from './MapSpot'

type MapProps = {
  src?: string
  alt?: string
  height?: string // Tailwind height class, e.g. 'h-96'
  className?: string
  spots?: Spot[]
}

const MapIndonesia: FC<MapProps> = ({ src, alt = 'Indonesia map', height = 'h-96', className = '', spots = [] }) => {
  const _base = (import.meta.env && (import.meta.env.BASE_URL as string)) || '/'
  const base = _base.endsWith('/') ? _base : `${_base}/`
  const defaultSrc = `${base}assets/indonesia-map.png`
  const mapSrc = src || defaultSrc

  return (
    <div className={`relative ${className}`}>
      <img src={mapSrc} alt={alt} className={`${height} w-full object-contain opacity-90 rounded-lg origin-center block`} />

      {/* render spots positioned using percent coordinates */}
      <div className="absolute inset-0 pointer-events-none">
        {spots.map((s) => (
          <div key={s.id} className="pointer-events-auto">
            <MapSpot {...s} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MapIndonesia
