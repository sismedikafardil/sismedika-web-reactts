import BannerV1 from '../components/organisms/BannerV1'
import AboutUsHome from '../components/organisms/AboutUsHome'
import CaseStudies from '../components/organisms/CaseStudies'
import OurClients from '../components/organisms/OurClients'
import OurJourney from '../components/organisms/OurJourney'
import OurPlatforms from '../components/organisms/OurPlatforms'
import ContactUs from '../components/organisms/ContactUs'

export default function Home() {
  return (
    <>
        <BannerV1 />
        <OurClients />
        <AboutUsHome />
  <OurJourney />
  <OurPlatforms />
  <CaseStudies />
  <ContactUs />
    </>
  )
}

