import BannerV1 from '../components/organisms/BannerV1'
import AboutUsHome from '../components/organisms/AboutUsHome'
import OurClients from '../components/organisms/OurClients'
import OurJourney from '../components/organisms/OurJourney'
import OurPlatforms from '../components/organisms/OurPlatforms'
import ContactUs from '../components/organisms/ContactUs'

export default function Home() {
  return (
    <>
        <div className="-mt-8">
          <BannerV1
            heading={`The trusted path to hospital digitalization.`}
            paragraph={`We are your trusted partner for hospitals across Indonesia, delivering seamless digital transformation for better care.`}
            buttonLabel="Book a meeting"
            onButtonClick={() => console.log('Book a meeting clicked')}
          />
        </div>
        <OurClients />
        <AboutUsHome />
  <OurJourney />
  <OurPlatforms />
  <ContactUs />
    </>
  )
}

