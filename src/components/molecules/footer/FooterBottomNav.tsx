import FooterLink from '../../atoms/FooterLink'

export default function FooterBottomNav() {
  return (
    <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
      <div className="mb-3 md:mb-0">© {new Date().getFullYear()} Sismedika. All rights reserved.</div>
      <div className="flex items-center gap-6">
        <FooterLink>Disclaimer</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Legal Hub</FooterLink>
        <FooterLink>Whistleblower Policy</FooterLink>
      </div>
    </div>
  )
}
