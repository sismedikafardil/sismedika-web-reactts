export default function AboutUsHome({ className = '' }: { className?: string }) {
	return (
		<section className={"relative z-10 " + className} style={{ marginTop: '-5em' }}>
			{/* full-bleed gradient background */}
			<div
				className="w-full bg-gradient-to-b from-white to-[#29AB9A] rounded-t-2xl shadow-md"
				style={{ marginTop: '3em' }}
			>
				<div className="container mx-auto py-10 px-[5%]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" style={{ marginTop: '4em' }}>
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
								{/* background accents */}
								<div aria-hidden className="pointer-events-none absolute -top-6 -left-8 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,_#29AB9A_30%,_transparent_60%)] opacity-30 blur-xl" />
								<div aria-hidden className="pointer-events-none absolute -bottom-8 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,_#f59e0b_25%,_transparent_60%)] opacity-30 blur-2xl" />

								<div className="flex justify-center lg:justify-end">
									<div className="group relative w-full max-w-md md:max-w-lg h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 ring-1 ring-black/5">
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
		</section>
	)
}