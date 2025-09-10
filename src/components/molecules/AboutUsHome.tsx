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
								<h2 className="text-3xl font-extrabold text-slate-900">Empowering your success with our solutions</h2>
								<p className="mt-4 text-slate-600 max-w-2xl">
									Struggling to stay organized, our users found the perfect solution with Sismedika. By
									simplifying hospital workflows and boosting team collaboration, they've achieved more in less
									time.
								</p>
							</div>
							{/* stats as cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* downloads */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
											<i className="fa-solid fa-download" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-[#29AB9A]">15k</div>
											<div className="text-sm text-slate-600 mt-1">Global downloads</div>
										</div>
									</div>
								</div>
								{/* ROI */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
											<i className="fa-solid fa-dollar-sign" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-emerald-600">$20M</div>
											<div className="text-sm text-slate-600 mt-1">Return on investment</div>
										</div>
									</div>
								</div>
								{/* reviews */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
											<i className="fa-solid fa-star" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-amber-500">200+</div>
											<div className="text-sm text-slate-600 mt-1">5-star reviews</div>
										</div>
									</div>
								</div>
								{/* projects */}
								<div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow">
									<div className="flex items-start gap-3">
										<div className="h-10 w-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
											<i className="fa-solid fa-briefcase" aria-hidden="true"></i>
										</div>
										<div>
											<div className="text-3xl font-extrabold leading-none text-orange-500">500</div>
											<div className="text-sm text-slate-600 mt-1">Projects completed</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* right: image + overlays + accents */}
						<div className="space-y-6">
							<div className="relative">
								<div className="flex justify-center lg:justify-end">
									<div className="group relative w-full max-w-md md:max-w-lg h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 ring-1 ring-white/30">
										<img
											src="/src/assets/karyawan-sismed.png"
											alt="Karyawan Sismedika"
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
										/>
										{/* bottom gradient caption */}
										<div className="absolute inset-x-0 bottom-0">
											<div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-3 py-2">
												<p className="text-[11px] md:text-xs text-white/90">Meet the SisMedika team behind your hospital digitalization journey</p>
											</div>
										</div>
										{/* hover overlay text */}
										<div className="absolute inset-0 flex items-center justify-center text-center px-6">
											<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<div className="rounded-lg bg-black/55 text-white p-3 shadow-sm">
													<p className="text-xs md:text-sm">Our passionate team, dedicated to transforming healthcare with technology.</p>
												</div>
											</div>
										</div>
									</div>
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