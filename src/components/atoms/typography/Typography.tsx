import React from 'react'
import type { Weight } from './tokens'

const weightClass: Record<Weight, string> = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

/**
 * Size presets for headings and title elements. Adjust to taste.
 */
const sizeClass = {
  h1: 'text-4xl md:text-5xl leading-[1.05]',
  h2: 'text-3xl md:text-4xl leading-tight',
  h3: 'text-2xl md:text-3xl leading-tight',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
  title: 'text-2xl md:text-3xl',
  paragraph: 'text-base md:text-lg leading-7',
}

export type TypographyProps = {
  children: React.ReactNode
  weight?: Weight
  className?: string
}

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Title = ({ children, weight = 'bold', className }: TypographyProps) => {
  return (
    <div className={cx(sizeClass.title, weightClass[weight], className)}>
      {children}
    </div>
  )
}

export const H1 = ({ children, weight = 'extrabold', className }: TypographyProps) => (
  <h1 className={cx(sizeClass.h1, weightClass[weight], className)}>{children}</h1>
)

export const H2 = ({ children, weight = 'bold', className }: TypographyProps) => (
  <h2 className={cx(sizeClass.h2, weightClass[weight], className)}>{children}</h2>
)

export const H3 = ({ children, weight = 'semibold', className }: TypographyProps) => (
  <h3 className={cx(sizeClass.h3, weightClass[weight], className)}>{children}</h3>
)

export const H4 = ({ children, weight = 'medium', className }: TypographyProps) => (
  <h4 className={cx(sizeClass.h4, weightClass[weight], className)}>{children}</h4>
)

export const H5 = ({ children, weight = 'medium', className }: TypographyProps) => (
  <h5 className={cx(sizeClass.h5, weightClass[weight], className)}>{children}</h5>
)

export const Paragraph = ({ children, weight = 'normal', className }: TypographyProps) => (
  <p className={cx(sizeClass.paragraph, weightClass[weight], className)}>{children}</p>
)

/**
 * Helpful exports for consumers who want the available tokens.
 */
export default {
  Title,
  H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
}
