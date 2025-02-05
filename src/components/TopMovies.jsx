// TopMovies.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TopSection, ContentHeader, TopItem, TopNumber } from './styles';

const TopMovies = () => {
    return (
        <TopSection>
            <ContentHeader>오늘의 영화 TOP 20</ContentHeader>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                speed={400}
                breakpoints={{
                    390: {
                        slidesPerView: 2.2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
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
