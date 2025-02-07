import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CircleSlider, ContentHeader } from './style.js';

const CircleSwiper = () => {
  const [showAll, setShowAll] = useState(false);
  const circleItems = Array(20).fill(null);

  const displayItems = showAll ? circleItems : circleItems.slice(0, 5);

  const handleMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleContentClick = (index) => {
    console.log(`콘텐츠 ${index + 1} 클릭됨`);
  };

  return (
    <>
      <ContentHeader>
        <span>믿고 보는 웨이브 에디터 추천작</span>
        <span onClick={handleMoreClick}>{showAll ? '접기' : '더보기'}</span>
      </ContentHeader>
      <CircleSlider>
        <Swiper slidesPerView="auto" spaceBetween={12} centeredSlides={false} loop={false}>
          {displayItems.map((_, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  background: '#222',
                  borderRadius: '50%',
                }}
                onClick={() => handleContentClick(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CircleSlider>
    </>
  );
};

export default CircleSwiper;
