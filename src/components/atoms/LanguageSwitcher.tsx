export default function LanguageSwitcher({ label = 'English' }: { label?: string }) {
  return (
    <button className="px-3 py-1 rounded-full bg-slate-900 text-slate-200 text-xs flex items-center gap-2">
      <span className="text-[13px]">{label}</span>
    </button>
  )
}
