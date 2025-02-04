import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderSectionContainer, SlideContent } from './styles';

const SliderSection = () => {
    return (
        <SliderSectionContainer>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={-20}
                centeredSlides
                loop
                speed={400}
                breakpoints={{
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: -40,
                    },
                }}
            >
                {[...Array(3)].map((_, i) => (
                    <SwiperSlide key={i}>
                        <SlideContent>슬라이드 {i + 1}</SlideContent>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderSectionContainer>
    );
};

export default SliderSection;
