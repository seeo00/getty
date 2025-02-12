import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import mainSwiper from '../../../assets/api/mainSwiper';

const CircleSwiper = styled(Swiper)`
  width: 1480px; /* 265px * 5 + spaceBetween 고려 */
  height: 358px;
`;

const CircleSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 슬라이드 내부 전체를 감싸는 래퍼
const SlideWrapper = styled.div`
  position: relative;
  width: 265px;
  height: 265px;
`;

// 원형 영역: 이 영역은 overflow: hidden과 border-radius를 적용해 원형으로 만듭니다.
const CircleContainer = styled.div`
  width: 265px;
  height: 265px;
  border-radius: 50%;
  overflow: hidden;
`;

// 원형 영역 내부에 들어갈 배경 이미지
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// 오버레이 영역: SlideWrapper 내부에서 절대 위치로 지정하며,
// bottom 값을 음수로 주면 원형 영역 바깥쪽으로 나오게 됩니다.
const Overlay = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

// 오버레이 이미지: 사이즈는 고정
const OverlayImg = styled.img`
  width: 50px;
  height: auto;
  border-radius: 0 !important;
`;

const Contents1List = () => {
  const swiper123 = mainSwiper.find((item) => item.id === 123);
  const swiper124 = mainSwiper.find((item) => item.id === 124);

  if (!swiper123 || !swiper124) {
    return <p>데이터를 불러올 수 없습니다.</p>;
  }

  return (
    <CircleSwiper
      modules={[Pagination]}
      spaceBetween={13}
      slidesPerView={5}
      loop={true}
      pagination={{ clickable: true }}
    >
      {swiper123.imgdata.map((data, index) => (
        <CircleSwiperSlide key={data.no}>
          <SlideWrapper>
            {/* 원형 배경 이미지 */}
            <CircleContainer>
              <StyledImg src={data.imgurl} alt={data.desc} />
            </CircleContainer>
            {/* 원형 영역 바깥에 표시될 오버레이 이미지 */}
            <Overlay>
              <OverlayImg src={swiper124.imgdata[index].imgurl} alt={swiper124.imgdata[index].desc} />
            </Overlay>
          </SlideWrapper>
        </CircleSwiperSlide>
      ))}
    </CircleSwiper>
  );
};

export default Contents1List;
