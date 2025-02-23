import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import * as S from './style';
import styled, { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { respondTo } from '../../styled/GlobalStyle';
import { ArrowLeftIcon, ArrowRightIcon } from '../../ui/icon';
import { mainBannerData } from '../../assets/api/mainBannerData';
import { color } from '../../styled/common';
import { CardBasicSkeleton } from '../../ui/LoadingSkeleton';
import { useLocation } from 'react-router-dom';

const SwiperUpdateOnCollapse = ({ $isCollapsed, swiperInstance }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      const timer = setTimeout(() => {
        swiper.update();
        swiper.autoplay.start();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [$isCollapsed, swiper]);

  return null;
};

const LogoImage = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  transform: translateY(20px);
  opacity: 0;

  ${({ $isAnimated }) =>
    $isAnimated &&
    css`
      transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;

      .swiper-slide-active & {
        opacity: 1;
        transform: translateY(0);
      }
    `}

  img {
    width: 50% !important;
    min-width: 240px;
    height: auto;
  }

  ${respondTo('desktop')} {
    bottom: 40px;
    left: 40px;
    img {
      width: 60% !important;
    }
  }
`;

const BannerSwiper = ({ isCollapsed }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setIsAnimated(false);
    };
  }, []);

  return (
    <S.BannerWrap>
      <InnerContainer maxWidth="1460px" className="inner">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={8}
          slidesPerView={'auto'}
          centeredSlides={true}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          speed={600}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            swiper.autoplay.start();
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          loop={true}
          initialSlide={0}
          watchOverflow={true}
          breakpoints={{
            1280: { spaceBetween: 12 },
          }}
        >
          <SwiperUpdateOnCollapse $isCollapsed={isCollapsed} swiperInstance={swiperInstance} />
          {mainBannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <S.SlideContainer to={`/category/${item.media_type}/${item.id}`} state={{ background: location }}>
                {!imageLoaded && <CardBasicSkeleton aspectRatio={4 / 5} banner />}
                <S.ResponsiveBannerImage
                  src={item.banner}
                  $mobileSrc={item.banner_mobile}
                  alt={item.title || item.name}
                  onLoad={() => setImageLoaded(true)}
                  style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
                />
                <LogoImage $isAnimated={isAnimated}>
                  <img src={item.logo} alt="" />
                </LogoImage>
              </S.SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.NavButton ref={prevRef} $prev>
          <ArrowLeftIcon size={40} color={color.white} />
        </S.NavButton>
        <S.NavButton ref={nextRef} $next>
          <ArrowRightIcon size={40} color={color.white} />
        </S.NavButton>
      </InnerContainer>
    </S.BannerWrap>
  );
};

export default BannerSwiper;
