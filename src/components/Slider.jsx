// Slider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderContainer } from './styles';

const Slider = () => {
    return (
        <SliderContainer>
            <Swiper
                slidesPerView={4.5}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                initialSlide={1}
                speed={400}
                breakpoints={{
                    390: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.5,
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
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                            }}
                        >
                            슬라이드 {i + 1}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderContainer>
    );
};

export default Slider;
