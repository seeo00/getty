import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icon';
import CardWide from './CardWide';

const WideCardSwiper = ({ title, items, showInfo = false }) => {
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
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            601: { slidesPerView: 2 },
            1280: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 12 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <CardWide item={item} showInfo={showInfo} />
            </SwiperSlide>
          ))}
        </Swiper>
        <S.NavButton className="wide" ref={prevRef} $position="left">
          <ArrowLeftIcon size={40} />
        </S.NavButton>
        <S.NavButton className="wide" ref={nextRef} $position="right">
          <ArrowRightIcon size={40} />
        </S.NavButton>
      </S.CardList>
    </S.CardSection>
  );
};

export default WideCardSwiper;
