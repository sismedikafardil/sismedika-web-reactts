import SocialIcon from '../../atoms/SocialIcon'

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-3 mt-2">
      <SocialIcon href="#" iconClass="fa-brands fa-x" label="twitter" />
      <SocialIcon href="https://www.linkedin.com/company/pt-sistem-integrasi-medika-sismedika" iconClass="fa-brands fa-linkedin-in" label="linkedin" />
      <SocialIcon href="https://www.facebook.com/61559316723981/about/?_rdr" iconClass="fa-brands fa-facebook-f" label="facebook" />
      <SocialIcon href="#" iconClass="fa-brands fa-instagram" label="instagram" />
    </div>
  )
}
