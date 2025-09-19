import type { ReactNode, ElementType } from 'react'

export type BoxesVariant = 'default' | 'elevated' | 'glass' | 'outline' | 'accent'

type BoxesProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: BoxesVariant
  as?: ElementType
}

const VARIANT_CLASSES: Record<BoxesVariant, string> = {
  default: 'bg-white rounded-2xl p-8 border border-slate-100 shadow-sm',
  elevated: 'bg-white rounded-2xl p-8 border border-slate-100 shadow-lg transform hover:-translate-y-1 transition',
  glass: 'bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-sm',
  outline: 'bg-transparent rounded-xl p-4 border border-slate-200/60',
  accent: 'bg-white rounded-2xl p-6 border border-slate-100 ring-1 ring-emerald-200/30 relative',
}

export default function Boxes({ children, className = '', style, variant = 'default', as = 'div' }: BoxesProps) {
  const Tag = as || 'div'
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.default

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag className={(variantClass + ' ' + className).trim() as any} style={style}>
      {children}
    </Tag>
  )
}
