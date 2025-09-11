

import type { JSX } from 'react'

export default function SimServices(): JSX.Element {
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">
				{/* Row 1: 60% / 40% */}
				<div className="mt-6 grid grid-cols-1 md:[grid-template-columns:60%_40%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-sky-50 text-sky-600">
								<i className="fa-solid fa-gauge-high" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Robust Performance</div>
								<p className="text-slate-600 mt-1">High availability, scalability, and secure data handling.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-rose-50 text-rose-600">
								<i className="fa-solid fa-headset" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">24/7 Support</div>
								<p className="text-slate-600 mt-1">Always-on support and proactive monitoring.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Row 2: 40% / 60% */}
				<div className="mt-4 grid grid-cols-1 md:[grid-template-columns:40%_60%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
								<i className="fa-solid fa-percent" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">80%+ BPJS Success Claim</div>
								<p className="text-slate-600 mt-1">Optimized workflows to drive successful claims.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500">
								<i className="fa-solid fa-screwdriver-wrench" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Installation & Troubleshoot</div>
								<p className="text-slate-600 mt-1">Deployment, training, and ongoing maintenance.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



