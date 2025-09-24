import { useEffect, useRef } from 'react'

type UsePointerOptions = {
  // CSS selector to delegate pointer behavior to child interactive elements
  selector?: string
}

/**
 * Hook that returns a ref to attach to a container. When hovering
 * over the container (or delegated selector), it sets `cursor: pointer`.
 *
 * Usage:
 * const ref = usePointer();
 * <div ref={ref}><button>Click</button></div>
 */
const usePointer = ({ selector }: UsePointerOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If selector provided, use event delegation: set pointer when hovering matching child
    if (selector) {
      const onEnter = (e: Event) => {
        const target = e.target as Element
        if (target && target.closest && target.closest(selector)) {
          (target as HTMLElement).style.cursor = 'pointer'
        }
      }
      const onLeave = (e: Event) => {
        const target = e.target as Element
        if (target && target.closest && target.closest(selector)) {
          ;(target as HTMLElement).style.cursor = ''
        }
      }

      el.addEventListener('pointerenter', onEnter as EventListener)
      el.addEventListener('pointerleave', onLeave as EventListener)

      return () => {
        el.removeEventListener('pointerenter', onEnter as EventListener)
        el.removeEventListener('pointerleave', onLeave as EventListener)
      }
    }

    // Otherwise apply pointer to the whole container on hover
    const onEnter = () => {
      if (ref.current) ref.current.style.cursor = 'pointer'
    }
    const onLeave = () => {
      if (ref.current) ref.current.style.cursor = ''
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [selector])

  return ref
}

export default usePointer