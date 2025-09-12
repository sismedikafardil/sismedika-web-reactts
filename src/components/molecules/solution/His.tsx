import type { ComponentPropsWithoutRef, JSX } from 'react'
import { motion } from 'framer-motion'
import useReveal from '../../../hooks/useReveal'

export default function His(): JSX.Element {
    const reveal = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12 })
    const MDiv = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">
				{/* Transaction and Admission*/}
				<MDiv
					ref={reveal.ref}
					variants={reveal.variants.container}
					initial="hidden"
					animate={reveal.inView ? 'show' : 'hidden'}
					className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-6"
				>
					<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[60%]">
					<div className="grid gap-6">
						{/* Row 1: Left 60% text, Right 40% intentionally empty to preserve proportion */}
						<div>
							<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">Patient Transaction Management</h4>
							<p className="mt-2 text-slate-700">A Hospital Information System that streamlines end-to-end operations: admission, billing, discharge, and insurance workflows integrated in one seamless flow, ensuring efficiency, accuracy, and better patient experience across the entire hospital journey.</p>
							<img
								src={`${import.meta.env.BASE_URL}assets/his-image-1.png`}
								onError={(e) => {
									(e.currentTarget as HTMLImageElement).src = '/assets/his-image-1.png'
								}}
								alt="HIS illustration"
								loading="lazy"
								className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block mt-4 mb-4"
							/>
							<button type="button" className="mt-2 inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
								Learn more
							</button>
						</div>
						<div />
					</div>
					</MDiv>
					<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[40%]">
					<div className="grid gap-6">
						{/* Row 1: Left 60% text, Right 40% intentionally empty to preserve proportion */}
						<div>
							<img
								src={`${import.meta.env.BASE_URL}assets/lab.png`}
								onError={(e) => {
									(e.currentTarget as HTMLImageElement).src = '/assets/lab.png'
								}}
								alt="Laboratorium illustration"
								loading="lazy"
								className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block mb-4"
							/>
							<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">Smart Laboratorium</h4>
							<p className="mt-2 text-slate-700">Smart Laboratorium streamlines order entry, sample tracking, analyzer integration, QC, and result reporting. Connected to EMR and billing, it reduces errors and turnaround time for faster, reliable diagnostics across the hospital.</p>
							<button type="button" className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
								Learn more
							</button>
						</div>
						<div />
					</div>
					</MDiv>
				</MDiv>
				{/* Row 1: 60% / 40% */}
				<div className="mt-6 grid grid-cols-1 md:[grid-template-columns:60%_40%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-50 text-teal-700">
								<i className="fa-solid fa-file-medical" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Patient Transaction Management</div>
								<p className="text-slate-600 mt-1">Admission, billing, discharge, and insurance workflows in one flow.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-50 text-violet-600">
								<i className="fa-solid fa-vial" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Laboratory Information System</div>
								<p className="text-slate-600 mt-1">Orders, sample tracking, results, and QC integrated with EMR.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Row 2: 40% / 60% */}
				<div className="mt-4 grid grid-cols-1 md:[grid-template-columns:40%_60%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-amber-50 text-amber-600">
								<i className="fa-solid fa-bone" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Radiology Information System</div>
								<p className="text-slate-600 mt-1">Scheduling, modalities, and image/report workflows.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
								<i className="fa-solid fa-pills" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Pharmacy Information System</div>
								<p className="text-slate-600 mt-1">e-Prescription, stock control, dispensing, and audits.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

