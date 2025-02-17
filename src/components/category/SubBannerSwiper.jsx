import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { Autoplay } from 'swiper/modules';
import { originalData } from '../../assets/api/originalData';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardBasic from '../../ui/card/CardBasic';
import 'swiper/css';

const SubBannerSwiper = ({ rank }) => {
  return (
    <S.Container>
      <InnerContainer maxWidth="1460px" className="inner">
        <S.SectionHeader>
          <span>인기 콘텐츠</span>
          <h2>오늘의 게티 TOP20</h2>
          <p>지금 가장 사랑받는 콘텐츠를 확인해보세요!</p>
        </S.SectionHeader>
        <S.CardList>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={1.8}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            breakpoints={{
              601: {
                slidesPerView: 3.5,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }}
          >
            {originalData.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <CardBasic item={item} rank={rank ? index + 1 : null} aspectRatio={1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CardList>
      </InnerContainer>
    </S.Container>
  );
};

export default SubBannerSwiper;
