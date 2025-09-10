import BannerV1 from '../components/molecules/BannerV1'
import AboutUsHome from '../components/molecules/AboutUsHome'
import OurClients from '../components/molecules/OurClients'
import Footer from '../components/molecules/Footer'

export default function Home() {
  return (
    <>
      <main className="container mx-auto flex-1 space-y-12">
        <BannerV1
        heading={`The trusted path to hospital digitalization.`}
        paragraph={`We are your trusted partner for hospitals across Indonesia, delivering seamless digital transformation for better care.`}
        buttonLabel="Book a meeting"
        onButtonClick={() => console.log('Book a meeting clicked')}
      />
        <OurClients />
        <AboutUsHome />
      </main>
      <Footer />
    </>
  )
}

