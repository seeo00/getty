import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icon';
import CardCircle from './CardCircle';
import { Link } from 'react-router-dom';

const CircleCardSwiper = ({ title, items, section, moreLink }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const shouldShowNavigation = items?.length > 5;

  return (
    <S.CardSection>
      {title && (
        <S.SectionHeader>
          <h2>{title}</h2>
          {shouldShowNavigation && (
            <Link to={section ? `/more?section=${section}&title=${encodeURIComponent(title)}` : moreLink}>
              <span>더보기</span>
              <ArrowRightIcon size={20} />
            </Link>
          )}
        </S.SectionHeader>
      )}
      <S.CardList>
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            601: { slidesPerView: 5 },
            1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 12 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <CardCircle item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {shouldShowNavigation && (
          <>
            <S.NavButton ref={prevRef} $position="left">
              <ArrowLeftIcon size={40} />
            </S.NavButton>
            <S.NavButton ref={nextRef} $position="right">
              <ArrowRightIcon size={40} />
            </S.NavButton>
          </>
        )}
      </S.CardList>
    </S.CardSection>
  );
};

export default CircleCardSwiper;
