import FooterLink from '../../atoms/FooterLink'

export default function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-3">{title}</h4>
      <ul className="text-sm text-slate-400 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <FooterLink href="#">{l}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
