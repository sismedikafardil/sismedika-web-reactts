import { useState, useEffect } from 'react'
import type { FC } from 'react'

export type Spot = {
  id: string
  x: number // percent (0-100)
  y: number // percent (0-100)
  title: string
  items?: string[]
  total?: number
}

const MapSpot: FC<Spot> = ({ x, y, title, items = [], total }) => {
  const [show, setShow] = useState(false)
  const left = `${x}%`
  const top = `${y}%`
  // uniform marker sizing for all spots

  // mounted controls delayed unmount so we can animate exit with CSS
  const [mounted, setMounted] = useState(show)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null
    if (show) setMounted(true)
    else {
      t = setTimeout(() => setMounted(false), 160)
    }
    return () => {
      if (t) clearTimeout(t)
    }
  }, [show])

  return (
    <div
      style={{ left, top }}
      className="absolute"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* zero-size anchor so the coordinate stays fixed regardless of tooltip size */}
      <div className="relative w-0 h-0 group">
        {/* marker centered at the anchor point */}
        <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
          {/* pulse ring behind marker (uniform size) */}
          <span className="absolute -z-10 rounded-full h-6 w-6 bg-orange-400 opacity-30 animate-ping" />

          <button
            onClick={() => setShow((s) => !s)} // toggle for mobile
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            className={`relative flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-white shadow-md transform transition-transform duration-150 group-hover:scale-110`}
            aria-label={title}
          >
            <span className="block rounded-full h-4 w-4 md:h-5 md:w-5 bg-gradient-to-br from-orange-400 to-red-600" />
          </button>

          {mounted && (
            <div
              className={`absolute left-0 top-full mt-2 w-56 origin-top-left bg-white rounded-md shadow-xl text-sm text-slate-800 p-3 transform transition-all duration-150 ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div className="font-semibold">{title}</div>
              {typeof total === 'number' && (
                <div className="text-xs text-slate-500 mt-1">
                  Total {total} {total === 1 ? 'Hospital' : 'Hospitals'}
                </div>
              )}
              {items.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      {it === 'Many More' ? (
                        // show italic link for many more
                        <a href="#" className="italic text-slate-700 hover:underline">and many more</a>
                      ) : (
                        <>
                          <span className="text-orange-500">🏥</span>
                          <span>{it}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MapSpot
