import LanguageSwitcher from '../../atoms/LanguageSwitcher'
import FooterLink from '../../atoms/FooterLink'

export default function FooterTopNav() {
  return (
    <div className="border-b border-slate-800">
      <div className="flex items-center justify-between px-[5%] py-3 text-sm text-slate-400">
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <FooterLink>About us</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>G2 customer reviews</FooterLink>
          <FooterLink>Press & media</FooterLink>
          <FooterLink>Pricing</FooterLink>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <FooterLink>Contact</FooterLink>
          <FooterLink>Support</FooterLink>
        </div>
      </div>
    </div>
  )
}
