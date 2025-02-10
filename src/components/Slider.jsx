import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderContainer } from './styles';

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        speed={400}
        breakpoints={{
          390: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 30,
          },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#333',
                borderRadius: '16px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
