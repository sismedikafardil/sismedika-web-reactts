import type { ComponentPropsWithoutRef, JSX } from 'react'
import { motion } from 'framer-motion'
import useReveal from '../../../hooks/useReveal'
import usePointer from '../../../hooks/usePointer'
import Paragraph from '../../atoms/Paragraph'
import Boxes from '../../atoms/Boxes'
import Button from '../../atoms/Button'
import HIS_SERVICES from './hisService'

export default function His(): JSX.Element {
	// CDN image sources defined locally (avoid BASE_URL concatenation)
	const IMG_PATIENT_TRANSACTION = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/his-image-1.png'
	const IMG_SMART_LAB = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/lab.png'
	const IMG_SMART_RAD = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/img-rad.png'
	const IMG_PHARMACY = 'https://cdn-fardil-2025.s3.us-east-2.amazonaws.com/uploads/img-rad.png'
    // Use two independent reveal hooks so each row animates when it enters view
	const revealTop = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12, threshold: 0.3, rootMargin: '0px 0px -30% 0px' })
	const revealBottom = useReveal({ offset: 72, stiffness: 90, damping: 20, stagger: 0.12, threshold: 0.3, rootMargin: '0px 0px -30% 0px' })
	const pointerRef = usePointer({ selector: 'button, [role="button"]' })
    const MDiv = motion.div as unknown as (props: ComponentPropsWithoutRef<'div'> & Record<string, unknown>) => JSX.Element
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">
				{/* Transaction and Lab neh*/}
				<MDiv
					ref={revealTop.ref}
					variants={revealTop.variants.container}
					initial="hidden"
					animate={revealTop.inView ? 'show' : 'hidden'}
					className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-6 mt-8 md:mt-10 transform-gpu"
					style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
				>
					<MDiv variants={revealTop.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[60%]">
					<div className="grid gap-6">
						{/* Variant 1: image, title, paragraph, button */}
						<Boxes variant="default" className="p-4">
							<img
								src={IMG_PATIENT_TRANSACTION}
								alt={HIS_SERVICES.patientTransaction.title}
								loading="lazy"
								className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block mb-4"
							/>
							<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">{HIS_SERVICES.patientTransaction.title}</h4>
							<Paragraph variant="normal" className="text-slate-700 mt-2">{HIS_SERVICES.patientTransaction.desc}</Paragraph>
							<div className="mt-4" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
								<Button className="bg-slate-900 hover:bg-slate-800 text-white">Learn more</Button>
							</div>
						</Boxes>
					</div>
					</MDiv>
					<MDiv variants={revealTop.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[40%] overflow-hidden relative">
					<div className="grid gap-6 overflow-hidden relative">
						{/* Variant 2: title, paragraph, image, button */}
						<Boxes variant="accent" className="p-4">
							<h4 className="mt-0 text-2xl md:text-3xl font-extrabold text-slate-900">{HIS_SERVICES.smartLab.title}</h4>
							<Paragraph variant="normal" className="text-slate-700 mt-2">{HIS_SERVICES.smartLab.desc}</Paragraph>
							<img
								src={IMG_SMART_LAB}
								alt={HIS_SERVICES.smartLab.title}
								loading="lazy"
								className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block mt-4 mb-2"
							/>
							<div className="mt-2" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
								<Button className="bg-slate-900 hover:bg-slate-800 text-white">Learn more</Button>
							</div>
						</Boxes>
					</div>
					</MDiv>
				</MDiv>
				{/* Row 1: 60% / 40% */}

				{/* Rad and Farmasi*/}
				<div className="mt-8 md:mt-6">
					<MDiv
						ref={revealBottom.ref}
						variants={revealBottom.variants.container}
						initial="hidden"
						animate={revealBottom.inView ? 'show' : 'hidden'}
						className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-6 transform-gpu"
						style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
					>
						<MDiv variants={revealBottom.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[40%] overflow-hidden relative">
							<div className="grid gap-6">
								{/* Variant: image-first (Radiology) */}
								<Boxes variant="accent" className="p-4 transform-gpu">
									<div className="w-full flex justify-center rounded-lg overflow-hidden">
										<img
											src={IMG_SMART_RAD}
											alt={HIS_SERVICES.smartRadiology.title}
											loading="lazy"
											className="w-[80%] h-64 md:h-80 object-contain mx-auto block"
											style={{ willChange: 'transform', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
										/>
									</div>
									<h4 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-900 relative z-[9999]">{HIS_SERVICES.smartRadiology.title}</h4>
									<Paragraph variant="normal" className="text-slate-700 mt-2">{HIS_SERVICES.smartRadiology.desc}</Paragraph>
									<div className="mt-3" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
										<Button className="bg-slate-900 hover:bg-slate-800 text-white">Learn more</Button>
									</div>
								</Boxes>
							</div>
						</MDiv>
						<MDiv variants={revealBottom.variants.item} className="rounded-2xl border border-sky-100 bg-white p-6 md:p-8 shadow-sm w-full md:w-[60%]">
							<div className="grid gap-6">
								{/* Variant: text-first (Pharmacy) */}
								<Boxes variant="default" className="p-4">
									<h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900">{HIS_SERVICES.pharmacy.title}</h4>
									<Paragraph variant="normal" className="text-slate-700 mt-2">{HIS_SERVICES.pharmacy.desc}</Paragraph>
									<img
										src={IMG_PHARMACY}
										alt={HIS_SERVICES.pharmacy.title}
										loading="lazy"
										className="w-[80%] h-auto object-contain max-h-64 md:max-h-80 mx-auto block mt-4 mb-4"
									/>
									<div className="mt-3" ref={pointerRef as unknown as import('react').RefObject<HTMLDivElement>}>
										<Button className="bg-slate-900 hover:bg-slate-800 text-white">Learn more</Button>
									</div>
								</Boxes>
							</div>
						</MDiv>
						</MDiv>
					</div>
					{/* Row 1: 60% / 40% */}
				
				
			</div>
		</div>
	)
}

