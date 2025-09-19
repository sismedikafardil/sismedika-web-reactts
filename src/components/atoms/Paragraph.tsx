import type { ComponentPropsWithoutRef, JSX } from 'react'
type Variant = 'normal' | 'semibold' | 'thin'

export default function Paragraph({
	children,
	variant = 'normal',
	className = '',
	...rest
}: ComponentPropsWithoutRef<'p'> & { variant?: Variant }) : JSX.Element {
	const base = 'mt-4 text-slate-600 max-w-2xl'
	const variantMap: Record<Variant, string> = {
		normal: base + ' font-normal',
		semibold: base + ' font-semibold',
		thin: base + ' font-thin',
	}
	const cls = `${variantMap[variant]} ${className}`.trim()
	return (
		<p className={cls} {...rest}>
			{children}
		</p>
	)
}
