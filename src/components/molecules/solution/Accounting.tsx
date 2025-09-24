import type { JSX } from 'react'
import Paragraph from '../../atoms/Paragraph'
import Boxes from '../../atoms/Boxes'
import Button from '../../atoms/Button'
import usePointer from '../../../hooks/usePointer'
import AIS_SERVICES from './aisService'

export default function Accounting(): JSX.Element {
	const pointerRef = usePointer({ selector: 'button, [role="button"]' })

	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">

				{/* Row 1: 60% / 40% */}
				<div className="mt-6 grid grid-cols-1 md:[grid-template-columns:60%_40%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<Boxes variant="default" className="p-4 flex items-start gap-4">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-50 text-teal-700">
								<i className="fa-solid fa-laptop-medical" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">{AIS_SERVICES.hospitalIntegration.title}</div>
								<Paragraph variant="normal" className="text-slate-600 mt-1 max-w-none">{AIS_SERVICES.hospitalIntegration.desc}</Paragraph>
								<div className="mt-3" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
									<Button className="bg-slate-900 hover:bg-slate-800 text-white">Learn more</Button>
								</div>
							</div>
						</Boxes>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
								<i className="fa-solid fa-chart-line" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Manage your Profit and Loss</div>
								<Paragraph variant="normal" className="text-slate-600 mt-1 max-w-none">Real-time P&amp;L, drill-down reports, and cost center tracking.</Paragraph>
							</div>
						</div>
					</div>
				</div>

				{/* Row 2: 40% / 60% */}
				<div className="mt-4 grid grid-cols-1 md:[grid-template-columns:40%_60%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
								<i className="fa-solid fa-file-invoice" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Invoice &amp; Claim Support</div>
								<Paragraph variant="normal" className="text-slate-600 mt-1 max-w-none">Automate invoicing and BPJS claim reconciliation with audit logs.</Paragraph>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500">
								<i className="fa-solid fa-ellipsis" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">and many more</div>
								<Paragraph variant="normal" className="text-slate-600 mt-1 max-w-none">Fixed assets, AR/AP, cash management, and consolidated reporting.</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

