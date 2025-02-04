import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TopSection, ContentHeader, TopItem, TopNumber } from './styles';

const TopMovies = () => {
    const topMovieItems = Array.from({ length: 20 }, (_, index) => index + 1);

    return (
        <TopSection>
            <ContentHeader>오늘의 영화 TOP 20</ContentHeader>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={10}
                loop
                speed={400}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {topMovieItems.map((number) => (
                    <SwiperSlide key={number}>
                        <TopItem>
                            <TopNumber>{number}</TopNumber>
                        </TopItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TopSection>
    );
};

export default TopMovies;
