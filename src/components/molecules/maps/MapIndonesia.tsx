import { useEffect, useMemo, useState } from 'react'
import type { FC } from 'react'
import MapSpot, { type Spot } from './MapSpot'

type Cluster = {
  key: string
  label: string
  spots: Spot[]
  cx: number
  cy: number
}

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

  // simple mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  // group spots into simple regions based on x coordinate
  const clusters: Cluster[] = useMemo(() => {
    if (!spots || spots.length === 0) return []
    const groups: Record<string, Spot[]> = { west: [], central: [], east: [] }
    for (const s of spots) {
      if (s.x <= 40) groups.west.push(s)
      else if (s.x <= 70) groups.central.push(s)
      else groups.east.push(s)
    }
    const makeCluster = (key: string, label: string, arr: Spot[]): Cluster => {
      if (arr.length === 0) return { key, label, spots: [], cx: 50, cy: 50 }
      const cx = Math.round(arr.reduce((acc, v) => acc + v.x, 0) / arr.length)
      const cy = Math.round(arr.reduce((acc, v) => acc + v.y, 0) / arr.length)
      return { key, label, spots: arr, cx, cy }
    }
    return [makeCluster('west', 'West', groups.west), makeCluster('central', 'Central', groups.central), makeCluster('east', 'East', groups.east)]
  }, [spots])

  const [openCluster, setOpenCluster] = useState<string | null>(null)

  return (
    <div className={`relative ${className}`}>
      <img src={mapSrc} alt={alt} className={`${height} w-full object-contain opacity-90 rounded-lg origin-center block`} />

      {/* render spots positioned using percent coordinates */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile &&
          spots.map((s) => (
            <div key={s.id} className="pointer-events-auto">
              <MapSpot {...s} />
            </div>
          ))}

        {/* mobile: render clusters (simple buttons) */}
        {isMobile &&
          clusters.map((c) =>
            c.spots.length > 0 ? (
              <div key={c.key} style={{ left: `${c.cx}%`, top: `${c.cy}%` }} className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setOpenCluster((prev) => (prev === c.key ? null : c.key))}
                    className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md"
                    aria-expanded={openCluster === c.key}
                  >
                    {c.spots.length}
                  </button>
                  {openCluster === c.key && (
                    <div className="mt-2 w-48 bg-white rounded-md shadow-lg text-sm text-slate-800 p-2">
                      <div className="font-semibold mb-1">{c.label} region</div>
                      <ul className="space-y-1">
                        {c.spots.map((s) => (
                          <li key={s.id} className="flex items-center gap-2">
                            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left text-slate-700 w-full">
                              {s.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  )
}

export default MapIndonesia
