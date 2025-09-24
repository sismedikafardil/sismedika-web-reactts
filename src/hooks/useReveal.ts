import { useRef } from 'react'
import useInView from './useInView'
import type { Variants } from 'framer-motion'

type RevealOptions = {
  offset?: number
  scale?: number
  stiffness?: number
  damping?: number
  mass?: number
  opacityEase?: number[]
  opacityDuration?: number
  threshold?: number
  rootMargin?: string
  stagger?: number
}

export default function useReveal(opts?: RevealOptions) {
  const {
    offset = 72,
    scale = 0.95,
    stiffness = 90,
    damping = 22,
    mass = 1,
    opacityEase = [0.16, 1, 0.3, 1],
    opacityDuration = 0.5,
     threshold = 0.3,
     rootMargin = '0px 0px -30% 0px',
    stagger = 0.14,
  } = opts ?? {}

  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { threshold, rootMargin })

  const variants: { container: Variants; item: Variants } = {
    container: { hidden: {}, show: { transition: { staggerChildren: stagger, when: 'beforeChildren' } } },
    item: {
      hidden: { opacity: 0, y: offset, scale },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          y: { type: 'spring', stiffness, damping, mass },
          scale: { type: 'spring', stiffness, damping, mass },
          opacity: { duration: opacityDuration, ease: opacityEase },
        },
      },
    },
  }

  return { ref, inView, variants }
}
