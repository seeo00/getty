import styled, { keyframes } from 'styled-components';
import { BannerWrap, MainWrap } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import mainSwiper from '../../assets/api/mainSwiper';
import Contentsli1 from '../../components/main/content1';
import Contentsli2 from '../../components/main/content2';
import Contentsli3 from '../../components/main/content3';
import Contentsli4 from '../../components/main/content4';
import Contentsli5 from '../../components/main/content5';
import Contentsli6 from '../../components/main/content6';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(90%);
    opacity: 1;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: 150px;
  left: 40px;
  /* transform: translateX(-50%); */
  z-index: 10;
  animation: ${slideUp} 1s ease-out forwards;
  animation-delay: 0.5s;

  //디자인 사이즈 257*154 인데 글씨마다 비율달라서 +56px씩up
  width: 313px !important;
  height: 210px !important;
  object-fit: contain;
`;

const Main = () => {
  return (
    <>
      <BannerWrap>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {mainSwiper[0].imgdata.map((item, index) => (
            <SwiperSlide key={item.no}>
              <SlideContainer>
                <img src={item.imgurl} alt={item.desc} />
                {/* mainSwiper[1]에서 오버레이 이미지 가져오기 */}
                <OverlayImage src={mainSwiper[1].imgdata[index].imgurl} alt={mainSwiper[1].imgdata[index].desc} />
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </BannerWrap>
      <MainWrap>
        <Contentsli1 />
        <Contentsli2 />
        <Contentsli3 />
        <Contentsli4 />
        <Contentsli5 />
        <Contentsli6 />
      </MainWrap>
    </>
  );
};

export default Main;
