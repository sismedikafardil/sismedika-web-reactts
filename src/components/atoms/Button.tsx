import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'danger'
}

export default function Button({ variant = 'default', className = '', style, ...rest }: ButtonProps & { style?: React.CSSProperties }) {
  const base = 'inline-flex items-center rounded-md px-4 py-2 text-sm transition-colors'
  const variantClass =
    variant === 'ghost'
      ? 'bg-transparent text-slate-900 hover:bg-slate-100'
      : variant === 'danger'
      ? 'bg-red-600 text-white hover:bg-red-700'
      : 'bg-slate-900 text-white hover:bg-slate-800'
  // Use an inline SVG cursor that resembles a hand-pointer (similar to Font Awesome's pointer icon).
  // This avoids adding a separate asset and works cross-browser (with a pointer fallback).
  // Hotspot chosen roughly near the tip (8,0) — adjust if you need a different hotspot.
  // local PNG cursor (replace with high-quality 32x32 or .cur for best results)
  const cursorValue = "url('/assets/fa-hand-pointer.png') 8 0, pointer"

  const mergedStyle: React.CSSProperties = {
    ...(style || {}),
    cursor: cursorValue,
  }

  return (
    <button style={mergedStyle} className={`${base} ${variantClass} ${className}`} {...(rest as ButtonProps)} />
  )
}
