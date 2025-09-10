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
    <section className={'rounded-xl overflow-hidden -mt-20 ' + className}>
      <div className="container mx-auto">
        <h3 className="text-lg font-semibold mb-5 text-slate-900 text-center">
          Trusted by our hospital partners
        </h3>
      </div>

      <div className="bg-slate-900 text-white rounded-t-xl h-[7em] flex items-center">
  {/* Added padding left & right = 10% */}
  {/* moved up by 1em */}
  <div className="w-[90%] mx-auto -mt-4">
          <Swiper
            className="h-full"
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }, // lock to 5
              1280: { slidesPerView: 5 }, // keep 5 even on large screens
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            aria-label="Our clients carousel"
          >
            {DUMMY_CLIENTS.map((name) => (
              <SwiperSlide key={name}>
                <div className="h-full flex items-center justify-center">
                  <div className="w-32 rounded-md flex items-center justify-center">
                    <span className="text-sm font-medium text-white text-center px-2">
                      {name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
