import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CircleSlider, ContentHeader } from './styles';

const CircleSwiper = () => {
    const circleItems = Array(5).fill(null);

    return (
        <>
            <ContentHeader>
                <span>믿고 보는 웨이브 에디터 추천작</span>
                <span>{'>'}</span>
            </ContentHeader>
            <CircleSlider>
                <Swiper slidesPerView="auto" spaceBetween={12} centeredSlides={false} loop={false}>
                    {circleItems.map((_, i) => (
                        <SwiperSlide key={i}>
                            <div>스케일</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CircleSlider>
        </>
    );
};

export default CircleSwiper;
