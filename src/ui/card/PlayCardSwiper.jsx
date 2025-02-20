import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icon';
import CardPlay from './CardPlay';

const PlayCardSwiper = ({ title, items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <S.CardSection>
      <S.SectionHeader>
        {title && <h2>{title}</h2>}
        <button>
          <span>더보기</span>
          <ArrowRightIcon size={20} />
        </button>
      </S.SectionHeader>
      <S.CardList>
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            601: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 12 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <CardPlay item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <S.NavButton className="play" ref={prevRef} $position="left">
          <ArrowLeftIcon size={40} />
        </S.NavButton>
        <S.NavButton className="play" ref={nextRef} $position="right">
          <ArrowRightIcon size={40} />
        </S.NavButton>
      </S.CardList>
    </S.CardSection>
  );
};

export default PlayCardSwiper;
