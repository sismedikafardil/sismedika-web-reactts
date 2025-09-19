import type { ComponentPropsWithoutRef, JSX } from 'react'
import { motion } from 'framer-motion'
import useReveal from '../../../hooks/useReveal'
import Paragraph from '../../atoms/Paragraph'

export default function His(): JSX.Element {
    const reveal = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12 })
    const MDiv = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">
				{/* Transaction and Lab neh*/}
				<MDiv
					ref={reveal.ref}
					variants={reveal.variants.container}
					initial="hidden"
					animate={reveal.inView ? 'show' : 'hidden'}
					className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-6 mt-8 md:mt-10"
				>
					<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[60%]">
					<div className="grid gap-6">
						{/* Row 1: Left 60% text, Right 40% intentionally empty to preserve proportion */}
						<div>
							<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">Patient Transaction Management</h4>
								<Paragraph variant="normal" className="text-slate-700">
	                                A Hospital Information System that streamlines end-to-end operations: admission, billing, discharge, and insurance workflows integrated in one seamless flow, ensuring efficiency, accuracy, and better patient experience across the entire hospital journey.
	                            </Paragraph>
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
					<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[40%] overflow-hidden relative">
					<div className="grid gap-6 overflow-hidden relative">
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
								<Paragraph variant="normal" className="text-slate-700">
	                                Smart Laboratorium streamlines order entry, sample tracking, analyzer integration, QC, and result reporting. Connected to EMR and billing, it reduces errors and turnaround time for faster, reliable diagnostics across the hospital.
	                            </Paragraph>
							<button type="button" className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
								Learn more
							</button>
						</div>
						<div />
					</div>
					</MDiv>
				</MDiv>
				{/* Row 1: 60% / 40% */}

				{/* Rad and Farmasi*/}
				<div className="mt-8 md:mt-6">
					<MDiv
						ref={reveal.ref}
						variants={reveal.variants.container}
						initial="hidden"
						animate={reveal.inView ? 'show' : 'hidden'}
						className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-6"
					>
						<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[40%] overflow-hidden relative">
						<div className="grid gap-6">
							{/* Radiology card: keep image masked but move the whole content down together */}
							<div className="pt-6 md:pt-2">
								<div className="w-full flex justify-center rounded-lg">
									<img
										src={`${import.meta.env.BASE_URL}assets/img-rad.png`}
										onError={(e) => {
											(e.currentTarget as HTMLImageElement).src = '/assets/img-rad.png'
										}}
										alt="Radiology illustration"
										loading="lazy"
										className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block transform scale-[1.7]"
									/>
								</div>
								<h4 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900 relative z-[9999]">Smart Radiologi</h4>
									<Paragraph variant="normal" className="text-slate-700">
										Smart Radiology streamlines imaging orders, scheduling, and modality integration (X-Ray, CT, MRI, Ultrasound) with PACS/RIS. Connected to EMR and billing, it enables seamless viewing, standardized reporting, and faster turnaround, ensuring accurate, efficient diagnostics across the hospital.
									</Paragraph>
									<button type="button" className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
										Learn more
									</button>
								</div>
								<div />
							</div>
							</MDiv>
							<MDiv variants={reveal.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[60%]">
							<div className="grid gap-6">
								{/* Row 1: Left 60% text, Right 40% intentionally empty to preserve proportion */}
								<div>
									<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">Pharmacy Information System</h4>
										<Paragraph variant="normal" className="text-slate-700">
										A Hospital Information System that streamlines end-to-end operations: admission, billing, discharge, and insurance workflows integrated in one seamless flow, ensuring efficiency, accuracy, and better patient experience across the entire hospital journey.
										</Paragraph>
										<img
											src={`${import.meta.env.BASE_URL}assets/his-pharmacy.png`}
											onError={(e) => {
												(e.currentTarget as HTMLImageElement).src = '/assets/his-pharmacy.png'
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
						</MDiv>
					</div>
					{/* Row 1: 60% / 40% */}
				
				
			</div>
		</div>
	)
}

