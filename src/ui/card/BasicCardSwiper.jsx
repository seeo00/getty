import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icon';
import CardBasic from './CardBasic';
import { Link } from 'react-router-dom';
import CardConnected from './CardConnected';

const BasicCardSwiper = ({ title, items, rank, section, moreLink }) => {
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
          slidesPerView={rank ? 2 : 3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            601: { slidesPerView: rank ? 3.5 : 5 },
            1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 12 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {items?.map((item, index) =>
            item.type === 'connected' ? (
              item.cards.map((card, cardIndex) => (
                <SwiperSlide key={`${item.id}-${cardIndex}`}>
                  <CardConnected item={item} card={card} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide key={`${item.id}-${index}`}>
                <CardBasic item={item} rank={rank ? index + 1 : null} />
              </SwiperSlide>
            )
          )}
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

export default BasicCardSwiper;
