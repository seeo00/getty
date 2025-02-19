import * as S from './style';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardBasic from '../../ui/card/CardBasic';
import 'swiper/css';
import { CardBasicSkeleton } from '../../ui/LoadingSkeleton';

const SubBannerSwiper = ({ items, subTitle, title, desc, loading, rank }) => {
  return (
    <S.Container>
      <InnerContainer maxWidth="1460px" className="inner">
        <S.SectionHeader>
          <span>{subTitle}</span>
          <h2>{title}</h2>
          <p>{desc}</p>
        </S.SectionHeader>
        <S.CardList>
          {loading
            ? [...Array(5)].map((_, index) => <CardBasicSkeleton key={index} aspectRatio={1} />)
            : items.length > 0 && (
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={8}
                  slidesPerView={1.8}
                  loop={'auto'}
                  centeredSlides={true}
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
                  {items?.map((item, index) => (
                    <SwiperSlide key={item.id || index}>
                      <CardBasic item={item} rank={rank ? index + 1 : null} aspectRatio={1} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
        </S.CardList>
      </InnerContainer>
    </S.Container>
  );
};

export default SubBannerSwiper;
