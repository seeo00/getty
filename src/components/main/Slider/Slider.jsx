import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderContainer } from './style.js';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  const handleSlideClick = (index) => {
    console.log(`슬라이드 ${index + 1} 클릭됨`);
  };

  return (
    <SliderContainer>
      <Swiper
        slidesPerView={5}
        spaceBetween={12}
        centeredSlides={true}
        loop={true}
        initialSlide={2}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        breakpoints={{
          390: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                width: '100%',
                height: '200px',
                background: '#222',
                borderRadius: '16px',
                opacity: activeSlide === i ? 1 : 0.6,
                transform: activeSlide === i ? 'scale(1)' : 'scale(0.9)',
              }}
              onClick={() => handleSlideClick(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
