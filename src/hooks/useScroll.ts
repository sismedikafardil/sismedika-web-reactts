import { useEffect } from 'react'

export default function useScroll() {
  useEffect(() => {
    const onScroll = () => {
      // placeholder
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
