import FooterTopNav from '../molecules/footer/FooterTopNav'
import FooterColumn from '../molecules/footer/FooterColumn'
import FooterSocials from '../molecules/footer/FooterSocials'
import FooterBottomNav from '../molecules/footer/FooterBottomNav'
import Paragraph from '../atoms/Paragraph'

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full bg-[#0b0b0c] text-slate-200 mt-12" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <FooterTopNav />

      <div className="container mx-auto py-10 px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start gap-4">
            <img src="/assets/sismedika-logo.png" alt="Sismedika" className="h-16 w-auto object-contain" />
            <Paragraph variant="normal" className="text-sm text-slate-400 max-w-xs">Building secure, compliant healthcare platforms that scale with your organization.</Paragraph>
            <FooterSocials />
          </div>

          <FooterColumn title="Products" links={["Sismedika Platform","Clinical Apps","Analytics","Integrations"]} />
          <FooterColumn title="Platform" links={["API & SDKs","Security","Compliance","Pricing"]} />
          <FooterColumn title="Industries" links={["Healthcare","Pharma","Fintech","Education"]} />
          <FooterColumn title="Resources" links={["Blog","Customer Stories","Webinars & events","Case studies"]} />
        </div>

        <FooterBottomNav />
      </div>
    </footer>
  )
}
