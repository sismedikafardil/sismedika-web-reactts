export default function SocialIcon({ href = '#', iconClass = '', label = '' }: { href?: string; iconClass?: string; label?: string }) {
  return (
    <a href={href} aria-label={label} className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700">
      <i className={`${iconClass} text-sm`} aria-hidden />
    </a>
  )
}
