import { useState } from 'react'
import type { FC } from 'react'

export type Spot = {
  id: string
  x: number // percent (0-100)
  y: number // percent (0-100)
  title: string
  items?: string[]
}

const MapSpot: FC<Spot> = ({ x, y, title, items = [] }) => {
  const [show, setShow] = useState(false)
  const left = `${x}%`
  const top = `${y}%`

  return (
    <div
      style={{ left, top }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button
        onClick={() => setShow((s) => !s)} // toggle for mobile
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="h-4 w-4 rounded-full bg-[#14b8a6] border-2 border-white shadow-md"
        aria-label={title}
      />

      {show && (
        <div
          className="mt-2 w-48 bg-white rounded-md shadow-lg text-sm text-slate-800 p-2"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className="font-semibold">{title}</div>
          {items.length > 0 && (
            <ul className="mt-1 list-disc list-inside">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default MapSpot
