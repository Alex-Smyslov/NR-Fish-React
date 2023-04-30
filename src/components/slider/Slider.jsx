/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Slider.css';

// eslint-disable-next-line react/prop-types
function Slider({ slides }) {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={'cube'}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 80,
        shadowScale: 1,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.img} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
