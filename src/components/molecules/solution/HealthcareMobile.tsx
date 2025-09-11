import type { JSX } from 'react'

export default function HealthcareMobile(): JSX.Element {
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-6xl px-0">
				{/* Row 1: 60% / 40% */}
				<div className="mt-6 grid grid-cols-1 md:[grid-template-columns:60%_40%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
								<i className="fa-solid fa-user-doctor" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Clinician Apps</div>
								<p className="text-slate-600 mt-1">Rounds, orders, e-prescription, and approvals on-the-go.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
								<i className="fa-solid fa-bell" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Tasks & Notifications</div>
								<p className="text-slate-600 mt-1">Real-time tasking with alerts and escalation rules.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Row 2: 40% / 60% */}
				<div className="mt-4 grid grid-cols-1 md:[grid-template-columns:40%_60%] gap-4 md:gap-5">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
								<i className="fa-solid fa-chart-column" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">Dashboards</div>
								<p className="text-slate-600 mt-1">KPIs and analytics available from anywhere securely.</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<div className="flex items-start gap-3">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500">
								<i className="fa-solid fa-ellipsis" aria-hidden />
							</div>
							<div>
								<div className="text-lg font-bold text-slate-900">And many more</div>
								<p className="text-slate-600 mt-1">Telemedicine, patient apps, queueing, and more.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}