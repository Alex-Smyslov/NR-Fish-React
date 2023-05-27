/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import './SliderBanner.scss';

// eslint-disable-next-line react/prop-types
function SliderBanner({ slides }) {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.img} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderBanner;
