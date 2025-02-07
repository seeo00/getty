import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TopSection, ContentHeader, TopItem, TopNumber } from './style.js';

const TopMovies = () => {
  const [showAll, setShowAll] = useState(false);

  const handleMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleTopMovieClick = (index) => {
    console.log(`TOP ${index + 1} 콘텐츠 클릭됨`);
  };

  return (
    <TopSection>
      <ContentHeader>
        <span>오늘의 영화 TOP 20</span>
        <span onClick={handleMoreClick}>{showAll ? '접기' : '더보기'}</span>
      </ContentHeader>
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
        {Array(showAll ? 20 : 5)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <TopItem onClick={() => handleTopMovieClick(index)}>
                <TopNumber>{index + 1}</TopNumber>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#222',
                    borderRadius: '16px',
                  }}
                />
              </TopItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </TopSection>
  );
};

export default TopMovies;
