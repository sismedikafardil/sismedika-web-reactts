import BannerV1 from '../components/molecules/BannerV1'
import AboutUsHome from '../components/molecules/AboutUsHome'
import OurClients from '../components/molecules/OurClients'
import OurJourney from '../components/molecules/OurJourney'
import OurPlatforms from '../components/molecules/OurPlatforms'

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
    </>
  )
}

