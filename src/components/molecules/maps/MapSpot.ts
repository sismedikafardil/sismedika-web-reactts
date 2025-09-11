// Sample map spot data for maps in the app.
// Coordinates are percent values (0-100) relative to the map image container.
// Adjust x/y values manually to fine-tune placement on your specific map image.

export type MapSpotData = {
  id: string
  name: string
  x: number // percent 0-100
  y: number // percent 0-100
  items?: string[]
  description?: string
  total?: number
}

// Spots grouped by map key. Add more keys for other maps (e.g., 'world', 'java', ...)
export const spotsByMap: Record<string, MapSpotData[]> = {
  indonesia: [
    {
      id: 'jakarta',
      name: 'Greater Jakarta (DKI)',
      x: 26, // placeholder percent - tune manually
      y: 63,
      items: ['RS. Primaya Tangerang', 'RS. Primaya Bekasi Barat', 'Lab Westerindo', 'RSPAD Gatot Subroto', 'Lab Pramita', 'Many More'],
      total: 35,
    },
    {
      id: 'bandung',
      name: 'Bandung',
      x: 28,
      y: 68,
      items: ['RS. Primaya Rajawali'],
      total: 1,
    },
    {
      id: 'Karawang',
      name: 'Karawang',
      x: 29,
      y: 63,
      items: ['RS. Primaya Karawang'],
      total: 1,
    },
    {
      id: 'luwu',
      name: 'Luwu',
      x: 57,
      y: 44,
      items: ['RSU. Lagaligo'],
      total: 1,
    },
    {
      id: 'makassar',
      name: 'Makassar',
      x: 52,
      y: 55,
      items: ['RS. Primaya Hospital Makassar', 'RSU. Labuang Baji'],
      total: 2,
    },
    {
      id: 'pekanbaru',
      name: 'Pekanbaru',
      x: 12,
      y: 30,
      items: ['RS. Awalbros Sudirman', 'RS. Awalbros Hang Tuah', 'RS. Awalbros Panam', 'RS. Sansani', 'Many More'],
      total: 20,
    },
    {
      id: 'batam',
      name: 'Batam',
      x: 19,
      y: 25,
      items: ['RS. Awalbros Batam'],
      total: 1,
    },
    {
      id: 'sukabumi',
      name: 'Sukabumi',
      x: 25,
      y: 67,
      items: ['RS. Primaya Sukabumi'],
      total: 1,
    },
    {
      id: 'palembang',
      name: 'Palembang',
      x: 19,
      y: 46,
      items: ['RS. Awalbros Pelembang'],
      total: 1,
    },
    {
      id: 'semarang',
      name: 'Semarang',
      x: 36,
      y: 65,
      items: ['RS. Primaya Semarang'],
      total: 1,
    },
  ],
}

export function getSpotsForMap(mapKey = 'indonesia'): MapSpotData[] {
  return spotsByMap[mapKey] ?? []
}

export default spotsByMap
