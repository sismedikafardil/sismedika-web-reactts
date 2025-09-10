export default function AboutUsHome({ className = '' }: { className?: string }) {
	return (
		<section className={"relative z-10 " + className} style={{ marginTop: '-5em' }}>
			{/* full-bleed gradient background */}
			<div
				className="w-full bg-gradient-to-b from-white to-[#29AB9A] rounded-t-2xl shadow-md"
				style={{ marginTop: '3em' }}
			>
				<div className="container mx-auto py-10 px-[5%]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" style={{ marginTop: '4em' }}>
						{/* left: heading + paragraph + stats */}
						<div className="space-y-6">
							<div>
								<h2 className="text-3xl font-extrabold text-slate-900">Empowering your success with our solutions</h2>
								<p className="mt-4 text-slate-600 max-w-2xl">
									Struggling to stay organized, our users found the perfect solution with Sismedika. By
									simplifying hospital workflows and boosting team collaboration, they've achieved more in less
									time.
								</p>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="text-left">
									<div className="text-2xl font-bold">15k</div>
									<div className="text-sm text-slate-500">Global downloads</div>
									<div className="h-0.5 bg-yellow-300 w-14 mt-3" />
								</div>
								<div className="text-left">
									<div className="text-2xl font-bold">$20M</div>
									<div className="text-sm text-slate-500">Return investment</div>
									<div className="h-0.5 bg-yellow-300 w-14 mt-3" />
								</div>
								<div className="text-left">
									<div className="text-2xl font-bold">200+</div>
									<div className="text-sm text-slate-500">5-star reviews</div>
									<div className="h-0.5 bg-yellow-300 w-14 mt-3" />
								</div>
								<div className="text-left">
									<div className="text-2xl font-bold">500</div>
									<div className="text-sm text-slate-500">Projects completed</div>
									<div className="h-0.5 bg-yellow-300 w-14 mt-3" />
								</div>
							</div>
						</div>

						{/* right: image */}
						<div className="space-y-6">
							<div className="flex justify-center lg:justify-end">
								<div className="w-full max-w-lg h-64 md:h-80 bg-gray-50 rounded-xl overflow-hidden shadow-md">
									<img src="/src/assets/karyawan-sismed.png" alt="Karyawan Sismedika" className="w-full h-full object-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}