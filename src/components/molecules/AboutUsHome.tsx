import { ImageView } from './image-view'

export default function AboutUsHome({ className = '' }: { className?: string }) {
	return (
		<section className={"relative z-10 " + className} style={{ marginTop: '-5em' }}>
			{/* refined split background: white (left) / teal (right) with diagonal divider */}
			<div
				className="relative w-full rounded-t-2xl shadow-md overflow-hidden bg-white"
				style={{ marginTop: '3em' }}
			>
				{/* right-side teal with diagonal cut */}
				<div
					className="absolute inset-y-0 right-0 w-full lg:w-[64%] bg-[#29AB9A]"
					style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
					aria-hidden
				/>
				{/* soft shadow-ish divider between areas (vertical accent on large screens) */}
				<div className="hidden lg:block absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent" aria-hidden />
				{/* subtle geometric shapes on the right */}
				<div className="pointer-events-none absolute inset-0" aria-hidden>
					{/* circle outlines */}
					<div className="absolute top-10 right-[22%] h-16 w-16 rounded-full border border-white/30 opacity-30" />
					<div className="absolute bottom-16 right-[8%] h-24 w-24 rounded-full border border-white/20 opacity-20" />
					{/* tiny plus signs using rotated elements */}
					<div className="absolute top-24 right-[12%] opacity-30">
						<div className="relative h-4 w-4 text-white/60">
							<span className="absolute inset-0 h-[1px] w-full bg-white/60" />
							<span className="absolute inset-0 w-[1px] h-full bg-white/60" />
						</div>
					</div>
					<div className="absolute bottom-24 right-[28%] opacity-20">
						<div className="relative h-5 w-5 text-white/60">
							<span className="absolute inset-0 h-[1px] w-full bg-white/60" />
							<span className="absolute inset-0 w-[1px] h-full bg-white/60" />
						</div>
					</div>
					{/* gentle wave overlay near middle to suggest curvature */}
					<svg className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[38%] opacity-15" width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 45 C40 10, 80 80, 120 45 S 200 10, 220 45" stroke="white" strokeOpacity="0.35" strokeWidth="2" fill="none" />
					</svg>
				</div>
				<div className="relative z-10">
					<div className="container mx-auto py-12 px-[5%]">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={{ marginTop: '2.5em' }}>
						{/* left: heading + paragraph + stats */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-extrabold text-slate-900">Transforming healthcare through smarter digital solutions</h2>
								<p className="mt-4 text-slate-600 max-w-2xl">
									Hospitals and clinics across Indonesia trust SISMEDIKA to simplify complex workflows, from admissions to EMR. By streamlining operations and enabling seamless collaboration, our healthtech solutions empower medical teams to focus on what matters most—better patient care.
								</p>
							</div>
							{/* stats as cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* hospitals digitalized */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
											<i className="fa-solid fa-hospital" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-[#29AB9A]">100+</div>
											<div className="text-sm text-slate-600 mt-1">Hospitals digitalized</div>
										</div>
									</div>
								</div>
								{/* satisfied stakeholders */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">
											<i className="fa-solid fa-users" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-cyan-600">10.000+</div>
											<div className="text-sm text-slate-600 mt-1">Satisfied stakeholders</div>
										</div>
									</div>
								</div>
								{/* patient records managed */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
											<i className="fa-solid fa-file-medical" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-violet-600">5M+</div>
											<div className="text-sm text-slate-600 mt-1">Patient records managed</div>
										</div>
									</div>
								</div>
								{/* BPJS claims resolved */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
											<i className="fa-solid fa-circle-check" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-emerald-600">80%+</div>
											<div className="text-sm text-slate-600 mt-1">BPJS claims resolved</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* right: image + overlays + accents */}
						<div className="space-y-6">
							<div className="relative">
								<div className="flex justify-center lg:justify-end">
									{/* ImageView: primaya-hospital card */}
									{/** Using Vite asset URL so bundling and cache-busting work */}
									<ImageView
										src={new URL('../../assets/primaya-hospital.png', import.meta.url).href}
										alt="Primaya Hospital"
										heightClass="h-56 md:h-72"
										caption="Primaya Hospital — trusted partner in digital healthcare transformation"
										hoverText="Delivering reliable, human-centered healthtech for hospitals across Indonesia."
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		</section>
	)
}