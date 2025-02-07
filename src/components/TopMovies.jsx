import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TopSection, ContentHeader, TopItem, TopNumber } from './styles';

const TopMovies = () => {
    return (
        <TopSection>
            <ContentHeader>오늘의 영화 TOP 20</ContentHeader>
            <Swiper
                slidesPerView="auto"
                spaceBetween={12}
                loop={false}
                breakpoints={{
                    390: {
                        slidesPerView: 2.2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                }}
            >
                {[...Array(20)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <TopItem>
                            <TopNumber>{index + 1}</TopNumber>
                        </TopItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TopSection>
    );
};

export default TopMovies;
