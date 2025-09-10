import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const DUMMY_CLIENTS = [
  'PRIMAYA HOSPITAL',
  'RS AWALBROS',
  'RSPAD',
  'RSU LAGALIGO',
  'KLINIK IVF',
  'LINK MEDIS SEHAT',
  'RS SANSANI',
  'KLINIK MATA EYEQU',
  'RS PERTAMINA',
  'RSCM',
  'RS SIPAKABAJI',
  'RS UKRIDA',
]

export default function OurClients({ className = '' }: { className?: string }) {
  return (
    <section className={"rounded-xl overflow-hidden -mt-20 " + className}>
      <div className="container mx-auto">
        <h3 className="text-lg font-semibold mb-[19px] text-slate-900 text-center">Trusted by our hospital partners</h3>
      </div>
      <div className="bg-slate-900 text-white rounded-t-xl h-[7em] flex items-center">
        <div className="container mx-auto -mt-8">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            aria-label="Our clients carousel"
          >
            {DUMMY_CLIENTS.map((name) => (
              <SwiperSlide key={name} className="!w-auto">
          <div className="w-40 sm:w-44 h-12 rounded-md flex items-center justify-center mx-auto">
            <span className="text-sm font-medium text-white">{name}</span>
          </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
